import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Bug,
  CircuitBoard,
  Cpu,
  Gauge,
  GitBranch,
  Layers,
  Lock,
  Radar,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Wrench,
  Zap,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/*  Identity                                                                  */
/* -------------------------------------------------------------------------- */

export const identity = {
  name: 'Rishi P',
  fullName: 'Rishi P',
  initials: 'RP',
  degree: 'B.E. Electronics & Communication Engineering',
  university: 'Global Academy of Technology, Bengaluru',
  location: 'Bengaluru, India',
  tagline:
    'Building intelligent hardware, secure embedded systems, and autonomous technologies',
  heroIntro:
    'Final-year Electronics & Communication Engineering student at Global Academy of Technology, Bengaluru. I work across embedded firmware, RTL and digital design, IoT security, robotics and Edge AI — building systems where the hardware and the software are designed together.',
  summary:
    'I like problems that cross the boundary between disciplines: a secure telemetry link that has to hold up on real hardware, an RTL block that has to pass verification, a drone swarm that has to coordinate without colliding. My interest is in the implementation details — how a protocol becomes a state machine, how a design becomes gates, how hardware and software meet at an interface.',
  availability: 'Open to embedded, RTL, firmware and robotics roles.',
} as const

/* -------------------------------------------------------------------------- */
/*  Links                                                                     */
/* -------------------------------------------------------------------------- */

