import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/icon.svg'; // Import your logo
import '../css/LandingPage.css';
import icon from '../assets/icon.svg'; // Added import for icon.svg


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

function LandingPage() {
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

    const projectsItem = {
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


    return (
        <div className="landing-page-container" ref={scrollRef}>
            <motion.div 
                className="welcome-container snap-section"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="welcome-box">
                    <motion.img 
                    src={icon} 
                    alt="Icon" 
                    className="hero-image"
                        variants={item}
                        />
                    
                    <motion.h2
                        className={"hero-text"} // Existing hero-subtext
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
                </motion.div>
            </motion.div>

            <motion.div 
                className="projects-container snap-section"
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="projects-text"> 
                    <motion.h1 variants={projectsItem}>korean american</motion.h1>
                    <motion.h2 variants={projectsItem}>software engineer based in los angeles</motion.h2>
                    <motion.p variants={projectsItem}>Computer Science @ University of California, Riverside</motion.p>
                </div>

                <div className="projects-grid">
                    <motion.a className="projects-card" variants={projectsItem} href="https://github.com/edsng/Bitcoin-Price-Forecasting-using-Machine-Learning-Models" target="_blank" rel="noopener noreferrer">
                        <h3>Quant</h3>
                        <p>Various quantitative finance projects</p>
                        <FaArrowRight className="projects-icon" />
                    </motion.a>
                    <motion.a className="projects-card" variants={projectsItem} href="https://edsng.github.io/fynance" target="_blank" rel="noopener noreferrer">
                        <h3>Fynance</h3>
                        <p>AI-powered financial planning</p>
                        <FaArrowRight className="projects-icon" />
                    </motion.a>
                    <motion.a className="projects-card" variants={projectsItem} href="https://github.com/edsng/Carpics" target="_blank" rel="noopener noreferrer">
                        <h3>Carpics</h3>
                        <p>Client matching web app for car enthusiasts</p>
                        <FaArrowRight className="projects-icon" />
                    </motion.a>
                </div>
            </motion.div>

            <motion.div 
                className="creator-container snap-section"
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className="creator-logo" variants={item}>
                    <img src={logo} alt="Logo" />
                </motion.div>
                <motion.div className="creator-links" variants={item}>
                    <a href="https://github.com/edsng" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="creator-icon" />
                    </a>
                    <a href="https://linkedin.com/in/edwsng" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="creator-icon" />
                    </a>
                    <a href="https://x.com/rxdlne" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="creator-icon" />
                    </a>
                </motion.div>
                <motion.p className="creator-text" variants={item}>
                    &copy; {new Date().getFullYear()} edwsng
                </motion.p>
            </motion.div>
        </div>
    );
}

export default LandingPage;