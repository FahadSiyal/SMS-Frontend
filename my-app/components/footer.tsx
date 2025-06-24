"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp, Heart } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Documentation", href: "#docs" },
    { name: "API Reference", href: "#api" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Press Kit", href: "#press" },
  ],
  resources: [
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Status", href: "#status" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
  ],
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#github" },
  { name: "Twitter", icon: Twitter, href: "#twitter" },
  { name: "LinkedIn", icon: Linkedin, href: "#linkedin" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className=" bg-black relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border-t border-white/10">
      {/* Background Animation */}
      {/* Vercel-style Animated Background - Matching Navbar */}
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
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
              <stop offset="25%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.3)" />
              <stop offset="75%" stopColor="rgba(245, 158, 11, 0.3)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.3)" />
            </linearGradient>
          </defs>

          {/* Animated flowing lines */}
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.line
              key={i}
              x1={i * 48}
              y1="0"
              x2={i * 48 + 150}
              y2="400"
              stroke="url(#footerGradient1)"
              strokeWidth="0.5"
              opacity="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.4, 0],
                x1: [i * 48, i * 48 + 30, i * 48],
                x2: [i * 48 + 150, i * 48 + 180, i * 48 + 150],
              }}
              transition={{
                duration: 6 + i * 0.15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.08,
              }}
            />
          ))}
        </svg>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 400,
              opacity: 0,
            }}
            animate={{
              x: [Math.random() * 1200, Math.random() * 1200, Math.random() * 1200],
              y: [Math.random() * 400, Math.random() * 400, Math.random() * 400],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
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
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.h3
                className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4"
                whileHover={{ scale: 1.02 }}
              >
                SMS
              </motion.h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Building the future of web development with cutting-edge tools and innovative solutions. Join thousands
                of developers who trust our platform.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div
                  className="flex items-center text-white/60 hover:text-white/80 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">aarijhere10@gmail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center text-white/60 hover:text-white/80 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="text-sm">+92 XX XXXX XXXX</span>
                </motion.div>
                <motion.div
                  className="flex items-center text-white/60 hover:text-white/80 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <MapPin className="w-4 h-4 mr-3" />
                  <span className="text-sm">Bahudarabad, Pakistan</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Product Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 4 }}>
                    <a href={link.href} className="text-white/60 hover:text-white/80 transition-colors text-sm">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 4 }}>
                    <a href={link.href} className="text-white/60 hover:text-white/80 transition-colors text-sm">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 4 }}>
                    <a href={link.href} className="text-white/60 hover:text-white/80 transition-colors text-sm">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 4 }}>
                    <a href={link.href} className="text-white/60 hover:text-white/80 transition-colors text-sm">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
                <p className="text-white/70 text-sm">Get the latest updates and news delivered to your inbox.</p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <motion.button
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10"
          >
            {/* Copyright */}
            <div className="flex items-center text-white/60 text-sm mb-4 md:mb-0">
              <span>© 2024 SMS. Made by</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                className="mx-1"
              >
                {/* <Heart className="w-4 h-4 text-red-400 fill-current" /> */}
              </motion.div>
              <span>Aarij & Fahad</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}
