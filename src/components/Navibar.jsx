import React, { useState,useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../css/Navibar.css';
import icon from '../assets/icon.svg';
import { FaArrowRight, FaRegCircle } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { ResizeObserver } from '@juggle/resize-observer'; // If not supported, consider a polyfill

const NaviBar = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  const glowLineRef = useRef(null);
  
  const workRef = useRef(null);
  const infoRef = useRef(null);
  const socialsRef = useRef(null); // Added ref for the new link

  const [dropdownOpen, setDropdownOpen] = useState(false); // Added state for dropdown

  useEffect(() => {
    const updateGlowLine = () => {
      const currentPath = location.pathname;
      let activeLinkRef;

      if (currentPath === '/work' || currentPath === '/') {
        activeLinkRef = workRef;
      } else if (currentPath === '/info') {
        activeLinkRef = infoRef;
      }

      if (activeLinkRef && activeLinkRef.current && glowLineRef.current && containerRef.current) {
        const link = activeLinkRef.current;
        const container = containerRef.current;

        const linkRect = link.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const left = linkRect.left - containerRect.left + linkRect.width / 2;
        const width = 30; // Width of the glow line

        glowLineRef.current.style.left = `${left - width / 2}px`;
        glowLineRef.current.style.width = `${width}px`;
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateGlowLine);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updateGlowLine(); // Initial positioning

    return () => {
      resizeObserver.disconnect();
    };
  }, [location, dropdownOpen]);

   // Handle click outside to close dropdown
   useEffect(() => {
    const handleClickOutside = (event) => {
      if (socialsRef.current && !socialsRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navi-container">
        <img src={icon} alt="Logo" className="navi-icon" />
        <div className="navi-socials" ref={socialsRef}>
            <span 
                className="socials-link" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <AnimatePresence mode="wait">
                  {!dropdownOpen ? (
                    <motion.div
                      key="arrow"
                      initial={{ opacity: 0, rotate: -45 }}
                      animate={{ opacity: 1, rotate: -45 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight color="#ffffff" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="circle"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaRegCircle color="#ffffff" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="socials-glow"></div> {/* Moved below AnimatePresence */}
            </span>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.NavLink 
                    to="/profile" 
                    className="dropdown-item"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <a href="https://www.linkedin.com/in/edwsng" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </motion.NavLink>
                  <motion.NavLink 
                    to="/logout" 
                    className="dropdown-item"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <a href="https://docs.google.com/document/d/1IXSPeeWzdQOGPxRNA1LVZF2PR7a-5xvlymQfJBaZaFc/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Resume</a>
                  </motion.NavLink>
                  <motion.NavLink 
                    to="/logout" 
                    className="dropdown-item"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a href="https://github.com/edsng" target="_blank" rel="noopener noreferrer">Github</a>
                  </motion.NavLink>
                  <motion.NavLink 
                    to="/logout" 
                    className="dropdown-item"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <a href="https://www.instagram.com/rxdlne/" target="_blank" rel="noopener noreferrer">Insta</a>
                  </motion.NavLink>
                  <motion.NavLink 
                    to="/logout" 
                    className="dropdown-item"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <a href="https://x.com/rxdlne" target="_blank" rel="noopener noreferrer">X</a>
                  </motion.NavLink>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
        <div className="navi-button-container" ref={containerRef}>
            <NavLink 
                to="work" 
                className={({ isActive }) => isActive || location.pathname === '/' ? 'active' : ''}
                ref={workRef}
                >
                Work
            </NavLink>
            <NavLink 
                to="info" 
                className={({ isActive }) => isActive ? 'active' : ''}
                ref={infoRef}
                >
                Info
            </NavLink>
        <div className="glow-line" ref={glowLineRef}></div>
    </div>
    </div>
  );
};

export default NaviBar;
