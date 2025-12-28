"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Navigation items
const navItems = [
    { name: "דף הבית", href: "#" },
    { name: "אודות", href: "#about" },
    { name: "יתרונות", href: "#value-props" },
    { name: "תיק עבודות", href: "#portfolio" },
    { name: "התהליך", href: "#process" },
    { name: "מחירון", href: "#pricing" },
    { name: "שאלות נפוצות", href: "#faq" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9720584345513";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("היי, אני רוצה לשמוע עוד על בניית אתר")}`;

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/10 py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

                    {/* RIGHT: Logo */}
                    <div className="flex-shrink-0 z-50">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="flex items-center gap-1">
                                {/* Logo Icon */}
                                <div className="relative">
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    >
                                        <defs>
                                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#22d3ee" />
                                                <stop offset="50%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="#a855f7" />
                                            </linearGradient>
                                        </defs>
                                        {/* S shape with arrows */}
                                        <path
                                            d="M20 4 L32 12 L32 18 L20 10 L8 18 L8 12 Z"
                                            fill="url(#logoGradient)"
                                        />
                                        <path
                                            d="M20 36 L8 28 L8 22 L20 30 L32 22 L32 28 Z"
                                            fill="url(#logoGradient)"
                                        />
                                        <path
                                            d="M8 18 L20 26 L32 18 L32 22 L20 30 L8 22 Z"
                                            fill="url(#logoGradient)"
                                            opacity="0.7"
                                        />
                                    </svg>
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Logo Text */}
                                <span className="text-2xl md:text-3xl font-bold">
                                    <span className="text-white">Site</span>
                                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Sprint</span>
                                </span>
                            </div>
                        </Link>
                    </div>


                    {/* CENTER: Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 rounded-full font-medium transition-all duration-300",
                                    isScrolled
                                        ? "text-slate-300 hover:text-white hover:bg-white/10"
                                        : "text-white/80 hover:text-white hover:bg-white/10"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* LEFT: CTA Button (Desktop) */}
                    <div className="hidden md:block">
                        <a
                            href="tel:0584345513"
                            className="group relative overflow-hidden bg-gradient-to-l from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold px-6 py-2.5 rounded-full hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <span className="relative z-10">שיחת ייעוץ חינם</span>
                            <Phone size={18} className="relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden z-50">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={cn(
                                "p-2 rounded-lg transition-colors",
                                isScrolled ? "text-white" : "text-white"
                            )}
                            aria-label={mobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-[#0a0a1a]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center md:hidden"
                        >
                            {/* Gradient Background for Mobile Menu */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px]" />
                                <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px]" />
                            </div>

                            <nav className="flex flex-col gap-6 text-center relative z-10">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                    href="tel:0584345513"
                                    className="mt-4 bg-gradient-to-l from-cyan-400 via-blue-500 to-purple-500 text-white font-bold text-xl px-8 py-4 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                                >
                                    שיחת ייעוץ חינם 📞
                                </motion.a>
                            </nav>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    );
}

