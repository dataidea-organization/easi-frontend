'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Stats from '@/components/Stats';
import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';

// Animation variants for consistent animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
        <Image
            src="/images/statistics-hero.jpg"
            alt="Statistics and data analysis background" 
            fill
            className="object-cover"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-easi-orange/20 blur-3xl"
            animate={{ 
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0 text-white"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className={`${typography.h1} mb-8`}
                variants={fadeInUp}
              >
                Excellence in Statistical <span className="text-white">Research & Training</span>
              </motion.h1>
              <motion.p 
                className="text-xl mb-10 text-white/90"
                variants={fadeInUp}
              >
                The East African Statistics Institute (EASI) provides comprehensive research in statistical methodology and high-quality training to enhance the quality of national statistics.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-6"
                variants={fadeInUp}
              >
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="bg-easi-orange/20 text-easi-orange border-easi-orange hover:bg-easi-orange/30 px-8 py-3"
                >
                  <Link href="/training">
                    Our Programs
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white/80 text-white bg-white/20 hover:bg-white/30 px-8 py-3"
                >
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-white/30"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-white/30"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                ></motion.div>
                
                {/* Card with stats */}
                <motion.div 
                  className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-md"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8">
                    <h3 className={`${typography.h3} text-easi-dark mb-6`}>
                      Our Impact
                    </h3>
                    <div className="space-y-6">
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-easi-orange text-4xl font-bold mr-4">15+</div>
                        <div className="text-gray-600">Years of Experience</div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-easi-orange text-4xl font-bold mr-4">1000+</div>
                        <div className="text-gray-600">Trained Professionals</div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-easi-orange text-4xl font-bold mr-4">50+</div>
                        <div className="text-gray-600">Research Projects</div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="bg-easi-orange/20 p-4 text-center">
                    <Button
                      variant="outline"
                      asChild
                      className="text-easi-orange border-easi-orange hover:bg-easi-orange/10 bg-transparent"
                    >
                      <Link href="/about">
                        Discover Our Story →
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <Services />
      </motion.div>

      {/* Stats Section with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <Stats />
      </motion.div>

      {/* Monthly Webinar Series Teaser */}
      <section className="py-24 bg-gradient-to-br from-easi-dark via-easi-dark to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <motion.div className="lg:w-1/2" variants={fadeInUp}>
              <div className="inline-block bg-easi-orange/20 border border-easi-orange text-easi-orange px-4 py-2 rounded-full text-sm font-medium mb-6">
                Monthly Webinar Series
              </div>
              <h2 className={`${typography.h2} mb-6`}>
                Skilling Africa for the AI Era
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join our monthly webinar series exploring how AI is transforming survey methodologies, 
                data validation techniques, and statistical analysis across Africa. Perfect for survey 
                methodologists, statisticians, data scientists, and policy analysts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="bg-easi-orange/20 text-easi-orange border-easi-orange hover:bg-easi-orange/30 px-6 py-3"
                >
                  <Link href="/webinars/">
                    View All Webinars
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div className="lg:w-1/2" variants={fadeInUp}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-easi-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    Next Webinar
                  </span>
                  <span className="text-gray-400 text-sm">Webinar 3</span>
                </div>
                <h3 className={`${typography.h3} text-white mb-4`}>
                  Geospatial and Remote Sensing for Real-Time Data Collection
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-easi-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>April 24, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-easi-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>12:00 PM UTC</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-easi-orange/20 text-easi-orange border-easi-orange hover:bg-easi-orange/30"
                >
                  <Link href="https://us06web.zoom.us/webinar/register/WN_4rdIZImVSWO_EASsUaWpvg" target="_blank" rel="noopener noreferrer">
                    Register Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <Partners />
      </motion.div>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              className={`${typography.h2} mb-4`}
              variants={fadeInUp}
            >
              Follow Us on Social Media
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Stay updated with the latest news, research insights, and training opportunities from EASI
            </motion.p>
            
            <motion.div 
              className="flex justify-center gap-8"
              variants={fadeInUp}
            >
              {/* X (Twitter) */}
              <motion.a
                href="https://x.com/easiacug"
            target="_blank"
            rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow on X</h3>
                <p className="text-gray-600 text-sm">Latest updates and insights</p>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="https://youtube.com/@easiacug"
            target="_blank"
            rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-700 transition-colors duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Subscribe on YouTube</h3>
                <p className="text-gray-600 text-sm">Training videos and tutorials</p>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-easi-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className={`${typography.h2} mb-6`}
              variants={fadeInUp}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Join leading organizations across East Africa in advancing statistical excellence through our programs and services.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="bg-easi-orange/20 text-easi-orange border-easi-orange hover:bg-easi-orange/30 px-8 py-3 text-lg"
              >
                <Link href="/contact/">
                  Contact Us Today
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}