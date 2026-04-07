import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { ctaData, contactData } from '../data/content';

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {ctaData.title}
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            {ctaData.subtitle}
          </p>
          <motion.a
            href={`tel:${contactData.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all neon-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaData.cta}
            <FiArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-blue-500">✓</span> Bezpieczne zajęcia
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-blue-500">✓</span> Certyfikowani instruktorzy
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-blue-500">✓</span> Małe grupy
          </div>
        </motion.div>
      </div>
    </section>
  );
}
