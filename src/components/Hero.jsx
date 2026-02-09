import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900/5 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Name */}
                    <motion.h1
                        className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-gradient">Abondance SANAMA</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        className="text-2xl md:text-3xl lg:text-4xl text-slate-700 font-semibold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Auditrice Interne Junior | Contrôle Interne & Gestion des Risques
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Audit basé sur les risques, analyse financière et contrôle interne pour garantir la transparence, la conformité et la performance.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a
                            href="#"
                            className="btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                // You can add actual CV download logic here
                                alert('Fonctionnalité de téléchargement du CV à implémenter');
                            }}
                        >
                            <Download size={20} />
                            Télécharger CV
                        </a>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="btn-secondary cursor-pointer"
                        >
                            <Mail size={20} />
                            Me Contacter
                        </Link>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="mt-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="inline-flex flex-col items-center text-slate-400 hover:text-blue-900 transition-colors"
                            >
                                <span className="text-sm mb-2">Découvrir</span>
                                <ArrowDown size={24} />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
