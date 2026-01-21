import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Col, Row, Card, Button, Modal, Tab, Tabs, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";

import { 
  FaBullhorn, FaCheckCircle, FaArrowRight, FaLinkedin, FaGithub, 
  FaEnvelope, FaWhatsapp, FaPlay, FaCode, FaMobileAlt, FaServer, 
  FaPaintBrush, FaShoppingCart, FaChartLine, FaStar, FaRocket, 
  FaCrown, FaTools, FaClock, FaUsers, FaHeadset 
} from "react-icons/fa";
import {  FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Update the import - assuming you have a hero-tech.png
import heroTechImage from "./assets/img3.png";
import whyusimg from "./assets/img4.png";
import Dash from './assets/dash.png';
import web from './assets/web.png';
import mobile from './assets/mobile.png';
import ecomerce from './assets/ecomerce.png';
import marketing from './assets/marketing.png';
import design from './assets/design.png';
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [activeTab, setActiveTab] = useState("web");
  const [selectedPlan, setSelectedPlan] = useState("pro");
const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  // ---- Intersection Observer ----
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    { threshold: 0.15 }
  );

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("animate-section");
    observer.observe(section);
  });

  // ---- Scroll listener ----
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  // ✅ SINGLE cleanup function
  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  const handleDemoClick = (demo) => {
    setSelectedDemo(demo);
    setShowDemoModal(true);
  };

  // Add pricing plans data
