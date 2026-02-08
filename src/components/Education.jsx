import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const education = [
        {
            school: 'TBS Education',
            degree: 'Ms Expert en Audit Interne et Contrôle de Gestion',
            level: 'RNCP Niveau 7',
            location: 'France',
            period: '2023 - 2025',
            description: 'Formation spécialisée en audit interne, contrôle de gestion et gestion des risques'
        },
        {
            school: 'Université Catholique d\'Afrique Centrale',
            degree: 'MSc en Économie Financière & Banque',
            level: 'Master',
            location: 'Cameroun',
            period: '2020 - 2022',
            description: 'Spécialisation en économie financière et secteur bancaire'
        }
    ];

    return (
        <section id="education" className="section-container bg-slate-50">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-900 p-3 rounded-full">
                        <GraduationCap className="text-white" size={32} />
                    </div>
                </div>

                <h2 className="section-title">Formation</h2>
                <p className="section-subtitle">Parcours académique et qualifications</p>

                <div className="max-w-4xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{edu.school}</h3>
                                    <h4 className="text-xl font-semibold text-slate-700 mb-3">{edu.degree}</h4>
                                    <p className="text-slate-600 mb-4">{edu.description}</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            <span>{edu.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span>{edu.period}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-shrink-0">
                                    <span className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                                        {edu.level}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
