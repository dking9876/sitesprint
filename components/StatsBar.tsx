"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import { CheckCircle, Zap, Heart, MessageCircle } from "lucide-react";

// CountUp Component
function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = to;
            const totalFrames = duration * 60;
            const increment = end / totalFrames;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, to, duration]);

    return <span ref={ref}>{count}</span>;
}

const stats = [
    {
        icon: CheckCircle,
        value: 150,
        suffix: "+",
        label: "אתרים נבנו בהצלחה",
        color: "from-emerald-400 to-green-600",
    },
    {
        icon: Zap,
        value: 72,
        suffix: "",
        label: "שעות זמן השקה ממוצע",
        color: "from-yellow-400 to-orange-500",
    },
    {
        icon: Heart,
        value: 98,
        suffix: "%",
        label: "שביעות רצון לקוחות",
        color: "from-pink-400 to-rose-600",
    },
    {
        icon: MessageCircle,
        value: 24,
        suffix: "/7",
        label: "זמינות בוואטסאפ",
        color: "from-cyan-400 to-blue-600",
    },
];

export default function StatsBar() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050520] via-[#030014] to-[#050520]" />

            {/* Gradient Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    scale: [1.2, 1, 1.2]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-[100px]"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                            {/* Card */}
                            <div className="relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                                    <stat.icon className="text-white" size={24} />
                                </div>

                                {/* Number */}
                                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                                    <CountUp to={stat.value} />
                                    {stat.suffix}
                                </div>

                                {/* Label */}
                                <p className="text-slate-300 font-medium text-sm md:text-base">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
