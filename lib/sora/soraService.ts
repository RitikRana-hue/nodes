/**
 * Sora AI Service
 * Handles chatbot logic, responses, and behavior management
 */

import {
  SoraMessage,
  SoraContext,
  SoraBehaviorLog,
  ProcessedQuestion,
  QAPair,
  SORA_CONFIG,
  SORA_GREETINGS,
  SORA_FAQ,
  SORA_KNOWLEDGE_BASE,
  STOP_WORDS,
  MISBEHAVIOR_PATTERNS,
  ESCALATION_KEYWORDS,
  SORA_TEMPLATES,
} from './soraConfig';

// Local storage keys
const BEHAVIOR_LOG_KEY = 'sora_behavior_log';
const UNANSWERED_LOG_KEY = 'sora_unanswered_questions';
const CONVERSATION_KEY = 'sora_conversation_history';

class SoraService {
  private behaviorLogs: SoraBehaviorLog[] = [];
  private unansweredQuestions: string[] = [];

  constructor() {
    this.loadBehaviorLogs();
    this.loadUnansweredQuestions();
  }

  /**
   * Generate a response based on user message and context
   */
  async generateResponse(
    userMessage: string,
    context: SoraContext
  ): Promise<string> {
    // Check if user is blocked
    if (this.isUserBlocked(context.userId)) {
      return ''; // Silent treatment
    }

    // Auto-correct spelling and typos
    const correctedMessage = this.autoCorrectMessage(userMessage);

    // Check for misbehavior
    if (this.detectMisbehavior(correctedMessage)) {
      return this.handleMisbehavior(correctedMessage, context);
    }

    // Check for escalation keywords
    if (this.shouldEscalate(correctedMessage)) {
      return this.handleEscalation(correctedMessage);
    }

    // NLP Preprocessing - Process the question
    const processedQuestion = this.preprocessQuestion(correctedMessage);

    // Semantic matching - Find best answer from knowledge base
    const semanticAnswer = this.findSemanticMatch(processedQuestion, context.environment);
    if (semanticAnswer) {
      return semanticAnswer;
    }

    // Fallback to FAQ (use corrected message)
    const faqAnswer = this.findFAQAnswer(correctedMessage, context.environment);
    if (faqAnswer) {
      return faqAnswer;
    }

    // Handle specific queries based on environment (use corrected message)
    if (context.environment === 'dashboard') {
      const dashboardResponse = this.handleDashboardQuery(correctedMessage, context);
      if (dashboardResponse) {
        return dashboardResponse;
      }
    }

    // Handle general queries (use corrected message)
    const generalResponse = this.handleGeneralQuery(correctedMessage, context);
    if (generalResponse) {
      return generalResponse;
    }

    // Log unanswered question (log original for learning)
    this.logUnansweredQuestion(userMessage);

    // Return uncertainty response
    return SORA_TEMPLATES.uncertainty;
  }

  /**
   * Auto-correct common spelling mistakes and typos
   */
  private autoCorrectMessage(message: string): string {
    let corrected = message;

    // Common spelling corrections for waste management terms
    const corrections: { [key: string]: string } = {
      // Common typos
      'hw': 'how',
      'wht': 'what',
      'whts': 'whats',
      'whn': 'when',
      'whre': 'where',
      'teh': 'the',
      'adn': 'and',
      'taht': 'that',
      'thsi': 'this',
      'waht': 'what',
      'hwo': 'how',
      
      // Waste management specific
      'binz': 'bins',
      'binn': 'bin',
      'binns': 'bins',
      'ful': 'full',
      'fulll': 'full',
      'colection': 'collection',
      'collction': 'collection',
      'pikup': 'pickup',
      'pickp': 'pickup',
      'schdule': 'schedule',
      'schedual': 'schedule',
      'notifcation': 'notification',
      'notifcations': 'notifications',
      'sensro': 'sensor',
      'sensros': 'sensors',
      'vehicl': 'vehicle',
      'vehicls': 'vehicles',
      'reprot': 'report',
      'reprots': 'reports',
      'staus': 'status',
      'stauts': 'status',
      'levle': 'level',
      'levl': 'level',
      'battry': 'battery',
      'batery': 'battery',
      
      // Common phrases
      'danc': 'dance',
      'nite': 'night',
      'nght': 'night',
      'rght': 'right',
      'wrk': 'work',
      'wrks': 'works',
      'hlp': 'help',
      'plz': 'please',
      'pls': 'please',
      'thx': 'thanks',
      'thnks': 'thanks',
      'thanx': 'thanks',
    };

    // Apply word-level corrections
    const words = corrected.split(/\b/);
    const correctedWords = words.map(word => {
      const lowerWord = word.toLowerCase();
      return corrections[lowerWord] || word;
    });
    corrected = correctedWords.join('');

    // Fix common character substitutions
    corrected = corrected.replace(/(\w)(\1{2,})/g, '$1$1'); // Remove triple+ repeated chars (fulll -> full)
    
    return corrected;
  }

