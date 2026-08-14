// // D:\saikiran_personal\engagement-invitation\src\App.jsx
// import { useEffect, useState, useRef } from "react";

// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import { 
//   FaPhone, 
//   FaWhatsapp, 
//   FaMapMarkerAlt, 
//   FaHeart, 
//   FaRing,
//   FaCalendarAlt,
//   FaClock,
//   FaQuoteLeft,
//   FaQuoteRight,
//   FaPrayingHands,
//   FaLeaf,
//   FaStar,
//   FaGift,
//   FaSun,
//   FaMoon,
//   FaPepperHot as FaFlower
// } from "react-icons/fa";
// import { 
//   GiLotus, 
//   GiIndianPalace, 
//   GiFlowerTwirl,
//   GiPrayerBeads,
//   GiTempleGate,
//   GiPalmTree
// } from "react-icons/gi";
// import { MdLocationOn, MdDateRange } from "react-icons/md";
// import { BsFillClockFill } from "react-icons/bs";

// function App() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
    
//     // Preload video
//     const video = document.createElement('video');
//     video.src = isMobile 
//       ? "/videos/website-background-mobile.mp4"
//       : "/videos/website-background-desktop.mp4";
//     video.onloadeddata = () => setIsVideoLoaded(true);
    
//     return () => window.removeEventListener("resize", checkMobile);
//   }, [isMobile]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const mapsUrl = "https://www.google.com/maps/place/RAMBABU'S+HOME+%F0%9F%8F%A1/@18.0157821,79.8325191,1072m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a336f006e9271eb:0x129e11348883dd7b!8m2!3d18.015777!4d79.835094!16s%2Fg%2F11zklttcdc?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D";
//   const phoneNumber = "918978553778";
//   const whatsappMessage = "🙏 Namaste! Sai Pavan & Kavya, please share the engagement live location. Excited to be part of your special day! 🌸";

//   const handleCall = () => {
//     window.location.href = `tel:+${phoneNumber}`;
//   };

//   const handleWhatsApp = () => {
//     window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
//   };

//   const handleDirections = () => {
//     window.open(mapsUrl, "_blank");
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   // Animation Variants
//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: "easeOut" }
//   };

//   const fadeInLeft = {
//     initial: { opacity: 0, x: -60 },
//     animate: { opacity: 1, x: 0 },
//     transition: { duration: 0.8, ease: "easeOut" }
//   };

//   const fadeInRight = {
//     initial: { opacity: 0, x: 60 },
//     animate: { opacity: 1, x: 0 },
//     transition: { duration: 0.8, ease: "easeOut" }
//   };

//   const scaleIn = {
//     initial: { opacity: 0, scale: 0.8 },
//     animate: { opacity: 1, scale: 1 },
//     transition: { duration: 0.6, ease: "easeOut" }
//   };

//   const floatAnimation = {
//     initial: { y: 0 },
//     animate: {
//       y: [-10, 10, -10],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const rotateAnimation = {
//     animate: {
//       rotate: [0, 360],
//       transition: {
//         duration: 20,
//         repeat: Infinity,
//         ease: "linear"
//       }
//     }
//   };

//   const pulseAnimation = {
//     animate: {
//       scale: [1, 1.05, 1],
//       opacity: [0.7, 1, 0.7],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#F8F3FA] via-[#F2EAF6] to-[#F8EEF2]">
//       {/* Video Background with Overlay */}
//       <div className="fixed inset-0 -z-20 overflow-hidden">
//         <AnimatePresence>
//           {isVideoLoaded && (
//             <motion.video
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.4 }}
//               transition={{ duration: 2 }}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover"
//             >
//               <source
//                 src={isMobile 
//                   ? "/videos/website-background-mobile.mp4"
//                   : "/videos/website-background-desktop.mp4"
//                 }
//                 type="video/mp4"
//               />
//             </motion.video>
//           )}
//         </AnimatePresence>
//         <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
//       </div>

//       {/* Animated Traditional Patterns */}
//       <div className="fixed inset-0 -z-15 overflow-hidden pointer-events-none">
//         {/* Rangoli Pattern */}
//         <div className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `radial-gradient(circle at 30% 40%, #C6A15B 2px, transparent 2px),
//                               radial-gradient(circle at 70% 60%, #B45376 2px, transparent 2px)`,
//             backgroundSize: '50px 50px'
//           }}
//         />
        
//         {/* Floating Elements with Mouse Parallax */}
//         <motion.div
//           style={{
//             x: mousePosition.x,
//             y: mousePosition.y
//           }}
//           className="relative w-full h-full"
//         >
//           <motion.div 
//             className="absolute top-20 left-[5%] text-6xl text-[#C6A15B]/20"
//             {...rotateAnimation}
//           >
//             <GiLotus />
//           </motion.div>
//           <motion.div 
//             className="absolute bottom-40 right-[5%] text-7xl text-[#B45376]/20"
//             {...rotateAnimation}
//           >
//             <GiIndianPalace />
//           </motion.div>
//           <motion.div 
//             className="absolute top-1/3 right-[15%] text-5xl text-[#C6A15B]/15"
//             {...floatAnimation}
//           >
//             <GiFlowerTwirl />
//           </motion.div>
//           <motion.div 
//             className="absolute bottom-1/4 left-[10%] text-6xl text-[#B45376]/15"
//             {...floatAnimation}
//           >
//             <GiTempleGate />
//           </motion.div>
//         </motion.div>

