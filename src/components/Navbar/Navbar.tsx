import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const clickOutsidePanel = (event: MouseEvent) => {
        if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', clickOutsidePanel);
        return () => {
            document.removeEventListener('mousedown', clickOutsidePanel);
        };
    }, []);

    return (
        <nav className="navbar">
            
            <button className="navbar-toggle" onClick={toggleMenu}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3 6H21M3 12H21M3 18H21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <div className="navbar-brand">v0.1.0</div>

            <div ref={panelRef} className={`navbar-panel ${isOpen ? 'open' : ''}`}>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <br />
                <br />
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                
                
            </div>
        </nav>
    );
};

export default Navbar;