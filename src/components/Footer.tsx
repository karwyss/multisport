import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiInstagram } from 'react-icons/fi';
import { contactData } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-2xl font-bold text-white">
                <span className="text-blue-400">Multi</span>Sport
              </a>
              <p className="mt-4 text-slate-400 max-w-md">
                Lokalna szkółka pływacka w Wadowicach. Nauka pływania dla dzieci i dorosłych 
                w bezpiecznej i przyjaznej atmosferze.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <FiFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <FiInstagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-blue-400" />
                <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {contactData.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-blue-400" />
                <a href={`mailto:${contactData.email}`} className="hover:text-white transition-colors">
                  {contactData.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="w-5 h-5 text-blue-400" />
                <span>{contactData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FiClock className="w-5 h-5 text-blue-400" />
                <span>{contactData.hours}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Linki</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">O nas</a></li>
              <li><a href="#offer" className="hover:text-white transition-colors">Oferta</a></li>
              <li><a href="#camps" className="hover:text-white transition-colors">Obozy</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Opinie</a></li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MultiSport Wadowice. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
