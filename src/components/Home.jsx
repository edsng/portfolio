import React from 'react';
import '../css/Home.css';
import { motion } from 'framer-motion';

// Consolidate variants for better readability and sequential animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.7,
      delayChildren: 1,
      staggerChildren: 0.3, // Adjusted stagger for smoother sequence
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 }, 
  visible: { opacity: 1, y: 0 },
};

const subtextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <div className="home-container">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="hero-text"
          variants={itemVariants}
        >
          Hello <br />World
        </motion.h1>
        <motion.h2
          className="hero-subtext"
          variants={subtextVariants}
        >
          {'my name is edward\ni build cool things.'.split('').map((char, index) => (
            char === '\n' ? <br key={index} /> : (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            )
          ))}
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Home;
