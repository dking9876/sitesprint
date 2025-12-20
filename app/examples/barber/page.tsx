"use client";

import { motion } from "framer-motion";
import {
    Phone,
    MapPin,
    Clock,
    Scissors,
    Star,
    Instagram,
    Facebook,
    MessageCircle,
    Calendar,
    Users,
    Award,
    Sparkles
} from "lucide-react";
import Link from "next/link";

const services = [
    { name: "תספורת גברים", price: "₪60", duration: "30 דק'" },
    { name: "תספורת + זקן", price: "₪90", duration: "45 דק'" },
    { name: "עיצוב זקן", price: "₪40", duration: "20 דק'" },
    { name: "גילוח קלאסי", price: "₪70", duration: "30 דק'" },
    { name: "צבע שיער", price: "₪120", duration: "45 דק'" },
    { name: "טיפול VIP", price: "₪150", duration: "60 דק'" },
];

const gallery = [
    { style: "פייד קלאסי", gradient: "from-amber-600 to-orange-700" },
    { style: "אנדרקאט", gradient: "from-gray-700 to-gray-900" },
    { style: "לונג טופ", gradient: "from-amber-700 to-yellow-600" },
    { style: "קרופ מודרני", gradient: "from-gray-600 to-gray-800" },
];

export default function BarberPage() {
    return (
        <div className="min-h-screen bg-gray-900 font-sans" dir="rtl">
            {/* Header */}
            <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                            <Scissors className="text-white" size={24} />
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-white block">The Classic</span>
                            <span className="text-sm text-amber-500">Barbershop</span>
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">שירותים</a>
                        <a href="#gallery" className="text-gray-400 hover:text-amber-500 transition-colors">גלריה</a>
                        <a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">צור קשר</a>
                    </nav>
                    <a
                        href="#booking"
                        className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                        קבע תור
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }} />

                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-amber-400 text-sm font-medium mb-6 border border-amber-500/30"
                        >
                            <Award size={16} />
                            <span>מספרה מוביל באזור</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6"
                        >
                            סטייל שמדבר
                            <span className="block text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
                                בעד עצמו
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 mb-8 leading-relaxed"
                        >
                            מספרת גברים מובילה עם אווירה ייחודית, ספרים מנוסים וטכניקות מתקדמות. הגיע הזמן לתספורת שתשנה לך את המראה
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                        >
                            <a
                                href="#booking"
                                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
                            >
                                <Calendar size={20} />
                                קבע תור עכשיו
                            </a>
                            <a
                                href="tel:050-5555555"
                                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
                            >
                                <Phone size={20} />
                                050-555-5555
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-3 gap-6 max-w-md mx-auto"
                        >
                            {[
                                { value: "8+", label: "שנות ניסיון" },
                                { value: "5000+", label: "לקוחות מרוצים" },
                                { value: "4.9", label: "דירוג ממוצע" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">השירותים שלנו</h2>
                        <p className="text-xl text-gray-400">מחירון מלא ושקוף</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gray-700/50 rounded-xl p-6 flex items-center justify-between hover:bg-gray-700 transition-colors"
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-white">{service.name}</h3>
                                    <p className="text-gray-400 text-sm">{service.duration}</p>
                                </div>
                                <div className="text-2xl font-bold text-amber-400">{service.price}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">סגנונות פופולריים</h2>
                        <p className="text-xl text-gray-400">התספורות הכי מבוקשות</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {gallery.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`aspect-square bg-gradient-to-br ${item.gradient} rounded-2xl flex items-end p-4 relative overflow-hidden group cursor-pointer`}
                            >
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                                <span className="relative z-10 text-white font-bold">{item.style}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section id="booking" className="py-20 bg-gradient-to-r from-amber-500 to-orange-600">
                <div className="container mx-auto px-4 text-center">
                    <Calendar className="mx-auto mb-6 text-white" size={48} />
                    <h2 className="text-4xl font-bold text-white mb-4">מוכן לתספורת חדשה?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        קבע תור עכשיו ותחווה את החוויה הייחודית שלנו. תספורת מקצועית באווירה נעימה
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:050-5555555"
                            className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            <Phone size={20} />
                            התקשר לקביעת תור
                        </a>
                        <a
                            href="https://wa.me/9725555555"
                            className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white mb-4">איפה למצוא אותנו</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="bg-gray-800 rounded-2xl p-6">
                                <MapPin className="mx-auto text-amber-400 mb-3" size={28} />
                                <p className="font-bold text-white">כתובת</p>
                                <p className="text-gray-400">דיזנגוף 100, תל אביב</p>
                            </div>
                            <div className="bg-gray-800 rounded-2xl p-6">
                                <Clock className="mx-auto text-amber-400 mb-3" size={28} />
                                <p className="font-bold text-white">שעות פתיחה</p>
                                <p className="text-gray-400">א'-ה' 10:00-21:00</p>
                                <p className="text-gray-400">ו' 09:00-14:00</p>
                            </div>
                            <div className="bg-gray-800 rounded-2xl p-6">
                                <Phone className="mx-auto text-amber-400 mb-3" size={28} />
                                <p className="font-bold text-white">טלפון</p>
                                <p className="text-gray-400">050-555-5555</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-950 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Scissors className="text-amber-400" size={24} />
                            <span className="font-bold">The Classic Barbershop</span>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                        <p className="text-gray-500 text-sm">© 2024 The Classic. כל הזכויות שמורות.</p>
                    </div>
                </div>
            </footer>

            {/* Back to Portfolio */}
            <div className="fixed bottom-6 left-6 z-50">
                <Link
                    href="/#portfolio"
                    className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
                >
                    ← חזרה לתיק העבודות
                </Link>
            </div>
        </div>
    );
}
