import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function AboutSection() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-teal-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-bold text-teal-600 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Poppins, sans-serif' }}>
            Tentang Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-800" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontFamily: 'Poppins, sans-serif' }}>
                Visi
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              Menjadi lembaga pelayanan lansia terpercaya yang menghadirkan kehidupan bermakna, 
              penuh kasih sayang, dan berkualitas tinggi bagi para lansia di Indonesia, 
              dengan standar pelayanan kesehatan dan kesejahteraan yang holistik.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-800" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontFamily: 'Poppins, sans-serif' }}>
                Misi
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600 text-base sm:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                <span>Memberikan perawatan berkualitas tinggi dengan pendekatan holistik dan penuh kasih sayang</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                <span>Menciptakan lingkungan yang aman, nyaman, dan penuh kehangatan untuk para lansia</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                <span>Mengembangkan program aktivitas yang meningkatkan kualitas hidup dan kebahagiaan lansia</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                <span>Membangun kemitraan dengan keluarga untuk kesejahteraan bersama para lansia</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}