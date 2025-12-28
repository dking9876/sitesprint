"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "למה כדאי לי לבחור ב-SiteSprint לבניית האתר שלי?",
        answer: "בגלל שאנחנו משלבים שלושה דברים שקשה למצוא ביחד: מהירות, מקצועיות ומחיר הוגן. תקבל אתר שנראה כמו של חברה גדולה אבל עולה הרבה פחות. בנוסף, אנחנו זמינים לך בוואטסאפ כל הזמן - לא תרגיש לבד בתהליך."
    },
    {
        question: "האם אני צריך להבין בטכנולוגיה?",
        answer: "ממש לא. אם אתה יודע לשלוח הודעת וואטסאפ - אתה יודע מספיק. אנחנו מטפלים בכל הטכנולוגיה, העיצוב, כתיבת התוכן, האחסון והאבטחה. אתה רק צריך להגיד לנו מה אתה רוצה."
    },
    {
        question: "כמה זמן לוקח לבנות את האתר?",
        answer: "רוב האתרים מוכנים תוך 3-7 ימי עבודה מרגע שקיבלנו ממך את כל החומרים הנדרשים. דפי נחיתה יכולים להיות מוכנים אפילו תוך 48 שעות."
    },
    {
        question: "האם האתר יעבוד טוב גם בטלפון הנייד?",
        answer: "100%. האתר שלך יראה ויעבוד מושלם על כל מכשיר. אנחנו בונים בגישת Mobile First כי רוב הלקוחות שלך יגיעו משם."
    },
    {
        question: "האם אני יכול לערוך את האתר בעצמי?",
        answer: "כן! בחבילות המתקדמות אנחנו מספקים גישה למערכת ניהול תוכן (CMS) ומדריכים אותך איך להשתמש בה לעדכונים פשוטים."
    },
    {
        question: "מה קורה אם אני לא מרוצה מהתוצאה?",
        answer: "אנחנו לא מסיימים עד שאתה מרוצה. יש לך סבבי תיקונים ללא הגבלה במסגרת החבילה, ואנחנו עובדים בשקיפות מלאה לאורך כל הדרך."
    },
    {
        question: "האם אני צריך לספק את הטקסטים והתמונות?",
        answer: "אם יש לך - מעולה. אם לא - אנחנו יכולים לעזור עם כתיבת תוכן שיווקי ושימוש במאגרי תמונות איכותיים כחלק מהשירות."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="relative py-24 overflow-hidden">
            {/* Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#050520] to-[#030014]" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-l from-blue-500/15 to-transparent rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/15 to-transparent rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-cyan-400 text-sm font-medium mb-6 border border-white/10"
                    >
                        <HelpCircle size={16} />
                        <span>שאלות ותשובות</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        שאלות נפוצות
                    </h2>
                    <p className="text-xl text-slate-400">
                        כל מה שרצית לדעת לפני שמתחילים
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`rounded-2xl border overflow-hidden transition-all duration-300 ${openIndex === index
                                ? "border-cyan-500/30 bg-white/10"
                                : "border-white/10 bg-white/5 hover:border-white/20"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-right font-bold text-lg text-white hover:bg-white/5 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown
                                    className={`text-cyan-400 transition-transform duration-300 shrink-0 ml-4 ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
