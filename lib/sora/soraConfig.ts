/**
 * Sora AI Chatbot Configuration
 * Smart Waste Management Assistant
 */

export interface SoraMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  environment: 'landing' | 'dashboard';
}

export interface SoraContext {
  environment: 'landing' | 'dashboard';
  userId?: string;
  userName?: string;
  binData?: {
    fillLevel: number;
    status: string;
    battery: number;
    lastUpdate: string;
  };
  conversationHistory: SoraMessage[];
}

export interface SoraBehaviorLog {
  userId: string;
  timestamp: Date;
  type: 'warning' | 'block';
  reason: string;
  duration?: number; // in hours
}

// NLP Processing interfaces
export interface ProcessedQuestion {
  original: string;
  normalized: string;
  tokens: string[];
  lemmas: string[];
  keywords: string[];
  intent: string;
}

export interface QAPair {
  question: string;
  variations: string[];
  answer: string;
  keywords: string[];
  category: string;
  environment: 'landing' | 'dashboard' | 'both';
  confidence?: number;
}

// Sora personality configuration
export const SORA_CONFIG = {
  name: 'Sora',
  version: '1.0.0',

  // Response settings
  maxResponseLength: 500,
  typingDelay: 1000, // ms

  // Behavior settings
  warningThreshold: 1, // warnings before block
  blockDuration: 24, // hours

  // Learning settings
  logUnansweredQuestions: true,
  feedbackEnabled: true,

  // Contact information
  supportEmail: 'support@nodesio.com',
  supportPhone: '+91-1234567890',
  supportHours: 'Mon-Fri, 9 AM - 6 PM IST',
};

// Greeting templates
export const SORA_GREETINGS = {
  landing: [
    "Hi there! I'm Sora, your smart waste management assistant! 🌱 How can I help you today?",
    "Welcome! I'm Sora. Curious about smart bins? Ask me anything!",
    "Hello! I'm Sora, here to make waste management smarter and easier. What would you like to know?",
  ],
  dashboard: [
    "Hello! I'm Sora. I can help you with your bins, data, and any questions you have.",
    "Hi! Ready to check your bin status or need help with something?",
    "Welcome back! I'm Sora, your waste management assistant. How can I help you today?",
  ],
};

// Quick action suggestions
export const SORA_QUICK_ACTIONS = {
  landing: [
    "How does it work?",
    "What are the features?",
    "Pricing information",
    "Environmental benefits",
  ],
  dashboard: [
    "Check bin status",
    "View notifications",
    "Schedule pickup",
    "View eco metrics",
  ],
};

// Common questions and answers
export const SORA_FAQ = {
  landing: {
    "how does it work": "Our smart bins use IoT sensors to monitor fill levels in real-time. The sensors send data to our cloud platform every 5 minutes, allowing you to track your bins remotely through our dashboard. You'll get notifications when bins need attention!",

    "what are the features": "Great question! Our platform includes:\n• Real-time bin monitoring\n• Smart notifications\n• Route optimization\n• Eco impact tracking\n• Report management\n• Vehicle tracking\n• Analytics dashboard\n\nWould you like to know more about any specific feature?",

    "pricing": "For detailed pricing information, please visit our pricing page or contact our sales team at sales@nodesio.com. We offer flexible plans for individuals, businesses, and municipalities!",

    "environmental benefits": "I love this question! 🌍 Smart waste management helps:\n• Reduce carbon emissions by 30%\n• Optimize collection routes\n• Increase recycling rates\n• Prevent overflow and littering\n• Save energy and resources\n\nTogether, we're making a real difference!",
  },

  dashboard: {
    "bin status": "I can check that for you! Which bin would you like to know about? Or would you like a summary of all your bins?",

    "schedule pickup": "I can help you schedule a pickup! When would you like the collection? I can suggest optimal times based on your bin's fill rate.",

    "notifications": "You can manage notifications in your profile settings. Would you like me to guide you there, or do you have a specific notification question?",

    "eco metrics": "Your eco impact shows how much you're helping the environment! It includes waste reduction, recycling rate, and carbon savings. Want to see your current score?",
  },
};

