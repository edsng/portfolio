import React, { useEffect, useState } from 'react';
import '../css/Home.css';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa'; // Added import for FaArrowDown
import Fynance from './Projects';

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
  hidden: { opacity: 0, y: 25 }, // Reduced y from 50 to 25
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

var isChrome = !!window.chrome;

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
          edw<br />sng
        </motion.h1>
        
        {isChrome && (
          <motion.h2
            className={`hero-subtext ${isChrome ? 'apply-text-shadow' : ''}`} // Existing hero-subtext
            variants={subtextVariants}
          >
            {'hi im Edward\ni code sometimes.'.split('').map((char, index) => (
              char === '\n' ? <br key={index} /> : (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              )
            ))}
          </motion.h2>
        )}

        {!isChrome && (
          <motion.h2
            className="hero-subtext-safari"
            variants={itemVariants} // Basic animation for Safari
          >
            hi im Edward<br />i code sometimes.
          </motion.h2>
        )}

        <motion.div
          className="down-arrow"
          variants={containerVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaArrowDown size={30} color="#ffffff" />
        </motion.div>
      </motion.div>

      <motion.div
        className="project-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Fynance />
      </motion.div>
    </div>
  );
};

export default Home;
