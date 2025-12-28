"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9720584345513";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("היי! אני מעוניין לשמוע עוד על בניית אתר לעסק שלי")}`;

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 300px (past hero usually)
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="fixed bottom-6 left-6 z-50 group" // RTL: left-6 is visually Left. Correct. 
                >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                        💬 נדבר?
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                    </div>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 relative"
                    >
                        {/* Pulse Effect */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000" />

                        <MessageCircle className="text-white relative z-10" size={32} />
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
