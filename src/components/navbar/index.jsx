'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/../public/logo.svg';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState('#'); // Track active section

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const handleLinkClick = (section) => {
        setCurrentSection(section);
        setIsMobileMenuOpen(false);
    };

    const isScrolledStyles = isScrolled
        ? 'bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)]'
        : 'bg-white';

    const links = [
        { href: '#', label: 'Info' },
        { href: '#about', label: 'About' },
        { href: '#speakers', label: 'Speakers' },
        { href: '#schedule', label: 'Schedule' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Contact' },
    ];

    const getLinkClass = (href) => {
        const base = 'transition-colors duration-200 relative';
        return currentSection === href
            ? `${base} text-black` // Active link
            : `${base} text-[#0A2144]/50 hover:text-black`;
    };

    return (
        <nav className="fixed top-0 left-0 w-full md:h-[6rem] z-[1000] p-4 flex items-center justify-center">
            <div
                className={`relative w-full px-4 py-2 md:p-0 flex items-center justify-between
                transition-all duration-300 ease-in-out ${isScrolledStyles} ${isMobileMenuOpen ? '!bg-white !shadow-none rounded-t-2xl md:rounded-t-3xl' : 'rounded-2xl md:rounded-t-3xl'}`}
            >
                {/* Mobile Logo */}
                <Link
                    href="/"
                    aria-label="logo"
                    onClick={() => handleLinkClick('#')}
                    className="block md:hidden w-16 z-40"
                >
                    <Image
                        src={logoImage}
                        alt="logo"
                        width={500}
                        height={500}
                        className="w-full h-full object-contain"
                    />
                </Link>

                {/* Hamburger */}
                <div
                    className="cursor-pointer block md:hidden z-50"
                    onClick={handleMobileMenuToggle}
                >
                    <div
                        className={`w-[25px] h-[3px] ${isScrolled || isMobileMenuOpen ? 'bg-black' : 'bg-green-900'
                            } rounded-full my-1 transition-transform duration-400 ${isMobileMenuOpen ? 'rotate-[-45deg] translate-y-[9px]' : ''
                            }`}
                    />
                    <div
                        className={`w-[25px] h-[3px] ${isScrolled || isMobileMenuOpen ? 'bg-black' : 'bg-green-900'
                            } rounded-full my-1 transition-opacity duration-400 ${isMobileMenuOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <div
                        className={`w-[25px] h-[3px] ${isScrolled || isMobileMenuOpen ? 'bg-black' : 'bg-green-900'
                            } rounded-full my-1 transition-transform duration-400 ${isMobileMenuOpen ? 'rotate-[45deg] -translate-y-[9px]' : ''
                            }`}
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center justify-between w-full transition-all duration-300 ease-in-out text-sm font-semibold">
                    <Link
                        href="/"
                        aria-label="logo"
                        onClick={() => handleLinkClick('#')}
                        className="block w-18"
                    >
                        <Image
                            src={logoImage}
                            alt="logo"
                            width={800}
                            height={800}
                            className="w-full h-full object-contain"
                        />
                    </Link>

                    <div className="flex flex-row items-center gap-6 relative">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className={getLinkClass(link.href)}
                            >
                                {link.label}
                                {currentSection === link.href && (
                                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#D1462E] rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="#contact"
                        onClick={() => handleLinkClick('#contact')}
                        className="px-6 py-2 rounded-full bg-[#E7E17E] hover:bg-[#E7E17E]/80 transition-colors duration-200"
                    >
                        Register
                    </Link>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-xl p-5 flex flex-col gap-6 text-sm font-semibold z-40">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className={currentSection === link.href ? 'text-black' : 'text-[#0A2144]/50'}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => handleLinkClick('#contact')}
                            className="px-6 py-3 rounded-full text-center bg-[#E7E17E] text-black"
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
