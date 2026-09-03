// ============================================================
// WHIZZHACK'26 - REACT APPLICATION CODEBASE
// ============================================================

const GOOGLE_FORM_URL = (typeof window !== "undefined" && window.GOOGLE_FORM_URL) ? window.GOOGLE_FORM_URL : "https://forms.gle/HeuF1Em3ynaebenf6";
const LOCATION_URL = (typeof window !== "undefined" && window.LOCATION_URL) ? window.LOCATION_URL : "https://maps.app.goo.gl/ksw6Hf2EmFq3EtDDA";
const PROBLEM_STATEMENTS_URL = (typeof window !== "undefined" && window.PROBLEM_STATEMENTS_URL) ? window.PROBLEM_STATEMENTS_URL : "https://drive.google.com/file/d/1WRbtGBoWXX3yqRq3yX3ydGaXLaqoiTKn/view?usp=drivesdk";
const EVENT_DETAILS = (typeof window !== "undefined" && window.WHIZZHACK_CONFIG) ? window.WHIZZHACK_CONFIG : {
  name: "WHIZZHACK'26",
  tagline: "Code. Build. Solve. Innovate. Impact.",
  type: "National-Level Mega Tech Hackathon",
  duration: "12-HOUR NON-STOP INNOVATION",
  college: "Erode Sengunthar Engineering College",
  collegeAutonomous: "Autonomous, Perundurai – 638057",
  accreditations: ["NAAC 'A' Grade", "NBA Accredited", "IIC (Ministry of HRD)"],
  department: "Department of Electronics and Communication Engineering",
  organizer: "Whizzcom Students' Association",
  dates: {
    display: "22 September 2026 – 23 September 2026",
    startDate: "22.09.2026",
    startDay: "Tuesday",
    endDate: "23.09.2026",
    endDay: "Wednesday",
    hackathonHours: "7:00 PM to 7:00 AM (Overall 6:00 PM to 10:30 AM)",
    targetISO: "2026-09-22T18:00:00+05:30"
  },
  stats: [
    { label: "PRIZE POOL", value: "₹50,000", subtext: "Worth of Prizes", icon: "Trophy" },
    { label: "TEAM MEMBERS", value: "3 – 5", subtext: "Per Team", icon: "Users" },
    { label: "REGISTRATION FEE", value: "₹500", subtext: "Per Head Only", icon: "IndianRupee" },
    { label: "DATES", value: "22–23", subtext: "September 2026", icon: "Calendar" }
  ],
  tracks: [
    {
      id: "software",
      title: "SOFTWARE TRACK",
      badge: "CODE • BUILD • SOLVE",
      icon: "Code2",
      accent: "from-blue-500 to-cyan-400",
      borderGlow: "group-hover:border-cyan-400/60 shadow-cyan-500/20",
      description: "Build innovative software solutions using modern programming languages, web & mobile applications, Artificial Intelligence, cloud systems, or data-driven tech.",
      technologies: ["AI & Machine Learning", "Full-Stack Web & Mobile", "Cloud Architecture", "Data Science", "API & Automation"],
      ctaText: "REGISTER FOR SOFTWARE TRACK"
    },
    {
      id: "hardware",
      title: "HARDWARE TRACK",
      badge: "DESIGN • INNOVATE • IMPACT",
      icon: "Cpu",
      accent: "from-purple-500 to-pink-500",
      borderGlow: "group-hover:border-purple-400/60 shadow-purple-500/20",
      description: "Design and prototype innovative hardware-based solutions, embedded architectures, IoT systems, sensors, or robotics that solve pressing real-world challenges.",
      technologies: ["Embedded Systems", "IoT & Sensor Networks", "Robotics & Automation", "VLSI & Microcontrollers", "Smart Hardware Prototypes"],
      ctaText: "REGISTER FOR HARDWARE TRACK"
    }
  ],
  whyParticipate: [
    { number: "01", title: "BUILD", description: "Turn your ideas into working solutions.", icon: "Hammer" },
    { number: "02", title: "INNOVATE", description: "Solve real-world problems with technology.", icon: "Lightbulb" },
    { number: "03", title: "COMPETE", description: "Compete with talented teams at a national level.", icon: "Flame" },
    { number: "04", title: "NETWORK", description: "Connect and collaborate with fellow innovators.", icon: "Network" },
    { number: "05", title: "WIN", description: "Compete for prizes worth ₹50,000.", icon: "Award" }
  ],
  schedule: [
    { id: 1, number: "01", title: "EVENT INAUGURATION", time: "6:00 PM", day: "Day 1 (22 Sept)", description: "Kickstart the innovation journey with an inspiring beginning.", isMilestone: true, category: "milestone", icon: "Sparkles" },
    { id: 2, number: "02", title: "HACKATHON BUILD START", time: "7:00 PM", day: "Day 1 (22 Sept)", description: "Let the coding, designing and building begin!", isMilestone: true, category: "milestone", icon: "PlayCircle" },
    { id: 3, number: "03", title: "FIRST REVIEW", time: "7:00 PM – 8:30 PM", day: "Day 1 (22 Sept)", description: "Present your progress and get feedback from mentors.", isMilestone: true, category: "review", icon: "ClipboardCheck" },
    { id: 4, number: "04", title: "DINNER", time: "8:30 PM – 9:30 PM", day: "Day 1 (22 Sept)", description: "Dinner will be provided.", isMilestone: false, category: "refreshment", icon: "Utensils" },
    { id: 5, number: "05", title: "BUILD SESSION", time: "9:30 PM – 11:30 PM", day: "Day 1 (22 Sept)", description: "Continue building your ideas and solutions.", isMilestone: false, category: "build", icon: "Code" },
    { id: 6, number: "06", title: "REFRESHMENTS", time: "11:30 PM – 12:00 AM", day: "Day 1 (22 Sept)", description: "Tea + snacks will be provided.", isMilestone: false, category: "refreshment", icon: "Coffee" },
    { id: 7, number: "07", title: "SECOND REVIEW", time: "12:00 AM – 2:00 AM", day: "Day 2 (23 Sept)", description: "Present your progress and get feedback from mentors.", isMilestone: true, category: "review", icon: "FileCheck" },
    { id: 8, number: "08", title: "NETWORK & VIBE TIME", time: "2:00 AM – 2:45 AM", day: "Day 2 (23 Sept)", description: "Communicate, collaborate with other teams, build connections and enjoy the vibe.", isMilestone: false, category: "vibe", icon: "Music" },
    { id: 9, number: "09", title: "REFRESHMENTS", time: "2:45 AM – 3:00 AM", day: "Day 2 (23 Sept)", description: "Refreshments will be provided.", isMilestone: false, category: "refreshment", icon: "Coffee" },
    { id: 10, number: "10", title: "BUILD SESSION", time: "3:00 AM – 5:00 AM", day: "Day 2 (23 Sept)", description: "Continue building your ideas and solutions.", isMilestone: false, category: "build", icon: "Zap" },
    { id: 11, number: "11", title: "REFRESHMENTS", time: "5:00 AM – 6:30 AM", day: "Day 2 (23 Sept)", description: "Refreshments will be provided. Freshen up and get ready for the final showcase.", isMilestone: false, category: "refreshment", icon: "Sun" },
    { id: 12, number: "12", title: "BUILD SESSION", time: "6:30 AM – 7:00 AM", day: "Day 2 (23 Sept)", description: "Continue building your ideas and solutions.", isMilestone: false, category: "build", icon: "CheckCircle" },
    { id: 13, number: "13", title: "FINAL DEMONSTRATION", time: "7:00 AM – 9:30 AM", day: "Day 2 (23 Sept)", description: "Showcase your final solution to the judges.", isMilestone: true, category: "milestone", icon: "Presentation" },
    { id: 14, number: "14", title: "HACKATHON FINISHED", time: "9:30 AM", day: "Day 2 (23 Sept)", description: "The innovation journey comes to an end.", isMilestone: true, category: "milestone", icon: "Flag" },
    { id: 15, number: "15", title: "BREAKFAST", time: "9:30 AM – 10:30 AM", day: "Day 2 (23 Sept)", description: "Breakfast will be provided. Refuel and recharge.", isMilestone: false, category: "refreshment", icon: "UtensilsCrossed" }
  ],
  participationDetails: [
    { title: "Team Size", value: "3 – 5 Members", icon: "Users", desc: "Collaborate in diverse multidisciplinary teams" },
    { title: "Registration Fee", value: "₹500 Per Head", icon: "IndianRupee", desc: "Affordable national-level participation" },
    { title: "Refreshments", value: "Provided", icon: "Coffee", desc: "Dinner, snacks, beverages & breakfast included" },
    { title: "Accommodation", value: "Provided", icon: "Bed", desc: "Campus stay arrangements for participating teams" },
    { title: "Tracks", value: "Software + Hardware", icon: "Cpu", desc: "Dedicated coding & hardware maker categories" },
    { title: "Event Scope", value: "National-Level Mega Hackathon", icon: "Globe", desc: "Compete with students across the nation" }
  ],
  prizes: {
    totalPool: "₹50,000",
    announcement: "Exciting prizes will be awarded in both the Hardware and Software Track"
  },
  faqs: [
    { q: "1. Who can participate?", a: "WHIZZHACK'26 is a National-Level Mega Tech Hackathon for student innovators. Please contact the event coordinators for further details on department or institution eligibility." },
    { q: "2. What is the team size?", a: "Teams must consist of 3 to 5 members." },
    { q: "3. What is the registration fee?", a: "The registration fee is ₹500 per head only." },
    { q: "4. What are the available tracks?", a: "There are two major tracks: SOFTWARE TRACK (Code • Build • Solve) and HARDWARE TRACK (Design • Innovate • Impact)." },
    { q: "5. Is accommodation provided?", a: "Yes, accommodation will be provided for the participants." },
    { q: "6. Are refreshments provided?", a: "Yes, refreshments, dinner, midnight tea/snacks, and breakfast will be provided throughout the event schedule." },
    { q: "7. How do I register?", a: "Click on any 'REGISTER NOW' button on this website to open the official Google Form in a new tab and submit your team details." },
    { q: "8. What is the event date?", a: "The hackathon takes place from 22 September 2026 (Tuesday) to 23 September 2026 (Wednesday)." },
    { q: "9. When does the hackathon begin?", a: "Event inauguration starts at 6:00 PM on 22 September 2026, and the 12-hour hackathon build starts at 7:00 PM." },
    { q: "10. Where is the event conducted?", a: "At Erode Sengunthar Engineering College (Autonomous), Perundurai – 638057, organized by the Whizzcom Students' Association, Department of Electronics and Communication Engineering." }
  ],
  studentCoordinators: [
    { name: "Mr.V. Monesh", phone: "9087150440" },
    { name: "Ms.K. Harinisha", phone: "8428990483" },
    { name: "Mr. L. Kumaravel", phone: "8072381869" }
  ],
  staffCoordinators: [
    { name: "Dr. P. Brindha", designation: "ASP / ECE", phone: "9629472713" },
    { name: "Dr. V. Thamizharasan", designation: "ASP / ECE", phone: "9790851284" }
  ],
  sponsors: [
    { name: "Britannia", tier: "Featured Sponsor", logoText: "BRITANNIA", isHeadline: true },
    { 
      name: "NTCS", 
      tagline: "Bridging Academia & Industry", 
      highlight: "No.1 Technical Training in Coimbatore", 
      tier: "Featured Sponsor & Training Partner", 
      logoText: "NTCS", 
      image: "ntcs-sponsor.jpg", 
      isHeadline: true 
    }
  ]
};

