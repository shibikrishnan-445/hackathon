// ==========================================
// WHIZZHACK'26 - CENTRAL CONFIGURATION FILE
// ==========================================

/**
 * Replace this URL with your official Google Form link.
 * Every "Register Now" / "Register for Track" button across the entire website
 * will automatically point to this URL and open in a new tab.
 */
export const GOOGLE_FORM_URL = "GOOGLE_FORM_URL_HERE";
export const LOCATION_URL = "https://maps.app.goo.gl/ksw6Hf2EmFq3EtDDA";
export const PROBLEM_STATEMENTS_URL = "https://drive.google.com/file/d/1WRbtGBoWXX3yqRq3yX3ydGaXLaqoiTKn/view?usp=drivesdk";

export const EVENT_DETAILS = {
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
    // Target ISO timestamp for Countdown (22 Sept 2026, 18:00:00 IST = UTC+5:30)
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
    {
      id: 1,
      number: "01",
      title: "EVENT INAUGURATION",
      time: "6:00 PM",
      day: "Day 1 (22 Sept)",
      description: "Kickstart the innovation journey with an inspiring beginning.",
      isMilestone: true,
      category: "milestone",
      icon: "Sparkles"
    },
    {
      id: 2,
      number: "02",
      title: "HACKATHON BUILD START",
      time: "7:00 PM",
      day: "Day 1 (22 Sept)",
      description: "Let the coding, designing and building begin!",
      isMilestone: true,
      category: "milestone",
      icon: "PlayCircle"
    },
    {
      id: 3,
      number: "03",
      title: "FIRST REVIEW",
      time: "7:00 PM – 8:30 PM",
      day: "Day 1 (22 Sept)",
      description: "Present your progress and get feedback from mentors.",
      isMilestone: true,
      category: "review",
      icon: "ClipboardCheck"
    },
    {
      id: 4,
      number: "04",
      title: "DINNER",
      time: "8:30 PM – 9:30 PM",
      day: "Day 1 (22 Sept)",
      description: "Dinner will be provided.",
      isMilestone: false,
      category: "refreshment",
      icon: "Utensils"
    },
    {
      id: 5,
      number: "05",
      title: "BUILD SESSION",
      time: "9:30 PM – 11:30 PM",
      day: "Day 1 (22 Sept)",
      description: "Continue building your ideas and solutions.",
      isMilestone: false,
      category: "build",
      icon: "Code"
    },
    {
      id: 6,
      number: "06",
      title: "REFRESHMENTS",
      time: "11:30 PM – 12:00 AM",
      day: "Day 1 (22 Sept)",
      description: "Tea + snacks will be provided.",
      isMilestone: false,
      category: "refreshment",
      icon: "Coffee"
    },
    {
      id: 7,
      number: "07",
      title: "SECOND REVIEW",
      time: "12:00 AM – 2:00 AM",
      day: "Day 2 (23 Sept)",
      description: "Present your progress and get feedback from mentors.",
      isMilestone: true,
      category: "review",
      icon: "FileCheck"
    },
    {
      id: 8,
      number: "08",
      title: "NETWORK & VIBE TIME",
      time: "2:00 AM – 2:45 AM",
      day: "Day 2 (23 Sept)",
      description: "Communicate, collaborate with other teams, build connections and enjoy the vibe.",
      isMilestone: false,
      category: "vibe",
      icon: "Music"
    },
    {
      id: 9,
      number: "09",
      title: "REFRESHMENTS",
      time: "2:45 AM – 3:00 AM",
      day: "Day 2 (23 Sept)",
      description: "Refreshments will be provided.",
      isMilestone: false,
      category: "refreshment",
      icon: "Coffee"
    },
    {
      id: 10,
      number: "10",
      title: "BUILD SESSION",
      time: "3:00 AM – 5:00 AM",
      day: "Day 2 (23 Sept)",
      description: "Continue building your ideas and solutions.",
      isMilestone: false,
      category: "build",
      icon: "Zap"
    },
    {
      id: 11,
      number: "11",
      title: "REFRESHMENTS",
      time: "5:00 AM – 6:30 AM",
      day: "Day 2 (23 Sept)",
      description: "Refreshments will be provided. Freshen up and get ready for the final showcase.",
      isMilestone: false,
      category: "refreshment",
      icon: "Sun"
    },
    {
      id: 12,
      number: "12",
      title: "BUILD SESSION",
      time: "6:30 AM – 7:00 AM",
      day: "Day 2 (23 Sept)",
      description: "Continue building your ideas and solutions.",
      isMilestone: false,
      category: "build",
      icon: "CheckCircle"
    },
    {
      id: 13,
      number: "13",
      title: "FINAL DEMONSTRATION",
      time: "7:00 AM – 9:30 AM",
      day: "Day 2 (23 Sept)",
      description: "Showcase your final solution to the judges.",
      isMilestone: true,
      category: "milestone",
      icon: "Presentation"
    },
    {
      id: 14,
      number: "14",
      title: "HACKATHON FINISHED",
      time: "9:30 AM",
      day: "Day 2 (23 Sept)",
      description: "The innovation journey comes to an end.",
      isMilestone: true,
      category: "milestone",
      icon: "Flag"
    },
    {
      id: 15,
      number: "15",
      title: "BREAKFAST",
      time: "9:30 AM – 10:30 AM",
      day: "Day 2 (23 Sept)",
      description: "Breakfast will be provided. Refuel and recharge.",
      isMilestone: false,
      category: "refreshment",
      icon: "UtensilsCrossed"
    }
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
    {
      q: "1. Who can participate?",
      a: "WHIZZHACK'26 is a National-Level Mega Tech Hackathon for student innovators. Please contact the event coordinators for further details on department or institution eligibility."
    },
    {
      q: "2. What is the team size?",
      a: "Teams must consist of 3 to 5 members."
    },
    {
      q: "3. What is the registration fee?",
      a: "The registration fee is ₹500 per head only."
    },
    {
      q: "4. What are the available tracks?",
      a: "There are two major tracks: SOFTWARE TRACK (Code • Build • Solve) and HARDWARE TRACK (Design • Innovate • Impact)."
    },
    {
      q: "5. Is accommodation provided?",
      a: "Yes, accommodation will be provided for the participants."
    },
    {
      q: "6. Are refreshments provided?",
      a: "Yes, refreshments, dinner, midnight tea/snacks, and breakfast will be provided throughout the event schedule."
    },
    {
      q: "7. How do I register?",
      a: "Click on any 'REGISTER NOW' button on this website to open the official Google Form in a new tab and submit your team details."
    },
    {
      q: "8. What is the event date?",
      a: "The hackathon takes place from 22 September 2026 (Tuesday) to 23 September 2026 (Wednesday)."
    },
    {
      q: "9. When does the hackathon begin?",
      a: "Event inauguration starts at 6:00 PM on 22 September 2026, and the 12-hour hackathon build starts at 7:00 PM."
    },
    {
      q: "10. Where is the event conducted?",
      a: "At Erode Sengunthar Engineering College (Autonomous), Perundurai – 638057, organized by the Whizzcom Students' Association, Department of Electronics and Communication Engineering."
    }
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
      name: "MAJESTRONICZ", 
      tier: "Official Sponsor", 
      logoText: "MAJESTRONICZ", 
      image: "majestronicz-sponsor.jpg", 
      isHeadline: true 
    },
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

// Global fallback for direct browser script access
if (typeof window !== "undefined") {
  window.WHIZZHACK_CONFIG = EVENT_DETAILS;
  window.GOOGLE_FORM_URL = GOOGLE_FORM_URL;
  window.LOCATION_URL = LOCATION_URL;
  window.PROBLEM_STATEMENTS_URL = PROBLEM_STATEMENTS_URL;
}