//         {/* Floating Petals */}
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute text-[#C6A15B]/20 text-2xl"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//               rotate: 0
//             }}
//             animate={{
//               y: [null, -1000],
//               x: [null, Math.sin(i) * 200],
//               rotate: [0, 360],
//               opacity: [0, 1, 0]
//             }}
//             transition={{
//               duration: 15 + i * 2,
//               repeat: Infinity,
//               delay: i * 2,
//               ease: "linear"
//             }}
//           >
//             <FaFlower />
//           </motion.div>
//         ))}
//       </div>

//       {/* Elegant Navigation */}
//       <motion.nav 
//         className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <motion.div 
//               className="flex items-center gap-3"
//               whileHover={{ scale: 1.05 }}
//             >
//               <motion.div
//   animate={{ rotate: 360 }}
//   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//   className="flex items-center justify-center"
// >
//   <img
//     src="/favicon.ico"
//     alt="Engagement Icon"
//     className="w-10 h-10 drop-shadow-lg"
//   />
// </motion.div>
//               <span className="font-heading text-xl text-[#3E2723] font-bold tracking-wide">
//                 SAI PAVAN <span className="text-[#C6A15B]">❤️</span> KAVYA
//               </span>
//             </motion.div>

//             <div className="hidden md:flex items-center gap-8">
//               {[
//                 { id: 'home', label: 'Home' },
//                 { id: 'details', label: 'Celebration' },
//                 { id: 'venue', label: 'Venue' },
//                 { id: 'contact', label: 'Connect' }
//               ].map((item) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="relative text-[#3E2723]/80 hover:text-[#C6A15B] transition-colors font-medium"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item.label}
//                   {activeSection === item.id && (
//                     <motion.div
//                       layoutId="activeNav"
//                       className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C6A15B]"
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </div>

//             <motion.button 
//               className="md:hidden text-2xl text-[#3E2723]"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isMenuOpen ? '✕' : '☰'}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div 
//               className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#C6A15B]/20"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//             >
//               <div className="px-4 py-4 space-y-3">
//                 {['home', 'details', 'venue', 'contact'].map((item) => (
//                   <motion.button
//                     key={item}
//                     onClick={() => scrollToSection(item.id)}
//                     className="block w-full text-left py-2 text-[#3E2723]/80 hover:text-[#C6A15B] text-lg capitalize border-b border-[#C6A15B]/10"
//                     whileHover={{ x: 10 }}
//                   >
//                     {item}
//                   </motion.button>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* HERO SECTION */}
//       <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 pt-20">
//         <motion.div 
//           style={{ y, opacity }}
//           className="relative w-full max-w-6xl mx-auto"
//         >
//           {/* Decorative Mandala */}
//           <motion.div 
//             className="absolute inset-0 flex items-center justify-center pointer-events-none"
//             {...rotateAnimation}
//           >
//             <div className="w-[600px] h-[600px] border border-[#C6A15B]/20 rounded-full" />
//             <div className="absolute w-[400px] h-[400px] border border-[#B45376]/20 rounded-full" />
//           </motion.div>

//           <div className="text-center relative z-10">
//             {/* Sacred Text with Animation */}
//             <motion.div
//               variants={floatAnimation}
//               initial="initial"
//               animate="animate"
//               className="inline-block mb-8"
//             >
//               <motion.div 
//                 className="bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] text-white px-8 py-4 rounded-full shadow-xl"
//                 whileHover={{ scale: 1.05 }}
//                 animate={{
//                   backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//                 style={{ backgroundSize: '200% 200%' }}
//               >
//                 <span className="flex items-center gap-3 text-sm md:text-base font-semibold tracking-wide">
//                   <GiPrayerBeads className="text-xl" />
//                   With Divine Blessings of Our Parents & Elders
//                   <GiPrayerBeads className="text-xl" />
//                 </span>
//               </motion.div>
//             </motion.div>

//             {/* Names with Staggered Animation */}
//             <motion.div
//               initial="initial"
//               animate="animate"
//               variants={{
//                 animate: {
//                   transition: {
//                     staggerChildren: 0.2
//                   }
//                 }
//               }}
//             >
//               <motion.h1 
//                 variants={fadeInUp}
//                 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-[#3E2723] mb-4"
//               >
//                 Sai Pavan
//                 <motion.span 
//                   className="block text-2xl md:text-3xl text-[#C6A15B] mt-4 font-light tracking-[0.3em]"
//                   animate={{ 
//                     letterSpacing: ['0.2em', '0.4em', '0.2em'],
//                   }}
//                   transition={{ 
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                 >
//                   Gorantala
//                 </motion.span>
//               </motion.h1>

//               <motion.div 
//                 variants={scaleIn}
//                 className="flex items-center justify-center gap-6 my-8"
//               >
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                   className="text-3xl text-[#C6A15B]"
//                 >
//                   <FaRing />
//                 </motion.div>
//                 <span className="text-3xl text-[#B45376] font-heading">✧</span>
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <FaHeart className="text-3xl text-[#B45376]" />
//                 </motion.div>
//                 <span className="text-3xl text-[#B45376] font-heading">✧</span>
//                 <motion.div
//                   animate={{ rotate: -360 }}
//                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                   className="text-3xl text-[#C6A15B]"
//                 >
//                   <FaRing />
//                 </motion.div>
//               </motion.div>

//               <motion.h2 
//                 variants={fadeInUp}
//                 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-[#3E2723] mt-4"
//               >
//                 Kavya
//               </motion.h2>
//             </motion.div>

//             {/* Traditional Quote */}
//             <motion.div 
//               variants={fadeInUp}
//               initial="initial"
//               animate="animate"
//               transition={{ delay: 1 }}
//               className="max-w-3xl mx-auto mt-12 relative"
//             >
//               <FaQuoteLeft className="absolute -left-4 -top-4 text-4xl text-[#C6A15B]/30" />
//               <p className="text-xl md:text-2xl text-[#3E2723]/80 italic font-light px-12 leading-relaxed">
//                 "As the sacred fire witnesses our union, as the holy chants fill the air, 
//                 we seek your blessings to begin this beautiful journey of togetherness, 
//                 bound by love, tradition, and eternal devotion."
//               </p>
//               <FaQuoteRight className="absolute -right-4 -bottom-4 text-4xl text-[#C6A15B]/30" />
//             </motion.div>

//             {/* Date and Time */}
//             <motion.div
//               variants={pulseAnimation}
//               animate="animate"
//               className="mt-12 inline-block"
//             >
//               <motion.div 
//                 className="bg-white/90 backdrop-blur-md px-10 py-5 rounded-2xl shadow-xl border-2 border-[#C6A15B]/30"
//                 whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)" }}
//               >
//                 <div className="flex flex-wrap items-center justify-center gap-6 text-xl md:text-2xl">
//                   <div className="flex items-center gap-2">
//                     <MdDateRange className="text-[#C6A15B]" />
//                     <span className="text-[#3E2723] font-semibold">25th February 2026</span>
//                   </div>
//                   <div className="w-px h-8 bg-[#C6A15B]/30 hidden md:block" />
//                   <div className="flex items-center gap-2">
//                     <BsFillClockFill className="text-[#B45376]" />
//                     <span className="text-[#3E2723] font-semibold">9:00 AM - 2:00 PM</span>
//                   </div>
//                 </div>
//                 <p className="text-[#B45376] text-sm mt-2">Lunch follows ceremony</p>
//               </motion.div>
//             </motion.div>

//             {/* CTA Buttons */}
//             {/* <motion.div 
//               className="flex flex-wrap gap-4 justify-center mt-12"
//               variants={fadeInUp}
//               initial="initial"
//               animate="animate"
//               transition={{ delay: 1.5 }}
//             >
//               <motion.button
//                 onClick={() => scrollToSection('details')}
//                 className="bg-gradient-to-r from-[#C6A15B] to-[#B45376] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2 hover:shadow-xl transition-all"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <FaCalendarAlt />
//                 Celebration Details
//               </motion.button>
              
//               <motion.button
//                 onClick={handleWhatsApp}
//                 className="bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2 hover:shadow-xl transition-all"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <FaWhatsapp />
//                 Send Blessings
//               </motion.button>
//             </motion.div> */}
//           </div>
//         </motion.div>

//         {/* Scroll Indicator */}
//         {/* <motion.div 
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
//           onClick={() => scrollToSection('details')}
//           animate={{ y: [0, 15, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="w-8 h-14 border-2 border-[#C6A15B] rounded-full flex justify-center relative">
//             <motion.div 
//               className="w-1.5 h-3 bg-[#C6A15B] rounded-full absolute top-3"
//               animate={{ y: [0, 20, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
//           </div>
//           <p className="text-[#3E2723]/60 text-sm mt-2 tracking-widest">DISCOVER MORE</p>
//         </motion.div> */}
//       </section>

//       {/* DETAILS SECTION */}
//       <section id="details" className="py-32 px-4 relative">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <motion.h2 
//               className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#3E2723] mb-4"
//               animate={{ 
//                 textShadow: ['0 0 10px rgba(212,175,55,0.1)', '0 0 20px rgba(212,175,55,0.2)', '0 0 10px rgba(212,175,55,0.1)']
//               }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               The Auspicious Celebration
//             </motion.h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] mx-auto" />
//             <p className="text-[#3E2723]/70 text-lg mt-6 max-w-2xl mx-auto">
//               Join us as we begin our sacred journey together, blessed by tradition and love
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { 
//                 icon: <FaCalendarAlt />, 
//                 title: "Auspicious Date", 
//                 value: "25th February",
//                 sub: "Wednesday, 2026",
//                 gradient: "from-amber-400 to-orange-400"
//               },
//               { 
//                 icon: <FaClock />, 
//                 title: "Ceremony Time", 
//                 value: "9:00 AM - 2:00 PM",
//                 sub: "Muhurtham at 9:00 AM",
//                 gradient: "from-rose-400 to-pink-400"
//               },
//               { 
//                 icon: <GiLotus />, 
//                 title: "Sacred Rituals", 
//                 value: "South Indian",
//                 sub: "Traditional Vedic Ceremony",
//                 gradient: "from-purple-400 to-indigo-400"
//               },
//               { 
//                 icon: <FaGift />, 
//                 title: "Celebration", 
//                 value: "Grand Lunch",
//                 sub: "Authentic Feast",
//                 gradient: "from-green-400 to-emerald-400"
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group relative"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500`} />
//                 <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-[#C6A15B]/20">
//                   <motion.div 
//                     className="text-5xl text-[#C6A15B] mb-4"
//                     animate={{ scale: [1, 1.1, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
//                   >
//                     {item.icon}
//                   </motion.div>
//                   <h3 className="text-xl font-heading font-bold text-[#3E2723] mb-2">{item.title}</h3>
//                   <p className="text-2xl font-bold text-[#C6A15B] mb-2">{item.value}</p>
//                   <p className="text-[#3E2723]/60 text-sm">{item.sub}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Traditional Schedule */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-20 bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-[#C6A15B]/20"
//           >
//             <h3 className="text-3xl font-heading text-[#3E2723] text-center mb-10">Sacred Ceremony Schedule</h3>
//             <div className="space-y-6 max-w-2xl mx-auto">
//               {[
//                 { time: "9:00 AM", event: "Muhurtham (Auspicious Beginning)", icon: <FaStar />, desc: "Sacred timing for the ceremony" },
//                 { time: "10:00 AM", event: "Engagement Ceremony", icon: <FaRing />, desc: "Exchange of rings and vows" },
//                 { time: "11:30 AM", event: "Blessings from Elders", icon: <FaPrayingHands />, desc: "Seeking blessings from family" },
//                 { time: "1:00 PM", event: "Grand Celebration Lunch", icon: <FaGift />, desc: "Traditional feast follows" }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-start gap-6 p-4 bg-gradient-to-r from-[#C6A15B]/5 to-transparent rounded-xl hover:from-[#C6A15B]/10 transition-all"
//                 >
//                   <div className="text-2xl text-[#C6A15B] mt-1">{item.icon}</div>
//                   <div className="flex-1">
//                     <div className="flex items-center gap-4 mb-1">
//                       <p className="text-lg font-bold text-[#C6A15B]">{item.time}</p>
//                       <div className="h-px flex-1 bg-gradient-to-r from-[#C6A15B]/30 to-transparent" />
//                     </div>
//                     <p className="text-[#3E2723] font-semibold text-lg">{item.event}</p>
//                     <p className="text-[#3E2723]/60 text-sm">{item.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* VENUE SECTION */}
//       <section id="venue" className="py-32 px-4 relative bg-gradient-to-b from-[#FFF5E7] to-[#FFF0E0]">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#3E2723] mb-4">
//               Venue
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] mx-auto" />
//             <p className="text-[#3E2723]/70 text-lg mt-6">Where love meets tradition</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-[#C6A15B]/30"
//           >
//             <div className="p-8 md:p-12">
//               <div className="flex flex-col items-center mb-8">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="text-5xl text-[#C6A15B] mb-4"
//                 >
//                   <GiIndianPalace />
//                 </motion.div>
//                 <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#3E2723] text-center">
//                   RAMBABU'S HOME
//                 </h3>
//                 <div className="flex items-center gap-2 mt-2 text-[#B45376]">
//                   <MdLocationOn />
//                   <span>Hyderabad, Telangana</span>
//                 </div>
//               </div>

//               {/* Elegant Map Preview */}
//               <div className="relative h-80 mb-8 rounded-2xl overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#C6A15B]/20 to-[#B45376]/20 flex items-center justify-center">
//                   <div className="text-center">
//                     <GiTempleGate className="text-6xl text-[#C6A15B] mx-auto mb-4 opacity-50" />
//                     <p className="text-[#3E2723]/60 flex items-center gap-2">
//                       <FaMapMarkerAlt className="text-[#C6A15B]" />
//                       Click below for live directions
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <motion.button
//                   onClick={handleDirections}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-[#C6A15B] to-[#B45376] text-white px-10 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all"
//                 >
//                   <FaMapMarkerAlt />
//                   Get Live Directions
//                 </motion.button>
//               </div>

//               {/* Nearby Landmarks */}
//               <div className="mt-8 pt-8 border-t border-[#C6A15B]/20">
//                 <p className="text-center text-[#3E2723]/60 text-sm">
//                   🏨 Nearby Hotels Available • 🚗 Ample Parking • ♿ Wheelchair Accessible
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section id="contact" className="py-32 px-4 relative">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#3E2723] mb-4">
//               Connect With Us
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] mx-auto mb-6" />
//             <p className="text-[#3E2723]/70 text-lg max-w-2xl mx-auto">
//               Your presence is our greatest gift. Please reach out with any questions
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-[#C6A15B]/30"
//           >
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Call Card */}
//               <motion.div
//                 whileHover={{ scale: 1.03, y: -5 }}
//                 className="bg-gradient-to-br from-[#C6A15B]/10 to-[#B45376]/10 p-8 rounded-2xl cursor-pointer border border-[#C6A15B]/20 hover:border-[#C6A15B]/50 transition-all"
//                 onClick={handleCall}
//               >
//                 <motion.div 
//                   className="w-16 h-16 bg-gradient-to-r from-[#C6A15B] to-[#B45376] rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg"
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <FaPhone />
//                 </motion.div>
//                 <h3 className="font-heading text-2xl font-bold text-[#3E2723] text-center mb-2">Call Us</h3>
//                 <p className="text-[#C6A15B] text-xl text-center font-semibold">+91 89785 53778</p>
//                 <p className="text-[#3E2723]/60 text-sm text-center mt-2">Click to connect directly</p>
//               </motion.div>

//               {/* WhatsApp Card */}
//               <motion.div
//                 whileHover={{ scale: 1.03, y: -5 }}
//                 className="bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 p-8 rounded-2xl cursor-pointer border border-[#25D366]/20 hover:border-[#25D366]/50 transition-all"
//                 onClick={handleWhatsApp}
//               >
//                 <motion.div 
//                   className="w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg"
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//                 >
//                   <FaWhatsapp />
//                 </motion.div>
//                 <h3 className="font-heading text-2xl font-bold text-[#3E2723] text-center mb-2">WhatsApp</h3>
//                 <p className="text-[#25D366] text-xl text-center font-semibold">Send Message</p>
//                 <p className="text-[#3E2723]/60 text-sm text-center mt-2">Get live location & updates</p>
//               </motion.div>
//             </div>

//             {/* Additional Contact Info */}
//             <motion.div 
//               className="mt-10 text-center"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex justify-center gap-3 text-2xl mb-4">
//                 <FaHeart className="text-[#B45376] animate-pulse" />
//                 <FaHeart className="text-[#C6A15B] animate-pulse delay-100" />
//                 <FaHeart className="text-[#B45376] animate-pulse delay-200" />
//               </div>
//               <p className="text-[#3E2723]/80 text-lg mb-2">
//                 We can't wait to celebrate with you!
//               </p>
//               <p className="text-[#C6A15B] text-sm">
//                 Kindly RSVP by 25th February 2026
//               </p>
//               <p className="text-[#3E2723]/60 text-xs mt-4">
//                 For any assistance, please don't hesitate to contact us
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* BLESSINGS SECTION */}
//       <section className="py-20 px-4 bg-gradient-to-r from-[#C6A15B]/10 to-[#B45376]/10">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <h3 className="font-heading text-3xl text-[#3E2723] mb-8">Seeking Your Blessings</h3>
//             <div className="flex flex-wrap justify-center gap-4 mb-8">
//               {['🙏', '🌸', '🕉️', '✨', '🌺'].map((symbol, i) => (
//                 <motion.span
//                   key={i}
//                   className="text-3xl"
//                   animate={{ 
//                     scale: [1, 1.2, 1],
//                     rotate: [0, 10, -10, 0]
//                   }}
//                   transition={{ 
//                     duration: 2,
//                     repeat: Infinity,
//                     delay: i * 0.3
//                   }}
//                 >
//                   {symbol}
//                 </motion.span>
//               ))}
//             </div>
//             <p className="text-lg text-[#3E2723]/70 italic max-w-2xl mx-auto">
//               "May your blessings shower upon us as we begin this sacred journey of love, 
//               trust, and togetherness. Your presence will make our celebration complete."
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="relative bg-white/90 backdrop-blur-sm py-16 px-4 border-t border-[#C6A15B]/20">
//         {/* Decorative Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#C6A15B]/20 rounded-tl-3xl" />
//           <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#B45376]/20 rounded-br-3xl" />
//         </div>

