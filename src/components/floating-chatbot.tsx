"use client"

import { useState, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

// FAQ responses for AI bot
const FAQ_RESPONSES: { [key: string]: string } = {
  service: "I offer web development, AI workflow automation, portfolio websites, business websites, landing pages, SaaS development, and custom solutions. What specific service interests you?",
  price: "Pricing starts from $500 for websites, $1,000 for AI integration, $2,000 for SaaS development, and $150/hour for consultations.",
  timeline: "Simple websites take 1-2 weeks, while full applications take 3-6 weeks depending on complexity.",
  availability: "I'm available 7 days a week from 9am to 10pm. You can book consultations through Google Calendar.",
  book: "You can book a consultation through Google Calendar. I'm available 7 days a week from 9am to 10pm. Choose video, phone, or in-person meeting.",
  contact: "You can reach me at ch.masifmajeed@gmail.com or +92 3251561050. Or use the contact form below!",
};

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm Asif's AI assistant. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPos = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrollHeight = fullHeight - viewportHeight;
      const scrolled = (scrollPos / scrollHeight) * 100;
      setScrollProgress(scrollHeight > 0 ? scrolled : 0);
    };
    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  // Handle FAQ auto-responses
  useEffect(() => {
    if (messages.length > 1 && messages[messages.length - 1].sender === "user") {
      const lastUserMsg = messages[messages.length - 1].text.toLowerCase();
      let botResponse = "I'll get back to you shortly! For immediate assistance, please use the contact form or book a consultation.";

      for (const [keyword, response] of Object.entries(FAQ_RESPONSES)) {
        if (lastUserMsg.includes(keyword)) {
          botResponse = response;
          break;
        }
      }

      setTimeout(() => {
        setMessages((prev) => [...prev, { id: Date.now() + 1, text: botResponse, sender: "bot" }]);
      }, 800);
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-blue-600 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
        title="Chat with AI Assistant"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col">
          <div className="bg-blue-600 p-4 text-white rounded-t-xl">
            <h3 className="font-bold">Asif AI Assistant</h3>
            <p className="text-xs opacity-90">Online • Friendly Bot</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                  msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-gray-200">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </form>
        </div>
      )}
    </>
  );
}
