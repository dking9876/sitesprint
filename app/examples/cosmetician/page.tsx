"use client";

import { motion } from "framer-motion";
import {
    Phone,
    MapPin,
    Clock,
    Star,
    Sparkles,
    Heart,
    Calendar,
    Check,
    Instagram,
    Facebook,
    MessageCircle
} from "lucide-react";
import Link from "next/link";

const services = [
    { name: "טיפול פנים קלאסי", duration: "60 דקות", price: "₪250" },
    { name: "טיפול פנים עמוק", duration: "90 דקות", price: "₪350" },
    { name: "הסרת שיער בלייזר", duration: "30 דקות", price: "₪180" },
    { name: "איפור ערב", duration: "45 דקות", price: "₪300" },
    { name: "עיצוב גבות", duration: "20 דקות", price: "₪80" },
    { name: "מניקור ג'ל", duration: "45 דקות", price: "₪120" },
];

const testimonials = [
    { name: "מיכל כהן", text: "ליאת היא מקצוענית אמיתית! הטיפולים שלה מדהימים והעור שלי נראה מעולה.", rating: 5 },
    { name: "רונית לוי", text: "כבר שנתיים שאני מגיעה ללאת ולא מתכוונת לעבור לאף אחת אחרת.", rating: 5 },
    { name: "שירה אברהם", text: "האווירה נעימה, השירות מקצועי והתוצאות מדברות בעד עצמן.", rating: 5 },
];

export default function CosmeticianPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white font-sans" dir="rtl">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                            <Sparkles className="text-white" size={20} />
                        </div>
                        <span className="text-2xl font-bold text-gray-800">ליאת קוסמטיקס</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#services" className="text-gray-600 hover:text-pink-500 transition-colors">שירותים</a>
                        <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">אודות</a>
                        <a href="#testimonials" className="text-gray-600 hover:text-pink-500 transition-colors">המלצות</a>
                        <a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors">צור קשר</a>
                    </nav>
                    <a
                        href="#booking"
                        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                        קבע תור
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-white" />
                <div className="absolute top-20 right-20 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-pink-600 text-sm font-medium mb-6 shadow-sm"
                        >
                            <Heart className="fill-pink-500 text-pink-500" size={16} />
                            <span>יופי טבעי ומקצועי</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
                        >
                            גלי את היופי
                            <span className="block text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
                                הטבעי שלך
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 mb-8 leading-relaxed"
                        >
                            סטודיו קוסמטיקה יוקרתי המציע מגוון טיפולי פנים, גוף ויופי בטכנולוגיות מתקדמות ובאווירה מפנקת
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <a
                                href="#booking"
                                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                            >
                                <Calendar size={20} />
                                קבע תור עכשיו
                            </a>
                            <a
                                href="tel:050-1234567"
                                className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all border border-pink-200 flex items-center justify-center gap-2"
                            >
                                <Phone size={20} />
                                050-123-4567
                            </a>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-6 mt-12"
                        >
                            {[
                                { icon: Star, text: "4.9 ⭐ דירוג" },
                                { icon: Heart, text: "500+ לקוחות" },
                                { icon: Clock, text: "10 שנות ניסיון" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-600">
                                    <item.icon className="text-pink-500" size={18} />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
                        <p className="text-xl text-gray-600">מגוון טיפולים מקצועיים לטיפוח מושלם</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all"
                            >
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                                <div className="flex items-center gap-4 text-gray-600 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Clock size={16} />
                                        {service.duration}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-pink-500">{service.price}</span>
                                    <a href="#booking" className="text-pink-500 font-medium hover:underline">
                                        קבע תור →
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section id="booking" className="py-20 bg-gradient-to-br from-pink-500 to-purple-600">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center text-white">
                        <Calendar className="mx-auto mb-6" size={48} />
                        <h2 className="text-4xl font-bold mb-4">מערכת זימון תורים אונליין</h2>
                        <p className="text-xl opacity-90 mb-8">
                            קבע תור בקלות ובמהירות - בחר תאריך, שעה והטיפול המתאים לך
                        </p>
                        <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-right mb-2 font-medium">שם מלא</label>
                                    <input type="text" className="w-full p-3 border border-gray-200 rounded-lg" placeholder="הכנס שם מלא" />
                                </div>
                                <div>
                                    <label className="block text-right mb-2 font-medium">טלפון</label>
                                    <input type="tel" className="w-full p-3 border border-gray-200 rounded-lg" placeholder="050-1234567" />
                                </div>
                                <div>
                                    <label className="block text-right mb-2 font-medium">סוג טיפול</label>
                                    <select className="w-full p-3 border border-gray-200 rounded-lg">
                                        <option>בחר טיפול</option>
                                        {services.map((s, i) => (
                                            <option key={i}>{s.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-right mb-2 font-medium">תאריך מבוקש</label>
                                    <input type="date" className="w-full p-3 border border-gray-200 rounded-lg" />
                                </div>
                            </div>
                            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all">
                                שלח בקשה לתור
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">מה הלקוחות אומרות</h2>
                        <p className="text-xl text-gray-600">חוות דעת אמיתיות מלקוחות מרוצות</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-pink-50 rounded-2xl p-6"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4">"{t.text}"</p>
                                <p className="font-bold text-gray-800">{t.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">צור קשר</h2>
                            <p className="text-xl text-gray-600">נשמח לענות על כל שאלה</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                                <MapPin className="mx-auto text-pink-500 mb-4" size={32} />
                                <h3 className="font-bold text-gray-800 mb-2">כתובת</h3>
                                <p className="text-gray-600">רחוב הרצל 45, תל אביב</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                                <Phone className="mx-auto text-pink-500 mb-4" size={32} />
                                <h3 className="font-bold text-gray-800 mb-2">טלפון</h3>
                                <p className="text-gray-600">050-123-4567</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                                <Clock className="mx-auto text-pink-500 mb-4" size={32} />
                                <h3 className="font-bold text-gray-800 mb-2">שעות פעילות</h3>
                                <p className="text-gray-600">א'-ה' 09:00-20:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                                <Sparkles className="text-white" size={20} />
                            </div>
                            <span className="text-xl font-bold">ליאת קוסמטיקס</span>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors">
                                <MessageCircle size={20} />
                            </a>
                        </div>
                        <p className="text-gray-400">© 2024 ליאת קוסמטיקס. כל הזכויות שמורות.</p>
                    </div>
                </div>
            </footer>

            {/* Back to Portfolio */}
            <div className="fixed bottom-6 left-6 z-50">
                <Link
                    href="/#portfolio"
                    className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg flex items-center gap-2"
                >
                    ← חזרה לתיק העבודות
                </Link>
            </div>
        </div>
    );
}
