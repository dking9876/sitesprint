"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Zap } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9720584345513";

    return (
        <footer className="relative bg-[#020010] text-white pt-20 pb-10 overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-[100px]" />

            {/* Top Border Glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="col-span-1 md:col-span-1">
                        {/* Text Logo */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                                <Zap className="text-white" size={24} />
                            </div>
                            <span className="text-2xl font-bold">
                                <span className="text-white">Site</span>
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sprint</span>
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            אנחנו מאמינים שלכל עסק מגיע אתר מנצח. בונים, מעצבים ומשיקים אתרים שממירים מבקרים ללקוחות.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">ניווט מהיר</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors">דף הבית</Link></li>
                            <li><Link href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">אודות</Link></li>
                            <li><Link href="#portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors">תיק עבודות</Link></li>
                            <li><Link href="#pricing" className="text-slate-400 hover:text-cyan-400 transition-colors">מחירון</Link></li>
                            <li><Link href="#faq" className="text-slate-400 hover:text-cyan-400 transition-colors">שאלות נפוצות</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">דברו איתנו</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li>✉️ info@sitesprint.co.il</li>
                            <li>
                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-green-400 transition-colors"
                                >
                                    💬 שלח הודעה בוואטסאפ
                                </a>
                            </li>
                            <li>🕒 זמינים א'-ה' 09:00-18:00</li>
                        </ul>
                    </div>

                    {/* Column 4: Social */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">עקבו אחרינו</h4>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-white">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition-all text-white">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 transition-all text-white">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all text-white">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <div>
                        כל הזכויות שמורות © {currentYear} SiteSprint
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
                        <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
