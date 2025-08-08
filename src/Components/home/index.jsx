import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, ArrowRight, Play } from 'lucide-react';

// Simple particle component
const Particle = ({ x, y, delay }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full opacity-20"
      initial={{ x, y, opacity: 0 }}
      animate={{
        y: y - 200,
        opacity: [0, 0.4, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

// Particles background component
const ParticlesBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: Math.random() * 8,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          delay={particle.delay}
        />
      ))}
    </div>
  );
};

const HavenCraftLanding = () => {
  const containerRef = useRef(null);
  const videoSectionRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Enhanced 3D transforms for the image
  const imageY = useTransform(scrollY, [0, 1000], [0, -600]);
  const imageRotateX = useTransform(scrollY, [0, 1000], [0, -25]);
  const imageRotateY = useTransform(scrollY, [0, 1000], [5, 45]);
  const imageRotateZ = useTransform(scrollY, [0, 1000], [3, 15]);
  const imageScale = useTransform(scrollY, [0, 1000], [1, 0.6]);

  // Video section scroll animations
  const videoSectionScroll = useScroll({
    target: videoSectionRef,
    offset: ["start end", "end start"]
  });

  // Video container transforms
  const videoScale = useTransform(
    videoSectionScroll.scrollYProgress,
    [0, 0.1, 0.3, 0.5, 1],
    [1, 1, 0.8, 0.6, 0.4]
  );
  
  const videoOpacity = useTransform(
    videoSectionScroll.scrollYProgress,
    [0, 0.1, 0.3, 0.5, 1],
    [1, 1, 0.9, 0.8, 0.7]
  );

  const videoBorderRadius = useTransform(
    videoSectionScroll.scrollYProgress,
    [0, 0.1, 0.3, 0.5, 1],
    [0, 0, 8, 16, 24]
  );

  // Content reveal animation
  const contentOpacity = useTransform(
    videoSectionScroll.scrollYProgress,
    [0.4, 0.6],
    [0, 1]
  );

  const contentY = useTransform(
    videoSectionScroll.scrollYProgress,
    [0.4, 0.6],
    [100, 0]
  );

  // Avatar thumbnails data
  const avatars = [
    { id: 1, bg: 'bg-blue-400' },
    { id: 2, bg: 'bg-green-400' },
    { id: 3, bg: 'bg-purple-400' },
    { id: 4, bg: 'bg-pink-400' },
  ];

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          
          {/* Main Layout */}
          <div className="flex items-center justify-center gap-12">
            
            {/* Left Content - Testimonial - aligned to bottom */}
            <motion.div 
              className="flex flex-col justify-end text-center h-screen pb-32"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="flex items-center justify-center mb-4 space-x-2">
                {avatars.map((avatar, index) => (
                  <div
                    key={avatar.id}
                    className={`w-10 h-10 rounded-full ${avatar.bg} flex items-center justify-center text-white text-xs font-semibold`}
                    style={{ marginLeft: index > 0 ? '-8px' : '0' }}>
                    {avatar.id}
                  </div>
                ))}
              </div>
              <p className="text-white text-base font-light leading-relaxed">
                More than 1000+ homes<br />
                have been shaped by<br />
                Haven Craft
              </p>
            </motion.div>

            {/* Center Column - Title and Image */}
            <div className="flex flex-col items-center justify-center relative h-screen">
              
              {/* Main Title */}
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-light tracking-wide leading-none text-white text-center mb-16 z-20 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                Reimagine<br />
                Your Space
              </motion.h1>

              {/* Center floating image with 3D effect - positioned lower to overlap video section */}
              <motion.div 
                className="relative z-10 mt-20"
                style={{ 
                  y: imageY,
                  scale: imageScale,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <motion.div 
                  className="w-80 h-96 rounded-2xl shadow-2xl overflow-hidden"
                  style={{ 
                    rotateX: imageRotateX,
                    rotateY: imageRotateY,
                    rotateZ: imageRotateZ,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop&crop=center" 
                    alt="Interior Design Hero" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Description and CTA - aligned to bottom */}
            <motion.div 
              className="flex flex-col justify-end text-center h-screen pb-32"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <p className="text-gray-300 text-base font-light leading-relaxed mb-8">
                The intellect crafts the stunning,<br />
                the soul shapes the residence,<br />
                The Sweet Home
              </p>
              <button className="group flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 mx-auto">
                <span className="text-base font-medium">Get started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Video Section with Scroll Animation */}
      <section ref={videoSectionRef} className="relative min-h-[200vh]">
        {/* Video Container */}
        <motion.div 
          className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
          style={{
            scale: videoScale,
            opacity: videoOpacity,
          }}
        >
          <motion.div 
            className="relative w-full h-full overflow-hidden"
            style={{
              borderRadius: videoBorderRadius,
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="bgvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Video overlay content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <motion.h2 
                  className="text-4xl md:text-6xl font-light mb-6"
                  style={{
                    opacity: useTransform(
                      videoSectionScroll.scrollYProgress,
                      [0, 0.2, 0.4],
                      [1, 1, 0]
                    )
                  }}
                >
                  Experience Our Vision
                </motion.h2>
                <motion.button 
                  className="group flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 mx-auto border border-white/30"
                  style={{
                    opacity: useTransform(
                      videoSectionScroll.scrollYProgress,
                      [0, 0.2, 0.4],
                      [1, 1, 0]
                    )
                  }}
                >
                  <Play className="w-5 h-5" />
                  <span className="text-base font-medium">Watch Full Video</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content that appears below the video */}
        <motion.div 
          className="relative z-10 bg-black min-h-screen flex items-center justify-center"
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Feature Cards */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light mb-4 text-white">Expert Consultation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get personalized design advice from our experienced interior designers who understand your vision.
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light mb-4 text-white">Custom Solutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every project is unique. We create bespoke solutions that perfectly match your lifestyle and preferences.
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light mb-4 text-white">Premium Quality</h3>
                <p className="text-gray-300 leading-relaxed">
                  We use only the finest materials and work with skilled craftsmen to ensure exceptional results.
                </p>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div 
              className="text-center mt-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Let's create something extraordinary together. Your dream space is just a conversation away.
              </p>
              <button className="group flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-full hover:bg-gray-100 transition-all duration-300 mx-auto text-lg font-medium">
                <span>Start Your Project</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HavenCraftLanding;