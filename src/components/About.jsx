import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User } from 'lucide-react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section-container bg-white">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-900 p-3 rounded-full">
                        <User className="text-white" size={32} />
                    </div>
                </div>

                <h2 className="section-title">À Propos</h2>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg text-slate-700 leading-relaxed text-center">
                            Étudiant en Master spécialisé en <strong className="text-blue-900">Audit Interne, Contrôle Interne et Gestion des Risques</strong> à TBS Education.
                            Expérimenté dans les missions d'audit basées sur les risques, incluant l'analyse de processus, les entretiens avec les parties prenantes,
                            les tests d'audit, le reporting et le suivi des recommandations. Esprit analytique développé, excellentes compétences en communication
                            et maîtrise solide d'Excel et de l'analyse des risques financiers.
                        </p>
                    </motion.div>

                    {/* Key highlights */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="text-4xl font-bold text-blue-900 mb-2">2+</div>
                            <div className="text-slate-600">Années d'Expérience</div>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="text-4xl font-bold text-blue-900 mb-2">Master</div>
                            <div className="text-slate-600">Expert en Audit Interne</div>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
                            <div className="text-slate-600">Engagement Professionnel</div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
