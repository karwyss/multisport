import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiImage } from 'react-icons/fi';
import { Lightbox } from './Lightbox';
import { contactData } from '../data/content';

const campImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=1200&q=80',
  'https://images.unsplash.com/photo-1483664852095-d6cc6870705d?w=1200&q=80',
  'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1200&q=80',
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
  'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=1200&q=80',
  'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=1200&q=80',
  'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=1200&q=80',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80',
  'https://images.unsplash.com/photo-1530541930197-ff16ac917b0c?w=1200&q=80',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80',
  'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1200&q=80',
  'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=1200&q=80',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
  'https://images.unsplash.com/photo-1519315901367-f34f9150c8e9?w=1200&q=80',
  'https://images.unsplash.com/photo-1534433134353-9d2f9c7feea1?w=1200&q=80',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
];

const camps = [
  {
    id: 1,
    title: 'Obóz letni',
    subtitle: 'Nad jeziorem',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    gradient: 'from-amber-400 to-orange-500',
    badge: 'Lipiec - Sierpień',
    features: ['Nauka pływania', 'Sporty wodne', 'Pełne wyżywienie', 'Opieka 24/7'],
  },
  {
    id: 2,
    title: 'Obóz zimowy',
    subtitle: 'W górach',
    image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870705d?w=800&q=80',
    gradient: 'from-blue-400 to-cyan-500',
    badge: 'Styczeń - Luty',
    features: ['Basen kryty', 'Nauka pływania', 'Zajęcia sportowe', 'Integracja'],
  },
  {
    id: 3,
    title: 'Obóz sportowy',
    subtitle: 'Aqua Park',
    image: 'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=800&q=80',
    gradient: 'from-purple-400 to-indigo-500',
    badge: 'Wakacje',
    features: ['Baseny', 'Aqua aerobik', 'Zawody', 'Nagrody'],
  },
];

export default function CampsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="/"
              className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
              <span className="text-2xl font-bold">
                <span className="text-cyan-400">Multi</span>Sport
              </span>
            </a>
            <a
              href={`tel:${contactData.phone.replace(/\s/g, '')}`}
              className="bg-cyan-400 hover:bg-cyan-300 text-blue-900 px-5 py-2.5 rounded-full font-medium transition-all"
            >
              Zapisz się
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">Sport i przygoda</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2">
              Obozy sportowe
            </h1>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
              Sprawdź nasze propozycje obozów sportowych na lato i zimę
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {camps.map((camp, i) => (
              <motion.div
                key={camp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(i * 7)}
              >
                <img
                  src={camp.image}
                  alt={camp.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${camp.gradient}`}>
                    {camp.badge}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium text-white bg-white/20 backdrop-blur-sm">
                    <FiImage className="w-3 h-3 mr-1" />
                    Zdjęcia
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{camp.title}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{camp.subtitle}</p>
                  
                  <ul className="space-y-1 mb-6">
                    {camp.features.slice(0, 2).map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-white font-medium group-hover:text-cyan-400 transition-colors">
                    <span>Rezerwuj miejsce</span>
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} MultiSport Wadowice. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>

      <Lightbox
        images={campImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </div>
  );
}
