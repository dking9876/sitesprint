"use client";

import { motion } from "framer-motion";
import { Coffee, Sparkles } from "lucide-react";

export default function About() {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9720584345513";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("היי, אשמח להכיר אתכם")}`;

    return (
        <section id="about" className="relative py-24 overflow-hidden">
            {/* Dark Background */}
            <div className="absolute inset-0 bg-[#030014]" />

            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-600/20 to-transparent rounded-full blur-[100px]" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-cyan-400 text-sm font-medium mb-6 border border-white/10"
                        >
                            <Sparkles size={16} />
                            <span>הסיפור שלנו</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            מי אנחנו
                        </h2>
                        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                            <p>
                                אנחנו צוות של מעצבים ומפתחים שמאמינים שלכל עסק קטן מגיע נוכחות דיגיטלית מנצחת.
                            </p>
                            <p>
                                בנינו את SiteSprint מתוך מטרה ברורה: להפוך את הטכנולוגיה לנגישה וזמינה לעסקים קטנים במחירים הוגנים ביותר.
                            </p>
                            <p>
                                אנחנו משתמשים בידע רחב בקוד ועיצוב בנוסף לכלי AI מתקדמים, בכדי ליצור אתרים מודרניים ומקצועיים שהופכים מבקרים ללקוחות משלמים.
                            </p>
                            <p className="font-semibold text-white text-xl">
                                הצלחתך היא ההצלחה שלנו.
                            </p>
                        </div>

                        <div className="mt-10">
                            <motion.a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 border-2 border-cyan-400/50 text-cyan-400 font-semibold px-8 py-3.5 rounded-full hover:bg-cyan-400/10 transition-all duration-300"
                            >
                                רוצה להכיר אותנו יותר? בוא נדבר <Coffee size={20} />
                            </motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