export const links = {
  email: 'rishi1ga23ec135@gmail.com',
  emailHref: 'mailto:rishi1ga23ec135@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rishi-p2105/',
  linkedinHandle: 'rishi-p2105',
  github: 'https://github.com/rishivexe-alt',
  githubHandle: 'rishivexe-alt',
} as const

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export interface NavItem {
  id: string
  label: string
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'exploring', label: 'Exploring' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

/* -------------------------------------------------------------------------- */
/*  Education                                                                 */
/* -------------------------------------------------------------------------- */

export interface EducationItem {
  institution: string
  qualification: string
  detail: string
  score: string
  scoreLabel: string
  period: string
  location: string
  highlights: string[]
  current?: boolean
}

export const education: EducationItem[] = [
  {
    institution: 'Global Academy of Technology',
    qualification: 'B.E. Electronics & Communication Engineering',
    detail: 'VTU B.E. Honours programme',
    score: '9.48',
    scoreLabel: 'CGPA',
    period: 'Final year',
    location: 'Bengaluru, India',
    highlights: [
      'Coursework and projects across digital design, embedded systems, communication and VLSI.',
      'Major project work in secure IoT, RTL accelerators and autonomous drone systems.',
      'Branch Representative for the ECE cohort.',
    ],
    current: true,
  },
  {
    institution: 'RNS PU College',
    qualification: 'Pre-University — Science',
    detail: 'PUC examination',
    score: '88%',
    scoreLabel: 'Aggregate',
    period: 'Higher secondary',
    location: 'Bengaluru, India',
    highlights: [
      'Physics, Chemistry and Mathematics as the core stream.',
      'Built the first circuit-level intuitions that led towards electronics and communication.',
    ],
  },
  {
    institution: 'Aryan Presidency School',
    qualification: 'ICSE — Secondary School Certificate',
    detail: 'ICSE board',
    score: '94%',
    scoreLabel: 'Aggregate',
    period: 'Secondary school',
    location: 'Bengaluru, India',
    highlights: [
      'Physics and mathematics focus, with an early interest in how circuits and systems actually work.',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

export type ProjectCategory = 'Security' | 'Robotics' | 'AI / Vision' | 'Power'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  summary: string
  tags: string[]
  /** Public repository. Every project listed here has a published repository. */
  repoUrl: string
  repoLabel: string
  icon: LucideIcon
}

export const projects: Project[] = [
  {
    id: 'secure-iot',
    title: 'Secure IoT Communication System',
    category: 'Security',
    summary:
      'ESP8266 industrial monitoring node with AES-128-CBC protected telemetry over MQTT. Safety thresholds are evaluated on the device before data is transmitted, and a preliminary Edge-AI security detection module is documented alongside it.',
    tags: ['ESP8266', 'Embedded C', 'AES-128-CBC', 'MQTT / Mosquitto', 'Python', 'SQLite', 'Streamlit', 'Edge AI'],
    repoUrl: 'https://github.com/rishivexe-alt/AES-Enabled-Industrial-IoT-Monitoring-and-Safety-System',
    repoLabel: 'AES-Enabled-Industrial-IoT-Monitoring-and-Safety-System',
    icon: ShieldCheck,
  },
  {
    id: 'aerocrypt',
    title: 'AeroCrypt',
    category: 'Security',
    summary:
      'Secure long-range UAV telemetry system on ESP32, LoRa and GPS, with AES-128-GCM protecting the air link. Separate UAV transmitter and ground receiver firmware, with a live ground-station dashboard for position, environmental and inertial channels.',
    tags: ['ESP32', 'LoRa', 'GPS', 'AES-128-GCM', 'Telemetry', 'Firmware', 'Dashboard'],
    repoUrl: 'https://github.com/rishivexe-alt/AeroCrypt',
    repoLabel: 'AeroCrypt',
    icon: Lock,
  },
  {
    id: 'aerostack2',
    title: 'AeroStack2 Multi-Drone Systems',
    category: 'Robotics',
    summary:
      'ROS 2 Humble, AeroStack2 and Gazebo simulation of three quadrotors coordinated from a single Python process: leader-follower formation control, plus fault-tolerant task reallocation that detects a delayed drone, preempts a helper and transfers unfinished work. Simulation only, verified in Gazebo.',
    tags: ['ROS 2 Humble', 'AeroStack2', 'PX4 SITL', 'Gazebo', 'Python', 'Formation Control'],
    repoUrl: 'https://github.com/rishivexe-alt/aerostack2-multi-drone-systems',
    repoLabel: 'aerostack2-multi-drone-systems',
    icon: Bot,
  },
  {
    id: 'ipt-ev',
    title: 'Resonant Inductive Power Transfer for EVs',
    category: 'Power',
    summary:
      'Resonant inductive wireless charging model for electric vehicles in MATLAB, Simulink and Simscape Electrical, with the coil and compensation network derived for a 30 kHz operating point and the loss budget broken down per component.',
    tags: ['MATLAB', 'Simulink', 'Simscape Electrical', 'Resonant Converter', 'Wireless Charging'],
    repoUrl: 'https://github.com/rishivexe-alt/Resonant-Inductive-Power-Transfer-for-EVs',
    repoLabel: 'Resonant-Inductive-Power-Transfer-for-EVs',
    icon: Zap,
  },
  {
    id: 'pcb-inspector',
    title: 'PCB AI Defect Inspector',
    category: 'AI / Vision',
    summary:
      'YOLOv8-based PCB defect detection and localisation with an interactive Streamlit inspection dashboard for reviewing detections, comparing visualisations and exporting results.',
    tags: ['YOLOv8', 'Python', 'PyTorch', 'Streamlit', 'Computer Vision', 'Edge AI'],
    repoUrl: 'https://github.com/rishivexe-alt/PCB-AI-Defect-Inspector',
    repoLabel: 'PCB-AI-Defect-Inspector',
    icon: Radar,
  },
]

/* -------------------------------------------------------------------------- */
/*  Skills                                                                    */
/* -------------------------------------------------------------------------- */

export interface SkillGroup {
  title: string
  icon: LucideIcon
  summary: string
  items: { name: string; note?: string }[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'RTL & Digital Design',
    icon: Cpu,
    summary: 'Hardware description, verification and synthesis.',
    items: [
      { name: 'Verilog' },
      { name: 'SystemVerilog' },
      { name: 'RTL design' },
      { name: 'Design verification' },
      { name: 'SVA assertions' },
      { name: 'Functional coverage' },
      { name: 'Constrained-random testing' },
      { name: 'Cadence Genus' },
      { name: 'Vivado' },
    ],
  },
  {
    title: 'Embedded & Communication',
    icon: CircuitBoard,
    summary: 'Firmware on real silicon, and the links it speaks over.',
    items: [
      { name: 'Embedded C' },
      { name: 'ESP32' },
      { name: 'ESP8266' },
      { name: 'STM32' },
      { name: 'UART' },
      { name: 'SPI' },
      { name: 'I2C' },
      { name: 'GPIO' },
      { name: 'LoRa' },
      { name: 'MQTT' },
    ],
  },
  {
    title: 'Robotics & Autonomy',
    icon: Bot,
    summary: 'Simulation stacks, flight control and multi-agent coordination.',
    items: [
      { name: 'ROS 2 Humble' },
      { name: 'AeroStack2' },
      { name: 'PX4' },
      { name: 'QGroundControl' },
      { name: 'Gazebo' },
      { name: 'MAVLink' },
      { name: 'MAVSDK' },
      { name: 'Formation control' },
    ],
  },
  {
    title: 'AI, Simulation & Tools',
    icon: Sparkles,
    summary: 'Model development, multi-domain simulation and engineering workflow.',
    items: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'YOLOv8' },
      { name: 'Edge AI' },
      { name: 'MATLAB' },
      { name: 'Simulink' },
      { name: 'Simscape Electrical' },
      { name: 'COMSOL' },
      { name: 'EasyEDA' },
      { name: 'Git' },
      { name: 'Linux' },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  Currently Exploring                                                        */
/* -------------------------------------------------------------------------- */

export interface ExploringItem {
  title: string
  description: string
  icon: LucideIcon
}

export const currentlyExploring: ExploringItem[] = [
  {
    title: 'RTL verification',
    description:
      'Closing verification properly — assertions, coverage-driven stimulus and knowing when the testbench has actually proven the design.',
    icon: Bug,
  },
  {
    title: 'Power-aware architectures',
    description:
      'Making power and area first-class constraints in RTL, through gating and architectural choices rather than post-hoc measurement.',
    icon: Gauge,
  },
  {
    title: 'Firmware & real-time systems',
    description:
      'Scheduling, concurrency and resource limits on real hardware — what actually happens when a deadline is missed.',
    icon: Wrench,
  },
  {
    title: 'Autonomous multi-agent robotics',
    description:
      'Extending static formation control toward adaptive coordination: preemption, task transfer and graceful degradation when an agent cannot finish.',
    icon: GitBranch,
  },
  {
    title: 'Hardware–software integration',
    description:
      'The seam where it all meets — driver and interface design, driver-level debugging, and keeping an abstraction honest about the hardware underneath.',
    icon: Layers,
  },
]

/* -------------------------------------------------------------------------- */
/*  Leadership & Certifications                                               */
/* -------------------------------------------------------------------------- */

export interface LeadershipItem {
  title: string
  organisation: string
  period: string
  description: string
  icon: LucideIcon
  tags: string[]
}

export const leadership: LeadershipItem[] = [
  {
    title: 'ECE Branch Representative',
    organisation: 'Global Academy of Technology',
    period: '2025 — Present',
    description:
      'Representing the ECE branch cohort — communicating academic and campus information, and relaying student concerns back to the department.',
    icon: Users,
    tags: ['Student leadership', 'ECE'],
  },
  {
    title: 'Team Lead & Lead Developer',
    organisation: 'LoRa and Smart Irrigation prototypes',
    period: 'Project teams',
    description:
      'Led development of LoRa-based and smart irrigation prototypes, owning the firmware and embedded architecture while coordinating a small team through build and demonstration.',
    icon: Wrench,
    tags: ['Team leadership', 'LoRa', 'Firmware'],
  },
  {
    title: 'Prototype Demonstrations',
    organisation: 'IBM-sponsored hackathons',
    period: 'Hackathon programme',
    description:
      'Built and demonstrated working hardware prototypes under hackathon timelines, including IBM-sponsored events, and documented the results of each build.',
    icon: Trophy,
    tags: ['Hackathons', 'IBM', 'Prototyping'],
  },
]

/**
 * Certifications — leave this array empty (or add entries) rather than
 * inventing certification names or issuing bodies.
 */
export const certifications: LeadershipItem[] = []

export const siteMeta = {
  title: `${identity.name} — Embedded Systems, RTL & Edge AI`,
  description:
    'Portfolio of Rishi P, Electronics & Communication Engineering student at Global Academy of Technology, Bengaluru. Embedded systems, RTL and digital design, IoT security, robotics and Edge AI.',
} as const
