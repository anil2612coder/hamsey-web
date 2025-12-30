"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { motion, AnimatePresence, Variants } from "motion/react";

type Props = { theme?: "dark" | "light" };

const Navigation: React.FC<Props> = ({ theme = "dark" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "mission", href: "/mission" },
    { name: "hotspots", href: "/hotspots" },
    { name: "about us", href: "/about" },
    { name: "safety", href: "/safety" },
    { name: "support", href: "/support" },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF6DD] border-b border-[#000000] h-[80px] flex items-center justify-center">
      <div className="w-full max-w-[95%] mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <Link href="/">
            <Image
              src="/image/newlogo.png"
              alt="Hamsey logo"
              width={100}
              height={20}
              priority
              className="object-contain"
            />
          </Link>
        </div>


        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black font-medium text-lg hover:text-[#D91C4B] transition-colors font-sans"
            >
              {link.name}
            </Link>
          ))}
        </div>


        <div className="hidden lg:block">
          <Link href="/context-ai">
            <button className="flex items-center gap-2 border-2 border-[#D91C4B] text-[#D91C4B] bg-[#FFDBDB] rounded-full font-semibold hover:bg-[#D91C4B] hover:text-white transition-all duration-300 p-4">
              context AI <BsStars className="text-lg" />
            </button>
          </Link>
        </div>


        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl text-black z-50 focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>


        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-[#FFF6DD] z-40 flex flex-col justify-center items-center lg:hidden"
            >
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-black font-medium text-2xl hover:text-[#D91C4B] transition-colors font-sans"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  custom={navLinks.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                >
                  <Link
                    href="/context-ai"
                    onClick={toggleMenu}
                    className="flex items-center gap-2 border-2 border-[#D91C4B] text-[#D91C4B] px-8 py-3 rounded-full font-bold text-xl bg-[#FFDBDB] hover:bg-[#D91C4B] hover:text-white transition-all duration-300 mt-4"
                  >
                    context AI <BsStars className="text-xl" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
