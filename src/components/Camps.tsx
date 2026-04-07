import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight, FiSun, FiCloudSnow, FiCheck } from 'react-icons/fi';
import { campsData } from '../data/content';

export default function Camps() {
  return (
    <section id="camps" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">Sport i zabawa</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
            {campsData.title}
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            {campsData.desc}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-2xl z-0" />
            <div className="relative bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl p-8 shadow-xl aspect-[4/3] flex flex-col justify-center items-center">
              <div className="text-8xl mb-4">🏕️</div>
              <div className="text-white font-semibold text-2xl text-center">Obozy sportowe</div>
              <div className="text-blue-100 text-center">Lato i zima w MultiSport</div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-blue-500">100%</div>
                <div className="text-sm text-slate-600">bezpieczeństwa</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {campsData.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl"
              >
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <FiSun className="w-8 h-8 text-orange-500" />
              <h3 className="text-xl font-bold text-slate-900">Obozy letnie</h3>
            </div>
            <ul className="space-y-2 mb-6">
              {['Nad jeziorem', 'Nauka pływania', 'Sporty wodne', 'Pełne wyżywienie'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                  <FiCheck className="w-4 h-4 text-green-500" /> {item}
                </li>
              ))}
            </ul>
            <span className="text-orange-600 text-sm font-medium">lipiec - sierpień</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 border border-blue-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <FiCloudSnow className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-bold text-slate-900">Obozy zimowe</h3>
            </div>
            <ul className="space-y-2 mb-6">
              {['W górach', 'Basen kryty', 'Nauka pływania', 'Zajęcia sportowe'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                  <FiCheck className="w-4 h-4 text-green-500" /> {item}
                </li>
              ))}
            </ul>
            <span className="text-blue-600 text-sm font-medium">styczeń - luty</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.a
            href="#/obozy"
            className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all neon-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiCalendar className="w-5 h-5" />
            {campsData.cta}
            <FiArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
