"use client";

import { motion } from "framer-motion";
import {
    Phone,
    MapPin,
    Clock,
    Wrench,
    Droplets,
    AlertTriangle,
    CheckCircle,
    Star,
    ThumbsUp,
    Shield,
    Zap,
    MessageCircle
} from "lucide-react";
import Link from "next/link";

const services = [
    { icon: Droplets, name: "תיקון נזילות", description: "איתור ותיקון נזילות מים בכל סוגי הצנרת" },
    { icon: Wrench, name: "פתיחת סתימות", description: "פתיחת סתימות בכיורים, אסלות וניקוזים" },
    { icon: Zap, name: "התקנת דודי שמש", description: "התקנה והחלפה של דודי שמש וחשמל" },
    { icon: Shield, name: "החלפת צנרת", description: "החלפת צנרת ישנה בצנרת חדשה ועמידה" },
];

const advantages = [
    { icon: Clock, title: "מענה תוך 30 דקות", description: "הגעה מהירה לכל אזור גוש דן" },
    { icon: Shield, title: "אחריות מלאה", description: "שנה אחריות על כל עבודה" },
    { icon: ThumbsUp, title: "מחירים הוגנים", description: "הצעת מחיר לפני תחילת העבודה" },
    { icon: CheckCircle, title: "20 שנות ניסיון", description: "אלפי לקוחות מרוצים" },
];

const testimonials = [
    { name: "יוסי כהן", location: "תל אביב", text: "הגיעו תוך חצי שעה ותיקנו את הנזילה במקצועיות. ממליץ בחום!", rating: 5 },
    { name: "רחל לוי", location: "רמת גן", text: "שירות מעולה, מחיר הוגן והכי חשוב - פתרו את הבעיה מהשורש.", rating: 5 },
    { name: "דוד אברהם", location: "גבעתיים", text: "אחרי שכמה שרברבם לא הצליחו, הם פתרו את הסתימה ב-10 דקות!", rating: 5 },
];

export default function PlumberPage() {
    return (
        <div className="min-h-screen bg-white font-sans" dir="rtl">
            {/* Emergency Banner */}
            <div className="bg-red-600 text-white py-3 text-center">
                <div className="container mx-auto px-4 flex items-center justify-center gap-3">
                    <AlertTriangle className="animate-pulse" size={20} />
                    <span className="font-bold">שירות חירום 24/7 - התקשרו עכשיו!</span>
                    <a href="tel:050-9876543" className="bg-white text-red-600 px-4 py-1 rounded-full font-bold hover:bg-gray-100 transition-colors">
                        050-987-6543
                    </a>
                </div>
            </div>

            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <Wrench className="text-white" size={24} />
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-gray-800 block">אינסטלציה מהירה</span>
                            <span className="text-sm text-gray-500">שרברבים מקצועיים</span>
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#services" className="text-gray-600 hover:text-blue-500 transition-colors">שירותים</a>
                        <a href="#advantages" className="text-gray-600 hover:text-blue-500 transition-colors">למה אנחנו</a>
                        <a href="#testimonials" className="text-gray-600 hover:text-blue-500 transition-colors">המלצות</a>
                    </nav>
                    <a
                        href="tel:050-9876543"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all flex items-center gap-2"
                    >
                        <Phone size={18} />
                        חייג עכשיו
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
                        >
                            <Zap className="text-yellow-400" size={16} />
                            <span>מענה מהיר תוך 30 דקות!</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold mb-6"
                        >
                            בעיית אינסטלציה?
                            <span className="block text-cyan-300">אנחנו פותרים!</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl opacity-90 mb-8 leading-relaxed"
                        >
                            שירותי אינסטלציה מקצועיים 24/7 באזור גוש דן. נזילות, סתימות, התקנות ותיקונים - הכל במחיר הוגן ובאחריות מלאה
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <a
                                href="tel:050-9876543"
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                            >
                                <Phone size={24} />
                                050-987-6543
                            </a>
                            <a
                                href="https://wa.me/9729876543"
                                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={24} />
                                שלח WhatsApp
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
                        <p className="text-xl text-gray-600">פתרונות אינסטלציה מקצועיים לכל בעיה</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                                    <service.icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section id="advantages" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">למה לבחור בנו?</h2>
                        <p className="text-xl text-gray-600">אלפי לקוחות מרוצים לא טועים</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {advantages.map((adv, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <adv.icon className="text-blue-600" size={28} />
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2">{adv.title}</h3>
                                <p className="text-gray-600 text-sm">{adv.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500">
                <div className="container mx-auto px-4 text-center text-white">
                    <AlertTriangle className="mx-auto mb-4" size={48} />
                    <h2 className="text-3xl font-bold mb-4">מצב חירום? אנחנו זמינים 24/7!</h2>
                    <p className="text-xl opacity-90 mb-6">נזילה חזקה? סתימה דחופה? התקשרו עכשיו ונגיע תוך 30 דקות</p>
                    <a
                        href="tel:050-9876543"
                        className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all"
                    >
                        <Phone size={24} />
                        050-987-6543
                    </a>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">מה הלקוחות אומרים</h2>
                        <p className="text-xl text-gray-600">ביקורות אמיתיות מלקוחות מרוצים</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 shadow-sm"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4">"{t.text}"</p>
                                <div>
                                    <p className="font-bold text-gray-800">{t.name}</p>
                                    <p className="text-gray-500 text-sm">{t.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">צור קשר</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/10 rounded-2xl p-6">
                                <Phone className="mx-auto mb-3" size={28} />
                                <p className="font-bold">טלפון</p>
                                <p className="text-gray-300">050-987-6543</p>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-6">
                                <Clock className="mx-auto mb-3" size={28} />
                                <p className="font-bold">זמינות</p>
                                <p className="text-gray-300">24 שעות / 7 ימים</p>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-6">
                                <MapPin className="mx-auto mb-3" size={28} />
                                <p className="font-bold">אזור שירות</p>
                                <p className="text-gray-300">גוש דן והסביבה</p>
                            </div>
                        </div>
                        <p className="text-gray-400">© 2024 אינסטלציה מהירה. כל הזכויות שמורות.</p>
                    </div>
                </div>
            </section>

            {/* Back to Portfolio */}
            <div className="fixed bottom-6 left-6 z-50">
                <Link
                    href="/#portfolio"
                    className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg flex items-center gap-2"
                >
                    ← חזרה לתיק העבודות
                </Link>
            </div>

            {/* Floating Call Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href="tel:050-9876543"
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors animate-pulse"
                >
                    <Phone className="text-white" size={28} />
                </a>
            </div>
        </div>
    );
}