const pricingPlans = [
  
  {
    name: "Smart Business App",
    icon: <FaRocket />,
    oldPrice: "$700",
    price: "$599",
    period: "one-time",
    description: "Best choice for restaurants, clinics, and shops that want to grow faster.",
    features: [
      "Custom website OR mobile app",
      "Online booking / ordering system",
      "Admin dashboard to manage your business",
      "FREE hosting for 1 year",
      "FREE promotional video for social media 🎁",
      "FREE posters & digital designs",
      "Customer notifications & offers",
      "6 months free support",
      "Priority communication",
      "Multi-language support & Dark/Light theme"
    ],
    popular: false,
    cta: "Get This Package",
    color: "primary"
  },
  {
    name: "Starter Business Pack",
    icon: <FaCrown />,
    oldPrice: "$300",
    price: "$249",
    period: "one-time",
    description: "Perfect for small businesses that want a professional online presence fast.",
    features: [
      "Professional business website",
      "Mobile-friendly design",
      "Contact & WhatsApp integration",
      "FREE hosting for 1 year",
      "FREE business poster or flyer design",
      "Basic SEO to be found on Google",
      "6 month free support",
      "Delivered quickly in 3 days",
      "Multi-language support & Dark/Light theme"
    ],
    popular: true,
    cta: "Start My Business",
    color: "warning"
  },
  {
    name: "Premium Business Solution",
    icon: <FaTools />,
    price: "Custom",
    period: "project-based",
    description: "A complete digital solution tailored exactly to your business.",
    features: [
      "Custom website + mobile app",
      "Online store / booking system",
      "Full admin control panel",
      "FREE hosting for 1 year",
      "FREE branding & design pack",
      "FREE promo video & marketing visuals",
      "Advanced reports & analytics",
      "1 year free support & updates",
      "Direct support & consultation",
      "Multi-language support & Dark/Light theme"
    ],
    popular: false,
    cta: "Talk to Us",
    color: "dark"
  }
];



  const services = [
    {
     img:web,
    title: "Website for Your Business",
    description: "A beautiful website that shows your business online and helps you get more customers.",
    features: [
      "Professional & modern design",
      "Works on computers and phones",
      "Easy to update with your info",
      "Help customers find you online"
    ]
  },
    {
     img:mobile,
    title: "Mobile App for Your Customers",
    description: "An app for your business that lets customers order, book easily.",
    features: [
      "Available on iPhone and Android",
      "Order or book from the app",
      "Send updates or promotions to customers",
     ] },
    {
     img:ecomerce,
    title: "Online Store / E-commerce",
    description: "Sell your products online with a simple and secure online shop.",
    features: [
      "Easy product management",
      "Secure payments online",
      "Track orders and deliveries",
      "Boost sales and reach more customers"
    ]
    },
    {
     img:Dash,
    title: "Business Dashboard & Reports",
description: "See how your business is performing at a glance with clear, interactive charts and detailed reports.",
    features: [
      "Track sales and performance",
      "See customer activity",
      "Easy-to-understand charts",
      "Make better decisions fast"
    ]
   },
    {
     img:design,
    title: "Design & Branding",
    description: "Create attractive posters, flyers, stickers, and other materials to promote your business.",
    features: [
      "Posters and flyers for promotions or events",
      "Custom stickers and labels",
      "Logo and branding design",
      "Professional visuals for customers"
    ] } ,
    {
     img:marketing,
  title: "Marketing & Customer Interaction",
  description: "Help your business reach more customers online and stay connected with them.",
  features: [
    "Social media promotion",
    "Email or SMS updates to customers",
    "Loyalty programs and special offers",
    "Track marketing performance"
  ]
}

  ];

  const projectDemos = {
    web: [
      {
        id: 1,
        image:marketing,
        title: "E-commerce Platform",
        description: "Full-featured online store with cart, checkout, and admin panel",
        features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Tracking"]
      },
      {
        id: 2,
        title: "Real Estate Portal",
        description: "Property listing platform with advanced search and booking",
        tech: "Next.js, NestJS, PostgreSQL",
        videoUrl: "https://example.com/demo2.mp4",
        liveUrl: "https://demo-fzc-realestate.vercel.app",
        features: ["Property Search", "Virtual Tours", "Agent CRM", "Booking System"]
      }
    ],
    mobile: [
      {
        id: 3,
        title: "Food Delivery App",
        description: "Mobile app for food ordering and delivery tracking",
        tech: "React Native, Node.js, MongoDB",
        videoUrl: "https://example.com/demo3.mp4",
        liveUrl: "https://expo.dev/@fzc/food-delivery",
        features: ["GPS Tracking", "Real-time Updates", "Push Notifications", "Payment Integration"]
      },
      {
        id: 4,
        title: "Fitness Tracker",
        description: "Health and fitness tracking application",
        tech: "Flutter, Firebase, Health APIs",
        videoUrl: "https://example.com/demo4.mp4",
        liveUrl: "https://expo.dev/@fzc/fitness-tracker",
        features: ["Workout Plans", "Progress Tracking", "Social Features", "Health Integration"]
      }
    ],
    fullstack: [
      {
        id: 5,
        title: "Project Management Tool",
        description: "Collaborative project management platform",
        tech: "React, Express, Socket.io, MySQL",
        videoUrl: "https://example.com/demo5.mp4",
        liveUrl: "https://demo-fzc-pm.vercel.app",
        features: ["Team Collaboration", "Task Management", "File Sharing", "Real-time Chat"]
      },
      {
        id: 6,
        title: "Learning Management System",
        description: "Online education platform with course management",
        tech: "Vue.js, Laravel, Redis, AWS",
        videoUrl: "https://example.com/demo6.mp4",
        liveUrl: "https://demo-fzc-lms.vercel.app",
        features: ["Course Creation", "Video Streaming", "Quiz System", "Progress Tracking"]
      }
    ],
     dash: [
      {
        id: 5,
        title: "Project Management Tool",
        description: "Collaborative project management platform",
        tech: "React, Express, Socket.io, MySQL",
        videoUrl: "https://example.com/demo5.mp4",
        liveUrl: "https://demo-fzc-pm.vercel.app",
        features: ["Team Collaboration", "Task Management", "File Sharing", "Real-time Chat"]
      },
      {
        id: 6,
        title: "Learning Management System",
        description: "Online education platform with course management",
        tech: "Vue.js, Laravel, Redis, AWS",
        videoUrl: "https://example.com/demo6.mp4",
        liveUrl: "https://demo-fzc-lms.vercel.app",
        features: ["Course Creation", "Video Streaming", "Quiz System", "Progress Tracking"]
      }
    ],
     design: [
      {
        id: 5,
        title: "Project Management Tool",
        description: "Collaborative project management platform",
        tech: "React, Express, Socket.io, MySQL",
        videoUrl: "https://example.com/demo5.mp4",
        liveUrl: "https://demo-fzc-pm.vercel.app",
        features: ["Team Collaboration", "Task Management", "File Sharing", "Real-time Chat"]
      },
      {
        id: 6,
        title: "Learning Management System",
        description: "Online education platform with course management",
        tech: "Vue.js, Laravel, Redis, AWS",
        videoUrl: "https://example.com/demo6.mp4",
        liveUrl: "https://demo-fzc-lms.vercel.app",
        features: ["Course Creation", "Video Streaming", "Quiz System", "Progress Tracking"]
      }
    ],

  };

