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
  className="mb-4"
  expanded={expanded}
  onToggle={(isExpanded) => setExpanded(isExpanded)}
>
  <Container className="d-flex justify-content-start align-items-center">
    {/* Toggle a la derecha en pantallas md- */}
    <Navbar.Toggle
      as={motion.button}
      aria-controls="basic-navbar-nav"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      style={{
        border: "2px solid white",
        borderRadius: "4px",
        background: "transparent",
      }}
      className="ms-auto ms-md-0" // toggle a la derecha solo en sm, izquierda en md+
    />


    

    {/* Menú de links a la derecha en md+, oculto en xs-sm */}
    <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
      <Nav className="d-flex gap-3">
        {/* Tus Nav.Items */}
        <Nav.Item>
          <Nav.Link
            as={() => (
              <AnimatedNavLink to="/" end onClick={handleNavClick}>
                Home
              </AnimatedNavLink>
            )}
          />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={() => (
              <AnimatedNavLink to="/about" onClick={handleNavClick}>
                About
              </AnimatedNavLink>
            )}
          />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={() => (
              <AnimatedNavLink to="/contact" onClick={handleNavClick}>
                Contact
              </AnimatedNavLink>
            )}
          />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={() => (
              <AnimatedNavLink to="/proyectos" onClick={handleNavClick}>
                Proyectos
              </AnimatedNavLink>
            )}
          />
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Container>
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
