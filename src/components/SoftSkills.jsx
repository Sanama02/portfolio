import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Target, Lightbulb, MessageSquare, TrendingUp } from 'lucide-react';

const SoftSkills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const softSkills = [
        {
            name: 'Compétences Interpersonnelles',
            icon: Users,
            description: 'Capacité à établir des relations professionnelles solides et à communiquer efficacement'
        },
        {
            name: 'Travail d\'Équipe & Orientation Résultats',
            icon: Target,
            description: 'Collaboration efficace et focus sur l\'atteinte des objectifs communs'
        },
        {
            name: 'Pensée Analytique',
            icon: Lightbulb,
            description: 'Approche méthodique pour résoudre les problèmes complexes et identifier les risques'
        },
        {
            name: 'Synthèse & Reporting',
            icon: MessageSquare,
            description: 'Capacité à synthétiser l\'information et à communiquer clairement les résultats'
        },
        {
            name: 'Initiative & Amélioration Continue',
            icon: TrendingUp,
            description: 'Proactivité et engagement dans l\'amélioration des processus et pratiques'
        }
    ];

    return (
        <section id="soft-skills" className="section-container bg-white">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-900 p-3 rounded-full">
                        <Users className="text-white" size={32} />
                    </div>
                </div>

                <h2 className="section-title">Compétences Comportementales</h2>
                <p className="section-subtitle">Qualités professionnelles et savoir-être</p>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {softSkills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="card group hover:border-blue-200 border border-transparent transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <motion.div
                                            className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-900 transition-colors duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Icon className="text-blue-900 group-hover:text-white transition-colors duration-300" size={32} />
                                        </motion.div>

                                        <h3 className="text-lg font-semibold text-slate-800 mb-3">{skill.name}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{skill.description}</p>
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

export default SoftSkills;
