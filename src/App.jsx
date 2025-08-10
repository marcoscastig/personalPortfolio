import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import AnimatedNavLink from './components/AnimatedNavLink.jsx'; // tu componente animado
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Footer from './components/Footer';

export default function App() {
  const [expanded, setExpanded] = useState(false);

  // Función para cerrar menú cuando se clickea un enlace
  const handleNavClick = () => setExpanded(false);

  return (
    <HashRouter>
      <Container className="mt-3 mt-md-5 text-center">
        <motion.h1 
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Marcos Castiglioni
        </motion.h1>

        <motion.h2 
          className="mb-4 text-muted"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Programador y Desarrollador Web
        </motion.h2>

        <hr className="border border-dark opacity-50 mx-auto " />

        <Navbar
  bg=""
  expand="md"
  className="mb-4 justify-content-center"
  expanded={expanded}
  onToggle={(isExpanded) => setExpanded(isExpanded)}
>
  {/* Empuja toggle a la derecha */}
  
<Navbar.Toggle
  as={motion.button} // Esto hace que sea un elemento animable
  aria-controls="basic-navbar-nav"
  className="ms-auto"
  animate={{
    scale: [1, 1.1, 1], // Crece y vuelve
  }}
  transition={{
    repeat: Infinity, // Se repite para siempre
    duration: 1.5, // Velocidad del pulso
    ease: "easeInOut",
  }}
/>
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto text-center">
            
              <Nav.Item>
                <Nav.Link as={() => (
                  <AnimatedNavLink to="/" end onClick={handleNavClick}>
                    Home
                  </AnimatedNavLink>
                )} />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={() => (
                  <AnimatedNavLink to="/about" onClick={handleNavClick}>
                    About
                  </AnimatedNavLink>
                )} />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={() => (
                  <AnimatedNavLink to="/contact" onClick={handleNavClick}>
                    Contact
                  </AnimatedNavLink>
                )} />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={() => (
                  <AnimatedNavLink to="/proyectos" onClick={handleNavClick}>
                    Proyectos
                  </AnimatedNavLink>
                )} />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>

        <Footer />
      </Container>
    </HashRouter>
  );
}