  /**
   * NLP Preprocessing - Process and normalize user question
   */
  private preprocessQuestion(message: string): ProcessedQuestion {
    // Normalize: lowercase and trim
    const normalized = message.toLowerCase().trim();
    
    // Tokenize: split into words
    const tokens = normalized
      .replace(/[^\w\s]/g, ' ') // Remove punctuation
      .split(/\s+/)
      .filter(word => word.length > 0);
    
    // Remove stop words
    const meaningfulTokens = tokens.filter(token => !STOP_WORDS.has(token));
    
    // Simple lemmatization (basic form)
    const lemmas = meaningfulTokens.map(token => this.lemmatize(token));
    
    // Extract keywords (unique lemmas)
    const keywords = [...new Set(lemmas)];
    
    // Detect intent (basic classification)
    const intent = this.detectIntent(keywords, normalized);
    
    return {
      original: message,
      normalized,
      tokens,
      lemmas,
      keywords,
      intent
    };
  }

  /**
   * Simple lemmatization - reduce words to base form
   */
  private lemmatize(word: string): string {
    // Remove common suffixes
    const rules = [
      { pattern: /ing$/, replacement: '' },
      { pattern: /ed$/, replacement: '' },
      { pattern: /s$/, replacement: '' },
      { pattern: /es$/, replacement: '' },
      { pattern: /ies$/, replacement: 'y' },
    ];
    
    let lemma = word;
    for (const rule of rules) {
      if (rule.pattern.test(word) && word.length > 4) {
        lemma = word.replace(rule.pattern, rule.replacement);
        break;
      }
    }
    
    return lemma || word;
  }

  /**
   * Detect user intent from keywords
   */
  private detectIntent(keywords: string[], normalized: string): string {
    // Intent patterns
    const intentPatterns = {
      question: /^(what|how|why|when|where|who|which)/,
      status: /(status|check|show|view|display)/,
      action: /(schedule|book|arrange|create|delete|update)/,
      help: /(help|assist|support|guide)/,
      info: /(tell|explain|describe|information)/,
    };
    
    for (const [intent, pattern] of Object.entries(intentPatterns)) {
      if (pattern.test(normalized)) {
        return intent;
      }
    }
    
    return 'general';
  }

  /**
   * Find semantic match in knowledge base using similarity scoring
   */
  private findSemanticMatch(
    processed: ProcessedQuestion,
    environment: 'landing' | 'dashboard'
  ): string | null {
    let bestMatch: QAPair | null = null;
    let bestScore = 0;
    const threshold = 0.3; // Minimum similarity threshold
    
    // Filter knowledge base by environment
    const relevantQAs = SORA_KNOWLEDGE_BASE.filter(
      qa => qa.environment === environment || qa.environment === 'both'
    );
    
    for (const qa of relevantQAs) {
      // Calculate similarity score
      const score = this.calculateSimilarity(processed, qa);
      
      if (score > bestScore && score >= threshold) {
        bestScore = score;
        bestMatch = qa;
      }
    }
    
    if (bestMatch) {
      return bestMatch.answer;
    }
    
    return null;
  }

  /**
   * Calculate semantic similarity between processed question and Q&A pair
   */
  private calculateSimilarity(processed: ProcessedQuestion, qa: QAPair): number {
    let score = 0;
    const weights = {
      exactMatch: 1.0,
      variationMatch: 0.9,
      keywordMatch: 0.3,
      intentMatch: 0.2,
    };
    
    // Check exact match with main question
    if (processed.normalized === qa.question.toLowerCase()) {
      return weights.exactMatch;
    }
    
    // Check variation matches
    for (const variation of qa.variations) {
      if (processed.normalized.includes(variation.toLowerCase()) ||
          variation.toLowerCase().includes(processed.normalized)) {
        score += weights.variationMatch;
        break;
      }
    }
    
    // Check keyword overlap
    const keywordOverlap = processed.keywords.filter(
      keyword => qa.keywords.some(qaKeyword => 
        keyword.includes(qaKeyword) || qaKeyword.includes(keyword)
      )
    ).length;
    
    if (keywordOverlap > 0) {
      score += (keywordOverlap / Math.max(processed.keywords.length, qa.keywords.length)) * weights.keywordMatch;
    }
    
    // Intent matching bonus
    if (processed.intent === 'question' || processed.intent === 'info') {
      score += weights.intentMatch;
    }
    
    return Math.min(score, 1.0); // Cap at 1.0
  }

