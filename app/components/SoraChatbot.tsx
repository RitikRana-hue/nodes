"use client";

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { soraService } from '@/lib/sora/soraService';
import { SORA_QUICK_ACTIONS } from '@/lib/sora/soraConfig';
import type { SoraMessage, SoraContext } from '@/lib/sora/soraConfig';

interface SoraChatbotProps {
  environment: 'landing' | 'dashboard';
  userId?: string;
  userName?: string;
  binData?: any;
}

export default function SoraChatbot({
  environment,
  userId,
  userName,
  binData,
}: SoraChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<SoraMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = soraService.getGreeting(environment);
      addMessage('assistant', greeting);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage: SoraMessage = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date(),
      environment,
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMsg = inputMessage.trim();
    setInputMessage('');
    addMessage('user', userMsg);

    // Show typing indicator
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate response
    const context: SoraContext = {
      environment,
      userId,
      userName,
      binData,
      conversationHistory: messages,
    };

    const response = await soraService.generateResponse(userMsg, context);
    
    setIsTyping(false);

    if (response) {
      addMessage('assistant', response);
    }
  };

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-110 group"
          aria-label="Open Sora Chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with Sora 💬
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Sora</h3>
                <p className="text-xs text-blue-100">AI Assistant • Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.role === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {SORA_QUICK_ACTIONS[environment].map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickAction(action)}
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Powered by Sora AI • Always learning
            </p>
          </div>
        </div>
      )}
    </>
  );
}
