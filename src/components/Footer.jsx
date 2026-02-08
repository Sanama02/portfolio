import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="section-container">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* About */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Abondance SANAMA</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Auditeur Interne Junior spécialisé en Contrôle Interne et Gestion des Risques,
                                passionné par l'amélioration continue et la création de valeur.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Navigation Rapide</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                                        À Propos
                                    </a>
                                </li>
                                <li>
                                    <a href="#education" className="text-slate-400 hover:text-white transition-colors">
                                        Formation
                                    </a>
                                </li>
                                <li>
                                    <a href="#experience" className="text-slate-400 hover:text-white transition-colors">
                                        Expérience
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="text-slate-400 hover:text-white transition-colors">
                                        Compétences
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2 text-slate-400">
                                    <Phone size={16} />
                                    <a href="tel:+33607035550" className="hover:text-white transition-colors">
                                        +33 6 07 03 55 50
                                    </a>
                                </li>
                                <li className="flex items-center gap-2 text-slate-400">
                                    <Mail size={16} />
                                    <a href="mailto:sanamaabondance@gmail.com" className="hover:text-white transition-colors">
                                        sanamaabondance@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-2 text-slate-400">
                                    <Linkedin size={16} />
                                    <a
                                        href="http://linkedin.com/in/abondance-sanama-642b8b238"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        LinkedIn Profile
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-slate-800 my-8"></div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-slate-400 text-sm">
                            © {currentYear} Abondance SANAMA – Audit Interne & Gestion des Risques
                        </p>
                        <p className="text-slate-500 text-xs mt-2">
                            Tous droits réservés
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