  /**
   * Get greeting message
   */
  getGreeting(environment: 'landing' | 'dashboard'): string {
    const greetings = SORA_GREETINGS[environment];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  /**
   * Handle dashboard-specific queries
   */
  private handleDashboardQuery(message: string, context: SoraContext): string | null {
    const lowerMessage = message.toLowerCase();

    // Bin status query
    if (lowerMessage.includes('bin') && (lowerMessage.includes('status') || lowerMessage.includes('full') || lowerMessage.includes('level'))) {
      if (context.binData) {
        return this.formatBinStatus(context.binData);
      }
      return "I can check your bin status! Let me fetch the latest data for you...";
    }

    // Notification query
    if (lowerMessage.includes('notification') || lowerMessage.includes('alert')) {
      return "You can view all your notifications in the notifications center. Would you like me to guide you there?";
    }

    // Schedule query
    if (lowerMessage.includes('schedule') || lowerMessage.includes('pickup') || lowerMessage.includes('collection')) {
      return "I can help you schedule a pickup! Based on your bin's current fill level, I recommend scheduling within the next 2-3 days. Would you like to proceed?";
    }

    // Eco metrics query
    if (lowerMessage.includes('eco') || lowerMessage.includes('impact') || lowerMessage.includes('environment')) {
      return "Your eco impact shows how you're helping the environment! You can view detailed metrics including waste reduction, recycling rate, and carbon savings in the Eco Impact section. Want me to summarize your current performance?";
    }

    // Report query
    if (lowerMessage.includes('report') && (lowerMessage.includes('submit') || lowerMessage.includes('issue'))) {
      return "You can submit a report by clicking the 'Report Issue' button in your dashboard. I can guide you through the process if you'd like!";
    }

    return null;
  }

  /**
   * Handle general queries
   */
  private handleGeneralQuery(message: string, context: SoraContext): string | null {
    const lowerMessage = message.toLowerCase();

    // Greeting
    if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
      return this.getGreeting(context.environment);
    }

    // Help query
    if (lowerMessage.includes('help')) {
      return context.environment === 'landing'
        ? "I'm here to help! You can ask me about:\n• How our smart bins work\n• Platform features\n• Environmental benefits\n• Getting started\n\nWhat would you like to know?"
        : "I'm here to help! You can ask me about:\n• Bin status and monitoring\n• Scheduling pickups\n• Notifications and alerts\n• Eco metrics\n• Reports and issues\n\nWhat do you need help with?";
    }

    // Thank you
    if (lowerMessage.match(/thank(s| you)/)) {
      return "You're very welcome! Happy to help anytime! 😊";
    }

    // Silly questions
    if (lowerMessage.includes('dance')) {
      return "Haha, not yet! But I'm always here keeping your bins efficient! 💃";
    }

    if (lowerMessage.includes('feeling') || lowerMessage.includes('emotion')) {
      return "Haha, bins don't have feelings! But they do 'communicate' with us through sensors. Think of me as their translator! 😊";
    }

    if (lowerMessage.includes('magic')) {
      return "No magic here - just smart technology! Though I admit, real-time IoT monitoring does feel a bit magical sometimes! ✨";
    }

    return null;
  }

  /**
   * Format bin status response
   */
  private formatBinStatus(binData: any): string {
    const { fillLevel, status, battery, lastUpdate } = binData;
    
    let response = `Your bin is currently **${fillLevel}%** full.\n`;
    response += `Status: ${status}\n`;
    response += `Battery: ${battery}%\n`;
    response += `Last updated: ${lastUpdate}\n\n`;

    if (fillLevel >= 90) {
      response += "⚠️ Your bin is almost full! I recommend scheduling a pickup soon to avoid overflow.";
    } else if (fillLevel >= 70) {
      response += "💡 Your bin is getting full. Consider scheduling a pickup in the next day or two.";
    } else {
      response += "✅ Your bin has plenty of space. You're all good!";
    }

    return response;
  }