const clients = [
  {
    name: "TechCorp",
    rating: 5,
    logo: "techcorp-logo.png",
    testimonial: "FZC Digital revamped our e-commerce platform, resulting in a 45% increase in online sales within 3 months. Highly recommended!"
  },
  {
    name: "StartupXYZ",
    rating: 5,
    logo: "startupxyz-logo.png",
    testimonial: "Their mobile app solution boosted our user engagement by 200% and helped us retain more loyal customers. The team was professional and responsive."
  },
  {
    name: "GlobalRetail",
    rating: 5,
    logo: "globalretail-logo.png",
    testimonial: "FZC Digital delivered a seamless digital experience and provided outstanding support. Our customers love the improvements and so do we!"
  }
];


const processSteps = [
  {
    step: 1,
    title: "Listen",
    description: "We talk with you to understand your business and what you really need."
  },
  {
    step: 2,
    title: "Plan",
    description: "We suggest the best solution and agree on features, price, and timeline."
  },
  {
    step: 3,
    title: "Design",
    description: "We create a clear and attractive design and get your approval first."
  },
  {
    step: 4,
    title: "Build",
    description: "We develop your project step by step and keep you updated."
  },
  {
    step: 5,
    title: "Test",
    description: "We test everything to make sure it works perfectly."
  },
  {
    step: 6,
    title: "Launch & Support",
    description: "We launch your project and stay available for help and updates."
  }
];
const renderStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-warning me-1" />);
    } else if (i - rating === 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-warning me-1" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-warning me-1" />);
    }
  }

  return stars;
};


  return (
<div  >
      {/* Navigation - Updated to include Pricing */}
      <Navbar expand="lg" fixed="top" className={isScrolled ? "navbar-scrolled" : "navbar-transparent"}>
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span className="brand-line"></span>
            <span className="brand-name">FZC Digital</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
<Nav className="ms-auto text-white">
  <Nav.Link className="text-white" href="#home">Home</Nav.Link>
  <Nav.Link className="text-white" href="#services">Services</Nav.Link>
   <Nav.Link className="text-white" href="#pricing">Pricing</Nav.Link>
  <Nav.Link className="text-white" href="#process">Process</Nav.Link>
  {/* <Nav.Link className="text-white" href="#clients">Clients</Nav.Link> */}

  <Button 
    variant="outline-primary" 
    className="me-3 theme-toggle"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? <FaSun /> : <FaMoon />}
  </Button>
  <Nav.Link href="#contact" className="nav-contact-btn">
    Get Quote
  </Nav.Link>
</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section with Background Image */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          
        </div>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={7} className="hero-content">
              <h6 className="text-uppercase text-primary mb-3">
                <Badge bg="primary" className="me-2">NEW</Badge> Digital Solutions Company
              </h6>
              <h1 className="hero-title mb-4">
                Transform Your Business With <span className="text-primary">Digital Excellence</span>
              </h1>
              <p className="lead mb-4">
                FZC Digital delivers cutting-edge web and mobile applications that drive growth. 
                We combine innovative technology with strategic insights to create exceptional digital experiences.
              </p>
              <div className="hero-stats d-flex gap-4 mb-4">
                <div>
                  <h3 className="text-primary">72h</h3>
                  <p>Fast Delivery</p>
                </div>

                <div>
                  <h3 className="text-primary">100%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-primary">24/7</h3>
                  <p>Support Available</p>
                 </div>
              </div>
              <div className="hero-buttons">
                <Button href="#pricing" className="btn-primary me-3">
                  View Pricing <FaArrowRight className="ms-2" />
                </Button>
                <Button href="#services" variant="outline-light">
                  Service Monitoring
                </Button>
              </div>
            </Col>
            <Col >
            <img src={heroTechImage} alt="" 
          width={400} height={400}     className="floating-img"
          />
            </Col>
          </Row>
        </Container>

      </section>

      {/* Services Section */}
      <section id="services" className="section-py ">
       <Container>
  <div className="text-center mb-5">
    <h2 className="section-title">Our Digital Services</h2>
    <p className="section-subtitle">Comprehensive solutions for your digital transformation</p>
  </div>

  <Row >
  {services.map((service, index) => (
    <Col md={6} className="mb-4" key={index} >
      <div className="service-cards d-flex bg-dark h-70">
        
        {/* Image container */}
        <div className="service-img-wrapper">
          <img src={service.img} alt={service.title} />
        </div>

        {/* Content */}
        <div className="service-content d-flex flex-column p-3">
          <h3 className="text-white">{service.title}</h3>
          <p className="service-desc text-white flex-grow-1">
            {service.description}
          </p>

          <ul className="service-features text-white">
            {service.features.map((feature, idx) => (
              <li className="service-feautures" key={idx}>
                <FaCheckCircle className="text-primary me-2" />
                {feature}
              </li>
            ))}
          </ul>

          <button className="service-btn btn btn-primary mt-auto">
            Book Now
          </button>
        </div>

      </div>
    </Col>
  ))}
