import { motion } from 'framer-motion';
import { galleryImages } from '../data/content';

const placeholders = [
  '🏊 Dzieci uczą się pływać',
  '👨‍🏫 Instruktorzy z doświadczeniem',
  '🏊 Nowoczesny basen',
  '🎉 Zabawa na zajęciach',
  '🏆 Zawody pływackie',
  '🌞 Obóz letni - woda',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">Galeria</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Zajęcia i obozy</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Zobacz jak wyglądają nasze zajęcia i obozy sportowe
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
                <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {placeholders[i]?.split(' ')[0] || '🏊'}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-4xl">🔍</span>
                </div>
                <div className="w-full p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-medium">{placeholders[i]?.slice(2) || image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