// Misbehavior detection patterns
export const MISBEHAVIOR_PATTERNS = [
  /\b(fuck|shit|damn|ass|bitch)\b/i,
  /\b(stupid|idiot|dumb)\b.*\b(bot|ai|sora)\b/i,
  /\b(hate|suck|terrible)\b.*\b(you|this|platform)\b/i,
];

// Escalation triggers
export const ESCALATION_KEYWORDS = [
  'billing',
  'payment',
  'refund',
  'legal',
  'lawsuit',
  'lawyer',
  'account locked',
  'data breach',
  'privacy violation',
  'hardware broken',
  'sensor malfunction',
];

// Response templates
export const SORA_TEMPLATES = {
  warning: "I'm here to help with waste management and platform questions. Let's keep our conversation respectful and productive. How can I assist you today?",

  blocked: "I'm back to help! Let's start fresh. What can I assist you with today?",

  escalation: (issue: string) => `I understand this is important. For ${issue}, I recommend contacting our support team who can provide specialized assistance:

📧 Email: ${SORA_CONFIG.supportEmail}
📞 Phone: ${SORA_CONFIG.supportPhone}
⏰ Hours: ${SORA_CONFIG.supportHours}

They'll be able to help you with this matter. Is there anything else I can help you with in the meantime?`,

  uncertainty: "That's a great question! I'm not entirely sure about that specific detail. For accurate information, I recommend:\n\n1. Checking our documentation\n2. Contacting our support team\n\nI'll make a note to learn more about this topic. Is there anything else I can help you with?",

  error: "Oops! I'm having a small technical hiccup. Let me try that again... If this persists, please refresh the page or contact support. Sorry for the inconvenience!",
};

// Celebration triggers
export const CELEBRATION_TRIGGERS = {
  highRecyclingRate: 80, // percentage
  ecoScoreThreshold: 85,
  consecutiveDaysActive: 7,
  wasteReductionPercent: 20,
};

// Proactive tip triggers
export const TIP_TRIGGERS = {
  binNearFull: 85, // percentage
  lowBattery: 20, // percentage
  missedPickup: true,
  inefficientRoute: true,
};

// Analytics events to track
export const SORA_ANALYTICS_EVENTS = {
  messageReceived: 'sora_message_received',
  messageSent: 'sora_message_sent',
  questionUnanswered: 'sora_question_unanswered',
  escalationTriggered: 'sora_escalation',
  misbehaviorDetected: 'sora_misbehavior',
  feedbackReceived: 'sora_feedback',
  quickActionClicked: 'sora_quick_action',
};