</Row>

</Container>
</section>



{/*why fzc */}
<section className="why-fzc-section py-5">
  <Container>
    <Row className="align-items-center">

      {/* Left: Floating Image */}
      <Col lg={5} className="text-center mb-4 mb-lg-0">
        <img
          src={whyusimg}
          alt="Why FZC Digital"
          className="img-fluid floating-img"
          style={{ maxWidth: "420px" }}
        />
      </Col>

      {/* Right: Content */}
      <Col lg={7}>
        <h2 className="mb-4 text-white" style={{ fontWeight: "bold" }}>
          Why <span className="text-primary">FZC Digital</span>
        </h2>

        <Row className="g-4">
          <Col md={6}>
            <div className="service-card p-4 h-100">
              <h5>We Understand Your Business</h5>
              <p className="mb-0">
                We work with small businesses and professionals, so we know what you really need — simple, effective digital solutions.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="service-card p-4 h-100">
              <h5>Clear Communication</h5>
              <p className="mb-0">
                No technical language. We explain everything clearly and keep you informed at every step.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="service-card p-4 h-100">
              <h5>Affordable & Honest Pricing</h5>
              <p className="mb-0">
                Transparent prices with no surprises. You get exactly what your business needs — nothing more, nothing less.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="service-card p-4 h-100">
              <h5>Support After Delivery</h5>
              <p className="mb-0">
                We don’t disappear after launch. We stay with you to help, update, and support your project.
              </p>
            </div>
          </Col>
        </Row>
      </Col>

    </Row>
  </Container>
