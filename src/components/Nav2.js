import React, { useState, useEffect } from 'react';
import './nav.css';
import './events';
import { href } from 'react-router-dom';
export default function Nav2() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Team', href: 'team.js' },
    { label: 'Projects', href: 'projects.js' },
    { label: 'Publications', href: 'publications.js' },
    { label: 'Awards', href: 'publications.js' },
    { label: 'Events', href:'/events'},
    { label: 'Gallary', href: '/gallary' },
    { label: 'Contact Us', href: 'contacts.js' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button className={`navbar-toggler ${isMobile ? 'visible' : 'hidden'}`} onClick={toggleNavbar}>
          ☰
        </button>
      </div>

      <div className={`navbar-collapse ${isOpen ? 'open' : 'closed'}`}>
        <ul className={`navbar-list ${isMobile ? 'mobile' : 'desktop'}`}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className="navbar-item"
              onMouseEnter={() => !isMobile && item.dropdown && handleDropdown(index)}
              onMouseLeave={() => !isMobile && item.dropdown && handleDropdown(null)}
              onClick={() => isMobile && item.dropdown && handleDropdown(index)}
            >
              <a href={item.href} className="navbar-link">{item.label}</a>
              {item.dropdown &&
                ((activeDropdown === index) || (!isMobile && activeDropdown === index)) && (
                  <ul className="dropdown">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.href} className="dropdown-item">
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

