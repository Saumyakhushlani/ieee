import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-blue-500/10" />

            <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="flex justify-center mb-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-6 py-3 shadow-card">
                            <Award className="w-5 h-5 text-blue-500" />
                            <span className="text-sm font-semibold text-foreground">IEEE Student Branch • MANIT Bhopal</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                            7-Day Web Development
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Bootcamp
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Master modern web development with hands-on projects, expert mentorship, and real-world applications.
                            From HTML basics to full-stack development.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {[
                            { icon: Calendar, label: 'Duration', value: '7 Days' },
                            { icon: Clock, label: 'Time', value: '6 PM - 8 PM' },
                            { icon: MapPin, label: 'Mode', value: 'Online + Offline' },
                            { icon: Users, label: 'Participants', value: '100+ Students' },
                        ].map((item) => (
                            <motion.div
                                key={item.label}
                                className="bg-card border border-border rounded-xl p-6 text-center shadow-card"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 10px 30px -10px hsl(220 100% 50% / 0.3)'
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mb-4">
                                    <item.icon className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                                <p className="text-muted-foreground font-medium">{item.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <a href="/form"><button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 text-lg font-semibold rounded-xl shadow-lg transition"
                            >
                                Register Now
                            </button>
                            </a>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <a href='/login'>
                            <button
                                className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-3 text-lg font-semibold rounded-xl transition"
                            >
                                Admin Login
                            </button>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="text-center mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <p className="text-blue-500 font-semibold mb-2">🚀 Early Bird Registration Open</p>
                        <p className="text-muted-foreground">
                            Limited seats available • Free for MANIT students • Certificate of completion
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
