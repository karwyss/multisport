import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { reviewsData } from '../data/content';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">Opinie</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Co mówią rodzice</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Zobacz opinie osób, które zaufały naszej szkółce pływackiej
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviewsData[currentIndex].rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
                  "{reviewsData[currentIndex].content}"
                </p>
                <div className="text-center">
                  <div className="font-semibold text-slate-900 text-lg">{reviewsData[currentIndex].name}</div>
                  <div className="text-blue-500 text-sm">{reviewsData[currentIndex].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
          >
            <FiChevronLeft className="w-6 h-6 text-slate-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
          >
            <FiChevronRight className="w-6 h-6 text-slate-700" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviewsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'w-8 bg-blue-500' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
