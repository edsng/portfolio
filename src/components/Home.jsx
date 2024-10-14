import React, { useEffect, useRef } from 'react';
import '../css/Home.css';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa'; // Added import for FaArrowDown
import Fynance from './Projects';
import icon from '../assets/icon.svg'; // Added import for icon.svg

// Add the useScrollSnap hook
function useScrollSnap(ref) {
  useEffect(() => {
    if (!ref.current) return; // Add a check for ref.current

    const isDesktop = window.matchMedia("(min-width: 1200px)").matches;
    if (!isDesktop) return; // Do not apply scroll snap on mobile

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ref.current.querySelectorAll('.snap-container');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
}

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
  const scrollRef = useRef(null);
  useScrollSnap(scrollRef);

  return (
    <div className="home-container" ref={scrollRef}>
      <motion.div className="hero-section snap-container">
        <motion.div
          className="hero-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img 
            src={icon} 
            alt="Icon" 
            className="hero-image"
            variants={itemVariants}
          />
          
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
      </motion.div>
      <motion.div
        className="project-section snap-container"
      >
        <Fynance />
      </motion.div>
    </div>
  );
};

export default Home;
