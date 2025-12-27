import { motion } from 'motion/react';
import { Bed, Utensils, Sofa, Trees, Wifi } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function FacilitiesSection() {
  const [ref, isInView] = useInView();

  const facilities = [
    {
      icon: Bed,
      title: 'Kamar Tidur Nyaman',
      description: 'Kamar ber-AC dengan tempat tidur yang nyaman dan perabotan lengkap',
      image: '/kamar_tidur.jpg',
    },
    {
      icon: Utensils,
      title: 'Ruang Makan',
      description: 'Menu sehat dan bergizi yang disesuaikan dengan kebutuhan lansia',
      image: 'ruang_makan.jpeg',
    },
    {
      icon: Sofa,
      title: 'Area Santai',
      description: 'Ruang Santai untuk bersosialisasi dan beraktivitas',
      image: '/ruang_santai.jpeg',
    },
    {
      icon: Trees,
      title: 'Taman',
      description: 'Taman hijau yang asri untuk relaksasi dan berjemur',
      image: '/taman.jpeg',
    },
    {
      icon: Wifi,
      title: 'Internet & TV',
      description: 'Akses WiFi dan TV kabel untuk hiburan',
      image: '/tv.jpeg',
    },
    {
      icon: Wifi,
      title: 'Dapur',
      description: 'Dapur lengkap untuk kebutuhan memasak sehari-hari',
      image: '/dapur.jpeg',
    },
  ];

  return (
    <section id="facilities" className="py-16 sm:py-20 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-bold text-teal-600 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Poppins, sans-serif' }}>
            Fasilitas Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Kami menyediakan fasilitas lengkap untuk kenyamanan para lansia
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <facility.icon className="text-white" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-800 mb-2 text-lg sm:text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {facility.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-teal-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}