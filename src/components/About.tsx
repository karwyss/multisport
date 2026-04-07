import { motion } from 'framer-motion';
import { FiAward, FiShield, FiHeart } from 'react-icons/fi';
import { aboutData } from '../data/content';

const icons = [FiAward, FiShield, FiHeart];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">O nas</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">{aboutData.title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-2xl" />
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl p-8 shadow-xl">
                <div className="text-7xl mb-4">🏊‍♂️</div>
                <div className="text-white font-semibold text-lg">MultiSport Wadowice</div>
                <div className="text-blue-100 text-sm">Nauka pływania z pasją</div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-bold text-blue-500">5+</div>
                  <div className="text-sm text-slate-600">
                    Lat<br />doświadczenia
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {aboutData.content}
            </p>

            <div className="space-y-4">
              {aboutData.features.map((feature, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                      <p className="text-slate-600 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {['👦', '👧', '👨', '👩'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-xl border-2 border-white">
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-slate-900">Dołącz do nas!</div>
                <div className="text-sm text-slate-500">Zapisz się już dziś</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
