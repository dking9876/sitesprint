"use client";

import { motion } from "framer-motion";
import { Phone, Palette, Edit, Rocket, ArrowLeft } from "lucide-react";

const steps = [
    {
        icon: Phone,
        title: "שיחת אפיון וייעוץ",
        description: "שיחה קצרה להבנת הצרכים, המטרות והזהות המותגית שלך.",
        duration: "15-30 דקות",
        color: "from-purple-500 to-indigo-600",
    },
    {
        icon: Palette,
        title: "עיצוב ופיתוח",
        description: "אנחנו מעצבים ובונים את האתר בהתאם לזהות המותג שלך.",
        duration: "3-5 ימי עבודה",
        color: "from-cyan-500 to-blue-600",
    },
    {
        icon: Edit,
        title: "משוב ושיפורים",
        description: "אתה משתף בהערות, ואנחנו מבצעים שינויים עד שהכל מושלם.",
        duration: "1-2 ימים",
        color: "from-blue-500 to-indigo-600",
    },
    {
        icon: Rocket,
        title: "השקה ותמיכה",
        description: "האתר עולה לאוויר ואנחנו מוודאים שהכל עובד חלק.",
        duration: "יום אחד + תמיכה",
        color: "from-emerald-500 to-cyan-600",
    },
];

export default function Process() {
    return (
        <section id="process" className="relative py-24 overflow-hidden">
            {/* Dark Background */}
            <div className="absolute inset-0 bg-[#030014]" />

            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-cyan-500/15 to-transparent rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/15 to-transparent rounded-full blur-[100px]" />

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
                        <ArrowLeft size={16} />
                        <span>איך זה עובד?</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        התהליך שלנו -{" "}
                        <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            פשוט ומהיר
                        </span>
                    </motion.h2>
                    <p className="text-xl text-slate-400">
                        4 שלבים פשוטים מרעיון לאתר מוכן
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-blue-500/30 transform -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ y: -10 }}
                                className="group text-center"
                            >
                                {/* Card */}
                                <div className="relative rounded-2xl p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">

                                    {/* Step Number */}
                                    <div className={`absolute -top-4 right-4 w-8 h-8 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg`}>
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon size={36} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">{step.description}</p>

                                    {/* Duration Badge */}
                                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${step.color}`}>
                                        {step.duration}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
