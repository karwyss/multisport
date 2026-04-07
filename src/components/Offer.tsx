import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowRight } from 'react-icons/fi';
import { offerData, contactData } from '../data/content';

export default function Offer() {
  const [selectedOffer, setSelectedOffer] = useState<typeof offerData[0] | null>(null);

  return (
    <section id="offer" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">Oferta</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Co oferujemy</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Wybierz idealne zajęcia dla siebie lub swojego dziecka
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerData.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl card-hover cursor-pointer group"
              onClick={() => setSelectedOffer(offer)}
            >
              <div className="text-4xl mb-4">{offer.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-500 transition-colors">
                {offer.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4">{offer.desc}</p>
              <div className="flex items-center gap-2 text-blue-500 font-medium text-sm">
                Dowiedz się więcej <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedOffer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setSelectedOffer(null)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedOffer(null)}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <FiX className="w-5 h-5 text-slate-500" />
              </button>
              <div className="text-5xl mb-4">{selectedOffer.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{selectedOffer.title}</h3>
              <p className="text-slate-600 mb-6">{selectedOffer.desc}</p>
              <ul className="space-y-3 mb-8">
                {selectedOffer.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${contactData.phone.replace(/\s/g, '')}`}
                className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-semibold transition-all"
                onClick={() => setSelectedOffer(null)}
              >
                Zapisz się teraz
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
