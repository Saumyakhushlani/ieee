import { motion } from 'framer-motion';
import { Award, Globe, Users, BookOpen, Trophy, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Active Members" },
    { icon: Trophy, value: "50+", label: "Events Organized" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Globe, value: "10+", label: "International Collaborations" },
  ];

  const achievements = [
    {
      title: "Darrel Chong Medal",
      description: "Prestigious recognition including Gold edition for outstanding IEEE activities",
      icon: Trophy
    },
    {
      title: "SCEECS Conference",
      description: "Flagship IEEE International Students' Conference with IEEE Xplore publications",
      icon: BookOpen
    },
    {
      title: "Central India's Premier Branch",
      description: "Recognized as one of the leading IEEE student branches in Central India",
      icon: Target
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-500/5 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About IEEE-MSB
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The IEEE Student Branch at MANIT, Bhopal - fostering technological innovation 
            and professional development in Central India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              The IEEE Student Branch at MANIT, Bhopal, known as <strong>IEEE‑MSB</strong>, is the 
              IEEE-affiliated student chapter at Maulana Azad National Institute of Technology (MANIT) 
              in Bhopal, Madhya Pradesh, India.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              We foster technological innovation and professional development through year‑round workshops, 
              guest lectures, technical events, and our flagship conference SCEECS (IEEE International 
              Students' Conference on Electrical, Electronics and Computer Sciences), where students 
              get to present research and publish in IEEE Xplore.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-blue-500" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mr-3">
                    <achievement.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">{achievement.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 bg-white border border-gray-200 rounded-xl px-8 py-4 shadow-md">
            <div className="text-sm text-gray-600">
              <strong className="text-gray-800">Website:</strong> https://ieeenitb.com/
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="text-sm text-gray-600">
              <strong className="text-gray-800">LinkedIn:</strong> IEEE-MSB MANIT
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