  /**
   * Find answer in FAQ
   */
  private findFAQAnswer(message: string, environment: 'landing' | 'dashboard'): string | null {
    const lowerMessage = message.toLowerCase();
    const faq = SORA_FAQ[environment];

    for (const [key, answer] of Object.entries(faq)) {
      if (lowerMessage.includes(key)) {
        return answer;
      }
    }

    return null;
  }

  /**
   * Detect misbehavior in message
   */
  private detectMisbehavior(message: string): boolean {
    return MISBEHAVIOR_PATTERNS.some(pattern => pattern.test(message));
  }

  /**
   * Handle misbehavior
   */
  private handleMisbehavior(message: string, context: SoraContext): string {
    if (!context.userId) return SORA_TEMPLATES.warning;

    const existingWarnings = this.behaviorLogs.filter(
      log => log.userId === context.userId && log.type === 'warning'
    ).length;

    if (existingWarnings >= SORA_CONFIG.warningThreshold) {
      // Block user
      this.blockUser(context.userId);
      return ''; // Silent treatment
    } else {
      // Issue warning
      this.logBehavior({
        userId: context.userId,
        timestamp: new Date(),
        type: 'warning',
        reason: 'Inappropriate language detected',
      });
      return SORA_TEMPLATES.warning;
    }
  }

  /**
   * Check if escalation is needed
   */
  private shouldEscalate(message: string): boolean {
    const lowerMessage = message.toLowerCase();
    return ESCALATION_KEYWORDS.some(keyword => lowerMessage.includes(keyword));
  }

  /**
   * Handle escalation
   */
  private handleEscalation(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('billing') || lowerMessage.includes('payment')) {
      return SORA_TEMPLATES.escalation('billing and payment issues');
    }
    
    if (lowerMessage.includes('legal') || lowerMessage.includes('lawsuit')) {
      return SORA_TEMPLATES.escalation('legal matters');
    }
    
    if (lowerMessage.includes('hardware') || lowerMessage.includes('sensor malfunction')) {
      return SORA_TEMPLATES.escalation('hardware issues');
    }
    
    return SORA_TEMPLATES.escalation('this matter');
  }

  /**
   * Block user
   */
  private blockUser(userId: string): void {
    this.logBehavior({
      userId,
      timestamp: new Date(),
      type: 'block',
      reason: 'Multiple warnings for inappropriate behavior',
      duration: SORA_CONFIG.blockDuration,
    });
  }

  /**
   * Check if user is blocked
   */
  private isUserBlocked(userId?: string): boolean {
    if (!userId) return false;

    const blockLog = this.behaviorLogs.find(
      log => log.userId === userId && log.type === 'block'
    );

    if (!blockLog) return false;

    const blockEndTime = new Date(blockLog.timestamp);
    blockEndTime.setHours(blockEndTime.getHours() + (blockLog.duration || 24));

    return new Date() < blockEndTime;
  }

  /**
   * Log behavior incident
   */
  private logBehavior(log: SoraBehaviorLog): void {
    this.behaviorLogs.push(log);
    this.saveBehaviorLogs();
  }

  /**
   * Log unanswered question
   */
  private logUnansweredQuestion(question: string): void {
    if (SORA_CONFIG.logUnansweredQuestions) {
      this.unansweredQuestions.push(question);
      this.saveUnansweredQuestions();
    }
  }

  /**
   * Save behavior logs to storage
   */
  private saveBehaviorLogs(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(BEHAVIOR_LOG_KEY, JSON.stringify(this.behaviorLogs));
    }
  }

  /**
   * Load behavior logs from storage
   */
  private loadBehaviorLogs(): void {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(BEHAVIOR_LOG_KEY);
      if (stored) {
        this.behaviorLogs = JSON.parse(stored);
      }
    }
  }

  /**
   * Save unanswered questions to storage
   */
  private saveUnansweredQuestions(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(UNANSWERED_LOG_KEY, JSON.stringify(this.unansweredQuestions));
    }
  }

  /**
   * Load unanswered questions from storage
   */
  private loadUnansweredQuestions(): void {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(UNANSWERED_LOG_KEY);
      if (stored) {
        this.unansweredQuestions = JSON.parse(stored);
      }
    }
  }

  /**
   * Get unanswered questions for learning
   */
  getUnansweredQuestions(): string[] {
    return [...this.unansweredQuestions];
  }

  /**
   * Clear unanswered questions log
   */
  clearUnansweredQuestions(): void {
    this.unansweredQuestions = [];
    this.saveUnansweredQuestions();
  }
}

// Export singleton instance
export const soraService = new SoraService();
export default soraService;