//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             {/* Floral Decoration */}
//             <div className="flex justify-center gap-3 mb-6">
//               {[...Array(5)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   animate={{ 
//                     rotate: [0, 15, -15, 0],
//                     scale: [1, 1.1, 1]
//                   }}
//                   transition={{ 
//                     duration: 3,
//                     repeat: Infinity,
//                     delay: i * 0.2
//                   }}
//                 >
//                   <FaLeaf className="text-[#C6A15B] text-2xl" />
//                 </motion.div>
//               ))}
//             </div>

//             <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#3E2723] mb-4">
//               Sai Pavan Gorantala & Kavya
//             </h3>
            
//             <p className="text-xl text-[#B45376] mb-6 font-light">
//               25th February 2026 · 9:00 AM - 2:00 PM
//             </p>

//             <div className="w-24 h-1 bg-gradient-to-r from-[#C6A15B] to-[#B45376] mx-auto mb-8" />

//             <p className="text-lg text-[#3E2723]/70 italic max-w-2xl mx-auto mb-8 leading-relaxed">
//               "With hearts full of gratitude and souls filled with joy, we thank the Almighty 
//               and our beloved families for blessing us with this sacred union. Your presence 
//               and blessings will make our celebration truly complete."
//             </p>

//             <div className="flex justify-center gap-6 text-2xl mb-8">
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                 className="text-[#C6A15B]"
//               >
//                 <GiPrayerBeads />
//               </motion.div>
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="text-[#B45376]"
//               >
//                 <FaHeart />
//               </motion.div>
//               <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                 className="text-[#C6A15B]"
//               >
//                 <GiPrayerBeads />
//               </motion.div>
//             </div>

//             <p className="text-sm text-[#3E2723]/40">
//               © 2026 · Crafted with eternal love for Sai Pavan & Kavya
//             </p>
//           </motion.div>
//         </div>
//       </footer>

//       {/* Floating Action Button */}
//       <motion.button
//         onClick={() => scrollToSection('home')}
//         className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#C6A15B] to-[#B45376] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <FaStar className="text-xl" />
//       </motion.button>
//     </div>
//   );
// }

// export default App;




























// // D:\saikiran_personal\engagement-invitation\src\App.jsx
// import { useEffect, useState, useRef } from "react";

// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// import { 
//   FaPhone, 
//   FaWhatsapp, 
//   FaMapMarkerAlt, 
//   FaHeart, 
//   FaRing,
//   FaCalendarAlt,
//   FaClock,
//   FaQuoteLeft,
//   FaQuoteRight,
//   FaPrayingHands,
//   FaLeaf,
//   FaStar,
//   FaGift,
//   FaSun,
//   FaMoon,
//   FaPepperHot as FaFlower
// } from "react-icons/fa";
// import { 
//   GiLotus, 
//   GiIndianPalace, 
//   GiFlowerTwirl,
//   GiPrayerBeads,
//   GiTempleGate,
//   GiPalmTree
// } from "react-icons/gi";
// import { MdLocationOn, MdDateRange } from "react-icons/md";
// import { BsFillClockFill } from "react-icons/bs";

// function App() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 100]);
// const opacity = useTransform(
//   scrollYProgress,
//   [0, 0.5, 1],
//   isMobile ? [1, 1, 1] : [1, 0.5, 0]
// );

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
    
//     // Preload video
//     const video = document.createElement('video');
//     video.src = window.innerWidth < 768 
//       ? "/videos/website-background-mobile.mp4"
//       : "/videos/website-background-desktop.mp4";
//     video.onloadeddata = () => setIsVideoLoaded(true);
    
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!isMobile) { // Only apply mouse parallax on desktop
//         setMousePosition({
//           x: (e.clientX / window.innerWidth - 0.5) * 20,
//           y: (e.clientY / window.innerHeight - 0.5) * 20
//         });
//       }
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [isMobile]);

//   const mapsUrl = "https://www.google.com/maps/place/RAMBABU'S+HOME+%F0%9F%8F%A1/@18.0157821,79.8325191,1072m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a336f006e9271eb:0x129e11348883dd7b!8m2!3d18.015777!4d79.835094!16s%2Fg%2F11zklttcdc?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D";
//   const phoneNumber = "918978553778";
//   const whatsappMessage = "🙏 Namaste! Sai Pavan & Kavya, please share the engagement live location. Excited to be part of your special day! 🌸";

//   const handleCall = () => {
//     window.location.href = `tel:+${phoneNumber}`;
//   };

//   const handleWhatsApp = () => {
//     window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
//   };

//   const handleDirections = () => {
//     window.open(mapsUrl, "_blank");
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = isMobile ? 60 : 80; // Adjust offset for mobile
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
//       window.scrollTo({
//         top: elementPosition - offset,
//         behavior: 'smooth'
//       });
//     }
//     setIsMenuOpen(false);
//   };

//   // Animation Variants - Optimized for mobile
//   const fadeInUp = {
//     initial: { opacity: 0, y: isMobile ? 30 : 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }
//   };

//   const fadeInLeft = {
//     initial: { opacity: 0, x: isMobile ? -30 : -60 },
//     animate: { opacity: 1, x: 0 },
//     transition: { duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }
//   };

//   const fadeInRight = {
//     initial: { opacity: 0, x: isMobile ? 30 : 60 },
//     animate: { opacity: 1, x: 0 },
//     transition: { duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }
//   };

//   const scaleIn = {
//     initial: { opacity: 0, scale: isMobile ? 0.9 : 0.8 },
//     animate: { opacity: 1, scale: 1 },
//     transition: { duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }
//   };

//   return (
//     <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#F8F3FA] via-[#F2EAF6] to-[#F8EEF2]">
//       {/* Video Background with Overlay */}
//       <div className="fixed inset-0 -z-20 overflow-hidden">
//         <AnimatePresence>
//           {isVideoLoaded && (
//             <motion.video
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.3 }} // Reduced opacity for mobile
//               transition={{ duration: 2 }}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover"
//             >
//               <source
//                 src={isMobile 
//                   ? "/videos/website-background-mobile.mp4"
//                   : "/videos/website-background-desktop.mp4"
//                 }
//                 type="video/mp4"
//               />
//             </motion.video>
//           )}
//         </AnimatePresence>
//         <div


//       {/* Animated Traditional Patterns - Reduced on mobile */}
//       <div className="fixed inset-0 -z-15 overflow-hidden pointer-events-none">
//         {/* Rangoli Pattern - Simplified for mobile */}
//         <div className="absolute inset-0 opacity-5 md:opacity-10"
//           style={{
//             backgroundImage: `radial-gradient(circle at 30% 40%, #C6A15B 1px, transparent 1px),
//                               radial-gradient(circle at 70% 60%, #B45376 1px, transparent 1px)`,
//             backgroundSize: isMobile ? '30px 30px' : '50px 50px'
//           }}
//         />
        
//         {/* Mouse Parallax - Only on desktop */}
//         {!isMobile && (
//           <motion.div
//             style={{
//               x: mousePosition.x,
//               y: mousePosition.y
//             }}
//             className="relative w-full h-full"
//           >
//             <motion.div 
//               className="absolute top-20 left-[5%] text-4xl md:text-6xl text-[#C6A15B]/20"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             >
//               <GiLotus />
//             </motion.div>
//             <motion.div 
//               className="absolute bottom-40 right-[5%] text-5xl md:text-7xl text-[#B45376]/20"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             >
//               <GiIndianPalace />
//             </motion.div>
//             <motion.div 
//               className="absolute top-1/3 right-[15%] text-3xl md:text-5xl text-[#C6A15B]/15"
//               animate={{ y: [-10, 10, -10] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <GiFlowerTwirl />
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Floating Petals - Reduced count on mobile */}
//         {!isMobile &&
//   [...Array(12)].map((_, i) => (
//     <motion.div
//       key={i}
//       className="absolute text-[#C6A15B]/20 text-lg md:text-2xl"
//       initial={{
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         rotate: 0
//       }}
//       animate={{
//         y: -600,
//         x: Math.sin(i) * 150,
//         rotate: 360,
//         opacity: [0, 0.6, 0]
//       }}
//       transition={{
//         duration: 18,
//         repeat: Infinity,
//         delay: i * 0.8,
//         ease: "linear"
//       }}
//     >
//       <FaFlower />
//     </motion.div>
//   ))
// }
//       </div>

//       {/* Elegant Navigation - Mobile Optimized */}
//       <motion.nav 
//         className="fixed top-0 left-0 right-0 z-50 bg-white/90 md:bg-white/80 backdrop-blur-md shadow-sm"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16 md:h-20">
//             <motion.div 
//               className="flex items-center gap-2 md:gap-3"
//               whileHover={{ scale: 1.05 }}
//             >
//               <motion.div
//   animate={{ rotate: 360 }}
//   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//   className="flex items-center justify-center"
// >
//   <img
//     src="/favicon.ico"
//     alt="Engagement Icon"
//     className="w-6 h-6 md:w-8 md:h-8 object-contain"
//     style={{ background: "transparent" }}
//   />
// </motion.div>
//               <span className="font-heading text-sm md:text-base lg:text-xl text-[#3E2723] font-bold tracking-wide">
//                 {isMobile ? 'S.P. ❤️ K.' : 'SAI PAVAN ❤️ KAVYA'}
//               </span>
//             </motion.div>

//             <div className="hidden md:flex items-center gap-6 lg:gap-8">
//               {[
//                 { id: 'home', label: 'Home' },
//                 { id: 'details', label: 'Celebration' },
//                 { id: 'venue', label: 'Venue' },
//                 { id: 'contact', label: 'Connect' }
//               ].map((item) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="relative text-[#3E2723]/80 hover:text-[#C6A15B] transition-colors font-medium text-sm lg:text-base"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item.label}
//                   {activeSection === item.id && (
//                     <motion.div
//                       layoutId="activeNav"
//                       className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C6A15B]"
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </div>