// Comprehensive Q&A Knowledge Base with semantic variations
export const SORA_KNOWLEDGE_BASE: QAPair[] = [
  // Landing Page - General Information
  {
    question: "How does the smart bin system work?",
    variations: [
      "how does it work",
      "explain how this works",
      "what is the working principle",
      "how do smart bins function",
      "tell me about the technology",
      "how does the system operate"
    ],
    answer: "Our smart bins use IoT sensors to monitor fill levels in real-time. The sensors send data to our cloud platform every 5 minutes, allowing you to track your bins remotely through our dashboard. You'll get notifications when bins need attention!",
    keywords: ["work", "function", "operate", "technology", "system", "iot", "sensor"],
    category: "general",
    environment: "landing"
  },
  {
    question: "What features does the platform offer?",
    variations: [
      "what are the features",
      "what can it do",
      "what functionality is available",
      "list features",
      "platform capabilities",
      "what services do you provide"
    ],
    answer: "Great question! Our platform includes:\n• Real-time bin monitoring\n• Smart notifications\n• Route optimization\n• Eco impact tracking\n• Report management\n• Vehicle tracking\n• Analytics dashboard\n\nWould you like to know more about any specific feature?",
    keywords: ["features", "capabilities", "functionality", "services", "offer"],
    category: "features",
    environment: "landing"
  },
  {
    question: "What are the environmental benefits?",
    variations: [
      "environmental benefits",
      "eco benefits",
      "how does this help environment",
      "sustainability impact",
      "green benefits",
      "carbon reduction"
    ],
    answer: "I love this question! 🌍 Smart waste management helps:\n• Reduce carbon emissions by 30%\n• Optimize collection routes\n• Increase recycling rates\n• Prevent overflow and littering\n• Save energy and resources\n\nTogether, we're making a real difference!",
    keywords: ["environment", "eco", "green", "sustainability", "carbon", "recycling"],
    category: "environmental",
    environment: "landing"
  },
  {
    question: "How much does it cost?",
    variations: [
      "pricing",
      "cost",
      "how much",
      "price information",
      "subscription plans",
      "what are the rates"
    ],
    answer: "For detailed pricing information, please visit our pricing page or contact our sales team at sales@nodesio.com. We offer flexible plans for individuals, businesses, and municipalities!",
    keywords: ["pricing", "cost", "price", "subscription", "plans", "rates"],
    category: "pricing",
    environment: "landing"
  },

  // Dashboard - Bin Status
  {
    question: "What is my bin status?",
    variations: [
      "bin status",
      "check bin",
      "how full is my bin",
      "bin fill level",
      "bin information",
      "show bin data"
    ],
    answer: "I can check that for you! Which bin would you like to know about? Or would you like a summary of all your bins?",
    keywords: ["bin", "status", "full", "level", "check", "data"],
    category: "bin_status",
    environment: "dashboard"
  },
  {
    question: "How do I schedule a pickup?",
    variations: [
      "schedule pickup",
      "book collection",
      "arrange pickup",
      "request collection",
      "schedule collection",
      "when can you collect"
    ],
    answer: "I can help you schedule a pickup! When would you like the collection? I can suggest optimal times based on your bin's fill rate.",
    keywords: ["schedule", "pickup", "collection", "book", "arrange"],
    category: "scheduling",
    environment: "dashboard"
  },
  {
    question: "How do I manage notifications?",
    variations: [
      "notifications",
      "alerts",
      "notification settings",
      "manage alerts",
      "turn off notifications",
      "notification preferences"
    ],
    answer: "You can manage notifications in your profile settings. Would you like me to guide you there, or do you have a specific notification question?",
    keywords: ["notification", "alert", "settings", "manage", "preferences"],
    category: "notifications",
    environment: "dashboard"
  },
  {
    question: "What are my eco metrics?",
    variations: [
      "eco metrics",
      "environmental impact",
      "eco score",
      "sustainability metrics",
      "carbon savings",
      "recycling rate"
    ],
    answer: "Your eco impact shows how much you're helping the environment! It includes waste reduction, recycling rate, and carbon savings. Want to see your current score?",
    keywords: ["eco", "metrics", "impact", "score", "sustainability", "carbon"],
    category: "eco_metrics",
    environment: "dashboard"
  },

  // Both Environments - Technical
  {
    question: "What sensors are used?",
    variations: [
      "sensor types",
      "what sensors",
      "sensor technology",
      "types of sensors",
      "sensor specifications"
    ],
    answer: "We use ultrasonic sensors for fill level detection, temperature sensors for monitoring conditions, and accelerometers for detecting movement. All sensors are IoT-enabled and send data in real-time!",
    keywords: ["sensor", "technology", "ultrasonic", "iot", "specifications"],
    category: "technical",
    environment: "both"
  },
  {
    question: "How often is data updated?",
    variations: [
      "data update frequency",
      "how often updates",
      "refresh rate",
      "data sync",
      "update interval"
    ],
    answer: "Our sensors send data every 5 minutes, ensuring you always have near real-time information about your bins. The dashboard automatically refreshes to show the latest data!",
    keywords: ["update", "frequency", "refresh", "sync", "interval", "real-time"],
    category: "technical",
    environment: "both"
  },
  {
    question: "Is my data secure?",
    variations: [
      "data security",
      "privacy",
      "data protection",
      "is it safe",
      "security measures",
      "data encryption"
    ],
    answer: "Absolutely! We take security seriously. All data is encrypted in transit and at rest, we comply with GDPR and data protection regulations, and we never share your data with third parties without consent.",
    keywords: ["security", "privacy", "protection", "safe", "encryption", "gdpr"],
    category: "security",
    environment: "both"
  },
];

// Stop words for NLP processing
export const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
  'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
  'to', 'was', 'will', 'with', 'i', 'me', 'my', 'can', 'could',
  'would', 'should', 'do', 'does', 'did', 'you', 'your', 'please'
]);

export default SORA_CONFIG;
