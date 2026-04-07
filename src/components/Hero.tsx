import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { heroData, contactData } from '../data/content';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Nauka pływania dla każdego
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {heroData.headline}
              <span className="text-blue-500 block mt-2">w Wadowicach</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {heroData.subheadline}
            </p>

            <div className="flex justify-center lg:justify-start">
              <motion.a
                href={`tel:${contactData.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all neon-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {heroData.cta}
                <FiArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-500/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏊</div>
                    <div className="text-slate-600 font-medium">Bezpieczeństwo</div>
                    <div className="text-slate-400 text-sm">i radość z pływania</div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="text-3xl">⭐⭐⭐⭐⭐</div>
                <div className="text-sm text-slate-600 font-medium">100+ zadowolonych</div>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="text-2xl font-bold text-blue-500">5+</div>
                <div className="text-sm text-slate-600">lat doświadczenia</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: '500+', label: 'Uczestników' },
            { value: '5+', label: 'Lat doświadczenia' },
            { value: '100%', label: 'Bezpieczeństwa' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm">
              <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-slate-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
