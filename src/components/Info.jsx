import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaRegDotCircle, FaCircle} from 'react-icons/fa';
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
                className="intro-container snap-section"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                
                <motion.p className="about-me-text" variants={item} ><FaRegDotCircle className="about-me-icon" />about me</motion.p>
                <motion.div className="intro-box" variants={container}>
                    <motion.div className="intro-text" variants={item}>
                        <motion.h1 variants={item}>
                            The people who are crazy enough to think they can change the world <br /><span className="highlight">are the ones who do.</span>
                        </motion.h1>
                        <motion.p variants={item} style={{color: 'rgba(255, 255, 255, 0.6)'}}>Steve Jobs</motion.p>
                    </motion.div>
                    <motion.div className="general-info" variants={container}>
                        <motion.p className="general-info-text" variants={container} style={{paddingLeft: '15px'}}><FaRegDotCircle className="about-me-icon" />general info</motion.p>
                        <motion.div className="general-info-card" variants={container}>
                            <motion.p variants={item}>name: <span>Edward Song</span></motion.p>
                            <motion.p variants={item}>age: <span>22</span></motion.p>
                            <motion.p variants={item}>major: <span>Computer Science</span></motion.p>
                            <motion.p variants={item}>location: <span>Los Angeles, CA</span></motion.p>
                            <motion.p variants={item}>languages: </motion.p>
                            <motion.div className="languages" variants={item}>
                                <motion.p className="language" variants={item}><FaCircle className="language-dot"  /> <span>c++</span></motion.p>
                                <motion.p className="language" variants={item}><FaCircle className="language-dot"  /> <span>python</span></motion.p>
                                <motion.p className="language" variants={item}><FaCircle className="language-dot"  /> <span>javascript</span></motion.p>
                                <motion.p className="language" variants={item}><FaCircle className="language-dot"  /> <span>java</span></motion.p>
                                <motion.p className="language" variants={item}><FaCircle className="language-dot" /> <span>sql</span></motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div 
                className="info-container snap-section"
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2 variants={infoItem}>Experience</motion.h2>
            </motion.div>
        </div>
    );
}

export default Info;