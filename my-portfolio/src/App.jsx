  import { motion } from "framer-motion";
  import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
  
  





  export default function App() {
    const skills = ["HTML", "CSS", "SQL","JavaScript", "React", "Bootstrap", ];
    const projects = [
      { id: 1, name: "HTML, CSS", desc: "Portfolio", link: "/files/js porject" }, 
      { id: 2, name: "SQL", desc: "Case Study " },
      { id: 3, name: "Calculator", desc: "Built with JavaScript" },
      { id: 4, name: "Portfolio Website", desc: "A responsive portfolio site." },
     
      
    ];

    return (
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a
            className="navbar-brand fw-bold"
            href="#"
            style={{
              transition: "color 0.3s ease", 
              fontSize:"1.7rem"
            }}
            onMouseEnter={(e) => (e.target.style.color = "#eeff05ff")} 
            onMouseLeave={(e) => (e.target.style.color = "")} 
          >
            &lt; Saqib's Portfolio /&gt;
          </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navMenu">
              <ul className="navbar-nav ms-auto  fs-5">
                {["About", "Skills", "Projects", "Contact"].map(link => (
                  <li className="nav-item mx-3" key={link}>
                  <a
                  className="nav-link"
                  href={`#${link.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    borderBottom: "2px solid transparent",
                    paddingBottom: "4px",  
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffc813ff";
                    e.target.style.borderBottom = "2px solid #ffc813ff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white";
                    e.target.style.borderBottom = "2px solid transparent";
                  }}
                    >
                  {link}
                </a>


                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section id="home" className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-dark text-light">
         
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="display-4 fw-bold"
          >
            Hi, I'm <span style={{ color: "#eeff05ff" }}>Saqib Khan</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="lead fw-bold fs-4"
            
          >
          Frontend and Backend Developer
          </motion.p>
        </section>

        {/* About */}
        <section id="about" className="py-5 bg-light">
          <Container>
            <h2 className="mb-5">About Me</h2>
            <p
        className="fw-bold lh-lg"
        style={{
          letterSpacing: "1.5px", 
          wordSpacing: "2px",  
        }}
      >
        I’m a passionate Web Developer with a knack for turning ideas into interactive, user-friendly websites.
        Skilled in HTML, CSS, JavaScript, React, and Bootstrap, I love crafting clean, efficient, and responsive designs that not only look great but work seamlessly.
        I’m driven by the belief that a great website isn’t just code — it’s an experience.
      </p>
          </Container>
        </section>
        {/* Skills */}
        <section id="skills" className="py-5 bg-dark text-light">
    <Container>
      <h2 className="mb-4">Skills</h2>
      <Row>
        {skills.map(skill => (
          <Col md={2} sm={4} xs={6} className="mb-4" key={skill}>
            <motion.div
              whileHover={{ scale: 1.1, color: "#eeff05ff",fontWeight:"bold" }}
              className="p-3 bg-secondary rounded text-center"
              style={{ cursor: "pointer" }}
            >
              {skill}
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
        {/* Projects */}
  <section id="projects" className="py-5 bg-light">
    <Container>
      <h2 className="mb-4">Projects</h2>
      <Row>
        {projects.map(p => (
          <Col md={3} sm={6} xs={12} key={p.id} className="mb-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="h-100">
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>{p.desc}</Card.Text>
                <Button
                
                  style={{backgroundColor:"#eeff05ff", border:"none", color:"black"}}
                  size="sm"href="/files/project1.pdf"target="_blank"               
                  >
                  View Project
                </Button>

                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
        {/* Contact */}
        <section id="contact" className="py-5 bg-dark text-light">
          <Container>
            <h2 className="mb-4">Contact Me</h2>
            <Form className="bg-secondary p-4 rounded">
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Message" />
              </Form.Group>
              <Button style={{backgroundColor:"#eeff05ff", border:"none", color:"black"
              }} type="submit">Send</Button>
            </Form>
          </Container>
        </section>
      </>
    );
  }
