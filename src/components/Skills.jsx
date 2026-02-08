import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, TrendingUp, Shield, FileText, BarChart3, Table2, Code, Presentation } from 'lucide-react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        { name: 'Audit Interne', icon: Award, level: 90 },
        { name: 'Contrôle Interne & Conformité', icon: Shield, level: 85 },
        { name: 'Gestion des Risques', icon: TrendingUp, level: 85 },
        { name: 'Analyse Financière', icon: BarChart3, level: 80 },
        { name: 'Reporting & Documentation d\'Audit', icon: FileText, level: 90 },
        { name: 'Excel (Avancé)', icon: Table2, level: 95 },
        { name: 'VBA', icon: Code, level: 75 },
        { name: 'PowerPoint', icon: Presentation, level: 85 }
    ];

    return (
        <section id="skills" className="section-container bg-slate-50">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-900 p-3 rounded-full">
                        <Award className="text-white" size={32} />
                    </div>
                </div>

                <h2 className="section-title">Compétences Techniques</h2>
                <p className="section-subtitle">Expertise et savoir-faire professionnel</p>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="card"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <Icon className="text-blue-900" size={24} />
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                                    </div>

                                    <div className="relative">
                                        <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                                            <motion.div
                                                className="bg-gradient-to-r from-blue-900 to-blue-600 h-2.5 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                            ></motion.div>
                                        </div>
                                        <span className="absolute -top-6 right-0 text-sm font-semibold text-blue-900">
                                            {skill.level}%
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Additional skills as badges */}
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h3 className="text-xl font-semibold text-slate-800 mb-6">Autres Compétences</h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {['Analyse de Processus', 'Tests d\'Audit', 'Cartographie des Risques', 'Plans d\'Action', 'Conformité Réglementaire', 'Contrôle de Gestion'].map((skill, index) => (
                                <motion.span
                                    key={index}
                                    className="skill-badge"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