//             <motion.button 
//               className="md:hidden text-2xl text-[#3E2723] p-2"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isMenuOpen ? '✕' : '☰'}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu - Improved */}
//         <AnimatePresence>
//   {isMenuOpen && (
//     <motion.div
//       className="md:hidden fixed top-16 left-0 w-full bg-white shadow-xl z-40"
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       exit={{ y: -20, opacity: 0 }}
//       transition={{ duration: 0.25, ease: "easeOut" }}
//     >
//       <div className="flex flex-col px-5 py-4 space-y-4">
//         {[
//           { id: 'home', label: 'Home', icon: '🏠' },
//           { id: 'details', label: 'Celebration', icon: '🎉' },
//           { id: 'venue', label: 'Venue', icon: '📍' },
//           { id: 'contact', label: 'Connect', icon: '📞' }
//         ].map((item) => (
//           <button
//             key={item.id}
//             onClick={() => scrollToSection(item.id)}
//             className="flex items-center gap-3 text-lg font-medium text-[#3E2723] active:scale-95 transition-transform"
//           >
//             <span className="text-xl">{item.icon}</span>
//             {item.label}
//           </button>
//         ))}
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>
//       </motion.nav>

//       {/* HERO SECTION - Mobile Optimized */}
//       <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-3 md:px-4 pt-16 md:pt-20">
//         <motion.div 
//           style={{ y: isMobile ? 0 : y, opacity }}
//           className="relative w-full max-w-6xl mx-auto"
//         >
//           {/* Decorative Mandala - Simplified for mobile */}
//           {!isMobile && (
//             <motion.div 
//               className="absolute inset-0 flex items-center justify-center pointer-events-none"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             >
//               <div className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] border border-[#C6A15B]/20 rounded-full" />
//               <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] border border-[#B45376]/20 rounded-full" />
//             </motion.div>
//           )}

//           <div className="text-center relative z-10">
//             {/* Sacred Text with Animation - Mobile Optimized */}
//             <motion.div
//               animate={!isMobile ? { y: [-10, 10, -10] } : {}}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="inline-block mb-4 md:mb-8"
//             >
//               <motion.div 
//                 className="bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] text-white px-4 md:px-8 py-2 md:py-4 rounded-full shadow-xl"
//                 whileHover={!isMobile ? { scale: 1.05 } : {}}
//                 style={{ backgroundSize: '200% 200%' }}
//               >
//                 <span className="flex items-center gap-2 text-xs md:text-sm lg:text-base font-semibold tracking-wide">
//                   <GiPrayerBeads className="text-sm md:text-xl" />
//                   {isMobile ? 'Divine Blessings' : 'With Divine Blessings of Our Parents & Elders'}
//                   <GiPrayerBeads className="text-sm md:text-xl" />
//                 </span>
//               </motion.div>
//             </motion.div>

//             {/* Names with Staggered Animation - Mobile Optimized */}
//             <motion.div
//               initial="initial"
//               animate="animate"
//               variants={{
//                 animate: {
//                   transition: {
//                     staggerChildren: 0.15
//                   }
//                 }
//               }}
//             >
//               <motion.h1 
//                 variants={fadeInUp}
//                 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-[#3E2723] mb-2 md:mb-4"
//               >
//                 Sai Pavan
//                 <motion.span 
//                   className="block text-lg md:text-2xl lg:text-3xl text-[#C6A15B] mt-2 md:mt-4 font-light tracking-[0.2em] md:tracking-[0.3em]"
//                   animate={!isMobile ? { 
//                     letterSpacing: ['0.2em', '0.4em', '0.2em'],
//                   } : {}}
//                   transition={{ 
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                 >
//                   {isMobile ? 'Gorantala' : 'Gorantala'}
//                 </motion.span>
//               </motion.h1>

//               <motion.div 
//                 variants={scaleIn}
//                 className="flex items-center justify-center gap-3 md:gap-6 my-4 md:my-8"
//               >
//                 <motion.div
//                   animate={!isMobile ? { rotate: 360 } : {}}
//                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                   className="text-2xl md:text-3xl text-[#C6A15B]"
//                 >
//                   <FaRing />
//                 </motion.div>
//                 <span className="text-xl md:text-3xl text-[#B45376] font-heading">✧</span>
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <FaHeart className="text-2xl md:text-3xl text-[#B45376]" />
//                 </motion.div>
//                 <span className="text-xl md:text-3xl text-[#B45376] font-heading">✧</span>
//                 <motion.div
//                   animate={!isMobile ? { rotate: -360 } : {}}
//                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                   className="text-2xl md:text-3xl text-[#C6A15B]"
//                 >
//                   <FaRing />
//                 </motion.div>
//               </motion.div>

//               <motion.h2 
//                 variants={fadeInUp}
//                 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-[#3E2723] mt-2 md:mt-4"
//               >
//                 Kavya
//               </motion.h2>
//             </motion.div>

//             {/* Traditional Quote - Mobile Optimized */}
//             <motion.div 
//               variants={fadeInUp}
//               initial="initial"
//               animate="animate"
//               transition={{ delay: 0.8 }}
//               className="max-w-3xl mx-auto mt-6 md:mt-12 relative px-2 md:px-0"
//             >
//               <FaQuoteLeft className="absolute -left-2 md:-left-4 -top-2 md:-top-4 text-2xl md:text-4xl text-[#C6A15B]/30" />
//               <p className="text-sm md:text-base lg:text-xl xl:text-2xl text-[#3E2723]/80 italic font-light px-6 md:px-12 leading-relaxed">
//                 {isMobile 
//                   ? "As the sacred fire witnesses our union, we seek your blessings to begin this beautiful journey of togetherness."
//                   : '"As the sacred fire witnesses our union, as the holy chants fill the air, we seek your blessings to begin this beautiful journey of togetherness, bound by love, tradition, and eternal devotion."'}
//               </p>
//               <FaQuoteRight className="absolute -right-2 md:-right-4 -bottom-2 md:-bottom-4 text-2xl md:text-4xl text-[#C6A15B]/30" />
//             </motion.div>

//             {/* Date and Time - Mobile Optimized */}
//             <motion.div
//               animate={!isMobile ? { scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] } : {}}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="mt-6 md:mt-12 inline-block w-full sm:w-auto px-2"
//             >
//               <motion.div 
//                 className="bg-white/90 backdrop-blur-md px-4 sm:px-6 md:px-10 py-3 md:py-5 rounded-2xl shadow-xl border-2 border-[#C6A15B]/30"
//                 whileHover={!isMobile ? { scale: 1.05 } : {}}
//               >
//                 <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 text-base md:text-xl lg:text-2xl">
//                   <div className="flex items-center gap-2">
//                     <MdDateRange className="text-[#C6A15B] text-lg md:text-xl" />
//                     <span className="text-[#3E2723] font-semibold">25 Feb 2026</span>
//                   </div>
//                   <div className="hidden sm:block w-px h-6 bg-[#C6A15B]/30" />
//                   <div className="flex items-center gap-2">
//                     <BsFillClockFill className="text-[#B45376] text-lg md:text-xl" />
//                     <span className="text-[#3E2723] font-semibold">9:00 AM - 2:00 PM</span>
//                   </div>
//                 </div>
//                 <p className="text-[#B45376] text-xs md:text-sm mt-2">Lunch follows ceremony</p>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* DETAILS SECTION - Mobile Optimized */}
//       <section id="details" className="py-16 md:py-32 px-3 md:px-4 relative">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             className="text-center mb-10 md:mb-16"
//           >
//             <motion.h2 
//               className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3E2723] mb-3 md:mb-4 px-2"
//             >
//               The Auspicious Celebration
//             </motion.h2>
//             <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] mx-auto" />
//             <p className="text-[#3E2723]/70 text-sm md:text-base lg:text-lg mt-4 md:mt-6 max-w-2xl mx-auto px-4">
//               {isMobile 
//                 ? 'Join us as we begin our sacred journey together'
//                 : 'Join us as we begin our sacred journey together, blessed by tradition and love'}
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-2 md:px-0">
//             {[
//               { 
//                 icon: <FaCalendarAlt />, 
//                 title: "Auspicious Date", 
//                 value: "25th February",
//                 sub: "Wednesday, 2026",
//                 gradient: "from-amber-400 to-orange-400"
//               },
//               { 
//                 icon: <FaClock />, 
//                 title: "Ceremony Time", 
//                 value: "9:00 AM - 2:00 PM",
//                 sub: "Muhurtham at 9:00 AM",
//                 gradient: "from-rose-400 to-pink-400"
//               },
//               { 
//                 icon: <GiLotus />, 
//                 title: "Sacred Rituals", 
//                 value: "South Indian",
//                 sub: "Traditional Vedic Ceremony",
//                 gradient: "from-purple-400 to-indigo-400"
//               },
//               { 
//                 icon: <FaGift />, 
//                 title: "Celebration", 
//                 value: "Grand Lunch",
//                 sub: "Authentic Feast",
//                 gradient: "from-green-400 to-emerald-400"
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-30px" }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={!isMobile ? { y: -10, scale: 1.02 } : {}}
//                 className="group relative"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500`} />
//                 <div className="relative bg-white/90 backdrop-blur-sm p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-[#C6A15B]/20">
//                   <motion.div 
//                     className="text-3xl md:text-4xl lg:text-5xl text-[#C6A15B] mb-3 md:mb-4"
//                     animate={!isMobile ? { scale: [1, 1.1, 1] } : {}}
//                     transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
//                   >
//                     {item.icon}
//                   </motion.div>
//                   <h3 className="text-base md:text-lg lg:text-xl font-heading font-bold text-[#3E2723] mb-1 md:mb-2">{item.title}</h3>
//                   <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#C6A15B] mb-1 md:mb-2">{item.value}</p>
//                   <p className="text-xs md:text-sm text-[#3E2723]/60">{item.sub}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Traditional Schedule - Mobile Optimized */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-30px" }}
//             className="mt-12 md:mt-20 bg-white/90 backdrop-blur-sm p-5 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-[#C6A15B]/20 mx-2 md:mx-0"
//           >
//             <h3 className="text-xl md:text-2xl lg:text-3xl font-heading text-[#3E2723] text-center mb-6 md:mb-10">Sacred Ceremony Schedule</h3>
//             <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto">
//               {[
//                 { time: "9:00 AM", event: "Muhurtham", icon: <FaStar />, desc: "Auspicious beginning" },
//                 { time: "10:00 AM", event: "Engagement Ceremony", icon: <FaRing />, desc: "Exchange of rings" },
//                 { time: "11:30 AM", event: "Blessings from Elders", icon: <FaPrayingHands />, desc: "Seeking blessings" },
//                 { time: "1:00 PM", event: "Grand Celebration Lunch", icon: <FaGift />, desc: "Traditional feast" }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-start gap-3 md:gap-4 lg:gap-6 p-3 md:p-4 bg-gradient-to-r from-[#C6A15B]/5 to-transparent rounded-lg md:rounded-xl hover:from-[#C6A15B]/10 transition-all"
//                 >
//                   <div className="text-xl md:text-2xl text-[#C6A15B] mt-1">{item.icon}</div>
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2 md:gap-4 mb-1">
//                       <p className="text-sm md:text-base lg:text-lg font-bold text-[#C6A15B]">{item.time}</p>
//                       <div className="h-px flex-1 bg-gradient-to-r from-[#C6A15B]/30 to-transparent" />
//                     </div>
//                     <p className="text-[#3E2723] font-semibold text-sm md:text-base lg:text-lg">{item.event}</p>
//                     <p className="text-[#3E2723]/60 text-xs md:text-sm">{item.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* VENUE SECTION - Mobile Optimized */}
//       <section id="venue" className="py-16 md:py-32 px-3 md:px-4 relative bg-gradient-to-b from-[#FFF5E7] to-[#FFF0E0]">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-30px" }}
//             className="text-center mb-10 md:mb-16"
//           >
//             <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3E2723] mb-3 md:mb-4">
//               Venue
//             </h2>
//             <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] mx-auto" />
//             <p className="text-[#3E2723]/70 text-sm md:text-base lg:text-lg mt-4 md:mt-6">Where love meets tradition</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border border-[#C6A15B]/30 mx-2 md:mx-0"
//           >
//             <div className="p-5 md:p-8 lg:p-12">
//               <div className="flex flex-col items-center mb-4 md:mb-8">
//                 <motion.div
//                   animate={!isMobile ? { rotate: 360 } : {}}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="text-3xl md:text-4xl lg:text-5xl text-[#C6A15B] mb-3 md:mb-4"
//                 >
//                   <GiIndianPalace />
//                 </motion.div>
//                 <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-[#3E2723] text-center">
//                   RAMBABU'S HOME
//                 </h3>
//                 <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-2 text-[#B45376] text-sm md:text-base">
//                   <MdLocationOn />
//                   <span>Hyderabad, Telangana</span>
//                 </div>
//               </div>