const { useState, useEffect, useRef, useMemo } = React;

// --- SVG Icons Helper ---
const Icon = ({ name, className = "w-5 h-5", size = 20 }) => {
  const icons = {
    Trophy: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
    ),
    Users: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    IndianRupee: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12"></path>
        <path d="M6 8h12"></path>
        <path d="m6 13 8.5 8"></path>
        <path d="M6 13h3"></path>
        <path d="M9 13c6.667 0 6.667-10 0-10"></path>
      </svg>
    ),
    Calendar: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="16" x2="16" y1="2" y2="6"></line>
        <line x1="8" x2="8" y1="2" y2="6"></line>
        <line x1="3" x2="21" y1="10" y2="10"></line>
      </svg>
    ),
    Code2: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4"></path>
        <path d="m6 8-4 4 4 4"></path>
        <path d="m14.5 4-5 16"></path>
      </svg>
    ),
    Cpu: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
        <rect width="6" height="6" x="9" y="9" rx="1"></rect>
        <path d="M15 2v2"></path>
        <path d="M15 20v2"></path>
        <path d="M2 15h2"></path>
        <path d="M2 9h2"></path>
        <path d="M20 15h2"></path>
        <path d="M20 9h2"></path>
        <path d="M9 2v2"></path>
        <path d="M9 20v2"></path>
      </svg>
    ),
    Sparkles: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        <path d="M5 3v4"></path>
        <path d="M19 17v4"></path>
        <path d="M3 5h4"></path>
        <path d="M17 19h4"></path>
      </svg>
    ),
    Clock: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    ArrowRight: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    ),
    ExternalLink: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h6v6"></path>
        <path d="M10 14 21 3"></path>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      </svg>
    ),
    ChevronDown: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    ),
    Menu: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
      </svg>
    ),
    X: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    ),
    MapPin: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    FileText: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" x2="8" y1="13" y2="13"></line>
        <line x1="16" x2="8" y1="17" y2="17"></line>
        <line x1="10" x2="8" y1="9" y2="9"></line>
      </svg>
    ),
    Phone: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    Coffee: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
        <line x1="6" x2="6" y1="2" y2="4"></line>
        <line x1="10" x2="10" y1="2" y2="4"></line>
        <line x1="14" x2="14" y1="2" y2="4"></line>
      </svg>
    ),
    Bed: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16"></path>
        <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
        <path d="M2 17h20"></path>
        <path d="M6 8v9"></path>
      </svg>
    ),
    Globe: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" x2="22" y1="12" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    Crown: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
      </svg>
    ),
    Medal: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
        <path d="M11 12 5.12 2.2"></path>
        <path d="m13 12 5.88-9.8"></path>
        <circle cx="12" cy="17" r="5"></circle>
        <path d="M12 18v-2h-.5"></path>
      </svg>
    ),
    Award: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
      </svg>
    ),
    Hammer: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path>
        <path d="M17.64 15 22 10.64"></path>
        <path d="m20.91 3.09-1.3-1.3a1.5 1.5 0 0 0-2.12 0l-5.66 5.66 3.42 3.42 5.66-5.66a1.5 1.5 0 0 0 0-2.12Z"></path>
      </svg>
    ),
    Lightbulb: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
      </svg>
    ),
    Flame: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"></path>
      </svg>
    ),
    Network: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="6" height="6" rx="1"></rect>
        <rect x="2" y="16" width="6" height="6" rx="1"></rect>
        <rect x="9" y="2" width="6" height="6" rx="1"></rect>
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
        <path d="M12 12V8"></path>
      </svg>
    ),
    PlayCircle: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="10 8 16 12 10 16 10 8"></polygon>
      </svg>
    ),
    ClipboardCheck: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <path d="m9 14 2 2 4-4"></path>
      </svg>
    ),
    Utensils: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"></path>
        <path d="M15 11v11"></path>
        <path d="M5 2v20"></path>
        <path d="M2 2h6v5a3 3 0 0 1-6 0V2Z"></path>
      </svg>
    ),
    FileCheck: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="m9 15 2 2 4-4"></path>
      </svg>
    ),
    Music: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
    ),
    Zap: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    Sun: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
    ),
    CheckCircle: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
    Presentation: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h20"></path>
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
        <path d="m7 21 5-5 5 5"></path>
      </svg>
    ),
    Flag: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
        <line x1="4" x2="4" y1="22" y2="15"></line>
      </svg>
    ),
    UtensilsCrossed: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z"></path>
        <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path>
        <path d="m2.1 21.8 6.4-6.3"></path>
        <path d="m19 5-7 7"></path>
      </svg>
    ),
    Code: (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  };

  return icons[name] || icons.Sparkles;
};

