import { motion } from 'motion/react';
import { 
  Bed, Utensils, Sofa, Trees, Wifi, 
  Stethoscope, HeartPulse, Clock, MapPin, ShieldCheck 
} from 'lucide-react';
import { useInView } from './hooks/useInView';

export function FacilitiesSection() {
  const [ref, isInView] = useInView();

  const facilities = [
    {
      icon: Bed,
      title: 'Kamar Tidur AC',
      description: 'Pilihan 2, 3, atau 4 bed dengan desain khusus kenyamanan lansia.',
      image: '/kamar_tidur.jpg',
    },
    {
      icon: Stethoscope,
      title: 'Layanan Medis 24 Jam',
      description: 'Nurse standby 24 jam, tenaga terlatih SHS 1, dan visit dokter rutin.',
      image: '/stand.jpg', 
    },
    {
      icon: Utensils,
      title: 'Nutrisi & Gizi',
      description: 'Makan 3x sehari dengan gizi seimbang serta snack sore setiap hari.',
      image: '/ruang_makan.jpeg',
    },
    {
      icon: Trees,
      title: 'Area Terbuka Hijau',
      description: 'Halaman luas 1.300m² untuk olahraga, berjemur, dan akses kursi roda.',
      image: '/taman.jpeg',
    },
    {
      icon: HeartPulse,
      title: 'Perawatan Harian',
      description: 'Bantuan aktivitas harian, mandi air hangat, dan layanan psikolog.',
      image: '/mandi.jpeg',
    },
        {
      icon: Sofa,
      title: 'Ruang Bersantai',
      description: 'Ruang keluarga nyaman untuk berkumpul dan bersosialisasi.',
      image: '/ruang_santai.jpeg', 
    },
    {
      icon: Wifi,
      title: 'Hiburan',
      description: 'Tv Kabel untuk hiburan dan koneksi internet cepat di seluruh area.',
      image: '/tv.jpeg', 
    },
    {
      icon: MapPin,
      title: 'Lokasi Strategis',
      description: 'Dekat dan bekerjasama dengan RS mitra Husada (2km).',
      image: '/rs.jpg', 
    },
  ];

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm">Kenyamanan Utama</span>
          <h2 className="font-bold text-gray-800 mt-2 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontFamily: 'Poppins, sans-serif' }}>
            Fasilitas & Layanan 
          </h2>
          <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Kami menyediakan hunian nyaman khusus lansia di atas lahan <span className="font-bold text-teal-700">1.300m²</span> dengan bangunan modern, asri, dan sistem keamanan 24 jam.
          </p>
          
          {/* Quick Access Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
             <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-teal-100">
                <ShieldCheck className="text-teal-500 mr-2" size={18} />
                <span className="text-sm font-medium text-gray-700">Akses Cepat Tol PIK 2</span>
             </div>
             <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-teal-100">
                <Clock className="text-teal-500 mr-2" size={18} />
                <span className="text-sm font-medium text-gray-700">Layanan Medis 24/7</span>
             </div>
          </div>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white shadow-lg">
                    <facility.icon size={20} />
                  </div>
                  <h3 className="text-white font-bold text-lg drop-shadow-md">
                    {facility.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Access Highlight Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="mt-16 p-8 bg-teal-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-4 rounded-2xl">
              <MapPin size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold">Lokasi Sangat Strategis</h4>
              <p className="opacity-90">Akses Paling Cepat & Efisien melalui Tol PIK 2 (Keluar Salembaran/Kosambi)</p>
            </div>
          </div>
          <div className="bg-white text-teal-700 px-6 py-3 rounded-xl font-bold whitespace-nowrap">
            Segera Tol Teluknaga (500m).
          </div>
        </motion.div>
      </div>
    </section>
  );
}