//               {/* Elegant Map Preview - Mobile Optimized */}
//               <div className="relative h-48 md:h-64 lg:h-80 mb-6 md:mb-8 rounded-xl md:rounded-2xl overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#C6A15B]/20 to-[#B45376]/20 flex items-center justify-center">
//                   <div className="text-center px-4">
//                     <GiTempleGate className="text-3xl md:text-4xl lg:text-6xl text-[#C6A15B] mx-auto mb-2 md:mb-4 opacity-50" />
//                     <p className="text-[#3E2723]/60 text-xs md:text-sm flex items-center gap-1 md:gap-2">
//                       <FaMapMarkerAlt className="text-[#C6A15B]" />
//                       Click below for live directions
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
//                 <motion.button
//                   onClick={handleDirections}
//                   whileHover={!isMobile ? { scale: 1.05 } : {}}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-[#C6A15B] to-[#B45376] text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-full text-sm md:text-base lg:text-lg font-semibold flex items-center justify-center gap-2 md:gap-3 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all w-full sm:w-auto"
//                 >
//                   <FaMapMarkerAlt />
//                   Get Live Directions
//                 </motion.button>
//               </div>

//               {/* Nearby Landmarks - Mobile Optimized */}
//               <div className="mt-6 md:mt-8 pt-4 md:pt-8 border-t border-[#C6A15B]/20">
//                 <p className="text-center text-[#3E2723]/60 text-xs md:text-sm px-2">
//                   {isMobile 
//                     ? '🏨 Hotels • 🚗 Parking • ♿ Accessible'
//                     : '🏨 Nearby Hotels Available • 🚗 Ample Parking • ♿ Wheelchair Accessible'}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CONTACT SECTION - Mobile Optimized */}
//       <section id="contact" className="py-16 md:py-32 px-3 md:px-4 relative">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-30px" }}
//             className="text-center mb-10 md:mb-16"
//           >
//             <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3E2723] mb-3 md:mb-4">
//               Connect With Us
//             </h2>
//             <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] mx-auto mb-4 md:mb-6" />
//             <p className="text-[#3E2723]/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
//               {isMobile 
//                 ? 'Your presence is our greatest gift'
//                 : 'Your presence is our greatest gift. Please reach out with any questions'}
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="bg-white/90 backdrop-blur-sm p-5 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-[#C6A15B]/30 mx-2 md:mx-0"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
//               {/* Call Card */}
//               <motion.div
//                 whileHover={!isMobile ? { scale: 1.03, y: -5 } : {}}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-gradient-to-br from-[#C6A15B]/10 to-[#B45376]/10 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl cursor-pointer border border-[#C6A15B]/20 hover:border-[#C6A15B]/50 transition-all"
//                 onClick={handleCall}
//               >
//                 <motion.div 
//                   className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-[#C6A15B] to-[#B45376] rounded-full flex items-center justify-center text-white text-xl md:text-2xl mb-3 md:mb-4 mx-auto shadow-lg"
//                   animate={!isMobile ? { scale: [1, 1.1, 1] } : {}}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   <FaPhone />
//                 </motion.div>
//                 <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-[#3E2723] text-center mb-1 md:mb-2">Call Us</h3>
//                 <p className="text-[#C6A15B] text-base md:text-lg lg:text-xl text-center font-semibold">+91 89785 53778</p>
//                 <p className="text-[#3E2723]/60 text-xs md:text-sm text-center mt-1 md:mt-2">Click to connect</p>
//               </motion.div>

//               {/* WhatsApp Card */}
//               <motion.div
//                 whileHover={!isMobile ? { scale: 1.03, y: -5 } : {}}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl cursor-pointer border border-[#25D366]/20 hover:border-[#25D366]/50 transition-all"
//                 onClick={handleWhatsApp}
//               >
//                 <motion.div 
//                   className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white text-xl md:text-2xl mb-3 md:mb-4 mx-auto shadow-lg"
//                   animate={!isMobile ? { scale: [1, 1.1, 1] } : {}}
//                   transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//                 >
//                   <FaWhatsapp />
//                 </motion.div>
//                 <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-[#3E2723] text-center mb-1 md:mb-2">WhatsApp</h3>
//                 <p className="text-[#25D366] text-base md:text-lg lg:text-xl text-center font-semibold">Send Message</p>
//                 <p className="text-[#3E2723]/60 text-xs md:text-sm text-center mt-1 md:mt-2">Get location & updates</p>
//               </motion.div>
//             </div>

//             {/* Additional Contact Info - Mobile Optimized */}
//             <motion.div 
//               className="mt-6 md:mt-10 text-center"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex justify-center gap-2 md:gap-3 text-xl md:text-2xl mb-3 md:mb-4">
//                 <FaHeart className="text-[#B45376] animate-pulse" />
//                 <FaHeart className="text-[#C6A15B] animate-pulse delay-100" />
//                 <FaHeart className="text-[#B45376] animate-pulse delay-200" />
//               </div>
//               <p className="text-[#3E2723]/80 text-sm md:text-base lg:text-lg mb-1 md:mb-2">
//                 We can't wait to celebrate with you!
//               </p>
//               <p className="text-[#C6A15B] text-xs md:text-sm">
//                 Kindly RSVP by 25th February 2026
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* BLESSINGS SECTION - Mobile Optimized */}
//       <section className="py-12 md:py-20 px-3 md:px-4 bg-gradient-to-r from-[#C6A15B]/10 to-[#B45376]/10">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center px-2"
//           >
//             <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-[#3E2723] mb-4 md:mb-8">Seeking Your Blessings</h3>
//             <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-8">
//               {['🙏', '🌸', '🕉️', '✨', '🌺'].map((symbol, i) => (
//                 <motion.span
//                   key={i}
//                   className="text-2xl md:text-3xl"
//                   animate={{ 
//                     scale: [1, 1.2, 1],
//                     rotate: [0, 10, -10, 0]
//                   }}
//                   transition={{ 
//                     duration: 2,
//                     repeat: Infinity,
//                     delay: i * 0.2
//                   }}
//                 >
//                   {symbol}
//                 </motion.span>
//               ))}
//             </div>
//             <p className="text-sm md:text-base lg:text-lg text-[#3E2723]/70 italic max-w-2xl mx-auto px-4">
//               {isMobile 
//                 ? "May your blessings shower upon us as we begin this sacred journey of love."
//                 : '"May your blessings shower upon us as we begin this sacred journey of love, trust, and togetherness. Your presence will make our celebration complete."'}
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* FOOTER - Mobile Optimized */}
//       <footer className="relative bg-white/90 backdrop-blur-sm py-10 md:py-16 px-3 md:px-4 border-t border-[#C6A15B]/20">
//         {/* Decorative Elements - Simplified for mobile */}
//         {!isMobile && (
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <div className="absolute top-0 left-0 w-16 md:w-32 h-16 md:h-32 border-t-4 border-l-4 border-[#C6A15B]/20 rounded-tl-3xl" />
//             <div className="absolute bottom-0 right-0 w-16 md:w-32 h-16 md:h-32 border-b-4 border-r-4 border-[#B45376]/20 rounded-br-3xl" />
//           </div>
//         )}

//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             {/* Floral Decoration - Mobile Optimized */}
//             <div className="flex justify-center gap-2 md:gap-3 mb-4 md:mb-6">
//               {[...Array(isMobile ? 3 : 5)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   animate={!isMobile ? { 
//                     rotate: [0, 15, -15, 0],
//                     scale: [1, 1.1, 1]
//                   } : {}}
//                   transition={{ 
//                     duration: 3,
//                     repeat: Infinity,
//                     delay: i * 0.2
//                   }}
//                 >
//                   <FaLeaf className="text-[#C6A15B] text-xl md:text-2xl" />
//                 </motion.div>
//               ))}
//             </div>

//             <h3 className="font-heading text-xl md:text-2xl lg:text-3xl xl:text-5xl text-[#3E2723] mb-2 md:mb-4 px-2">
//               {isMobile ? 'Sai Pavan & Kavya' : 'Sai Pavan Gorantala & Kavya'}
//             </h3>
            
//             <p className="text-sm md:text-base lg:text-xl text-[#B45376] mb-3 md:mb-6 font-light">
//               25 Feb 2026 · 9:00 AM - 2:00 PM
//             </p>

//             <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#C6A15B] to-[#B45376] mx-auto mb-4 md:mb-8" />

//             <p className="text-sm md:text-base lg:text-lg text-[#3E2723]/70 italic max-w-2xl mx-auto mb-4 md:mb-8 leading-relaxed px-4">
//               {isMobile 
//                 ? "With hearts full of gratitude, we thank the Almighty and our families. Your presence will make our celebration complete."
//                 : '"With hearts full of gratitude and souls filled with joy, we thank the Almighty and our beloved families for blessing us with this sacred union. Your presence and blessings will make our celebration truly complete."'}
//             </p>

//             <div className="flex justify-center gap-4 md:gap-6 text-xl md:text-2xl mb-4 md:mb-8">
//               <motion.div
//                 animate={!isMobile ? { rotate: 360 } : {}}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                 className="text-[#C6A15B]"
//               >
//                 <GiPrayerBeads />
//               </motion.div>
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="text-[#B45376]"
//               >
//                 <FaHeart />
//               </motion.div>
//               <motion.div
//                 animate={!isMobile ? { rotate: -360 } : {}}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                 className="text-[#C6A15B]"
//               >
//                 <GiPrayerBeads />
//               </motion.div>
//             </div>

//             <p className="text-[10px] md:text-xs text-[#3E2723]/40">
//               © 2026 · Crafted with love for Sai Pavan & Kavya
//             </p>
//           </motion.div>
//         </div>
//       </footer>

//       {/* Floating Action Button - Mobile Optimized */}
//       {isMobile ? (
//   <motion.button
//     onClick={handleDirections}
//     className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-[#C6A15B] to-[#B45376] text-white p-4 rounded-full shadow-xl"
//     initial={{ scale: 0 }}
//     animate={{ scale: 1 }}
//     whileTap={{ scale: 0.9 }}
//   >
//     <FaMapMarkerAlt className="text-xl" />
//   </motion.button>
// ) : (
//   <motion.button
//     onClick={() => scrollToSection('home')}
//     className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#C6A15B] to-[#B45376] text-white p-4 rounded-full shadow-xl"
//   >
//     <FaStar className="text-xl" />
//   </motion.button>
// )}
//     </div>
//   );
// }

// export default App;











