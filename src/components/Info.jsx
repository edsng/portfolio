import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaLock, FaRobot, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import '../css/Info.css';

function useScrollSnap(ref) {
  useEffect(() => {
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

    const sections = ref.current.querySelectorAll('.snap-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [ref]);
}

function Info() {
    const scrollRef = useRef(null);
    useScrollSnap(scrollRef);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3,
                duration: 1.5
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.2 }
        }
    };

    const infoItem = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8 }
        }
    };

    const fadeInVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.2 }
        }
    };

    return (
        <div className="info-page-container" ref={scrollRef}>
            <motion.div 
                className="info-container snap-section"
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2 variants={infoItem}>
                    Building projects that help <span className="highlight">real people</span>
                </motion.h2>
            </motion.div>
        </div>
    );
}

export default Info;