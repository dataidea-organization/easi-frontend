'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { typography } from '@/lib/styles';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserGroupIcon,
  VideoCameraIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline';

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

// Webinar series data
const webinarSeries = {
  title: 'Skilling Africa for the AI Era',
  description: 'A monthly webinar series exploring how AI is transforming survey methodologies, data validation techniques, and statistical analysis across Africa. Gain insights and strategies tailored for professionals navigating the AI landscape in their respective fields.',
  partners: [
    { name: 'UAPS/UEPA', logo: '/images/partners/uaps-uepa.png' },
    { name: 'EASI', logo: '/EASI-Logo.png' },
    { name: 'PSDI', logo: '/images/partners/psdi.png' }
  ],
  time: '15:00 UTC',
  format: 'Live webinar with demonstrations and Q&A',
  audience: ['Survey methodologists', 'Statisticians', 'Data scientists', 'Policy analysts']
};

// Upcoming webinar
const upcomingWebinar = {
  number: 3,
  title: 'Geospatial and Remote Sensing for Real-Time Data Collection',
  description: 'Expose participants to spatial AI that complements traditional surveys.',
  date: 'April 24, 2026',
  time: '12:00 PM UTC',
  registrationLink: 'https://us06web.zoom.us/webinar/register/WN_4rdIZImVSWO_EASsUaWpvg'
};

// Past webinars
const pastWebinars = [
  {
    number: 2,
    title: 'AI-Driven Insights',
    description: 'Explored how AI is transforming survey methodologies and enhancing data validation techniques.',
    date: 'January 30, 2026',
    recordingLink: null // Add link when available
  },
  {
    number: 1,
    title: 'Introduction to AI in Statistics',
    description: 'An overview of AI applications in statistical research and data analysis across East Africa.',
    date: 'December 2025',
    recordingLink: null // Add link when available
  }
];

export default function Webinars() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-easi-dark via-easi-dark to-gray-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-easi-orange/10 blur-3xl"
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
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl"
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center text-white"
          >
            <motion.div 
              className="inline-block bg-easi-orange/20 border border-easi-orange text-easi-orange px-4 py-2 rounded-full text-sm font-medium mb-6"
              variants={fadeInUp}
            >
              Monthly Webinar Series
            </motion.div>
            <motion.h1 
              className={`${typography.h1} mb-6`}
              variants={fadeInUp}
            >
              {webinarSeries.title}
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 max-w-3xl mx-auto text-gray-300"
              variants={fadeInUp}
            >
              {webinarSeries.description}
            </motion.p>
            
            {/* Partner Logos */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 mb-10"
              variants={fadeInUp}
            >
              <span className="text-gray-400 text-sm">In partnership with:</span>
              <div className="flex items-center gap-6">
                {webinarSeries.partners.map((partner, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <span className="text-white font-medium text-sm">{partner.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-300"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-easi-orange" />
                <span>{webinarSeries.time} (Monthly)</span>
              </div>
              <div className="flex items-center gap-2">
                <VideoCameraIcon className="h-5 w-5 text-easi-orange" />
                <span>{webinarSeries.format}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 bg-easi-orange/10 border-y border-easi-orange/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <UserGroupIcon className="h-6 w-6 text-easi-orange" />
            <span className="text-gray-700 font-medium">For:</span>
            {webinarSeries.audience.map((audience, index) => (
              <span 
                key={index} 
                className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinar */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className={`${typography.h2} text-center mb-4`}
              variants={fadeInUp}
            >
              Next Webinar
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Register now to secure your spot in our upcoming session
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Card className="max-w-4xl mx-auto overflow-hidden border-2 border-easi-orange/30 shadow-xl">
                <div className="bg-gradient-to-r from-easi-orange to-easi-orange-hover p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      Webinar {upcomingWebinar.number}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      Upcoming
                    </span>
                  </div>
                  <h3 className={`${typography.h3} text-white`}>{upcomingWebinar.title}</h3>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 text-lg mb-6">{upcomingWebinar.description}</p>
                  
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CalendarIcon className="h-5 w-5 text-easi-orange" />
                      <span className="font-medium">{upcomingWebinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <ClockIcon className="h-5 w-5 text-easi-orange" />
                      <span className="font-medium">{upcomingWebinar.time}</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    asChild
                    className="bg-easi-orange/20 border-2 border-easi-orange text-easi-orange hover:bg-easi-orange/30 hover:border-easi-orange-hover px-8 py-3 text-lg"
                  >
                    <Link href={upcomingWebinar.registrationLink} target="_blank" rel="noopener noreferrer">
                      Register Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className={`${typography.h2} text-center mb-4`}
              variants={fadeInUp}
            >
              Past Webinars
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Catch up on previous sessions from our webinar series
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                          Webinar {webinar.number}
                        </span>
                        <span className="text-gray-400 text-sm">{webinar.date}</span>
                      </div>
                      <h3 className={`${typography.h4} text-gray-800 mb-3`}>{webinar.title}</h3>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                      
                      {webinar.recordingLink ? (
                        <Button
                          variant="outline"
                          asChild
                          className="bg-easi-orange/10 border-easi-orange text-easi-orange hover:bg-easi-orange/20"
                        >
                          <Link href={webinar.recordingLink} target="_blank" rel="noopener noreferrer">
                            <PlayCircleIcon className="h-5 w-5 mr-2" />
                            Watch Recording
                          </Link>
                        </Button>
                      ) : (
                        <span className="text-gray-400 text-sm italic">Recording coming soon</span>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-easi-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              className={`${typography.h2} mb-6`}
              variants={fadeInUp}
            >
              Stay Updated
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto text-gray-300"
              variants={fadeInUp}
            >
              Follow us on social media to get notified about upcoming webinars and other events from EASI.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                asChild
                variant="outline"
                className="bg-easi-orange/20 text-easi-orange border-easi-orange hover:bg-easi-orange/30 px-8 py-3"
              >
                <Link href="https://x.com/easiacug" target="_blank" rel="noopener noreferrer">
                  Follow on X
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="bg-white/10 text-white border-white/50 hover:bg-white/20 px-8 py-3"
              >
                <Link href="/contact/">
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
