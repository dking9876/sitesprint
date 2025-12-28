"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, ArrowDown, Sparkles, Zap, Rocket } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Typewriter words - meaningful phrases that complete "אל תיתן למתחרים..."
const TYPEWRITER_WORDS = ["לנצח אותך", "להשאיר אותך מאחור", "לקחת לך לקוחות"];

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9720584345513";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("היי, אני רוצה אתר מנצח")}`;
    const containerRef = useRef<HTMLElement>(null);

    // Initialize on mount
    useEffect(() => {
        setMounted(true);
    }, []);

    // Typewriter effect
    useEffect(() => {
        if (!mounted) return;

        const currentWord = TYPEWRITER_WORDS[currentWordIndex];
        const typeSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2500;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentWordIndex, mounted]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const scrollToPortfolio = () => {
        const element = document.getElementById("portfolio");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Simple Gradient Background - Mobile optimized */}
            <div className="absolute inset-0 z-0 bg-[#030014]">

                {/* Static gradient orbs - no animation for stability */}
                <div
                    className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-30"
                    style={{
                        background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
                        top: "10%",
                        right: "10%",
                    }}
                />
                <div
                    className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-30"
                    style={{
                        background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
                        bottom: "20%",
                        left: "5%",
                    }}
                />
                <div
                    className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full opacity-25"
                    style={{
                        background: "radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 z-[3] opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Vignette */}
                <div className="absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,0,20,0.4)_70%,rgba(3,0,20,0.8)_100%)]" />
            </div>

            {/* Main Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-4 md:px-6 text-center"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-400 text-sm font-medium mb-6 border border-white/20"
                >
                    <Zap className="fill-cyan-400" size={16} />
                    <span>אתרים שמביאים תוצאות</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    <span className="block">אל תיתן למתחרים</span>
                    <span className="block mt-2 h-[1.2em] relative whitespace-nowrap">
                        <span className="bg-gradient-to-l from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            {displayText}
                        </span>
                        <span className="inline-block w-[3px] h-[0.9em] bg-cyan-400 ml-1 animate-pulse align-middle" />
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed px-4"
                >
                    <span className="hidden md:inline">אנחנו בונים אתרים שממירים מבקרים ללקוחות. </span>
                    <span className="md:hidden">אתרים שמביאים לקוחות. </span>
                    <span className="text-white font-semibold">מהיר, מקצועי, ובמחיר הוגן.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <motion.a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                    >
                        <Rocket size={20} />
                        רוצה אתר מנצח? דבר איתנו
                    </motion.a>

                    <motion.button
                        onClick={scrollToPortfolio}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                        <Sparkles size={20} />
                        צפה בעבודות שלנו
                    </motion.button>
                </motion.div>

                {/* No Commitment Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30">
                        <span className="text-cyan-400 text-lg">🛡️</span>
                        <span className="text-white font-semibold text-sm md:text-base">לא משלמים עד שאתם מרוצים לגמרי</span>
                    </div>
                </motion.div>

                {/* Trust Indicators - Hidden on mobile */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="hidden md:flex flex-wrap justify-center gap-4 md:gap-8 text-slate-400 text-sm"
                >
                    {[
                        { icon: CheckCircle, text: "אתרים מותאמים למובייל" },
                        { icon: CheckCircle, text: "SEO מובנה" },
                        { icon: CheckCircle, text: "תמיכה מלאה" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <item.icon className="text-cyan-400" size={16} />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator - Hidden on mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.button
                    onClick={scrollToPortfolio}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                    <span className="text-xs">גלול למטה</span>
                    <ArrowDown size={20} />
                </motion.button>
            </motion.div>
        </section>
    );
}
