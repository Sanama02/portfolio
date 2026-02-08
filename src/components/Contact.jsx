import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission
        alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Phone,
            label: 'Téléphone',
            value: '+33 6 07 03 55 50',
            href: 'tel:+33607035550'
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'sanamaabondance@gmail.com',
            href: 'mailto:sanamaabondance@gmail.com'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Abondance SANAMA',
            href: 'http://linkedin.com/in/abondance-sanama-642b8b238'
        },
        {
            icon: MapPin,
            label: 'Localisation',
            value: 'Toulouse, France',
            href: null
        }
    ];

    return (
        <section id="contact" className="section-container bg-slate-50">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-900 p-3 rounded-full">
                        <Mail className="text-white" size={32} />
                    </div>
                </div>

                <h2 className="section-title">Me Contacter</h2>
                <p className="section-subtitle">N'hésitez pas à me contacter pour toute opportunité ou question</p>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Informations de Contact</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="card flex items-start gap-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                        >
                                            <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                                                <Icon className="text-blue-900" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-700 mb-1">{info.label}</h4>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        target={info.icon === Linkedin ? '_blank' : undefined}
                                                        rel={info.icon === Linkedin ? 'noopener noreferrer' : undefined}
                                                        className="text-blue-900 hover:text-blue-700 transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-slate-600">{info.value}</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Envoyez un Message</h3>
                            <form onSubmit={handleSubmit} className="card space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Nom Complet
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                                        placeholder="Votre nom"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                                        placeholder="votre.email@exemple.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Sujet
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                                        placeholder="Sujet de votre message"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Votre message..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full justify-center">
                                    <Send size={20} />
                                    Envoyer le Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
