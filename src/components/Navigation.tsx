import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed left-5 top-4 z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={ "/FinAIze_Logo.png" }
            alt="FinAIze Logo"
            className="w-24 rounded-full transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>

      <motion.nav
        className={cn(
          "fixed top-4 left-80 -translate-x-1/2 z-50 transition-all duration-300 max-w-fit rounded-full shadow-lg",
          isScrolled
            ? "bg-white/70 backdrop-blur-md border border-gray-200 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),_inset_-4px_-4px_8px_rgba(255,255,255,0.7)]"
            : "bg-gradient-to-r from-placify-green/20 via-placify-cyan/20 to-placify-blue/20 backdrop-blur-sm shadow-[4px_4px_8px_rgba(0,0,0,0.1),_-4px_-4px_8px_rgba(255,255,255,0.7)]"
        )}
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-all duration-300",
                isScrolled ? "text-gray-700 hover:text-placify-green" : "text-white"
              )}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className={cn(
                "text-sm font-medium transition-all duration-300",
                isScrolled ? "text-gray-700 hover:text-placify-cyan" : "text-white"
              )}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className={cn(
                "text-sm font-medium transition-all duration-300",
                isScrolled ? "text-gray-700 hover:text-placify-blue" : "text-white"
              )}
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("financebot")}
              className={cn(
                "text-sm font-medium transition-all duration-300",
                isScrolled
                  ? "text-gray-700 hover:text-placify-yellow-dark"
                  : "text-white"
              )}
            >
              FinanceBot
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={cn(
                "text-sm font-medium transition-all duration-300",
                isScrolled
                  ? "text-gray-700 hover:text-placify-yellow-dark"
                  : "text-white"
              )}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={cn(
                "text-sm font-medium transition-all duration-300",
                isScrolled
                  ? "text-gray-700 hover:text-placify-yellow-dark"
                  : "text-white"
              )}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={cn(
                "focus:outline-none p-2 rounded-full transition-all duration-300",
                isScrolled
                  ? "text-gray-700 bg-gray-100 shadow-[4px_4px_8px_rgba(0,0,0,0.1),_-4px_-4px_8px_rgba(255,255,255,0.7)]"
                  : "text-white bg-gray-800 shadow-[4px_4px_8px_rgba(0,0,0,0.2),_-4px_-4px_8px_rgba(255,255,255,0.1)]"
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            className={cn(
              "md:hidden flex flex-col space-y-2 px-4 py-3 bg-white/70 backdrop-blur-md border-t border-gray-200 rounded-b-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),_inset_-4px_-4px_8px_rgba(255,255,255,0.7)]"
            )}
          >
            <Link
              to="/"
              className="block text-sm font-medium text-gray-700 hover:text-placify-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => {
                scrollToSection("courses");
                setIsMenuOpen(false);
              }}
              className="block text-sm font-medium text-gray-700 hover:text-placify-cyan"
            >
              Courses
            </button>
            <button
              onClick={() => {
                scrollToSection("about");
                setIsMenuOpen(false);
              }}
              className="block text-sm font-medium text-gray-700 hover:text-placify-blue"
            >
              About Us
            </button>
            <button
              onClick={() => {
                scrollToSection("placement");
                setIsMenuOpen(false);
              }}
              className="block text-sm font-medium text-gray-700 hover:text-placify-yellow-dark"
            >
              Placement Support
            </button>
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}
              className="block text-sm font-medium text-gray-700 hover:text-placify-yellow-dark"
            >
              Contact Us
            </button>
          </div>
        )}
      </motion.nav>

      <motion.nav
        className={cn(
          "fixed top-4 right-20 -translate-x-1/2 z-50 transition-all duration-300 max-w-fit rounded-full shadow-lg",
          isScrolled
            ? "bg-white/70 backdrop-blur-md border border-gray-200 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),_inset_-4px_-4px_8px_rgba(255,255,255,0.7)]"
            : "bg-gradient-to-r from-placify-green/20 via-placify-cyan/20 to-placify-blue/20 backdrop-blur-sm shadow-[4px_4px_8px_rgba(0,0,0,0.1),_-4px_-4px_8px_rgba(255,255,255,0.7)]"
        )}
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <div className="flex items-center justify-between px-6 py-1.5">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium flex items-center justify-center transition-all duration-300",
                isScrolled ? "text-gray-700 hover:text-placify-green" : "text-white"
              )}
            >
              Welcome Back, User!
            </Link>
            <button
              onClick={() => scrollToSection("/")}
              className={cn(
                "h-8 w-8 flex items-center justify-center rounded-full border transition-all duration-300",
                isScrolled
                ? "border-gray-300 text-gray-700 hover:text-placify-cyan hover:border-placify-cyan"
                : "border-white text-white hover:text-placify-cyan hover:border-placify-cyan"
              )}
            >
            <User size={20} /> 
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={cn(
                "focus:outline-none p-2 rounded-full transition-all duration-300",
                isScrolled
                  ? "text-gray-700 bg-gray-100 shadow-[4px_4px_8px_rgba(0,0,0,0.1),_-4px_-4px_8px_rgba(255,255,255,0.7)]"
                  : "text-white bg-gray-800 shadow-[4px_4px_8px_rgba(0,0,0,0.2),_-4px_-4px_8px_rgba(255,255,255,0.1)]"
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            className={cn(
              "md:hidden flex flex-col space-y-2 px-4 py-3 bg-white/70 backdrop-blur-md border-t border-gray-200 rounded-b-lg shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),_inset_-4px_-4px_8px_rgba(255,255,255,0.7)]"
            )}
          >
            <Link
              to="/"
              className="block text-sm font-medium text-gray-700 hover:text-placify-green"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => {
                scrollToSection("courses");
                setIsMenuOpen(false);
              }}
              className="block text-sm font-medium text-gray-700 hover:text-placify-cyan"
            >
              Courses
            </button>
          </div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
