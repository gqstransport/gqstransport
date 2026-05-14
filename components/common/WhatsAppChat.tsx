"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User } from "lucide-react";
import Image from "next/image";

export const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    // Show notification after 3 seconds
    const timer = setTimeout(() => {
      if (!isOpen) setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const whatsappNumber = "+966551234567";

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const encodedMessage = encodeURIComponent(userInput);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    setUserInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, originX: "right", originY: "bottom" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="bg-[#075e54] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/20 bg-white/10">
                    <div className="flex h-full w-full items-center justify-center">
                      <User className="h-6 w-6 text-white/50" />
                    </div>
                    {/* Fixed Active Circle Position */}
                    <div className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-[#075e54] bg-[#25d366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">GQS Operations</h3>
                    <p className="text-[10px] text-white/70">Typical reply time: Within minutes</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 transition hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="relative h-[300px] bg-[#e5ddd5] p-4 overflow-y-auto">
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ 
                  backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcd2de2.png')`,
                  backgroundSize: '400px'
                }}
              />
              
              {/* Message Bubble */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 max-w-[85%] rounded-lg bg-white p-3 shadow-sm"
              >
                <p className="text-[10px] font-bold text-black/40 mb-1">Operations Team</p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  Hi there! 👋 How can we help you today with your transport or equipment needs?
                </p>
                <p className="mt-1 text-right text-[10px] text-gray-400">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                {/* Bubble Tip */}
                <div className="absolute -left-2 top-0 h-4 w-4 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
              </motion.div>
            </div>

            {/* Footer */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type a message.."
                className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#25d366]"
              />
              <button
                type="submit"
                disabled={!userInput.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-110 active:scale-95 disabled:opacity-50 disabled:scale-100"
              >
                <Send className="h-5 w-5 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div className="relative">
        {/* Notification Badge */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute bottom-full right-0 mb-4 whitespace-nowrap rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-xl ring-1 ring-black/5"
            >
              How can we help you?
              <div className="absolute -bottom-1 right-6 h-2 w-2 rotate-45 bg-white border-b border-r border-black/5" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowNotification(false);
          }}
          className={`flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
            isOpen ? "bg-gray-800 text-white" : "bg-[#25d366] text-white"
          }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="h-8 w-8" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="h-9 w-9 fill-white/20" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Pulse Effect */}
          {!isOpen && (
            <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366] opacity-20" />
          )}
        </button>
      </div>
    </div>
  );
};