// --- Interactive Starfield & Constellation Canvas ---
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 70);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.8,
        color: Math.random() > 0.5 ? 'rgba(217, 107, 39, ' : 'rgba(229, 126, 37, '
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(217, 107, 39, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '0.75)';
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color + '0.9)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="particle-canvas" ref={canvasRef} />;
};

// --- Sponsor Carousel Component ---
const SponsorCarousel = () => {
  const sponsors = [
    {
      id: 'britannia',
      name: 'BRITANNIA®',
      role: 'Featured Sponsor',
      bgColor: 'bg-[#FFF5E6]',
      borderColor: 'border-red-500/40'
    },
    {
      id: 'majestronicz',
      name: 'MAJESTRONICZ',
      role: 'Official Sponsor',
      bgColor: 'bg-[#0E0702]',
      borderColor: 'border-amber-400/90 shadow-md shadow-amber-500/20',
      image: 'majestronicz-sponsor.jpg',
      isGold: true
    },
    {
      id: 'ntcs',
      name: 'NTCS',
      role: 'Training Partner',
      bgColor: 'bg-white',
      borderColor: 'border-amber-200',
      image: 'ntcs-sponsor.jpg'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className={`p-3 rounded-2xl ${sponsor.bgColor} border ${sponsor.borderColor} flex flex-col items-center justify-center min-h-[110px] text-center transition-all duration-300 hover:scale-105 shadow-md group relative overflow-hidden`}
        >
          {sponsor.image ? (
            <div className="flex flex-col items-center justify-center w-full h-full p-1">
              <img 
                src={sponsor.image} 
                alt={sponsor.name} 
                className="max-h-14 w-auto object-contain rounded-lg"
              />
              <span className={`text-[10px] font-semibold tracking-wide uppercase mt-1.5 px-2 py-0.5 rounded ${
                sponsor.isGold 
                  ? 'bg-[#2A1608] text-amber-300 border border-amber-600/40 shadow-sm'
                  : 'bg-[#FFE8CC] text-[#B45309] border border-[#D98232]/30'
              }`}>
                {sponsor.role}
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className="px-4 py-2 rounded-xl bg-red-600 text-white font-black tracking-widest text-base sm:text-lg shadow-lg mb-1.5">
                {sponsor.name}
              </div>
              <span className="text-[11px] text-[#6B482B] font-mono-tech font-bold">{sponsor.role}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// --- Top Announcement / Sponsor Bar ---
const TopBrandBar = () => {
  return null;
};

// --- Navbar Component ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Tracks", href: "#tracks" },
    { label: "Schedule", href: "#schedule" },
    { label: "Prizes", href: "#prizes" },
    { label: "Details", href: "#details" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6C27A]/95 backdrop-blur-xl border-b border-[#D98232]/30 shadow-md shadow-[#9C4221]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo & Branding */}
        <a href="#hero" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#D96B27] via-[#E57E25] to-[#B45309] p-[1.5px] shadow-md shadow-[#D96B27]/30 group-hover:scale-105 transition-transform flex-shrink-0">
            <div className="w-full h-full bg-[#2A1608] rounded-[10px] flex items-center justify-center font-heading font-black text-[#FFE8CC] text-xs sm:text-sm tracking-tight px-1 select-none">
              W'26
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-xl tracking-tight text-[#2A1608] group-hover:text-[#D96B27] transition-colors">
                WHIZZHACK<span className="text-[#D96B27]">'26</span>
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#D96B27] animate-ping"></span>
              {/* Sponsor pills */}
              <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded bg-red-600/90 text-white font-black text-[9px] tracking-wider uppercase shadow-sm">
                BRITANNIA®
              </span>
              <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded bg-gradient-to-r from-[#F4B964] to-[#D9822B] text-slate-950 font-black text-[9px] tracking-wider uppercase shadow-sm">
                MAJESTRONICZ
              </span>
              <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded bg-[#B45309] text-white font-black text-[9px] tracking-wider uppercase shadow-sm">
                NTCS
              </span>
            </div>
            <p className="text-[10px] text-[#6B482B] font-medium tracking-wide uppercase">
              Whizzcom • ECE • ESEC
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#FFF5E6]/90 px-4 py-1.5 rounded-full border border-[#D98232]/30 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-[#3D2008] hover:text-[#D96B27] hover:bg-[#FFE8CC] rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Register & Location */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-primary px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold text-white tracking-wider flex items-center gap-1.5 sm:gap-2 uppercase shadow-md shadow-[#D96B27]/30"
          >
            <span>REGISTER NOW</span>
            <Icon name="ExternalLink" size={14} className="w-3.5 h-3.5" />
          </a>
          <a
            href={LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Open College Venue Location on Google Maps"
            className="px-3.5 sm:px-4 py-2.5 rounded-full text-xs font-bold text-[#2A1608] hover:text-[#1F0E04] bg-[#FFF5E6] hover:bg-[#FFE8CC] border border-[#D98232]/40 hover:border-[#D96B27] flex items-center gap-1.5 transition-all shadow-sm group"
          >
            <Icon name="MapPin" size={14} className="text-[#D96B27] group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">LOCATION</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden p-2 rounded-full bg-[#FFF5E6] text-[#D96B27] border border-[#D98232]/40 hover:text-[#2A1608] transition-colors"
            title="Venue Location on Google Maps"
          >
            <Icon name="MapPin" size={16} />
          </a>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden btn-neon-primary px-3 py-1.5 rounded-full text-[11px] font-bold text-white flex items-center gap-1 uppercase"
          >
            <span>Register</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#FFF5E6] text-[#2A1608] hover:text-[#D96B27] border border-[#D98232]/40 focus:outline-none"
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF0D9]/98 border-b border-[#D98232]/30 px-6 py-6 space-y-3 backdrop-blur-2xl transition-all shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-[#FFE8CC] text-sm font-semibold text-[#2A1608] hover:text-[#D96B27] hover:bg-[#FFF5E6] transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#D98232]/30 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-neon-primary py-3 rounded-xl text-center text-xs font-bold text-white flex items-center justify-center gap-2 uppercase shadow-lg shadow-[#D96B27]/20"
            >
              <span>REGISTER NOW (GOOGLE FORM)</span>
              <Icon name="ExternalLink" size={15} />
            </a>
            <a
              href={LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl text-center text-xs font-bold text-[#2A1608] bg-[#FFE8CC] hover:bg-[#FFF5E6] border border-[#D98232]/40 flex items-center justify-center gap-2 uppercase transition"
            >
              <Icon name="MapPin" size={15} className="text-[#D96B27]" />
              <span>VIEW LOCATION (GOOGLE MAPS)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

// --- Countdown Timer Component ---
const CountdownTimer = ({ targetISO }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    hasStarted: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(targetISO).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          hasStarted: true
        });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0'),
        hasStarted: false
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetISO]);

  if (timeLeft.hasStarted) {
    return (
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#FFE8CC] border border-[#D96B27]/40 text-[#D96B27] font-bold text-lg animate-pulse shadow-md shadow-[#D96B27]/20">
        <span className="w-3 h-3 rounded-full bg-[#D96B27] animate-ping"></span>
        THE HACKATHON HAS STARTED!
      </div>
    );
  }

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds }
  ];

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-4 my-2 max-w-full overflow-x-auto py-1">
      {units.map((unit, idx) => (
        <div key={unit.label} className="flex items-center">
          <div className="flex flex-col items-center bg-[#FFF5E6]/90 border border-[#D98232]/30 backdrop-blur-md rounded-xl sm:rounded-2xl px-2 sm:px-5 py-2 sm:py-3 min-w-[62px] sm:min-w-[90px] shadow-md shadow-[#9C4221]/10">
            <span className="font-mono-tech font-bold text-xl sm:text-4xl text-gradient-neon tracking-tight">
              {unit.value}
            </span>
            <span className="text-[8px] sm:text-[11px] font-bold tracking-widest text-[#B45309] uppercase mt-0.5">
              {unit.label}
            </span>
          </div>
          {idx < units.length - 1 && (
            <span className="text-base sm:text-2xl font-bold text-[#D98232] ml-1.5 sm:ml-4 select-none hidden min-[480px]:inline">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-40 md:pt-44 pb-10 sm:pb-16 px-3 sm:px-6 lg:px-8 overflow-hidden cyber-grid">
      <div className="glow-blob-purple top-10 left-1/4"></div>
      <div className="glow-blob-blue bottom-10 right-1/4"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* College & Department Accreditations Banner */}
        <div className="flex flex-col items-center gap-1 mb-5 px-2">
          <span className="font-semibold text-[#9C4221] text-lg sm:text-2xl md:text-3xl lg:text-[36px] leading-tight text-center">Erode Sengunthar Engineering College</span>
          <span className="font-semibold text-[#B45309] text-xs sm:text-base md:text-xl lg:text-[24px]">(Autonomous)</span>
          <span className="font-semibold text-[#2A1608] text-xs sm:text-lg md:text-xl lg:text-[28px] leading-tight text-center">• Department of ECE • Whizzcom Students' Association</span>
        </div>

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r from-[#FFE8CC] via-[#FFF0D9] to-[#FFE8CC] border border-[#D98232]/40 text-[#B45309] font-mono-tech text-[10px] sm:text-xs tracking-widest uppercase mb-4 shadow-sm">
          <Icon name="Sparkles" size={13} className="text-[#D96B27]" />
          NATIONAL-LEVEL MEGA TECH HACKATHON
        </div>

        {/* Main Title */}
        <h1 className="font-heading font-black text-4xl xs:text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#2A1608] uppercase drop-shadow-sm break-words max-w-full">
          <span className="text-gradient-neon">WHIZZHACK</span>
          <span className="text-gradient-cyan">'26</span>
        </h1>

        {/* Subheading */}
        <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-xl md:text-2xl font-bold tracking-wider text-[#B45309] uppercase">
          <span className="h-[2px] w-4 sm:w-12 bg-[#D98232]/50 rounded"></span>
          <span>12-HOUR NON-STOP INNOVATION</span>
          <span className="h-[2px] w-4 sm:w-12 bg-[#D98232]/50 rounded"></span>
        </div>

        {/* Tagline */}
        <p className="mt-2 text-xs sm:text-base md:text-lg font-mono-tech text-[#9C4221] font-medium tracking-wide">
          Code. Build. Solve. Innovate. Impact.
        </p>

        {/* Sponsors Showcase Banner (Title Sponsor & Co-Sponsors) */}
        <div className="mt-6 mb-2 w-full max-w-3xl flex flex-col items-center gap-4 bg-[#FFF5E6]/90 border border-[#D98232]/35 p-4 sm:p-5 rounded-2xl shadow-md backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full">
            {/* Title Sponsor */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-mono-tech font-bold text-[#B45309] uppercase tracking-widest mb-1.5 flex items-center gap-1">
                <Icon name="Crown" size={13} className="text-[#D96B27]" />
                TITLE SPONSOR
              </span>
              <div className="p-2 sm:p-2.5 rounded-xl bg-[#0E0702] border border-amber-500/80 shadow-md flex items-center justify-center hover:scale-105 transition-transform">
                <img 
                  src="majestronicz-sponsor.jpg" 
                  alt="MAJESTRONICZ - Title Sponsor" 
                  className="h-10 sm:h-12 w-auto object-contain rounded"
                />
              </div>
            </div>

            {/* Separator Line */}
            <div className="hidden sm:block h-12 w-[1px] bg-[#D98232]/30"></div>

            {/* Co-Sponsors */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-mono-tech font-bold text-[#B45309] uppercase tracking-widest mb-1.5 flex items-center gap-1">
                <Icon name="Award" size={13} className="text-[#D96B27]" />
                CO-SPONSORS
              </span>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="p-2 rounded-xl bg-white border border-amber-300/80 shadow-md flex items-center justify-center hover:scale-105 transition-transform">
                  <img 
                    src="britannia-sponsor.jpg" 
                    alt="BRITANNIA - Co-Sponsor" 
                    className="h-8 sm:h-10 w-auto object-contain rounded"
                  />
                </div>
                <div className="p-2 rounded-xl bg-white border border-amber-300/80 shadow-md flex items-center justify-center hover:scale-105 transition-transform">
                  <img 
                    src="ntcs-sponsor.jpg" 
                    alt="NTCS - Co-Sponsor" 
                    className="h-8 sm:h-10 w-auto object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Date & Duration Bar */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-6 bg-[#FFF5E6]/90 border border-[#D98232]/30 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl backdrop-blur-md text-[11px] sm:text-sm text-[#2A1608] shadow-md">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Icon name="Calendar" className="text-[#D96B27]" size={16} />
            <span className="font-bold text-[#1F0E04]">22 SEP 2026</span>
            <span className="text-[#B45309] font-bold">TO</span>
            <span className="font-bold text-[#1F0E04]">23 SEP 2026</span>
          </div>
          <span className="hidden sm:inline text-[#D98232]">|</span>
          <div className="flex items-center gap-1.5 text-[#B45309] font-mono-tech font-semibold">
            <Icon name="Clock" className="text-[#D96B27]" size={15} />
            <span>7:00 PM – 7:00 AM</span>
          </div>
        </div>

        {/* Track Pills */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#FFE8CC] border border-[#D96B27]/40 text-[#B45309] text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Icon name="Code2" size={13} />
            SOFTWARE TRACK
          </span>
          <span className="text-[#D98232] hidden min-[400px]:inline">|</span>
          <span className="px-3 py-1 rounded-full bg-[#FFF0D9] border border-[#C05621]/40 text-[#9C4221] text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Icon name="Cpu" size={13} />
            HARDWARE TRACK
          </span>
        </div>

        {/* Countdown Area */}
        <div className="mt-6 sm:mt-8 w-full max-w-xl">
          <p className="text-[10px] sm:text-xs font-mono-tech text-[#6B482B] uppercase tracking-widest mb-1.5">
            HACKATHON COMMENCES IN
          </p>
          <CountdownTimer targetISO={EVENT_DETAILS.dates.targetISO} />
        </div>

        {/* CTAs */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 btn-neon-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-base text-white flex items-center justify-center gap-2.5 uppercase tracking-wider shadow-xl shadow-[#D96B27]/30"
          >
            <span>REGISTER NOW</span>
            <Icon name="ArrowRight" size={17} />
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto flex-1 btn-neon-outline px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-semibold text-xs sm:text-base text-[#2A1608] hover:text-[#D96B27] flex items-center justify-center gap-2 transition"
          >
            <span>EXPLORE EVENT</span>
            <Icon name="ChevronDown" size={17} />
          </a>
        </div>

        {/* Form Note */}
        <p className="mt-3 text-[10px] sm:text-[11px] text-[#6B482B]">
          Official registrations are conducted securely via Google Forms.
        </p>
      </div>
    </section>
  );
};

// --- Statistics & Highlights Section ---
const StatsHighlights = () => {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {EVENT_DETAILS.stats.map((stat, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D96B27]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#6B482B] uppercase">
                {stat.label}
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#FFE8CC] flex items-center justify-center text-[#D96B27] group-hover:scale-110 transition-transform">
                <Icon name={stat.icon} size={16} />
              </div>
            </div>
            <div className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#2A1608] group-hover:text-[#D96B27] transition-colors">
              {stat.value}
            </div>
            <p className="text-xs text-[#B45309] font-medium mt-1">
              {stat.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- About Section ---
const AboutSection = () => {
  const domains = [
    "Artificial Intelligence", "Internet of Things", "Robotics", "Embedded Systems",
    "Cloud Computing", "VLSI Design", "Web3 / Automation", "Smart Hardware"
  ];

  return (
    <section id="about" className="relative py-10 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glow-blob-purple top-1/2 left-0 -translate-y-1/2 opacity-50"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8CC] border border-[#D98232]/40 text-[#B45309] text-xs font-mono-tech uppercase">
            <Icon name="Sparkles" size={14} />
            ABOUT THE EVENT
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#2A1608] tracking-tight">
            BUILD. <span className="text-gradient-cyan">INNOVATE.</span> <span className="text-gradient-purple">IMPACT.</span>
          </h2>

          <p className="text-[#3D2008] text-base sm:text-lg leading-relaxed">
            <strong className="text-[#1F0E04]">WHIZZHACK'26</strong> is a prestigious national-level mega tech hackathon organized by the <strong className="text-[#D96B27]">Whizzcom Students' Association</strong> of the <strong className="text-[#9C4221]">Department of Electronics and Communication Engineering</strong> at <strong className="text-[#1F0E04]">Erode Sengunthar Engineering College</strong>.
          </p>

          <p className="text-[#3D2008] text-sm sm:text-base leading-relaxed">
            The event brings together innovative student teams from colleges and universities across India to transform cutting-edge ideas into practical software and hardware solutions.
          </p>

          {/* Highlight Badge */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFF5E6] via-[#FFE8CC] to-[#FFF0D9] border border-[#D98232]/40 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FFE8CC] flex-shrink-0 flex items-center justify-center text-[#D96B27]">
              <Icon name="Zap" size={24} />
            </div>
            <div>
              <div className="font-bold text-[#2A1608] text-base sm:text-lg tracking-wide uppercase">
                12-HOUR NON-STOP INNOVATION
              </div>
              <p className="text-xs text-[#6B482B]">
                Continuous midnight hacking, multi-stage expert mentoring, midnight networking vibe sessions, and final live demos.
              </p>
            </div>
          </div>

          {/* College Badges */}
          <div className="pt-2 flex flex-wrap gap-2">
            {EVENT_DETAILS.accreditations.map((badge, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-[#FFF5E6] border border-[#D98232]/30 text-[#2A1608] text-xs font-semibold">
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Futuristic Interactive Tech Visual */}
        <div className="lg:col-span-5">
          <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-[#D98232]/30 shadow-xl overflow-hidden group">
            <div className="absolute inset-0 cyber-grid-dense opacity-30"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D96B27]/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-[#D98232]/30 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="font-mono-tech text-[11px] text-[#D96B27]">NODE://WHIZZHACK_26</span>
              </div>

              <div className="py-6 flex flex-col items-center justify-center text-center">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[#D96B27]/30 animate-ping"></div>
                  <div className="absolute inset-2 rounded-full border border-[#C05621]/40 animate-pulse"></div>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#D96B27] to-[#C05621] flex items-center justify-center shadow-lg shadow-[#D96B27]/30">
                    <Icon name="Cpu" size={38} className="text-white" />
                  </div>
                </div>

                <h3 className="font-heading font-black text-xl text-[#2A1608] mt-4 tracking-wide">
                  HARDWARE + SOFTWARE ECOSYSTEM
                </h3>
                <p className="text-xs text-[#6B482B] mt-1 max-w-xs">
                  A dual-track battleground designed to test logic, engineering, and product viability.
                </p>
              </div>

              <div className="pt-2">
                <div className="text-[11px] font-mono-tech text-[#6B482B] uppercase tracking-wider mb-2.5">
                  EXPLORE DOMAINS
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {domains.map((domain, i) => (
                    <span
                      key={i}
                      className="tech-tag px-2.5 py-1 rounded-md text-[11px] font-medium"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Tracks Section ---
const TracksSection = () => {
  return (
    <section id="tracks" className="relative py-10 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8CC] border border-[#D98232]/40 text-[#B45309] text-xs font-mono-tech uppercase mb-3">
          <Icon name="Code2" size={14} />
          DUAL COMPETITION TRACKS
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#2A1608] tracking-tight uppercase">
          CHOOSE YOUR <span className="text-gradient-cyan">TRACK</span>
        </h2>
        <p className="text-[#4A2C11] text-sm sm:text-base mt-3">
          Whether you excel at code syntax or circuit synthesis, WHIZZHACK'26 has a dedicated track for your team to build and shine.
        </p>

        {/* Problem Statements Action Button */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PROBLEM_STATEMENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#FFE8CC] via-[#FFF0D9] to-[#FFE8CC] border border-[#D96B27]/50 text-[#B45309] hover:text-[#2A1608] text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-md hover:scale-105 group"
          >
            <Icon name="FileText" size={16} className="text-[#D96B27] group-hover:rotate-6 transition-transform" />
            <span>VIEW PROBLEM STATEMENTS</span>
            <Icon name="ExternalLink" size={14} className="text-[#D96B27]" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EVENT_DETAILS.tracks.map((track) => (
          <div
            key={track.id}
            className={`glass-panel rounded-3xl p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group border relative overflow-hidden ${track.borderGlow}`}
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${track.accent}`}></div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF5E6] border border-[#D98232]/30 flex items-center justify-center text-[#D96B27] group-hover:scale-110 transition-transform shadow-md">
                  <Icon name={track.icon} size={28} className={track.id === 'software' ? 'text-[#D96B27]' : 'text-[#C05621]'} />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FFE8CC] border border-[#D98232]/30 text-xs font-mono-tech text-[#2A1608] font-semibold tracking-wider">
                  {track.badge}
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#2A1608] tracking-tight">
                {track.title}
              </h3>
              <p className="text-[#3D2008] text-sm sm:text-base mt-4 leading-relaxed">
                {track.description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#D98232]/30">
                <div className="text-xs font-mono-tech text-[#6B482B] uppercase tracking-wider mb-3">
                  SUGGESTED TECH & FOCUS AREAS
                </div>
                <div className="flex flex-wrap gap-2">
                  {track.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#FFF5E6] border border-[#D98232]/30 text-[#2A1608] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={track.id === 'hardware' ? 'https://drive.google.com/file/d/1qvdFEYUAYvts2bbqQLjE9on_XLUyCJn9/view?usp=sharing' : 'https://drive.google.com/file/d/14LoJy4XCitklnwnUHXfzIlsATw8Hj0vf/view?usp=sharing'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-[#2A1608] hover:text-[#1F0E04] bg-[#FFF5E6] hover:bg-[#FFE8CC] border border-[#D98232]/40 flex items-center justify-center gap-2 uppercase tracking-wider transition-all shadow-sm group/btn"
              >
                <Icon name="FileText" size={15} className="text-[#D96B27] group-hover/btn:scale-110 transition-transform" />
                <span>Problem Statement</span>
              </a>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white flex items-center justify-center gap-2 uppercase tracking-wider transition-all duration-300 shadow-md ${
                  track.id === 'software'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-cyan-500/20'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-purple-500/20'
                }`}
              >
                <span>{track.ctaText}</span>
                <Icon name="ArrowRight" size={15} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Why Participate Section ---
const WhyParticipate = () => {
  return (
    <section className="relative py-10 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8CC] border border-[#D98232]/40 text-[#B45309] text-xs font-mono-tech uppercase mb-3">
          <Icon name="Sparkles" size={14} />
          THE EXPERIENCE
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#2A1608] tracking-tight uppercase">
          WHY <span className="text-gradient-purple">WHIZZHACK'26?</span>
        </h2>
        <p className="text-[#4A2C11] text-sm sm:text-base mt-3">
          Five reasons why every ambitious developer and hardware engineer should join this national battleground.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {EVENT_DETAILS.whyParticipate.map((item) => (
          <div
            key={item.number}
            className="glass-panel rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D96B27]/50 group relative"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-tech font-bold text-2xl text-[#B45309] group-hover:text-[#D96B27] transition-colors">
                  {item.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#FFF5E6] border border-[#D98232]/30 flex items-center justify-center text-[#D96B27] group-hover:scale-110 transition-transform">
                  <Icon name={item.icon} size={18} />
                </div>
              </div>
              <h3 className="font-heading font-black text-xl text-[#2A1608] tracking-wide uppercase group-hover:text-[#D96B27] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#3D2008] text-xs sm:text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#D98232]/30">
              <span className="text-[11px] font-mono-tech text-[#6B482B] group-hover:text-[#2A1608] transition-colors">
                WHIZZHACK IMPACT
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Hackathon Schedule Section (15 Official Stages) ---
const ScheduleSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredSchedule = useMemo(() => {
    if (filter === "all") return EVENT_DETAILS.schedule;
    if (filter === "day1") return EVENT_DETAILS.schedule.filter(s => s.day.includes("Day 1"));
    if (filter === "day2") return EVENT_DETAILS.schedule.filter(s => s.day.includes("Day 2"));
    if (filter === "milestones") return EVENT_DETAILS.schedule.filter(s => s.isMilestone);
    return EVENT_DETAILS.schedule;
  }, [filter]);

  return (
    <section id="schedule" className="relative py-10 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8CC] border border-[#D98232]/40 text-[#B45309] text-xs font-mono-tech uppercase mb-3">
          <Icon name="Clock" size={14} />
          EVENT TIMELINE
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#2A1608] tracking-tight uppercase">
          HACKATHON <span className="text-gradient-cyan">JOURNEY</span>
        </h2>
        <p className="text-[#4A2C11] text-sm sm:text-base mt-3">
          A seamless 12-hour high-octane schedule packed with builds, expert reviews, delicious meals, midnight vibes, and morning finals.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "all", label: "Full Journey (All 15 Stages)" },
            { id: "day1", label: "Day 1 (22 Sept)" },
            { id: "day2", label: "Day 2 (23 Sept)" },
            { id: "milestones", label: "Key Milestones Only" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-[#D96B27] to-[#E57E25] text-white shadow-md shadow-[#D96B27]/20'
                  : 'bg-[#FFF5E6] text-[#2A1608] hover:bg-[#FFE8CC] border border-[#D98232]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Items List */}
      <div className="relative max-w-4xl mx-auto">
        <div className="hidden sm:block absolute top-0 bottom-0 left-8 md:left-1/2 w-0.5 bg-gradient-to-b from-[#D96B27] via-[#C05621] to-transparent -translate-x-1/2"></div>

        <div className="space-y-4 sm:space-y-6">
          {filteredSchedule.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-4 group`}
              >
                <div className="hidden sm:flex absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#2A1608] border-2 border-[#D96B27] items-center justify-center text-xs font-mono-tech text-[#FFE8CC] shadow-md group-hover:scale-125 group-hover:border-[#E57E25] transition-all z-10">
                  <Icon name={item.icon} size={14} />
                </div>

                <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div
                    className={`glass-panel rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 ${
                      item.isMilestone
                        ? 'border-[#D96B27]/50 bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] shadow-md shadow-[#D96B27]/10'
                        : 'border-[#D98232]/30 bg-[#FFF8EE]'
                    }`}
                  >
                    <div className={`flex flex-wrap items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                      <span className="font-mono-tech font-bold text-xs px-2.5 py-0.5 rounded-md bg-[#FFE8CC] border border-[#D98232]/40 text-[#B45309]">
                        STAGE {item.number}
                      </span>
                      <span className="text-xs font-semibold text-[#9C4221] px-2 py-0.5 rounded-md bg-[#FFF0D9] border border-[#C05621]/30">
                        {item.time}
                      </span>
                      {item.isMilestone && (
                        <span className="text-[10px] font-bold text-[#7C4500] px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-600/40 uppercase tracking-wide">
                          Milestone
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-black text-lg sm:text-xl text-[#2A1608] tracking-wide group-hover:text-[#D96B27] transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-[#3D2008] text-xs sm:text-sm mt-1.5 leading-relaxed">
                      {item.description}
                    </p>

                    <div className={`mt-3 pt-2 text-[11px] font-mono-tech text-[#6B482B] ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                      {item.day}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Prizes Section ---
const PrizesSection = () => {
  return (
    <section id="prizes" className="relative py-10 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="glow-blob-blue top-1/3 right-0 opacity-40"></div>

      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8CC] border border-[#D98232]/40 text-[#B45309] text-xs font-mono-tech uppercase mb-3">
          <Icon name="Trophy" size={14} />
          COMPETITION REWARDS
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-6xl text-[#2A1608] tracking-tight uppercase">
          <span className="text-gradient-gold">{EVENT_DETAILS.prizes.totalPool}</span> PRIZE POOL
        </h2>
        <p className="text-[#B45309] text-sm sm:text-base font-bold mt-2 tracking-widest uppercase">
          {EVENT_DETAILS.prizes.subtitle}
        </p>
      </div>

      {/* Trophy Spotlight Graphic */}
      <div className="relative max-w-lg mx-auto mb-16 flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-[#FFE8CC] via-[#FFF0D9] to-[#FFE0A8] blur-3xl absolute -top-4"></div>
        <div className="relative z-10 w-32 h-32 rounded-3xl bg-gradient-to-b from-[#D96B27] to-[#B45309] p-[2px] shadow-2xl shadow-[#D96B27]/30 animate-float">
          <div className="w-full h-full bg-[#2A1608] rounded-[22px] flex items-center justify-center">
            <Icon name="Trophy" size={64} className="text-[#FFE8CC] drop-shadow-[0_0_20px_rgba(245,185,107,0.6)]" />
          </div>
        </div>
        <div className="mt-4 text-center">
          <span className="font-mono-tech text-xs tracking-widest text-[#6B482B] uppercase">
            RECOGNIZING NATIONAL-LEVEL EXCELLENCE
          </span>
        </div>
      </div>

      {/* Main Track Prizes Announcement Banner */}
      <div className="glass-panel rounded-3xl p-5 sm:p-10 lg:p-12 text-center max-w-4xl mx-auto border border-[#D98232]/50 shadow-xl relative overflow-hidden mb-10 group">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#D96B27]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#C05621]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE8CC] border border-[#D98232]/40 text-[#B45309] text-xs font-mono-tech tracking-wider uppercase mb-6 shadow-sm">
          <Icon name="Sparkles" size={14} className="text-[#D96B27]" />
          OFFICIAL PRIZE ANNOUNCEMENT
        </div>

        <h3 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-[#2A1608] tracking-tight leading-tight">
          Exciting prizes will be awarded in both the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C05621] to-[#D97706]">
            Hardware
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D96B27] to-[#B45309]">
            Software Track
          </span>
        </h3>

        <p className="mt-5 text-[#3D2008] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
          Showcase your skills, build real-world prototypes, and compete for massive rewards, prestigious trophies, and certificates of national recognition.
        </p>

        <div className="mt-8 pt-6 border-t border-[#D98232]/30 flex flex-wrap items-center justify-center gap-4 text-xs font-mono-tech text-[#6B482B]">
          <span className="flex items-center gap-1.5 text-[#D96B27] font-bold">
            <Icon name="CheckCircle" size={14} /> Cash Rewards
          </span>
          <span className="text-[#D98232]">•</span>
          <span className="flex items-center gap-1.5 text-[#B45309] font-bold">
            <Icon name="Trophy" size={14} /> Winner & Runner-up Trophies
          </span>
          <span className="text-[#D98232]">•</span>
          <span className="flex items-center gap-1.5 text-[#C05621] font-bold">
            <Icon name="Award" size={14} /> Merit & Participation Certificates
          </span>
        </div>
      </div>

      {/* Track Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#D98232]/40 shadow-md hover:-translate-y-1 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF5E6] border border-[#D98232]/30 flex items-center justify-center text-[#D96B27]">
                <Icon name="Code" size={24} />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FFE8CC] border border-[#D98232]/40 text-[#B45309] text-xs font-mono-tech uppercase font-bold">
                Software Track
              </span>
            </div>
            <h4 className="font-heading font-black text-xl text-[#2A1608] uppercase">
              Software Excellence Awards
            </h4>
            <p className="text-xs sm:text-sm text-[#3D2008] mt-2 leading-relaxed">
              Prizes awarded for top software systems, full-stack applications, AI/ML implementations, and high-impact algorithms.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#D98232]/30 flex items-center justify-between text-xs font-mono-tech text-[#D96B27] font-bold">
            <span>TROPHY + PRIZES</span>
            <span>★ MERIT CERTIFICATE</span>
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#D98232]/40 shadow-md hover:-translate-y-1 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF5E6] border border-[#D98232]/30 flex items-center justify-center text-[#C05621]">
                <Icon name="Cpu" size={24} />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FFF0D9] border border-[#C05621]/40 text-[#9C4221] text-xs font-mono-tech uppercase font-bold">
                Hardware Track
              </span>
            </div>
            <h4 className="font-heading font-black text-xl text-[#2A1608] uppercase">
              Hardware Innovation Awards
            </h4>
            <p className="text-xs sm:text-sm text-[#3D2008] mt-2 leading-relaxed">
              Prizes awarded for outstanding embedded hardware, IoT systems, robotics, smart electronics, and working prototypes.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#D98232]/30 flex items-center justify-between text-xs font-mono-tech text-[#C05621] font-bold">
            <span>TROPHY + PRIZES</span>
            <span>★ MERIT CERTIFICATE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Participation Details Section ---
const ParticipationDetails = () => {
  return (
    <section id="details" className="relative py-10 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8CC] border border-[#D98232]/40 text-[#B45309] text-xs font-mono-tech uppercase mb-3">
          <Icon name="Users" size={14} />
          KEY LOGISTICS
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#2A1608] tracking-tight uppercase">
          PARTICIPATION <span className="text-gradient-cyan">DETAILS</span>
        </h2>
        <p className="text-[#4A2C11] text-sm sm:text-base mt-3">
          All essential event parameters verified from the official WHIZZHACK'26 poster.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EVENT_DETAILS.participationDetails.map((detail, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:border-[#D96B27]/40 hover:-translate-y-1 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FFF5E6] border border-[#D98232]/40 flex items-center justify-center flex-shrink-0 text-[#D96B27] shadow-sm">
              <Icon name={detail.icon} size={22} />
            </div>
            <div>
              <span className="text-xs font-mono-tech text-[#6B482B] uppercase tracking-wider">
                {detail.title}
              </span>
              <div className="font-heading font-bold text-xl text-[#2A1608] mt-0.5">
                {detail.value}
              </div>
              <p className="text-xs text-[#3D2008] mt-1">
                {detail.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- FAQ Section ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-10 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8CC] border border-[#D98232]/40 text-[#B45309] text-xs font-mono-tech uppercase mb-3">
          <Icon name="ClipboardCheck" size={14} />
          CLEAR ANSWERS
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#2A1608] tracking-tight uppercase">
          FREQUENTLY ASKED <span className="text-gradient-purple">QUESTIONS</span>
        </h2>
        <p className="text-[#4A2C11] text-sm sm:text-base mt-3">
          Official answers based on confirmed event documentation.
        </p>
      </div>

      <div className="space-y-4">
        {EVENT_DETAILS.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-[#FFF0D9] border-[#D96B27]/50 shadow-md'
                  : 'bg-[#FFF8EE] border-[#D98232]/30 hover:border-[#D96B27]/40'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-heading font-bold text-base sm:text-lg text-[#2A1608] pr-4">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-lg bg-[#FFF5E6] border border-[#D98232]/40 flex items-center justify-center text-[#D96B27] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#B45309] bg-[#FFE8CC]' : ''}`}>
                  <Icon name="ChevronDown" size={18} />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-[#3D2008] text-sm sm:text-base leading-relaxed border-t border-[#D98232]/30 font-medium">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

// --- Full Width Registration CTA Section ---
const RegistrationCTA = () => {
  return (
    <section className="relative py-10 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl p-5 sm:p-12 lg:p-14 bg-gradient-to-r from-[#FFF0D9] via-[#FFE8CC] to-[#FFE0A8] border border-[#D96B27]/50 shadow-xl overflow-hidden text-center">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D96B27]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C05621]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE8CC] border border-[#D98232]/50 text-[#B45309] text-xs font-mono-tech uppercase">
            <Icon name="Sparkles" size={14} />
            LIMITED SLOTS AVAILABLE
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-6xl text-[#1F0E04] tracking-tight uppercase">
            READY TO BUILD <span className="text-gradient-neon">THE FUTURE?</span>
          </h2>

          <p className="text-[#3D2008] text-base sm:text-xl leading-relaxed font-medium">
            Gather your team of 3–5 innovators. Bring your ideas. Build something that matters at WHIZZHACK'26.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-neon-primary px-10 py-5 rounded-2xl font-black text-base sm:text-lg text-white flex items-center justify-center gap-3 uppercase tracking-wider shadow-2xl shadow-[#D96B27]/30 hover:scale-105 transition-transform"
            >
              <span>REGISTER NOW →</span>
            </a>
          </div>

          <p className="text-xs text-[#6B482B]">
            Registration is completly through the official Google Form
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Contact & Coordinators Section ---
const ContactSection = () => {
  return (
    <section id="contact" className="relative py-10 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8CC] border border-[#D98232]/40 text-[#B45309] text-xs font-mono-tech uppercase mb-3">
          <Icon name="Phone" size={14} />
          DIRECT ASSISTANCE
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#2A1608] tracking-tight uppercase">
          EVENT <span className="text-gradient-cyan">COORDINATORS</span>
        </h2>
        <p className="text-[#4A2C11] text-sm sm:text-base mt-3">
          Have queries about rules, accommodations, or registration? Reach out directly to our student and staff coordinators.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Student Coordinators (6 people) */}
        <div className="lg:col-span-8 glass-panel rounded-3xl p-6 sm:p-8 border border-[#D98232]/30">
          <div className="flex items-center gap-2 mb-6 border-b border-[#D98232]/30 pb-4">
            <Icon name="Users" className="text-[#D96B27]" size={22} />
            <h3 className="font-heading font-bold text-xl text-[#2A1608] tracking-wide uppercase">
              STUDENT COORDINATORS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_DETAILS.studentCoordinators.map((c, i) => (
              <div
                key={i}
                className="bg-[#FFF8EE] border border-[#D98232]/30 hover:border-[#D96B27]/50 rounded-2xl p-6 transition-all group hover:shadow-md"
              >
                <div className="font-heading font-bold text-[#1F0E04] text-lg group-hover:text-[#D96B27] transition-colors">
                  {c.name}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={`tel:${c.phone}`}
                    className="inline-flex items-center gap-2 text-sm font-mono-tech text-[#D96B27] hover:text-[#B45309] font-bold"
                  >
                    <Icon name="Phone" size={16} />
                    {c.phone}
                  </a>
                  <a
                    href={`https://wa.me/91${c.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600/15 text-emerald-800 hover:bg-emerald-600/25 text-xs font-bold transition-colors"
                    title="Chat on WhatsApp"
                  >
                    WA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Coordinators & Sponsors */}
        <div className="lg:col-span-4 space-y-6">
          {/* Staff Coordinators */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#D98232]/30">
            <div className="flex items-center gap-2 mb-6 border-b border-[#D98232]/30 pb-4">
              <Icon name="Award" className="text-[#C05621]" size={22} />
              <h3 className="font-heading font-bold text-xl text-[#2A1608] tracking-wide uppercase">
                STAFF COORDINATORS
              </h3>
            </div>

            <div className="space-y-4">
              {EVENT_DETAILS.staffCoordinators.map((c, i) => (
                <div
                  key={i}
                  className="bg-[#FFF8EE] border border-[#D98232]/30 hover:border-[#D96B27]/40 rounded-2xl p-4 transition-all"
                >
                  <div className="font-heading font-bold text-[#1F0E04] text-base">
                    {c.name}
                  </div>
                  <div className="text-xs text-[#9C4221] font-bold">{c.designation}</div>
                  <div className="mt-2">
                    <a
                      href={`tel:${c.phone}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#D96B27] hover:text-[#B45309] font-bold"
                    >
                      <Icon name="Phone" size={14} />
                      {c.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Valued Sponsors */}
          <div className="glass-panel rounded-3xl p-6 border border-[#D98232]/30">
            <div className="text-xs font-mono-tech text-[#6B482B] uppercase tracking-wider text-center mb-5 font-bold">
              OUR VALUED SPONSORS & PARTNERS
            </div>
            <SponsorCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#2A1608] border-t border-[#3D2008] pt-10 sm:pt-16 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 text-[#FFE8CC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#4A2C11]">
        {/* Brand info */}
        <div className="md:col-span-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#D96B27] to-[#E57E25] p-[1.5px] shadow-md flex-shrink-0">
              <div className="w-full h-full bg-[#1F0E04] rounded-[10px] flex items-center justify-center font-heading font-black text-[#FFE8CC] text-xs sm:text-sm tracking-tight px-1 select-none">
                W'26
              </div>
            </div>
            <div>
              <span className="font-heading font-black text-2xl text-white tracking-tight">
                WHIZZHACK<span className="text-[#D96B27]">'26</span>
              </span>
              <p className="text-xs text-[#FFE0A8]">National-Level Mega Tech Hackathon</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#FFE0A8] max-w-md leading-relaxed">
            Organized by the <strong className="text-white">Whizzcom Students' Association</strong>, Department of Electronics and Communication Engineering at <strong className="text-white">Erode Sengunthar Engineering College</strong> (Autonomous), Perundurai – 638057.
          </p>

          <div className="text-xs text-[#F4B964] font-mono-tech font-semibold">
            12-Hour Non-Stop Innovation • 22–23 September 2026
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <div className="font-heading font-bold text-white text-sm uppercase tracking-wider">
            Quick Navigation
          </div>
          <ul className="space-y-2 text-xs">
            {["Home", "About", "Tracks", "Schedule", "Prizes", "Details", "FAQ", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-[#D96B27] transition-colors text-[#FFE0A8]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Registration Quick Action */}
        <div className="md:col-span-3 space-y-4">
          <div className="font-heading font-bold text-white text-sm uppercase tracking-wider">
            Registration
          </div>
          <p className="text-xs text-[#FFE0A8]">
            Submit your team via the official Google Form. Team size: 3–5 members.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-neon-primary py-2.5 px-4 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            <span>Open Google Form</span>
            <Icon name="ExternalLink" size={14} />
          </a>
        </div>
      </div>

      {/* Sponsor Strip */}
      <div className="max-w-7xl mx-auto py-5 border-b border-[#4A2C11] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FFE0A8]">
          <span>POWERED & SUPPORTED BY</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-lg bg-red-600 text-white font-black text-xs tracking-wider shadow-sm">
            BRITANNIA®
          </span>
          <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#F4B964] via-[#ECA54B] to-[#D9822B] text-slate-950 font-black text-xs tracking-wider shadow-sm">
            MAJESTRONICZ
          </span>
          <div className="px-3 py-1 rounded-lg bg-white text-slate-900 font-bold text-xs flex items-center gap-2 shadow-sm">
            <span className="font-extrabold text-indigo-700">NTCS</span>
            <span className="text-[10px] text-slate-500 font-medium hidden sm:inline">| No.1 Technical Training in Coimbatore</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFE0A8]">
        <div>
          © 2026 WHIZZHACK'26. All Rights Reserved. Erode Sengunthar Engineering College.
        </div>
        <button
          onClick={scrollToTop}
          className="hover:text-[#D96B27] font-mono-tech flex items-center gap-1 transition-colors text-[#FFE0A8]"
        >
          <span>Back to top</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
};

// --- Root Application Component ---
const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6C27A] text-[#2A1608] selection:bg-[#D96B27] selection:text-white">
      <ParticleBackground />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsHighlights />
        <AboutSection />
        <TracksSection />
        <WhyParticipate />
        <ScheduleSection />
        <PrizesSection />
        <ParticipationDetails />
        <RegistrationCTA />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

// Mount App to DOM
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
