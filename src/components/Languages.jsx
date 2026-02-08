import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Languages as LanguagesIcon } from 'lucide-react';

const Languages = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const languages = [
        {
            name: 'Français',
            level: 'Courant',
            proficiency: 100,
            flag: '🇫🇷'
        },
        {
            name: 'Anglais',
            level: 'Courant',
            proficiency: 95,
            flag: '🇬🇧'
        }
    ];

    return (
        <section id="languages" className="section-container bg-slate-50">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-900 p-3 rounded-full">
                        <LanguagesIcon className="text-white" size={32} />
                    </div>
                </div>

                <h2 className="section-title">Langues</h2>
                <p className="section-subtitle">Compétences linguistiques</p>

                <div className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {languages.map((language, index) => (
                            <motion.div
                                key={index}
                                className="card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="text-center">
                                    <div className="text-6xl mb-4">{language.flag}</div>
                                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{language.name}</h3>
                                    <p className="text-lg text-slate-600 mb-4">{language.level}</p>

                                    <div className="relative">
                                        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                                            <motion.div
                                                className="bg-gradient-to-r from-blue-900 to-blue-600 h-3 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${language.proficiency}%` } : { width: 0 }}
                                                transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                                            ></motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Languages;
