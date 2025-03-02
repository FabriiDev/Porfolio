import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center p-4 bg-navbar text-white shadow-lg">
      <div className="flex space-x-6">
        {['about', 'projects', 'contact'].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-lg hover:text-pink-500 transition-colors cursor-pointer"
          >
            <Link to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
