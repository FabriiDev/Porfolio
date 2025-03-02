import { motion } from "framer-motion";

export default function Navbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex justify-center items-center p-4 bg-navbar text-white shadow-lg absolute top-0 w-full z-50 mb-50">
      <div className="flex space-x-6">
        {["about", "projects", "contact"].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-lg hover:text-pink-500 transition-colors cursor-pointer"
            onClick={() => handleScroll(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
