import { motion } from 'framer-motion'
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa'

const About = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
  }

  const stats = [
    { icon: FaGraduationCap, number: '4th Year', label: 'Student' },
    { icon: FaCode, number: '10+', label: 'Skills' },
    { icon: FaRocket, number: 'Multiple', label: 'Projects' },
  ]

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      darkMode 
        ? '' 
        : 'bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20'
    }`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className={`w-20 h-1 mx-auto mb-8 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            I'm a passionate 4th-year Software Engineering student at Haramaya University, specializing in full-stack web development and AI integration. With a strong foundation in computer science and hands-on experience in modern web technologies, I build innovative solutions that solve real-world problems. through technology.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            With hands-on experience in full-stack development, I specialize in building 
            modern web applications using React, Node.js, and various databases. I'm 
            particularly interested in AI integration, mobile app development, and creating 
            scalable backend systems.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Beyond coding, I enjoy learning new technologies, contributing to open-source 
            projects, and continuously improving my skills to stay at the forefront of 
            software engineering.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-8 rounded-xl text-center transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700' 
                  : 'bg-white hover:bg-gray-50 shadow-md border border-gray-100'
              }`}
              whileHover={{ 
                y: -5,
                boxShadow: darkMode 
                  ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                  : '0 10px 25px -5px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                darkMode 
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' 
                  : 'bg-gradient-to-br from-blue-50 to-purple-50'
              }`}>
                <stat.icon className={`text-2xl ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
              <h3 className={`text-2xl font-bold mb-1 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.number}
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
          {
            title: 'Education',
            description: 'Pursuing Bachelor\'s in Software Engineering at Haramaya University',
            icon: FaGraduationCap,
          },
          {
            title: 'Development',
            description: 'Full-stack development with modern frameworks and technologies',
            icon: FaCode,
          },
          {
            title: 'Innovation',
            description: 'Building cutting-edge solutions with AI and mobile technologies',
            icon: FaRocket,
          },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 relative overflow-hidden group ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50' 
                  : 'bg-white/90 border-gray-200/80 hover:border-blue-400 shadow-xl hover:shadow-2xl'
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
              />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="text-4xl text-blue-400 mb-4" />
                </motion.div>
                <h4 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h4>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-700'}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

