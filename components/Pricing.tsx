"use client";

import { Check, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
    {
        name: "חבילה בסיסית",
        price: "2,500",
        description: "מושלם לעסקים קטנים שרוצים נוכחות דיגיטלית ראשונית",
        features: [
            { name: "עד 5 עמודים", included: true },
            { name: "עיצוב רספונסיבי מלא", included: true },
            { name: "טופס יצירת קשר", included: true },
            { name: "אופטימיזציה בסיסית (SEO)", included: true },
            { name: "שנת אחסון ואבטחה חינם", included: true },
            { name: "אינטגרציה למדיה חברתית", included: true },
            { name: "מערכת תורים/הזמנות", included: false },
            { name: "חנות אונליין", included: false },
            { name: "דשבורד ניהול תוכן", included: false },
        ],
        highlight: false,
        cta: "מתחילים",
    },
    {
        name: "חבילה מתקדמת",
        price: "4,500",
        description: "האפשרות המושלמת לעסקים שרוצים לבלוט ולהמיר לקוחות",
        features: [
            { name: "עד 10 עמודים", included: true },
            { name: "עיצוב רספונסיבי מלא", included: true },
            { name: "מערכת תורים/הזמנות", included: true },
            { name: "כפתור וואטסאפ צף", included: true },
            { name: "SEO מתקדם + כתיבת תוכן", included: true },
            { name: "3 חודשי תמיכה", included: true },
            { name: "גלריית פרויקטים מתקדמת", included: true },
            { name: "אנליטיקס ומעקב המרות", included: true },
            { name: "זמן הקמה: 3-5 ימים", included: true },
            { name: "חנות אונליין מלאה", included: false },
        ],
        highlight: true,
        cta: "הכי נבחר 🚀",
    },
    {
        name: "חבילה עסקית",
        price: "7,500",
        description: "הפתרון השלם לעסקים שרוצים נוכחות דיגיטלית מלאה",
        features: [
            { name: "ללא הגבלת עמודים", included: true },
            { name: "חנות אונליין מלאה", included: true },
            { name: "דשבורד ניהול תוכן (CMS)", included: true },
            { name: "SEO טכני ומחקר מילים", included: true },
            { name: "שנת תמיכה מלאה", included: true },
            { name: "אופטימיזציה למהירות שיא", included: true },
            { name: "אינטגרציה ל-CRM", included: true },
            { name: "תוכן וידאו ואנימציות", included: true },
            { name: "זמן הקמה: 7-10 ימים", included: true },
        ],
        highlight: false,
        cta: "הפתרון המלא",
    },
];

export default function Pricing() {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9720584345513";

    return (
        <section id="pricing" className="relative py-24 overflow-hidden">
            {/* Dark Background */}
            <div className="absolute inset-0 bg-[#030014]" />

            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/15 to-transparent rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/15 to-transparent rounded-full blur-[120px]" />

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
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-cyan-400 text-sm font-medium mb-6 border border-white/10"
                    >
                        <Sparkles size={16} />
                        <span>מחירים שקופים</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        חבילות המחיר שלנו
                    </motion.h2>
                    <p className="text-xl text-slate-400">
                        תמחור שקוף והוגן, ללא הפתעות
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group ${pkg.highlight ? "md:-mt-4 md:mb-4" : ""}`}
                        >
                            {/* Glow for highlighted */}
                            {pkg.highlight && (
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-2xl blur-xl -z-10" />
                            )}

                            <div className={`relative h-full rounded-2xl border ${pkg.highlight
                                ? "border-cyan-500/50 bg-gradient-to-b from-white/10 to-white/5"
                                : "border-white/10 bg-white/5 hover:border-white/20"
                                } backdrop-blur-sm p-8 flex flex-col transition-all duration-300`}>

                                {pkg.highlight && (
                                    <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                                        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                                            🔥 הכי פופולרי
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                                <div className="text-4xl font-bold mb-1">
                                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">₪{pkg.price}</span>
                                    <span className="text-lg font-normal text-slate-500"> / חד פעמי</span>
                                </div>
                                <p className="text-slate-400 mb-6 text-sm">{pkg.description}</p>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm">
                                            {feature.included ? (
                                                <Check className="text-emerald-400 shrink-0" size={18} />
                                            ) : (
                                                <X className="text-slate-600 shrink-0" size={18} />
                                            )}
                                            <span className={feature.included ? "text-slate-300" : "text-slate-600 line-through"}>
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.a
                                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`היי, אני מעוניין ב${pkg.name}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 rounded-full font-bold text-center transition-all duration-300 block ${pkg.highlight
                                        ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25"
                                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                                        }`}
                                >
                                    {pkg.cta}
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12 text-slate-500 text-sm">
                    * המחירים כוללים שנה ראשונה של אחסון ואבטחה. <br className="md:hidden" />
                    אפשרות לפריסת תשלומים נוחה.
                </div>
            </div>
        </section>
    );
}
