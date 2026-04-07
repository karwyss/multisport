import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck } from 'react-icons/fi';
import { popupData } from '../data/content';

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('multisport_popup_seen');
      if (!hasSeenPopup) {
        setIsVisible(true);
        localStorage.setItem('multisport_popup_seen', 'true');
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsVisible(false)}
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/20 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <FiX className="w-5 h-5 text-slate-500" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <span className="text-3xl">🎁</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {popupData.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {popupData.desc}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                  <input
                    type="email"
                    placeholder="Twój adres email"
                    required
                    className="w-full px-4 py-3 rounded-full border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-semibold transition-all neon-glow"
                  >
                    {popupData.cta}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 text-center py-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <FiCheck className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Dziękujemy!
                </h3>
                <p className="text-slate-600">
                  Twój kod rabatowy: <span className="font-bold text-blue-500">START5</span>
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
