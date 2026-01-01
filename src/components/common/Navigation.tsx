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
   <nav className="fixed top-0 left-0 right-0 z-50  h-[80px] flex items-center justify-center">
      <div className="w-full max-w-[95%]  lg:max-w-[90%] mx-auto flex justify-between items-center ">

        {/* Left: Logo Group */}
        <div className="flex gap-2 lg:gap-3  z-50">
          <Link href="/" >
            <Image
              src="/image/newlogo1.png"
              alt="Hamsey logo"
              width={100}
              height={30}
              priority
              className="object-contain"
            />
          </Link>
          <div className="w-[1px] h-12 bg-white"></div>
         <div className="flex-col  text-white text-left font-figtree">
          <p>from</p>
          <p>Glance to hello</p>
         </div>
        </div>

        
        <div className="hidden lg:flex items-center justify-center ">
          <div className=" backdrop-blur-lg rounded-lg  flex gap-8 h-[40px] w-[500px] xl:w-[550px] items-center justify-center px-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white font-medium text-[15px] transition-all hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      
        <div className="flex items-center gap-4 z-50">
          <Link
            href="/context-ai"
            className="hidden lg:inline-flex h-[40px] w-[120px] px-6 items-center justify-center gap-2
              rounded-lg backdrop-blur-lg xl:bg-[#3e3e3e]/40 
              text-white text-[14px] font-medium
              transition-all duration-300
              hover:bg-[#4e4e4e] hover:scale-105"
          >
            Context AI <BsStars className="text-white" />
          </Link>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-3xl text-white focus:outline-none p-1"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

      
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-[#1a1a1a]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center lg:hidden"
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
                      className="text-white font-medium text-3xl hover:text-[#D91C4B] transition-colors font-sans"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={itemVariants}
                  custom={navLinks.length}
                  initial="closed"
                  animate="open"
                >
                  <Link
                    href="/context-ai"
                    onClick={toggleMenu}
                    className="inline-flex h-[45px] px-8 items-center justify-center gap-2
                        rounded-full bg-[#3e3e3e] border border-white/10
                        text-white text-lg font-medium mt-4
                        transition-all duration-300"
                  >
                    Context AI <BsStars />
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
