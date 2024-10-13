import React from 'react';
import '../css/Projects.css';
import { motion } from 'framer-motion';

// Consolidate variants for better readability and sequential animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      delay: 0.2,
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

const Projects = () => {
  return (
    <div className="projects-container">
      <motion.div
        className="intro-text"
        variants={containerVariants}
        initial="hidden"
        // Changed 'animate' to 'whileInView' to trigger animation when in view
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 variants={itemVariants}>korean american<br /></motion.h1>
        <motion.h2 variants={itemVariants}>software engineer based in los angeles</motion.h2>
        <motion.p variants={itemVariants}>Computer Science @ University of California, Riverside</motion.p>
      </motion.div>
    </div>
  );
};

export default Projects;
