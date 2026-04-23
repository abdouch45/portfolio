const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', '127.0.0.1');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    name: "Abdelmoudjib Chihoub",
    role: "Cybersecurity & Software Engineering Student",
    description: "Master's student in Cybersecurity with a strong interest in cloud computing, computer networks, and AI. I began my journey in computer science in 2020, building a solid foundation in core computing concepts. Through academic studies and personal projects, I have developed practical skills in system hardening, software development, networking, and artificial intelligence. I am available for internships or any professional work to further apply and expand my knowledge in real-world environments.",

    projects: [
  {
    title: "Binary Analysis & Exploitation Lab",
    date: "2025",
    description: "Reverse engineered Linux executables using Ghidra and gdb, identified unused shell-spawning functions, and developed a Python buffer overflow exploit after disabling ASLR.",
    tech: ["Ghidra", "GDB", "Python", "Linux"],
    category: "Offensive Security"
  },
  {
    title: "Secure Web Server & System Hardening Labs",
    date: "2024",
    description: "Hardened Linux and Apache servers following CIS/ANSSI guidelines, implemented TLS, HSTS, PHP-FPM, load balancing, and evaluated performance using ApacheBench.",
    tech: ["Linux", "Apache", "TLS", "PHP", "Lynis"],
    category: "System Security"
  },
  {
    title: "Firewall & VPN Infrastructure (pfSense)",
    date: "2023",
    description: "Deployed a multi-interface pfSense firewall with NAT, network segmentation, IDS/IPS using Suricata, and a site-to-site IPsec VPN with AES and SHA-256.",
    tech: ["pfSense", "IPsec", "Suricata", "Networking"],
    category: "Network Security"
  },
  {
    title: "MANET Routing Protocols Comparison",
    date: "2024",
    description: "Compared AODV, OLSR, DSDV, and DSR protocols under mobility using FlowMonitor and gnuplot.",
    tech: ["NS-3", "MANET", "Routing Protocols"],
    category: "Wireless Networks"
  },
  {
    title: "GREENY AI-Based Plant Recognition App",
    date: "2025",
    description: "Fine-tuned a plant recognition model using PyTorch and developed a Flutter mobile app connected to a Django and PostgreSQL backend. Added marketplace, reminders, and chatbot features using the DeepSeek API.",
    tech: ["PyTorch", "Flutter", "Django", "PostgreSQL"],
    category: "AI & Full-Stack"
  },
 
  {
  title: "Fingerprint Matching System from Scratch",
  date: "2022",
  description: "Implemented a complete fingerprint matching pipeline in MATLAB including ROI extraction, noise reduction, edge detection, binarization, skeletonization, minutiae extraction using the Crossing Number algorithm, and matching based on average distance metrics and weighted coefficients.",
  tech: ["MATLAB", "Image Processing", "Biometrics"],
  category: "Biometric"
},
 {
    title: "DNS Server Deployment & Security Hardening",
    date: "2024",
    description: "Configured secure BIND9 primary and secondary DNS servers with TSIG, reverse resolution, and CIS-compliant hardening.",
    tech: ["BIND9", "DNS", "Linux", "CIS"],
    category: "Infrastructure Security"
  },
  {
  title: "Medical Records & E-Prescription Management System",
  date: "2023",
  description: "Designed and modeled a healthcare application to securely manage patients' medical records and improve coordination between doctors and pharmacies. The system allows doctors to access patient history, issue electronic prescriptions, and check drug availability in nearby pharmacies, which can then deliver medications directly to patients.",
  tech: ["Laravel", "Flutter", "MySQL", "UML"],
  category: "Healthcare Systems"
}

],
experience: [
  {
    role: "Software Developer",
    company: "Industry Project",
    date: "Jul 2024 - Nov 2024",
    description: [
      "Analyzed an RFID Java SDK (JAR) using JD-GUI to understand APIs, workflows, and data formats.",
      "Integrated RFID functionality into a custom Android application developed in Java.",
      "Implemented inventory management features connected to a centralized Node.js backend with MongoDB."
    ]
  },
  {
    role: "Network & Systems Intern",
    company: "Algeria Telecom",
    date: "Apr 2024 - Jun 2024",
    description: [
      "Configured VLANs, switching, and routing using Cisco network devices.",
      "Participated in troubleshooting scenarios."
    ]
  }
]

  });
});

app.listen(8888, () => {
  console.log("Portfolio running on http://localhost:8888");
});
