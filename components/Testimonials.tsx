"use client";

import { motion } from "framer-motion";
import { Star, User, Quote } from "lucide-react";

const testimonials = [
    {
        name: "דנה לוי",
        business: "סלון יופי 'דנה סטייל'",
        quote: "תוך 5 ימים היה לי אתר מקצועי שמביא לי לקוחות חדשים כל יום. השירות היה ברמה אחרת לגמרי - תמיד זמינים, תמיד עוזרים. מומלץ בחום!",
        stars: 5,
        gradient: "from-pink-500 to-rose-500",
    },
    {
        name: "יוסי כהן",
        business: "כהן שיפוצים ובנייה",
        quote: "סוף סוף אתר שעובד גם בנייד וגם נראה יוקרתי. הלקוחות שלי מתרשמים והזמנות עלו פי 3. ההשקעה החזירה את עצמה תוך חודש!",
        stars: 5,
        gradient: "from-orange-500 to-amber-500",
    },
    {
        name: "מיכל אברהם",
        business: "עורכת דין - משפט אזרחי",
        quote: "אחרי שנים בלי אתר, עכשיו אני בעמוד הראשון בגוגל בחיפושים הרלוונטיים. לקוחות מוצאים אותי בקלות והאתר נותן אמינות מטורפת. תודה!",
        stars: 5,
        gradient: "from-blue-500 to-indigo-500",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring" as const } },
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 overflow-hidden">
            {/* Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#050520] to-[#030014]" />

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px]" />

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
                        <Star className="fill-yellow-400 text-yellow-400" size={16} />
                        <span>מה הלקוחות שלנו אומרים</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            סיפורי הצלחה
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-400"
                    >
                        אל תקח את המילה שלנו - תשמע מהלקוחות
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                            {/* Card */}
                            <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">

                                {/* Quote Icon */}
                                <div className={`absolute -top-4 right-6 w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center shadow-lg`}>
                                    <Quote className="text-white" size={18} />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6 mt-2">
                                    {[...Array(t.stars)].map((_, si) => (
                                        <motion.div
                                            key={si}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: si * 0.1 }}
                                        >
                                            <Star className="text-yellow-400 fill-yellow-400" size={18} />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-slate-300 text-lg leading-relaxed mb-6">
                                    "{t.quote}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white shadow-lg`}>
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">{t.name}</div>
                                        <div className="text-sm text-slate-400">{t.business}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
