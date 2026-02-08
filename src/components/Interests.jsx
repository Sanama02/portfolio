import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Music, TrendingUp as TrendingUpIcon } from 'lucide-react';

const Interests = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const interests = [
        {
            name: 'Développement Personnel',
            icon: Heart,
            description: 'Passion pour l\'apprentissage continu et l\'amélioration personnelle'
        },
        {
            name: 'Musique',
            icon: Music,
            description: 'Appréciation de divers genres musicaux et pratique instrumentale'
        },
        {
            name: 'Actualités Financières',
            icon: TrendingUpIcon,
            description: 'Suivi régulier des marchés financiers et tendances économiques'
        }
    ];

    return (
        <section id="interests" className="section-container bg-white">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-900 p-3 rounded-full">
                        <Heart className="text-white" size={32} />
                    </div>
                </div>

                <h2 className="section-title">Centres d'Intérêt</h2>
                <p className="section-subtitle">Passions et activités personnelles</p>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {interests.map((interest, index) => {
                            const Icon = interest.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="card group hover:border-blue-200 border border-transparent transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <motion.div
                                            className="bg-blue-100 p-5 rounded-full mb-4 group-hover:bg-blue-900 transition-colors duration-300"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Icon className="text-blue-900 group-hover:text-white transition-colors duration-300" size={36} />
                                        </motion.div>

                                        <h3 className="text-xl font-semibold text-slate-800 mb-3">{interest.name}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{interest.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Interests;
