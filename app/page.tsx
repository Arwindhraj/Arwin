"use client";
import { motion } from "motion/react";
import Head from 'next/head';
import { 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconBrandX, 
  IconMail,
  IconBriefcase,
  IconCalendar,
  IconCode,
  IconSchool,
  IconFileCv
} from "@tabler/icons-react";

export default function Home() {
  const socialLinks = [
    {
      icon: IconMail,
      href: "mailto:arwindh64@gmail.com",
      label: "Email"
    },
    {
      icon: IconBrandGithub,
      href: "https://github.com/Arwindhraj",
      label: "GitHub"
    },
    {
      icon: IconBrandLinkedin,
      href: "https://linkedin.com/in/arwindhraj",
      label: "LinkedIn"
    },
    {
      icon: IconBrandX,
      href: "https://x.com/Arwin_06",
      label: "X (Twitter)"
    },
    {
      icon: IconFileCv,
      href: "/Arwindhraj%20Resume.pdf", // URL encoded space
      label: "Resume",
      isExternal: false,
      download: true
    }
  ];

  const workExperience = [
    {
      title: "AI Developer",
      company: "Brainbric Innovations Pvt Ltd",
      duration: "Jan 2025 - June 2025",
      location: "Coimbatore, Tamilnadu",
      // description: "Developed a vehicle-specific AI assistant using Ollama models through LangChain, created and integrated MCP tools for YouTube Search (via YouTube API) and real-time web search (using crawl4ai), with advanced memory management through LangGraph.",
      achievements: [
        "Developed a vehicle-specific AI assistant using Ollama models through LangChain, created and integrated MCP tools for YouTube Search (via YouTube API) and real-time web search (using crawl4ai), with advanced memory management through LangGraph.",
        "Designed and deployed the AI assistant as a robust, scalable web service by creating FastAPI endpoints and orchestrating deployments with Docker",
        "Designed and implemented an API for an image-to-image inference service running on a TensorRT model, handling live requests with FastAPI",
        "Prototyped a virtual try-on application using Next.js and TypeScript"
      ],
      technologies: ["Python", "LangChain", "Ollama", "FastAPI", "Docker", "TensorRT", "Next.js", "TypeScript", "PostgreSQL"]
    },
    {
      title: "Computer Vision Developer",
      company: "Bimetal Bearings Limited",
      duration: "Dec 2023 - Feb 2024",
      location: "Coimbatore & Hosur, Tamilnadu",
      // description: "Developed and integrated an AI-driven Surface Defect Vision Inspection System for metal bearings, utilizing a two-stage object detection model, four Basler cameras, and Mitsubishi PLCs.",
      achievements: [
        "Developed and integrated an AI-driven Surface Defect Vision Inspection System for metal bearings, utilizing a two-stage object detection model, four Basler cameras, and Mitsubishi PLCs.",
        "Engineered and deployed five advanced Machine Vision Systems for metal component inspection",
        "Delivered a robust PyQt desktop application for real-time monitoring, automating the detection of missing features in bearings",
        "Optimized overall manufacturing productivity and reduced inspection time from one week to immediate results"
      ],
      technologies: ["Python", "OpenCV", "PyQt", "Computer Vision", "Object Detection", "PLCs"]
    }
  ];

  const projects = [
    {
      title: "Visgenix - Facial Attendance System",
      // description: "Developed an AI-based facial attendance system using Raspberry Pi and facial keypoint clustering, achieving 96% accuracy and ensuring reliable performance across diverse lighting conditions.",
      achievements: [
        "Developed an AI-based facial attendance system using Raspberry Pi and facial keypoint clustering, achieving 96% accuracy and ensuring reliable performance across diverse lighting conditions.",
        "Led the successful campus-wide adoption by training over 450 faculty members at Sri Ramakrishna Engineering College",
        "Integrated Firebase cloud storage and created a PyQt desktop application for real-time attendance monitoring"
      ],
      technologies: ["Python", "Computer Vision", "Raspberry Pi", "Firebase", "PyQt"]
    },
    {
      title: "Pothole Detection using Jetson Nano",
      // description: "Developed a pothole detection system for public transport vehicles using Jetson Nano with a TensorRT-optimized single-stage object detection model and Neo6m GPS module for precise geolocation.",
      achievements: [
        "Developed a pothole detection system for public transport vehicles using Jetson Nano with a TensorRT-optimized single-stage object detection model and Neo6m GPS module for precise geolocation.",
        "Created a Next.js website to display real-time locations and images of detected potholes",
        "Significantly enhanced road safety and maintenance efficiency"
      ],
      technologies: ["Python", "TensorRT", "Jetson Nano", "Next.js", "GPS", "Object Detection"]
    },
    {
      title: "Multi-Agent based Intelligent Traffic Management System",
      // description: "Developed an intelligent traffic signal optimization system by creating individual agents at each signal that communicate with neighboring agents and forecast minute-by-minute traffic volumes.",
      achievements: [
        "Developed an intelligent traffic signal optimization system by creating individual agents at each signal that communicate with neighboring agents and forecast minute-by-minute traffic volumes.",
        "Incorporated vehicle-level analysis to dynamically adjust signal timings for optimal flow",
        "Simulated the solution using SUMO to validate performance improvements in reducing traffic signal wait times"
      ],
      technologies: ["Python", "Multi-Agent Systems", "SUMO", "Traffic Optimization", "Machine Learning"]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "TypeScript"],
    "Database & Cloud": ["Firebase", "PostgreSQL", "Google Cloud Platform"],
    "AI Frameworks & Libraries": ["PyTorch", "LangChain", "Ollama", "vLLM", "TensorRT", "FastAPI", "Flask", "Hugging Face Transformers"],
    "Development Tools & Frameworks": ["Git", "Docker", "VS Code", "Hugging Face", "MCP", "Next.js"],
    "Operating Systems & Hardware": ["Linux", "Windows", "Jetson devices", "Raspberry Pi"]
  };

  return (
    <>
    <Head>
        <title>Arwindhraj KG - AI Developer & Software Engineer</title>
        <meta name="description" content="Arwindhraj KG - AI enthusiast and software developer" />
        <meta name="keywords" content="Arwindhraj, Arwin, AI Developer, Machine Learning, Computer Vision, Software Engineer, Arwindhraj KG" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Arwindhraj KG" />
        <meta property="og:title" content="Arwindhraj KG - AI Developer & Software Engineer" />
        <meta property="og:description" content="AI enthusiast and software developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arwindh.vercel.app" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Arwindhraj KG - AI Developer" />
        <meta name="twitter:description" content="AI enthusiast and software developer specializing in machine learning and computer vision." />
        <link rel="canonical" href="https://arwindh.vercel.app" />
        <meta name="google-site-verification" content="PhZIvUWpLfzDcJyCK9KESI-0ZQDNAouQtJwQp3sOpAs" />
      </Head>
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Main Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-gray-800 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
            >
              Hi, I'm{" "}
              <span className="text-black">
                Arwindhraj KG
              </span>
            </motion.h1>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center max-w-3xl mx-auto px-4"
            >
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                AI enthusiast eager to apply expertise in machine learning and software development to innovative projects. 
                Aiming to join a dynamic team where I can apply my experience with AI-driven solutions, optimize system performance, 
                and drive technological advancements in the industry.
              </p>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <social.icon className="w-6 h-6 text-gray-700 hover:text-black transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Work Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                My journey in AI development and computer vision innovation
              </p>
            </motion.div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <IconBriefcase className="w-5 h-5 text-gray-600 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <IconCalendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{job.duration}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-700 mb-1">{job.company}</h4>
                  <p className="text-sm text-gray-500 mb-3">{job.location}</p>
                  
                  {job.achievements && (
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Technical Skills
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Technologies and tools I work with
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Some of my notable AI and computer vision projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-3">
                    <IconCode className="w-5 h-5 text-gray-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  </div>
                  
                  
                  {project.achievements && (
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-xs">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Education
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-3">
                <IconSchool className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">Bachelor of Technology in Artificial Intelligence and Data Science</h3>
              </div>
              
              <h4 className="text-lg font-medium text-gray-700 mb-2">Sri Ramakrishna Engineering College</h4>
              <div className="flex items-center text-gray-600">
                <IconCalendar className="w-4 h-4 mr-1" />
                <span>2021 - 2025</span>
                <span className="mx-2">•</span>
                <span>Coimbatore, Tamilnadu</span>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
