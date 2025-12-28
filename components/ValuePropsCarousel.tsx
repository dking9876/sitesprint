"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Zap, Palette, Search, MessageCircle, Target, DollarSign, ChevronRight, ChevronLeft } from "lucide-react";

const cards = [
    {
        icon: DollarSign,
        title: "מחיר הוגן",
        description: "איכות של סוכנות גדולה במחיר שעסק קטן יכול להרשות לעצמו. ללא עלויות נסתרות.",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: Zap,
        title: "מהירות שיא",
        description: "האתר שלך יהיה באוויר תוך 3-7 ימים בלבד. זמן זה כסף, ואתה לא יכול לחכות.",
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        icon: Palette,
        title: "עיצוב מותאם אישית",
        description: "נראות של מותג גדול במחיר שמתאים לעסק קטן. עיצובים מודרניים ומקצועיים.",
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        icon: Search,
        title: "מותאם לגוגל (SEO)",
        description: "האתר נבנה בצורה שגוגל אוהב. SEO טכני מתקדם כסטנדרט כדי שימצאו אותך.",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: MessageCircle,
        title: "יחס אישי",
        description: "זמינים לכל שאלה בוואטסאפ. מדברים בגובה העיניים, בלי ז'רגון טכני.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Target,
        title: "מביא לקוחות",
        description: "האתר בנוי פסיכולוגית לגרום לאנשים ליצור קשר ולהפוך ללקוחות.",
        gradient: "from-rose-500 to-pink-500",
    },
];

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
} as const;

export default function ValuePropsCarousel() {
    const [imgIndex, setImgIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(1);
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setVisibleItems(3);
            else if (window.innerWidth >= 768) setVisibleItems(2);
            else setVisibleItems(1);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const dragX = useMotionValue(0);

    const onDragStart = () => setDragging(true);
    const onDragEnd = () => {
        setDragging(false);
        const x = dragX.get();
        if (x <= -50 && imgIndex < cards.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= 50 && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    useEffect(() => {
        if (dragging) return;
        const intervalRef = setInterval(() => {
            setImgIndex((pv) => {
                if (pv >= cards.length - visibleItems) return 0;
                return pv + 1;
            });
        }, 5000);
        return () => clearInterval(intervalRef);
    }, [dragging, visibleItems]);

    useEffect(() => {
        const maxIndex = Math.max(0, cards.length - visibleItems);
        if (imgIndex > maxIndex) setImgIndex(maxIndex);
    }, [visibleItems, imgIndex]);

    const handlePrev = useCallback(() => {
        setImgIndex((pv) => (pv > 0 ? pv - 1 : cards.length - visibleItems));
    }, [visibleItems]);

    const handleNext = useCallback(() => {
        setImgIndex((pv) => (pv < cards.length - visibleItems ? pv + 1 : 0));
    }, [visibleItems]);

    return (
        <section id="value-props" className="relative py-24 overflow-hidden">
            {/* Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#050520] to-[#030014]" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/15 to-transparent rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-l from-purple-500/15 to-transparent rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        למה לבחור ב-<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SiteSprint</span>?
                    </motion.h2>
                    <p className="text-xl text-slate-400">
                        6 סיבות שיגרמו לך לעבוד איתנו היום
                    </p>
                </div>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 z-10">
                        <button
                            onClick={handlePrev}
                            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 md:p-3 rounded-full border border-white/20 transition-all hover:scale-110"
                        >
                            <ChevronRight size={20} className="md:w-6 md:h-6" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 z-10">
                        <button
                            onClick={handleNext}
                            className="bg-gradient-to-l from-cyan-500 to-blue-600 text-white p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                        >
                            <ChevronLeft size={20} className="md:w-6 md:h-6" />
                        </button>
                    </div>

                    <div className="overflow-hidden">
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            style={{ x: dragX }}
                            animate={{ translateX: `${imgIndex * (100 / visibleItems)}%` }}
                            transition={SPRING_OPTIONS}
                            onDragStart={onDragStart}
                            onDragEnd={onDragEnd}
                            className="flex items-stretch cursor-grab active:cursor-grabbing"
                        >
                            {cards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="w-full shrink-0 px-3"
                                    style={{ flexBasis: `${100 / visibleItems}%` }}
                                >
                                    <motion.div
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className="group relative h-full"
                                    >
                                        {/* Glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                                        {/* Card */}
                                        <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                                            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                                <card.icon className="text-white" size={28} />
                                            </div>
                                            <h4 className="text-2xl font-bold text-white mb-3">
                                                {card.title}
                                            </h4>
                                            <p className="text-slate-400 leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {cards.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setImgIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === imgIndex
                                    ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-600"
                                    : "w-2 bg-white/20 hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
