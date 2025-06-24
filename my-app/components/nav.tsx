"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Service", href: "#service" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 shadow-lg overflow-hidden"
      style={{
        background: "rgba(0, 0, 0, 0.8)",
      }}
    >
      {/* Vercel-style Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(168, 85, 247, 0.1) 0%, rgba(59, 130, 246, 0.1) 25%, rgba(16, 185, 129, 0.1) 50%, rgba(245, 158, 11, 0.1) 75%, rgba(239, 68, 68, 0.1) 100%)",
              "linear-gradient(45deg, rgba(239, 68, 68, 0.1) 0%, rgba(168, 85, 247, 0.1) 25%, rgba(59, 130, 246, 0.1) 50%, rgba(16, 185, 129, 0.1) 75%, rgba(245, 158, 11, 0.1) 100%)",
              "linear-gradient(45deg, rgba(245, 158, 11, 0.1) 0%, rgba(239, 68, 68, 0.1) 25%, rgba(168, 85, 247, 0.1) 50%, rgba(59, 130, 246, 0.1) 75%, rgba(16, 185, 129, 0.1) 100%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Animated Mesh Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
              <stop offset="25%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.3)" />
              <stop offset="75%" stopColor="rgba(245, 158, 11, 0.3)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.3)" />
            </linearGradient>
          </defs>

          {/* Animated flowing lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.line
              key={i}
              x1={i * 60}
              y1="0"
              x2={i * 60 + 200}
              y2="100"
              stroke="url(#gradient1)"
              strokeWidth="0.5"
              opacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0],
                x1: [i * 60, i * 60 + 50, i * 60],
                x2: [i * 60 + 200, i * 60 + 250, i * 60 + 200],
              }}
              transition={{
                duration: 4 + i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}
        </svg>

        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 100,
              opacity: 0,
            }}
            animate={{
              x: [Math.random() * 1200, Math.random() * 1200, Math.random() * 1200],
              y: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Radial Gradient Overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent cursor-pointer"
            >
              SMS
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative group"
                >
                  <motion.a
                    href={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 relative overflow-hidden block ${
                      activeItem === item.name ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span className="relative z-10" whileHover={{ y: -0.5 }} transition={{ duration: 0.2 }}>
                      {item.name}
                    </motion.span>

                    {/* Vercel-style hover background animation */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%)",
                      }}
                      initial={{ x: "-100%", opacity: 0 }}
                      whileHover={{
                        x: "0%",
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        },
                      }}
                    />

                    {/* Subtle glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{
                        opacity: 1,
                        scale: 1,
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                        transition: { duration: 0.3 },
                      }}
                    />

                    {/* Active state indicator */}
                    {activeItem === item.name && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Bottom border animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileHover={{
                        scaleX: 1,
                        opacity: 1,
                        transition: { duration: 0.3, delay: 0.1 },
                      }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm shadow-lg">
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="relative overflow-hidden"
                >
                  <motion.a
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.name)
                      setIsOpen(false)
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 relative ${
                      activeItem === item.name ? "text-white bg-white/20" : "text-white/80 hover:text-white"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Mobile hover background */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-md"
                      initial={{ x: "-100%", opacity: 0 }}
                      whileHover={{
                        x: "0%",
                        opacity: 1,
                        transition: { duration: 0.25 },
                      }}
                    />
                    <span className="relative z-10">{item.name}</span>
                  </motion.a>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-4 pb-2"
              >
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
