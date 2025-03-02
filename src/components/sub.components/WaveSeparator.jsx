import { motion } from "framer-motion";

const WaveSeparator = () => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-20 mt-11"
        >
            <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    fill="url(#gradient)"
                    d="M0,320L60,293.3C120,267,240,213,360,192C480,171,600,181,720,186.7C840,192,960,192,1080,186.7C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#A855F7", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );
};

export default WaveSeparator;
