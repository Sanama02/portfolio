import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            company: 'OSS CONSULTING',
            position: 'Auditrice Interne Junior',
            type: 'Alternance - 2 ans',
            location: 'Douala, Cameroun',
            period: '2022 - 2024',
            responsibilities: [
                'Participer aux missions d\'audit interne incluses dans le plan d\'audit',
                'Conduire des entretiens avec les parties prenantes clés',
                'Analyser les processus métier',
                'Identifier et évaluer les risques opérationnels et financiers',
                'Préparer les programmes de travail d\'audit',
                'Rédiger les rapports d\'audit',
                'Assurer le suivi des recommandations et plans d\'action',
                'Collaborer étroitement avec les auditeurs seniors'
            ]
        },
        {
            company: 'Kori Assets Management',
            position: 'Chargé de Risques & Gestion de Portefeuille Junior',
            type: '4 mois',
            location: 'Douala, Cameroun',
            period: '2022',
            responsibilities: [
                'Analyser les risques de marché et financiers',
                'Préparer les rapports de performance des portefeuilles',
                'Surveiller les indicateurs de risque (VaR, volatilité, bêta, stress tests)',
                'Contrôler les limites d\'exposition et la cohérence des données'
            ]
        }
    ];

    return (
        <section id="experience" className="section-container bg-white">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-900 p-3 rounded-full">
                        <Briefcase className="text-white" size={32} />
                    </div>
                </div>

                <h2 className="section-title">Expérience Professionnelle</h2>
                <p className="section-subtitle">Parcours et réalisations professionnelles</p>

                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                transition={{ duration: 0.6, delay: index * 0.3 }}
                            >
                                <div className={`md:flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <div className="card md:w-11/12 relative">
                                        {/* Timeline dot */}
                                        <div className="hidden md:block absolute top-8 w-4 h-4 bg-blue-900 rounded-full border-4 border-white shadow-lg"
                                            style={{
                                                [index % 2 === 0 ? 'right' : 'left']: '-2.5rem'
                                            }}>
                                        </div>

                                        <div className="mb-4">
                                            <h3 className="text-2xl font-bold text-blue-900 mb-2">{exp.company}</h3>
                                            <h4 className="text-xl font-semibold text-slate-700 mb-2">{exp.position}</h4>
                                            <span className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium mb-3">
                                                {exp.type}
                                            </span>

                                            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                                                <div className="flex items-center gap-2">
                                                    <MapPin size={16} />
                                                    <span>{exp.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={16} />
                                                    <span>{exp.period}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-600">
                                                    <span className="text-blue-900 mt-1">•</span>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
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

export default Experience;