// D:\saikiran_personal\engagement-invitation\src\App.jsx
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaHeart,
  FaRing,
  FaCalendarAlt,
  FaClock,
  FaQuoteLeft,
  FaQuoteRight,
  FaPrayingHands,
  FaLeaf,
  FaStar,
  FaGift,
  FaSun,
  FaMoon,
  FaPepperHot as FaFlower,
  FaVolumeUp,
  FaVolumeMute,
  FaLanguage
} from "react-icons/fa";
import { 
  GiLotus, 
  GiIndianPalace, 
  GiFlowerTwirl,
  GiPrayerBeads,
  GiTempleGate,
  GiPalmTree
} from "react-icons/gi";
import { MdLocationOn, MdDateRange } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [language, setLanguage] = useState('english'); // 'english' or 'telugu'
  const audioRef = useRef(null);
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 100]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? [1, 1, 1] : [1, 0.5, 0]
  );

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('/audio/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
    
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsAudioPlaying(true);
        setIsAudioMuted(false);
      } catch (error) {
        console.log("Auto-play was prevented. User interaction needed.");
        setIsAudioPlaying(false);
      }
    };
    
    playAudio();
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      } else {
        audioRef.current.play();
        setIsAudioPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsAudioMuted(!isAudioMuted);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'telugu' : 'english');
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const video = document.createElement('video');
    video.src = window.innerWidth < 768 
      ? "/videos/website-background-mobile.mp4"
      : "/videos/website-background-desktop.mp4";
    video.onloadeddata = () => setIsVideoLoaded(true);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const mapsUrl = "https://maps.app.goo.gl/JoDsSVnCree1xvUV8";
  const phoneNumber = "919492645298";
  
  // Language-specific text
  const text = {
    english: {
      brandName: 'Aravind ❤️ Ruchitha',
      brandNameMobile: 'Aravind ❤️ Ruchitha',
      navHome: 'Home',
      navCelebration: 'Celebration',
      navVenue: 'Venue',
      navConnect: 'Connect',
      menuHome: 'Home',
      menuCelebration: 'Celebration',
      menuVenue: 'Venue',
      menuConnect: 'Connect',
      divineBlessings: 'With Divine Blessings of Our Parents & Elders',
      divineBlessingsMobile: 'Divine Blessings',
      saiPavan: 'Aravind',
      kavya: 'Ruchitha',
      quote: '"As the sacred fire witnesses our union, as the holy chants fill the air, we seek your blessings to begin this beautiful journey of togetherness, bound by love, tradition, and eternal devotion."',
      quoteMobile: 'As the sacred fire witnesses our union, we seek your blessings to begin this beautiful journey of togetherness.',
      date: '16 Aug 2026',
      time: '11:55 AM',
      lunchFollows: 'Lunch follows ceremony',
      celebrationTitle: 'The Auspicious Celebration',
      celebrationSubtitle: 'Join us as we begin our sacred journey together, blessed by tradition and love',
      celebrationSubtitleMobile: 'Join us as we begin our sacred journey together',
      auspiciousDate: 'Auspicious Date',
      dateValue: '16th August',
      dateSub: 'Sunday, 2026',
      ceremonyTime: 'Ceremony Time',
      timeValue: '11:55 AM',
      timeSub: 'Muhurtham at 11:55 AM',
      sacredRituals: 'Sacred Rituals',
      ritualsValue: 'South Indian',
      ritualsSub: 'Traditional Vedic Ceremony',
      celebration: 'Celebration',
      celebrationValue: 'Grand Lunch',
      celebrationSub: 'Authentic Feast',
      scheduleTitle: 'Sacred Ceremony Schedule',
      muhurtham: 'Muhurtham',
      muhurthamDesc: 'Auspicious beginning',
      engagement: 'Marriage Ceremony',
      engagementDesc: 'Sacred union of love',
      blessings: 'Blessings from Elders',
      blessingsDesc: 'Seeking blessings',
      lunch: 'Grand Celebration Lunch',
      lunchDesc: 'Traditional feast',
      venueTitle: 'Venue',
      venueSubtitle: 'Where love meets tradition',
      venueName: 'Sri Vijaya Balaji Gardens',
      venueLocation: 'Moranchapally, Bhupalpally Mandal, Jayashankar Bhupalpally, Telangana',
      directions: 'Get Live Directions',
      nearbyInfo: '🏨 Nearby Hotels Available • 🚗 Ample Parking • ♿ Wheelchair Accessible',
      nearbyInfoMobile: '🏨 Hotels • 🚗 Parking • ♿ Accessible',
      contactTitle: 'Connect With Us',
      contactSubtitle: 'Your presence is our greatest gift. Please reach out with any questions',
      contactSubtitleMobile: 'Your presence is our greatest gift',
      callUs: 'Call Us',
      callNumber: '+91 9492645298',
      callClick: 'Click to connect',
      whatsapp: 'WhatsApp',
      whatsappMessage: 'Send Message',
      whatsappInfo: 'Get location & updates',
      rsvp: 'Kindly RSVP by 16th August 2026',
      blessingsTitle: 'Seeking Your Blessings',
      blessingsText: '"May your blessings shower upon us as we begin this sacred journey of love, trust, and togetherness. Your presence will make our celebration complete."',
      blessingsTextMobile: 'May your blessings shower upon us as we begin this sacred journey of love.',
      footerNames: 'Aravind & Ruchitha',
      footerNamesMobile: 'Aravind & Ruchitha',
      footerDate: '16 Aug 2026 · 11:55 AM',
      footerText: '"With hearts full of gratitude and souls filled with joy, we thank the Almighty and our beloved families for blessing us with this sacred union. Your presence and blessings will make our celebration truly complete."',
      footerTextMobile: 'With hearts full of gratitude, we thank the Almighty and our families. Your presence will make our celebration complete.',
      footerCopyright: '© 2026 · Crafted with love for Aravind & Ruchitha',
      audioPrompt: 'Tap to play music',
      muteTitle: 'Mute music',
      unmuteTitle: 'Unmute music',
      languageToggle: 'తెలుగు',
    },
    telugu: {
  brandName: 'అరవింద్ ❤️ రుచిత',
  brandNameMobile: 'అరవింద్ ❤️ రుచిత',
  navHome: 'హోమ్',
  navCelebration: 'వేడుక',
  navVenue: 'వేదిక',
  navConnect: 'సంప్రదించండి',
  menuHome: 'హోమ్',
  menuCelebration: 'వేడుక',
  menuVenue: 'వేదిక',
  menuConnect: 'సంప్రదించండి',

  divineBlessings: 'మా తల్లిదండ్రులు మరియు పెద్దల దివ్య ఆశీర్వాదాలతో',
  divineBlessingsMobile: 'దివ్య ఆశీర్వాదాలు',

  saiPavan: 'అరవింద్',
  kavya: 'రుచిత',

  quote: '"పవిత్ర అగ్ని సాక్షిగా, మంత్రోచ్ఛారణల మధ్య, ప్రేమ, సంప్రదాయం మరియు శాశ్వతమైన అనుబంధంతో కూడిన ఈ అందమైన ప్రయాణాన్ని ప్రారంభించడానికి మీ ఆశీర్వాదాలను కోరుతున్నాము."',
  quoteMobile: 'పవిత్ర అగ్ని సాక్షిగా, ఈ అందమైన ప్రయాణాన్ని ప్రారంభించడానికి మీ ఆశీర్వాదాలను కోరుతున్నాము.',

  date: '16 ఆగస్ట్ 2026',
  time: 'ఉదయం 11:55',
  lunchFollows: 'కార్యక్రమం అనంతరం భోజనం',

  celebrationTitle: 'శుభ వివాహ వేడుక',
  celebrationSubtitle: 'సంప్రదాయం మరియు ప్రేమతో ఆశీర్వదించబడిన ఈ పవిత్ర ప్రయాణంలో మాతో కలిసి వేడుక జరుపుకోండి',
  celebrationSubtitleMobile: 'ఈ పవిత్ర ప్రయాణంలో మాతో కలిసి వేడుక జరుపుకోండి',

  auspiciousDate: 'శుభ తేదీ',
  dateValue: '16 ఆగస్ట్',
  dateSub: 'ఆదివారం, 2026',

  ceremonyTime: 'కార్యక్రమ సమయం',
  timeValue: 'ఉదయం 11:55',
  timeSub: 'ముహూర్తం ఉదయం 11:55 గంటలకు',

  sacredRituals: 'పవిత్ర కార్యక్రమాలు',
  ritualsValue: 'దక్షిణ భారత',
  ritualsSub: 'సంప్రదాయ వైదిక వేడుక',

  celebration: 'వేడుక',
  celebrationValue: 'విందు భోజనం',
  celebrationSub: 'సంప్రదాయ విందు',

  scheduleTitle: 'పవిత్ర కార్యక్రమ షెడ్యూల్',

  muhurtham: 'ముహూర్తం',
  muhurthamDesc: 'శుభ ఆరంభం',

  marriage: 'వివాహ వేడుక',
  marriageDesc: 'పవిత్ర వివాహ బంధం',

  blessings: 'పెద్దల ఆశీర్వాదం',
  blessingsDesc: 'ఆశీస్సులు తీసుకోవడం',

  lunch: 'విందు భోజనం',
  lunchDesc: 'సంప్రదాయ విందు',

  venueTitle: 'వేదిక',
  venueSubtitle: 'ప్రేమ మరియు సంప్రదాయం కలిసే చోట',

  venueName: 'Sri Vijaya Balaji Gardens',
  venueLocation: 'Moranchapally, Bhupalpally Mandal, Jayashankar Bhupalpally, Telangana',

  directions: 'ప్రత్యక్ష దారి సూచనలు',

  nearbyInfo: '🏨 సమీప హోటళ్ళు అందుబాటులో ఉన్నాయి • 🚗 పార్కింగ్ సౌకర్యం • ♿ వీల్‌చైర్ సౌకర్యం',
  nearbyInfoMobile: '🏨 హోటళ్ళు • 🚗 పార్కింగ్ • ♿ సౌకర్యం',

  contactTitle: 'మమ్మల్ని సంప్రదించండి',
  contactSubtitle: 'మీ సమక్షమే మాకు గొప్ప బహుమతి. ఏవైనా ప్రశ్నలు ఉంటే మమ్మల్ని సంప్రదించండి',
  contactSubtitleMobile: 'మీ సమక్షమే మాకు గొప్ప బహుమతి',

  callUs: 'కాల్ చేయండి',
  callNumber: '+91 9492645298',
  callClick: 'కనెక్ట్ అవ్వడానికి క్లిక్ చేయండి',

  whatsapp: 'వాట్సాప్',
  whatsappMessage: 'సందేశం పంపండి',
  whatsappInfo: 'లొకేషన్ & అప్డేట్స్ పొందండి',

  rsvp: 'దయచేసి 16 ఆగస్ట్ 2026 లోపు RSVP చేయండి',

  blessingsTitle: 'మీ ఆశీర్వాదాలు కోరుతూ',
  blessingsText: '"ప్రేమ, నమ్మకం మరియు కలయికతో కూడిన ఈ పవిత్ర ప్రయాణంలో మీ ఆశీర్వాదాలు మాపై కురిపించండి. మీ సమక్షం మరియు ఆశీర్వాదాలతో మా వేడుక పరిపూర్ణం అవుతుంది."',
  blessingsTextMobile: 'ఈ పవిత్ర ప్రయాణంలో మీ ఆశీర్వాదాలు మాపై కురిపించండి.',

  footerNames: 'అరవింద్ & రుచిత',
  footerNamesMobile: 'అరవింద్ & రుచిత',

  footerDate: '16 ఆగస్ట్ 2026 · ఉదయం 11:55',

  footerText: '"కృతజ్ఞతతో నిండిన హృదయాలతో, ఆనందంతో నిండిన ఆత్మలతో, ఈ పవిత్ర కలయికకు ఆశీర్వదించిన భగవంతుడికి మరియు మా కుటుంబ సభ్యులకు కృతజ్ఞతలు తెలియజేస్తున్నాము. మీ సమక్షం మరియు ఆశీర్వాదాలతో మా వేడుక నిజంగా పరిపూర్ణం అవుతుంది."',

  footerTextMobile: 'కృతజ్ఞతతో నిండిన హృదయాలతో, భగవంతుడికి మరియు మా కుటుంబ సభ్యులకు కృతజ్ఞతలు. మీ సమక్షంతో మా వేడుక పరిపూర్ణం అవుతుంది.',

  footerCopyright: '© 2026 · అరవింద్ & రుచిత కోసం ప్రేమతో రూపొందించబడింది',

  audioPrompt: 'సంగీతం కోసం నొక్కండి',
  muteTitle: 'సంగీతాన్ని మ్యూట్ చేయండి',
  unmuteTitle: 'సంగీతాన్ని అన్మ్యూట్ చేయండి',

  languageToggle: 'English',
}
  };

  const t = text[language];
  const whatsappMessage = language === 'english' 
    ? "🙏 Namaste! please share the Marriage live location. Excited to be part of your special day! 🌸"
    : "🙏 నమస్తే! దయచేసి వివాహ వేడుక లైవ్ లొకేషన్ షేర్ చేయండి. మీ  ప్రత్యేక రోజులో భాగం కావడానికి సంతోషంగా ఉంది! 🌸";

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const handleDirections = () => {
    window.open(mapsUrl, "_blank");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = isMobile ? 60 : 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: isMobile ? 30 : 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: isMobile ? -30 : -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: isMobile ? 30 : 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: isMobile ? 0.5 : 0.8, ease: "easeOut" }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: isMobile ? 0.9 : 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#F8F3FA] via-[#F2EAF6] to-[#F8EEF2]">
      {/* Video Background with Overlay */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <AnimatePresence>
          {isVideoLoaded && (
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2 }}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src={isMobile 
                  ? "/videos/website-background-mobile.mp4"
                  : "/videos/website-background-desktop.mp4"
                }
                type="video/mp4"
              />
            </motion.video>
          )}
        </AnimatePresence>
        <div
  className={`absolute inset-0 ${
    isMobile
      ? 'bg-[#F2EAF6]/75'
      : 'bg-[#F8F3FA]/65 backdrop-blur-[1px]'
  }`}
