"use client";

import { motion } from "framer-motion";
import { Sparkles, Wrench, Scissors, ArrowUpLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "אתר לקוסמטיקאית",
        category: "קוסמטיקה ויופי",
        icon: Sparkles,
        tagline: "אתר אלגנטי עם מערכת זימון תורים",
        gradient: "from-pink-500 to-purple-600",
        link: "/examples/cosmetician",
        image: "/portfolio-cosmetician.png",
    },
    {
        title: "אינסטלציה מהירה",
        category: "שרברבים ואינסטלציה",
        icon: Wrench,
        tagline: "אתר לשרברבים עם לחצן חירום",
        gradient: "from-blue-500 to-cyan-600",
        link: "https://plumber-website-tau.vercel.app/",
        image: "/portfolio-plumber.png",
        external: true,
    },
    {
        title: "אתר נחיתה לספרים",
        category: "מספרה",
        icon: Scissors,
        tagline: "דף נחיתה מעוצב להזמנת תורים",
        gradient: "from-amber-500 to-orange-600",
        link: "/examples/barber",
        image: "/portfolio-barber.png",
    },
];

export default function Portfolio() {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9720584345513";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("היי, אהבתי את תיק העבודות שלכם")}`;

    return (
        <section id="portfolio" className="relative py-24 overflow-hidden">
            {/* Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#050520] to-[#030014]" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-l from-cyan-500/15 to-transparent rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/15 to-transparent rounded-full blur-[100px]" />

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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-400 text-sm font-medium mb-6 border border-white/10"
                    >
                        <ExternalLink size={16} />
                        <span>פרויקטים אחרונים</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            תיק עבודות
                        </span>
                    </motion.h2>
                    <p className="text-xl text-slate-400">
                        כל אחד מהאתרים האלה הפך למכונת לידים עבור הלקוח
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => {
                        const CardContent = (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                            >
                                {/* Screenshot Image */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                {/* Border */}
                                <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/30 transition-colors" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-3 shadow-lg transform group-hover:scale-110 transition-transform`}>
                                        <project.icon className="text-white" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                    <p className="text-slate-400 text-sm mb-2">{project.category}</p>
                                    <p className="text-slate-300 text-sm">{project.tagline}</p>

                                    {/* Hover Button */}
                                    <div
                                        className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white text-slate-900 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg"
                                    >
                                        צפה בפרויקט <ArrowUpLeft size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        );

                        return project.external ? (
                            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
                                {CardContent}
                            </a>
                        ) : (
                            <Link key={index} href={project.link}>
                                {CardContent}
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <motion.a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full shadow-xl"
                    >
                        רוצה לראות עוד? דבר איתנו
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
