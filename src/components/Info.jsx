import { motion } from 'framer-motion';
import { FaArrowRight, FaRegDotCircle, FaCircle } from 'react-icons/fa';
import '../css/Info.css';
import driversclub from '../assets/driversclub.png';
import rapidnetworks from '../assets/rapidnetworks.svg';
import nexg from '../assets/nexg.svg';


function Info() {

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
        <div className="info-page-container">
            <motion.div 
                className="intro-container snap-section"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className="about-me-container" variants={container}>
                    <motion.p className="about-me-text" variants={item}><FaRegDotCircle className="about-me-icon" />about me</motion.p>
                    <motion.div className="intro-box" variants={container}>
                        <motion.div className="intro-text" variants={item}>
                            <motion.h1 variants={item}>
                                The people who are crazy enough to think they can change the world<br /><span className="highlight">are the ones who do.</span>
                            </motion.h1>
                            <motion.p variants={item} style={{color: 'rgba(255, 255, 255, 0.6)'}}>Steve Jobs</motion.p>
                        </motion.div>
                        <motion.div className="general-info" variants={container}>
                            <motion.p className="general-info-text" variants={container} style={{paddingLeft: '15px'}}><FaRegDotCircle className="about-me-icon" />general info</motion.p>
                            <motion.div className="general-info-card" variants={container}>
                                <motion.p variants={item}>name: <span>Edward Song</span></motion.p>
                                <motion.p variants={item}>age: <span>22</span></motion.p>
                                <motion.p variants={item}>major: <span>Computer Science</span></motion.p>
                                <motion.p variants={item}>hobbies: <span>Cars, Photo</span></motion.p>
                                <motion.p variants={item}>location: <span>Los Angeles, CA</span></motion.p>
                                <motion.p variants={item}>languages: </motion.p>
                                <motion.div className="languages" variants={container}>
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
            </motion.div>
            <motion.div 
                className="experience-container snap-section"
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div className="experiences-wrapper" variants={fadeInVariant}>
                    <motion.h1 variants={infoItem}>Experience</motion.h1>
                    <motion.div className="experience-card" variants={fadeInVariant}>
                        <motion.div className="experience-logo" variants={fadeInVariant}>
                            <motion.img src={driversclub} className="driversclub" alt="Experience Logo" />
                        </motion.div>
                        <motion.div className="experience-text" variants={fadeInVariant}>
                            <motion.h2 variants={infoItem}>Full-Stack Designer</motion.h2>
                            <motion.h3 variants={infoItem}>Driver’s Club</motion.h3>
                            <motion.p variants={infoItem}>2024 - Los Angeles, CA</motion.p>
                        </motion.div>
                    </motion.div>
                    <motion.div className="experience-card" variants={fadeInVariant}>
                        <motion.div className="experience-text nexg" style={{textAlign: 'end'}} variants={fadeInVariant}>
                            <motion.h2 variants={infoItem}>Software Engineering Intern</motion.h2>
                            <motion.h3 variants={infoItem}>Rapid Networks</motion.h3>
                            <motion.p variants={infoItem}>2024 - Los Angeles, CA</motion.p>
                        </motion.div>
                        <motion.div className="experience-logo" variants={fadeInVariant}>
                            <motion.img src={rapidnetworks} className="shift-left" alt="Experience Logo" />
                        </motion.div>
                    </motion.div>
                    <motion.div className="experience-card" variants={fadeInVariant}>
                        <motion.div className="experience-logo" variants={fadeInVariant}>
                            <motion.img src={nexg} alt="Experience Logo" />
                        </motion.div>
                        <motion.div className="experience-text" variants={fadeInVariant}>
                            <motion.h2 variants={infoItem}>Technical Support Engineer</motion.h2>
                            <motion.h3 variants={infoItem}>Network Expert Group</motion.h3>
                            <motion.p variants={infoItem}>2020 - Los Angeles, CA</motion.p>
                        </motion.div>
                    </motion.div>
                    <motion.a href={"https://docs.google.com/document/d/1IXSPeeWzdQOGPxRNA1LVZF2PR7a-5xvlymQfJBaZaFc/edit?usp=sharing"} className="resume-button" variants={infoItem} target="_blank" rel="noopener noreferrer">resume <FaArrowRight style={{transform: 'rotate(-45deg)', paddingBottom: '2px'}}/></motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Info;