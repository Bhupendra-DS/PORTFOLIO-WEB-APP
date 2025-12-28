import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-64 h-64 md:w-80 md:h-80"
      >
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="w-full h-full rounded-full object-cover shadow-lg"
        />
      </motion.div>
    </div>
  );
}