/>
      </div>

      {/* Animated Traditional Patterns */}
      <div className="fixed inset-0 -z-15 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5 md:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, #C6A15B 1px, transparent 1px),
                  radial-gradient(circle at 70% 60%, #B45376 1px, transparent 1px)`,
            backgroundSize: isMobile ? '30px 30px' : '50px 50px'
          }}
        />
        
        {!isMobile && (
          <motion.div
            style={{
              x: mousePosition.x,
              y: mousePosition.y
            }}
            className="relative w-full h-full"
          >
            <motion.div 
              className="absolute top-20 left-[5%] text-4xl md:text-6xl text-[#C6A15B]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <GiLotus />
            </motion.div>
            <motion.div 
              className="absolute bottom-40 right-[5%] text-5xl md:text-7xl text-[#B45376]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <GiIndianPalace />
            </motion.div>
            <motion.div 
              className="absolute top-1/3 right-[15%] text-3xl md:text-5xl text-[#C6A15B]/15"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <GiFlowerTwirl />
            </motion.div>
          </motion.div>
        )}

        {!isMobile &&
          [...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#C6A15B]/20 text-lg md:text-2xl"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: 0
              }}
              animate={{
                y: -600,
                x: Math.sin(i) * 150,
                rotate: 360,
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "linear"
              }}
            >
              <FaFlower />
            </motion.div>
          ))
        }
      </div>

      {/* Elegant Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 md:bg-white/80 backdrop-blur-md shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <motion.div 
              className="flex items-center gap-2 md:gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex items-center justify-center"
              >
                <img
                  src="/favicon.ico"
                  alt="Engagement Icon"
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  style={{ background: "transparent" }}
                />
              </motion.div>
              <span className="font-heading text-sm md:text-base lg:text-xl text-[#3E2723] font-bold tracking-wide">
                {isMobile ? t.brandNameMobile : t.brandName}
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {[
                { id: 'home', label: t.navHome },
                { id: 'details', label: t.navCelebration },
                { id: 'venue', label: t.navVenue },
                { id: 'contact', label: t.navConnect }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-[#3E2723]/80 hover:text-[#C6A15B] transition-colors font-medium text-sm lg:text-base"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C6A15B]"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* Language Toggle Button */}
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-[#C6A15B]/20 to-[#B45376]/20 rounded-full text-xs md:text-sm font-medium text-[#3E2723] border border-[#C6A15B]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={language === 'english' ? 'Switch to Telugu' : 'Switch to English'}
              >
                <FaLanguage className="text-[#C6A15B] text-xs md:text-sm" />
                <span>{t.languageToggle}</span>
              </motion.button>

              {/* Audio Control Button */}
              <motion.button
                onClick={toggleMute}
                className="text-[#C6A15B] hover:text-[#B45376] transition-colors p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={isAudioMuted ? t.unmuteTitle : t.muteTitle}
              >
                {isAudioMuted ? <FaVolumeMute size={isMobile ? 16 : 20} /> : <FaVolumeUp size={isMobile ? 16 : 20} />}
              </motion.button>

              <motion.button 
                className="md:hidden text-2xl text-[#3E2723] p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? '✕' : '☰'}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden fixed top-16 left-0 w-full bg-white shadow-xl z-40"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex flex-col px-5 py-4 space-y-4">
                {[
                  { id: 'home', label: t.menuHome, icon: '🏠' },
                  { id: 'details', label: t.menuCelebration, icon: '🎉' },
                  { id: 'venue', label: t.menuVenue, icon: '📍' },
                  { id: 'contact', label: t.menuConnect, icon: '📞' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 text-lg font-medium text-[#3E2723] active:scale-95 transition-transform"
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Audio Play Prompt */}
      <AnimatePresence>
        {!isAudioPlaying && !isAudioMuted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-4 py-3 rounded-full shadow-xl border border-[#C6A15B]/30"
          >
            <div className="flex items-center gap-3">
              <span className="text-[#3E2723] text-sm">{t.audioPrompt}</span>
              <motion.button
                onClick={toggleAudio}
                className="bg-gradient-to-r from-[#C6A15B] to-[#B45376] text-white p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaVolumeUp size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-3 md:px-4 pt-16 md:pt-20">
        <motion.div 
          style={{ y: isMobile ? 0 : y, opacity }}
          className="relative w-full max-w-6xl mx-auto"
        >
          {!isMobile && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] border border-[#C6A15B]/20 rounded-full" />
              <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] border border-[#B45376]/20 rounded-full" />
            </motion.div>
          )}

          <div className="text-center relative z-10">
            <motion.div
              animate={!isMobile ? { y: [-10, 10, -10] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-4 md:mb-8"
            >
              <motion.div 
                className="bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] text-white px-4 md:px-8 py-2 md:py-4 rounded-full shadow-xl"
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                style={{ backgroundSize: '200% 200%' }}
              >
                <span className="flex items-center gap-2 text-xs md:text-sm lg:text-base font-semibold tracking-wide">
                  <GiPrayerBeads className="text-sm md:text-xl" />
                  {isMobile ? t.divineBlessingsMobile : t.divineBlessings}
                  <GiPrayerBeads className="text-sm md:text-xl" />
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              <motion.h1 
                variants={fadeInUp}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-[#3E2723] mb-2 md:mb-4"
              >
                {t.saiPavan}
                <motion.span 
                  className="block text-lg md:text-2xl lg:text-3xl text-[#C6A15B] mt-2 md:mt-4 font-light tracking-[0.2em] md:tracking-[0.3em]"
                  animate={!isMobile ? { 
                    letterSpacing: ['0.2em', '0.4em', '0.2em'],
                  } : {}}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {language === 'english' ? 'Gorantala' : 'గోరంటల'}
                </motion.span>
              </motion.h1>

              <motion.div 
                variants={scaleIn}
                className="flex items-center justify-center gap-3 md:gap-6 my-4 md:my-8"
              >
                <motion.div
                  animate={!isMobile ? { rotate: 360 } : {}}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-2xl md:text-3xl text-[#C6A15B]"
                >
                  <FaRing />
                </motion.div>
                <span className="text-xl md:text-3xl text-[#B45376] font-heading">✧</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaHeart className="text-2xl md:text-3xl text-[#B45376]" />
                </motion.div>
                <span className="text-xl md:text-3xl text-[#B45376] font-heading">✧</span>
                <motion.div
                  animate={!isMobile ? { rotate: -360 } : {}}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-2xl md:text-3xl text-[#C6A15B]"
                >
                  <FaRing />
                </motion.div>
              </motion.div>

              <motion.h2 
                variants={fadeInUp}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-[#3E2723] mt-2 md:mt-4"
              >
                {t.kavya}
              </motion.h2>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.8 }}
              className="max-w-3xl mx-auto mt-6 md:mt-12 relative px-2 md:px-0"
            >
              <FaQuoteLeft className="absolute -left-2 md:-left-4 -top-2 md:-top-4 text-2xl md:text-4xl text-[#C6A15B]/30" />
              <p className="text-sm md:text-base lg:text-xl xl:text-2xl text-[#3E2723]/80 italic font-light px-6 md:px-12 leading-relaxed">
                {isMobile ? t.quoteMobile : t.quote}
              </p>
              <FaQuoteRight className="absolute -right-2 md:-right-4 -bottom-2 md:-bottom-4 text-2xl md:text-4xl text-[#C6A15B]/30" />
            </motion.div>

            <motion.div
              animate={!isMobile ? { scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mt-6 md:mt-12 inline-block w-full sm:w-auto px-2"
            >
              <motion.div 
                className="bg-white/90 backdrop-blur-md px-4 sm:px-6 md:px-10 py-3 md:py-5 rounded-2xl shadow-xl border-2 border-[#C6A15B]/30"
                whileHover={!isMobile ? { scale: 1.05 } : {}}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 text-base md:text-xl lg:text-2xl">
                  <div className="flex items-center gap-2">
                    <MdDateRange className="text-[#C6A15B] text-lg md:text-xl" />
                    <span className="text-[#3E2723] font-semibold">{t.date}</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-[#C6A15B]/30" />
                  <div className="flex items-center gap-2">
                    <BsFillClockFill className="text-[#B45376] text-lg md:text-xl" />
                    <span className="text-[#3E2723] font-semibold">{t.time}</span>
                  </div>
                </div>
                <p className="text-[#B45376] text-xs md:text-sm mt-2">{t.lunchFollows}</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* DETAILS SECTION */}
      <section id="details" className="py-16 md:py-32 px-3 md:px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-10 md:mb-16"
          >
            <motion.h2 
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3E2723] mb-3 md:mb-4 px-2"
            >
              {t.celebrationTitle}
            </motion.h2>
            <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] mx-auto" />
            <p className="text-[#3E2723]/70 text-sm md:text-base lg:text-lg mt-4 md:mt-6 max-w-2xl mx-auto px-4">
              {isMobile ? t.celebrationSubtitleMobile : t.celebrationSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-2 md:px-0">
            {[
              { 
                icon: <FaCalendarAlt />, 
                title: t.auspiciousDate, 
                value: t.dateValue,
                sub: t.dateSub,
                gradient: "from-amber-400 to-orange-400"
              },
              { 
                icon: <FaClock />, 
                title: t.ceremonyTime, 
                value: t.timeValue,
                sub: t.timeSub,
                gradient: "from-rose-400 to-pink-400"
              },
              { 
                icon: <GiLotus />, 
                title: t.sacredRituals, 
                value: t.ritualsValue,
                sub: t.ritualsSub,
                gradient: "from-purple-400 to-indigo-400"
              },
              { 
                icon: <FaGift />, 
                title: t.celebration, 
                value: t.celebrationValue,
                sub: t.celebrationSub,
                gradient: "from-green-400 to-emerald-400"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={!isMobile ? { y: -10, scale: 1.02 } : {}}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                <div className="relative bg-white/90 backdrop-blur-sm p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-[#C6A15B]/20">
                  <motion.div 
                    className="text-3xl md:text-4xl lg:text-5xl text-[#C6A15B] mb-3 md:mb-4"
                    animate={!isMobile ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-base md:text-lg lg:text-xl font-heading font-bold text-[#3E2723] mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#C6A15B] mb-1 md:mb-2">{item.value}</p>
                  <p className="text-xs md:text-sm text-[#3E2723]/60">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            className="mt-12 md:mt-20 bg-white/90 backdrop-blur-sm p-5 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-[#C6A15B]/20 mx-2 md:mx-0"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading text-[#3E2723] text-center mb-6 md:mb-10">{t.scheduleTitle}</h3>
            <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto">
              {[
                { time: "11:55 AM", event: t.muhurtham, icon: <FaStar />, desc: t.muhurthamDesc },
{ time: "After Ceremony", event: t.lunch, icon: <FaGift />, desc: t.lunchDesc }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 md:gap-4 lg:gap-6 p-3 md:p-4 bg-gradient-to-r from-[#C6A15B]/5 to-transparent rounded-lg md:rounded-xl hover:from-[#C6A15B]/10 transition-all"
                >
                  <div className="text-xl md:text-2xl text-[#C6A15B] mt-1">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 md:gap-4 mb-1">
                      <p className="text-sm md:text-base lg:text-lg font-bold text-[#C6A15B]">{item.time}</p>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#C6A15B]/30 to-transparent" />
                    </div>
                    <p className="text-[#3E2723] font-semibold text-sm md:text-base lg:text-lg">{item.event}</p>
                    <p className="text-[#3E2723]/60 text-xs md:text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VENUE SECTION */}
      <section
  id="venue"
  className="py-16 md:py-32 px-3 md:px-4 relative bg-gradient-to-b from-[#F2EAF6] to-[#F8EEF2]"
>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3E2723] mb-3 md:mb-4">
              {t.venueTitle}
            </h2>
            <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] mx-auto" />
            <p className="text-[#3E2723]/70 text-sm md:text-base lg:text-lg mt-4 md:mt-6">{t.venueSubtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border border-[#C6A15B]/30 mx-2 md:mx-0"
          >
            <div className="p-5 md:p-8 lg:p-12">
              <div className="flex flex-col items-center mb-4 md:mb-8">
                <motion.div
                  animate={!isMobile ? { rotate: 360 } : {}}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-3xl md:text-4xl lg:text-5xl text-[#C6A15B] mb-3 md:mb-4"
                >
                  <GiIndianPalace />
                </motion.div>
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-[#3E2723] text-center">
                  {t.venueName}
                </h3>
                <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-2 text-[#B45376] text-sm md:text-base">
                  <MdLocationOn />
                  <span>{t.venueLocation}</span>
                </div>
              </div>

              <div className="relative h-48 md:h-64 lg:h-80 mb-6 md:mb-8 rounded-xl md:rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A15B]/20 to-[#B45376]/20 flex items-center justify-center">
                  <div className="text-center px-4">
                    <GiTempleGate className="text-3xl md:text-4xl lg:text-6xl text-[#C6A15B] mx-auto mb-2 md:mb-4 opacity-50" />
                    <p className="text-[#3E2723]/60 text-xs md:text-sm flex items-center gap-1 md:gap-2">
                      <FaMapMarkerAlt className="text-[#C6A15B]" />
                      {language === 'english' ? 'Click below for live directions' : 'దిగువన క్లిక్ చేయండి'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
                <motion.button
                  onClick={handleDirections}
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#C6A15B] to-[#B45376] text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-full text-sm md:text-base lg:text-lg font-semibold flex items-center justify-center gap-2 md:gap-3 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all w-full sm:w-auto"
                >
                  <FaMapMarkerAlt />
                  {t.directions}
                </motion.button>
              </div>

              <div className="mt-6 md:mt-8 pt-4 md:pt-8 border-t border-[#C6A15B]/20">
                <p className="text-center text-[#3E2723]/60 text-xs md:text-sm px-2">
                  {isMobile ? t.nearbyInfoMobile : t.nearbyInfo}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-32 px-3 md:px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3E2723] mb-3 md:mb-4">
              {t.contactTitle}
            </h2>
            <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-[#C6A15B] via-[#B45376] to-[#C6A15B] mx-auto mb-4 md:mb-6" />
            <p className="text-[#3E2723]/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
              {isMobile ? t.contactSubtitleMobile : t.contactSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm p-5 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-[#C6A15B]/30 mx-2 md:mx-0"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <motion.div
                whileHover={!isMobile ? { scale: 1.03, y: -5 } : {}}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-[#C6A15B]/10 to-[#B45376]/10 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl cursor-pointer border border-[#C6A15B]/20 hover:border-[#C6A15B]/50 transition-all"
                onClick={handleCall}
              >
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-[#C6A15B] to-[#B45376] rounded-full flex items-center justify-center text-white text-xl md:text-2xl mb-3 md:mb-4 mx-auto shadow-lg"
                  animate={!isMobile ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaPhone />
                </motion.div>
                <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-[#3E2723] text-center mb-1 md:mb-2">{t.callUs}</h3>
                <p className="text-[#C6A15B] text-base md:text-lg lg:text-xl text-center font-semibold">{t.callNumber}</p>
                <p className="text-[#3E2723]/60 text-xs md:text-sm text-center mt-1 md:mt-2">{t.callClick}</p>
              </motion.div>

              <motion.div
                whileHover={!isMobile ? { scale: 1.03, y: -5 } : {}}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl cursor-pointer border border-[#25D366]/20 hover:border-[#25D366]/50 transition-all"
                onClick={handleWhatsApp}
              >
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white text-xl md:text-2xl mb-3 md:mb-4 mx-auto shadow-lg"
                  animate={!isMobile ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <FaWhatsapp />
                </motion.div>
                <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-[#3E2723] text-center mb-1 md:mb-2">{t.whatsapp}</h3>
                <p className="text-[#25D366] text-base md:text-lg lg:text-xl text-center font-semibold">{t.whatsappMessage}</p>
                <p className="text-[#3E2723]/60 text-xs md:text-sm text-center mt-1 md:mt-2">{t.whatsappInfo}</p>
              </motion.div>
            </div>

            <motion.div 
              className="mt-6 md:mt-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center gap-2 md:gap-3 text-xl md:text-2xl mb-3 md:mb-4">
                <FaHeart className="text-[#B45376] animate-pulse" />
                <FaHeart className="text-[#C6A15B] animate-pulse delay-100" />
                <FaHeart className="text-[#B45376] animate-pulse delay-200" />
              </div>
              <p className="text-[#3E2723]/80 text-sm md:text-base lg:text-lg mb-1 md:mb-2">
                {language === 'english' ? "We can't wait to celebrate with you!" : "మీతో కలిసి వేడుక చేసుకోవడానికి ఎదురుచూస్తున్నాము!"}
              </p>
              <p className="text-[#C6A15B] text-xs md:text-sm">
                {t.rsvp}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLESSINGS SECTION */}
      <section className="py-12 md:py-20 px-3 md:px-4 bg-gradient-to-r from-[#C6A15B]/10 to-[#B45376]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center px-2"
          >
            <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-[#3E2723] mb-4 md:mb-8">{t.blessingsTitle}</h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-8">
              {['🙏', '🌸', '🕉️', '✨', '🌺'].map((symbol, i) => (
                <motion.span
                  key={i}
                  className="text-2xl md:text-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  {symbol}
                </motion.span>
              ))}
            </div>
            <p className="text-sm md:text-base lg:text-lg text-[#3E2723]/70 italic max-w-2xl mx-auto px-4">
              {isMobile ? t.blessingsTextMobile : t.blessingsText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-white/90 backdrop-blur-sm py-10 md:py-16 px-3 md:px-4 border-t border-[#C6A15B]/20">
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-16 md:w-32 h-16 md:h-32 border-t-4 border-l-4 border-[#C6A15B]/20 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 md:w-32 h-16 md:h-32 border-b-4 border-r-4 border-[#B45376]/20 rounded-br-3xl" />
          </div>
        )}

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-2 md:gap-3 mb-4 md:mb-6">
              {[...Array(isMobile ? 3 : 5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={!isMobile ? { 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  <FaLeaf className="text-[#C6A15B] text-xl md:text-2xl" />
                </motion.div>
              ))}
            </div>

            <h3 className="font-heading text-xl md:text-2xl lg:text-3xl xl:text-5xl text-[#3E2723] mb-2 md:mb-4 px-2">
              {isMobile ? t.footerNamesMobile : t.footerNames}
            </h3>
            
            <p className="text-sm md:text-base lg:text-xl text-[#B45376] mb-3 md:mb-6 font-light">
              {t.footerDate}
            </p>

            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#C6A15B] to-[#B45376] mx-auto mb-4 md:mb-8" />

            <p className="text-sm md:text-base lg:text-lg text-[#3E2723]/70 italic max-w-2xl mx-auto mb-4 md:mb-8 leading-relaxed px-4">
              {isMobile ? t.footerTextMobile : t.footerText}
            </p>

            <div className="flex justify-center gap-4 md:gap-6 text-xl md:text-2xl mb-4 md:mb-8">
              <motion.div
                animate={!isMobile ? { rotate: 360 } : {}}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-[#C6A15B]"
              >
                <GiPrayerBeads />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[#B45376]"
              >
                <FaHeart />
              </motion.div>
              <motion.div
                animate={!isMobile ? { rotate: -360 } : {}}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-[#C6A15B]"
              >
                <GiPrayerBeads />
              </motion.div>
            </div>

            <p className="text-[10px] md:text-xs text-[#3E2723]/40">
              {t.footerCopyright}
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Floating Action Button */}
      {isMobile ? (
        <motion.button
          onClick={handleDirections}
          className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-[#C6A15B] to-[#B45376] text-white p-4 rounded-full shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaMapMarkerAlt className="text-xl" />
        </motion.button>
      ) : (
        <motion.button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#C6A15B] to-[#B45376] text-white p-4 rounded-full shadow-xl"
        >
          <FaStar className="text-xl" />
        </motion.button>
      )}
    </div>
  );
}

export default App;