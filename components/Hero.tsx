"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { CheckCircle, ArrowDown, Sparkles, Zap, Rocket } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

// Typewriter words - meaningful phrases that complete "אל תיתן למתחרים..."
const TYPEWRITER_WORDS = ["לנצח אותך", "לעבור אותך", "לקחת לך לקוחות"];

// Animated orb data for a "video-like" effect
const ANIMATED_ORBS = [
    { size: 400, x: 80, y: 20, color: "from-blue-600 to-cyan-500", duration: 20, delay: 0 },
    { size: 350, x: 10, y: 70, color: "from-purple-600 to-indigo-500", duration: 25, delay: 2 },
    { size: 300, x: 60, y: 50, color: "from-cyan-500 to-blue-400", duration: 18, delay: 1 },
    { size: 250, x: 30, y: 30, color: "from-indigo-600 to-purple-500", duration: 22, delay: 3 },
    { size: 200, x: 70, y: 80, color: "from-blue-500 to-cyan-400", duration: 15, delay: 0.5 },
];

// Particle config
const PARTICLE_COUNT = 50;

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
}

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "972XXXXXXXXX";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("היי, אני רוצה אתר מנצח")}`;
    const containerRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Mouse position for spotlight
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 30, damping: 20 });

    // Initialize particles on mount and detect mobile
    useEffect(() => {
        setMounted(true);
        // Detect mobile/touch device
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Reduce particles on mobile for performance
        const particleCount = window.innerWidth < 768 ? 20 : PARTICLE_COUNT;
        const newParticles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                speed: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.5 + 0.3,
            });
        }
        setParticles(newParticles);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Canvas animation for floating particles
    useEffect(() => {
        if (!mounted || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let localParticles = particles.map(p => ({ ...p, currentY: p.y }));

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            localParticles.forEach((particle) => {
                particle.currentY -= particle.speed * 0.1;
                if (particle.currentY < -5) {
                    particle.currentY = 105;
                }

                const x = (particle.x / 100) * canvas.width;
                const y = (particle.currentY / 100) * canvas.height;

                // Create gradient for each particle
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 2);
                gradient.addColorStop(0, `rgba(34, 211, 238, ${particle.opacity})`);
                gradient.addColorStop(0.5, `rgba(59, 130, 246, ${particle.opacity * 0.5})`);
                gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

                ctx.beginPath();
                ctx.arc(x, y, particle.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, [mounted, particles]);

    // Mouse tracking - only on desktop
    useEffect(() => {
        if (!mounted || isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                mouseX.set(e.clientX - rect.left);
                mouseY.set(e.clientY - rect.top);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mounted, isMobile, mouseX, mouseY]);

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

            {/* Animated Background - Video-like effect */}
            <div className="absolute inset-0 z-0 bg-[#030014]">

                {/* Large Animated Gradient Orbs - Creates "video" effect */}
                {ANIMATED_ORBS.map((orb, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-[100px]`}
                        style={{
                            width: orb.size,
                            height: orb.size,
                            left: `${orb.x}%`,
                            top: `${orb.y}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                            x: [0, 100, -50, 0],
                            y: [0, -80, 60, 0],
                            scale: [1, 1.3, 0.8, 1],
                            opacity: [0.4, 0.7, 0.4, 0.4],
                        }}
                        transition={{
                            duration: orb.duration,
                            repeat: Infinity,
                            delay: orb.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Canvas for animated particles */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-[1]"
                />

                {/* Mouse Spotlight - Desktop only */}
                {mounted && !isMobile && (
                    <motion.div
                        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-[2]"
                        style={{
                            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(34,211,238,0.08) 40%, transparent 70%)",
                            x: smoothMouseX,
                            y: smoothMouseY,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                    />
                )}

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 z-[3] opacity-[0.05]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '80px 80px'
                    }}
                />

                {/* Vignette */}
                <div className="absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,0,20,0.3)_50%,rgba(3,0,20,0.7)_100%)]" />
            </div>

            {/* Animated light beams */}
            <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: ["-100%", "200%"],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 w-[2px] h-[200%] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent rotate-45"
                />
                <motion.div
                    animate={{
                        x: ["-100%", "200%"],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatDelay: 7,
                        ease: "easeInOut",
                        delay: 3,
                    }}
                    className="absolute top-1/3 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-blue-400/20 to-transparent rotate-45"
                />
            </div>

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl"
            >

                {/* Floating Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium text-sm md:text-base shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                >
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        <Sparkles className="text-cyan-400" size={18} />
                    </motion.div>
                    <span className="text-slate-300">בניית אתרים מקצועית במחיר הוגן</span>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Zap className="text-yellow-400" size={16} />
                    </motion.div>
                </motion.div>

                {/* Main Headline with Typewriter */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8"
                >
                    <span className="block drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        אל תיתן למתחרים
                    </span>
                    <span className="block mt-2 h-[1.2em] relative whitespace-nowrap">
                        <span className="bg-gradient-to-l from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            {displayText}
                        </span>
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-[3px] h-[0.85em] bg-cyan-400 ml-1 align-middle rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                        />
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative mb-12"
                >
                    <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        ב-SiteSprint אנחנו בונים אתרים מקצועיים ומהירים לבעלי עסקים קטנים שרוצים להוביל בתחומם.
                        <span className="text-cyan-400 font-medium"> עיצוב יוקרתי, SEO מובנה, ואתר שממיר מבקרים ללקוחות.</span>
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
                >
                    {/* Primary CTA with glow */}
                    <motion.a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(34,211,238,0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-l from-cyan-500 to-blue-600 text-white font-bold text-lg px-10 py-5 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            אני רוצה אתר מנצח
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Rocket size={22} />
                            </motion.span>
                        </span>
                        {/* Shimmer effect */}
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                        />
                    </motion.a>

                    {/* Secondary CTA */}
                    <motion.button
                        onClick={scrollToPortfolio}
                        whileHover={{ scale: 1.03, borderColor: "rgba(34,211,238,0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className="group w-full sm:w-auto px-10 py-5 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg transition-all hover:bg-white/10"
                    >
                        <span className="flex items-center justify-center gap-3">
                            ראה דוגמאות מהתיק שלנו
                            <motion.span
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowDown size={20} />
                            </motion.span>
                        </span>
                    </motion.button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-10"
                >
                    {[
                        { icon: CheckCircle, text: "150+ אתרים נבנו", color: "text-emerald-400" },
                        { icon: Zap, text: "זמן השקה: 72 שעות", color: "text-yellow-400" },
                        { icon: CheckCircle, text: "98% שביעות רצון", color: "text-cyan-400" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 text-slate-300 text-sm md:text-base"
                        >
                            <item.icon className={item.color} size={18} />
                            <span>{item.text}</span>
                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-slate-500 text-xs">גלול למטה</span>
                    <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
                        <motion.div
                            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(34,211,238,0.8)]"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