</section>


 {/* Our Process Section */}
      <section id="process" className="section-py">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">A structured approach to ensure project success</p>
          </div>
          <Row className="process-steps">
            {processSteps.map((step) => (
              <Col md={4} lg={2} className="mb-4" key={step.step}>
                <div className="process-step">
                  <div className="step-number">{step.step}</div>
                  <h5 className="step-title">{step.title}</h5>
                  <p className="step-description">{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* Project Demos Section */}
      {/* <section id="demos" className="section-py ">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Project Demos</h2>
            <p className="section-subtitle">Explore our work across different platforms</p>
          </div>

          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="demo-tabs mb-5 justify-content-center"
          >
            <Tab eventKey="web" title="Web Applications">
              <Row className="mt-4">
                {projectDemos.web.map((demo) => (
                  <Col md={6} className="mb-4" key={demo.id}>
                    <Card className="demo-card h-100">
  
                       <Card.Img height="200px"  style={{borderRadius:"20px"}}
                        variant="top"
                        src={demo.image}
                        alt={demo.title}
                        className="demo-card-img"
                      />

                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{demo.title}</Card.Title>
                        <Card.Text className="flex-grow-1">
                          {demo.description}
                        </Card.Text>

                        <div className="demo-features mb-3">
                          {demo.features.map((feature, idx) => (
                            <span key={idx} className="demo-feature-badge">
                              {feature}
                            </span>
                          ))}
                        </div>
                         <div className="demo-actions">
                          <Button 
                            variant="outline-primary" 
                            className="me-2"
                            onClick={() => handleDemoClick(demo)}
                          >
                            Watch Demo
                          </Button>
                          </div>
                      </Card.Body>
                    </Card>

                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="mobile" title="Mobile Apps">
              <Row className="mt-4">
                {projectDemos.mobile.map((demo) => (
                  <Col md={6} className="mb-4" key={demo.id}>
                    <Card className="demo-card h-100">
                      <div className="demo-card-header">
                        <div className="demo-badge">{demo.tech}</div>
                        <Button 
                          variant="link" 
                          className="play-btn"
                          onClick={() => handleDemoClick(demo)}
                        >
                          <FaPlay />
                        </Button>
                      </div>
                      <Card.Body>
                        <Card.Title>{demo.title}</Card.Title>
                        <Card.Text>{demo.description}</Card.Text>
                        <div className="demo-features mb-3">
                          {demo.features.map((feature, idx) => (
                            <span key={idx} className="demo-feature-badge">{feature}</span>
                          ))}
                        </div>
                        <div className="demo-actions">
                          <Button 
                            variant="outline-primary" 
                            className="me-2"
                            onClick={() => handleDemoClick(demo)}
                          >
                            Watch Demo
                          </Button>
                          <Button 
                            variant="primary" 
                            href={demo.liveUrl} 
                            target="_blank"
                          >
                            App Preview
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="fullstack" title="Full-Stack e-comerce Solutions">
              <Row className="mt-4">
                {projectDemos.fullstack.map((demo) => (
                  <Col md={6} className="mb-4" key={demo.id}>
                    <Card className="demo-card h-100">
                      <div className="demo-card-header">
                        <div className="demo-badge">{demo.tech}</div>
                        <Button 
                          variant="link" 
                          className="play-btn"
                          onClick={() => handleDemoClick(demo)}
                        >
                          <FaPlay />
                        </Button>
                      </div>
                      <Card.Body>
                        <Card.Title>{demo.title}</Card.Title>
                        <Card.Text>{demo.description}</Card.Text>
                        <div className="demo-features mb-3">
                          {demo.features.map((feature, idx) => (
                            <span key={idx} className="demo-feature-badge">{feature}</span>
                          ))}
                        </div>
                        <div className="demo-actions">
                          <Button 
                            variant="outline-primary" 
                            className="me-2"
                            onClick={() => handleDemoClick(demo)}
                          >
                            Watch Demo
                          </Button>
                          <Button 
                            variant="primary" 
                            href={demo.liveUrl} 
                            target="_blank"
                          >
                            View Project
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
             <Tab eventKey="dash" title="dashboards">
              <Row className="mt-4">
                {projectDemos.fullstack.map((demo) => (
                  <Col md={6} className="mb-4" key={demo.id}>
                    <Card className="demo-card h-100">
                      <div className="demo-card-header">
                        <div className="demo-badge">{demo.tech}</div>
                        <Button 
                          variant="link" 
                          className="play-btn"
                          onClick={() => handleDemoClick(demo)}
                        >
                          <FaPlay />
                        </Button>
                      </div>
                      <Card.Body>
                        <Card.Title>{demo.title}</Card.Title>
                        <Card.Text>{demo.description}</Card.Text>
                        <div className="demo-features mb-3">
                          {demo.features.map((feature, idx) => (
                            <span key={idx} className="demo-feature-badge">{feature}</span>
                          ))}
                        </div>
                        <div className="demo-actions">
                          <Button 
                            variant="outline-primary" 
                            className="me-2"
                            onClick={() => handleDemoClick(demo)}
                          >
                            Watch Demo
                          </Button>
                          <Button 
                            variant="primary" 
                            href={demo.liveUrl} 
                            target="_blank"
                          >
                            View Project
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
             <Tab eventKey="design" title="design & branding">
              <Row className="mt-4">
                {projectDemos.fullstack.map((demo) => (
                  <Col md={6} className="mb-4" key={demo.id}>
                    <Card className="demo-card h-100">
                      <div className="demo-card-header">
                        <div className="demo-badge">{demo.tech}</div>
                        <Button 
                          variant="link" 
                          className="play-btn"
                          onClick={() => handleDemoClick(demo)}
                        >
                          <FaPlay />
                        </Button>
                      </div>
                      <Card.Body>
                        <Card.Title>{demo.title}</Card.Title>
                        <Card.Text>{demo.description}</Card.Text>
                        <div className="demo-features mb-3">
                          {demo.features.map((feature, idx) => (
                            <span key={idx} className="demo-feature-badge">{feature}</span>
                          ))}
                        </div>
                        <div className="demo-actions">
                          <Button 
                            variant="outline-primary" 
                            className="me-2"
                            onClick={() => handleDemoClick(demo)}
                          >
                            Watch Demo
                          </Button>
                          <Button 
                            variant="primary" 
                            href={demo.liveUrl} 
                            target="_blank"
                          >
                            View Project
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </section> */}

  {/* Pricing Section - NEW */}
      <section id="pricing" className="section-py">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-subtitle">Choose the perfect plan for your business needs</p>
          </div>

          <Row className="justify-content-center">
            {pricingPlans.map((plan, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className={`pricing-card h-100 ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && (
                    <div className="popular-badge">
                      <FaStar className="me-2" /> Most Popular
                    </div>
                  )}
                  <Card.Body className="text-center p-4">
                    <div className={`pricing-icon mb-4 ${plan.color}`}>
                      {plan.icon}
                    </div>
                    <Card.Title className="mb-3">{plan.name}</Card.Title>
                    <div className="pricing-price mb-3">
                      {plan.oldPrice && (
                        <div className="old-price">
                          <span>{plan.oldPrice}</span>
                        </div>
                      )}
                      <h2>{plan.price}</h2>
                      <p className="text-muted">/{plan.period}</p>
                    </div>

                    <Card.Text className="mb-4">{plan.description}</Card.Text>
                    
                    <ul className="pricing-features mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheckCircle className="text-success me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.popular ? "warning" : "primary"} 
                      className={`w-100 btn-${plan.color}`}
                      onClick={() => plan.name === "Enterprise" ? window.location.href = "#contact" : setSelectedPlan(plan.name)}
                    >
                      {plan.cta}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

           
        </Container>
      </section>


      {/* Clients Section */}
      <section id="clients" className="section-py">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Our Clients</h2>
            <p className="section-subtitle">Trusted by businesses of all sizes</p>
          </div>
          <Row className="justify-content-center">
            {clients.map((client, index) => (
              <Col md={4} className="text-center mb-4" key={index}>
                <Card className="client-card">
                  <Card.Body>
                    {/* <div className="client-logo mb-3">
                      <img src={client.logo} alt={client.name} />
                    </div> */}
                    <Card.Text className="">
                      "{client.testimonial}"
                    </Card.Text>
                    
                    <div className="mt-2">
                      {renderStars(client.rating)}
                    </div>
                    {/* <Card.Title>{client.name}</Card.Title> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-py">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title mb-4">Ready to Start Your Project?</h2>
              <p className="mb-4 text-white">
                Contact us for a free consultation and project estimate. Let's discuss how we can help your business grow.
              </p>
              <div className="contact-info">
                <div className="contact-item mb-3">
                  <FaEnvelope className="me-3" />
                  <span>contact@fzcdigital.com</span>
                </div>
                <div className="contact-item mb-3">
                  <FaWhatsapp className="me-3" />
                  <span>+212 776-653-648</span>
                </div>
                <div className="contact-social mt-4">
                  <a href="#" className="social-link me-3">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="social-link">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Card className="contact-form-card">
                <Card.Body>
                  <h5 className="mb-4">Request a Quote</h5>
                  <form>
                    <div className="mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="mb-3">
                      <select className="form-control">
                        <option>Select Service</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>Full-Stack Solution</option>
                        <option>Custom Software</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <textarea 
                        className="form-control" 
                        rows="4"
                        placeholder="Project Details"
                      ></textarea>
                    </div>
                    <Button type="submit" className="btn-primary w-100">
                      Submit Request
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Demo Modal */}
      <Modal 
        show={showDemoModal} 
        onHide={() => setShowDemoModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedDemo?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDemo && (
            <>
              <div className="ratio ratio-16x9 mb-3">
                <video controls>
                  <source src={selectedDemo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="demo-modal-info">
                <h6>Technology Stack:</h6>
                <p>{selectedDemo.tech}</p>
                <h6>Features:</h6>
                <ul>
                  {selectedDemo.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={() => setShowDemoModal(false)}
          >
            Close
          </Button>
          <Button 
            variant="primary" 
            href={selectedDemo?.liveUrl} 
            target="_blank"
          >
            View Live Project
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Footer */}
      <footer className="footer py-4 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4} className="mb-3 mb-md-0">
              <h5>FZC Digital</h5>
              <p className="mb-0">Transforming businesses through innovative digital solutions.</p>
            </Col>
            <Col md={4} className="mb-3 mb-md-0 text-center">
              <h6>Services</h6>
              <ul className="list-unstyled">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Custom Software</li>
                <li>Digital Consulting</li>
              </ul>
            </Col>
            <Col md={4} className="text-md-end">
              <h6>Contact</h6>
              <p>contact@fzcdigital.com<br />+212 776-653-648</p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center">
              <p className="mb-0">© {new Date().getFullYear()} FZC Digital. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default App;