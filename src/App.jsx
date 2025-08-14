import { useState, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import AnimatedNavLink from './components/AnimatedNavLink.jsx';
import Footer from './components/Footer';

// 🔹 Lazy loading de las páginas
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Proyectos = lazy(() => import('./pages/Proyectos.jsx'));

export default function App() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <HashRouter>
      {/* Contenedor principal flex vertical que ocupa toda la pantalla */}
      <div className="d-flex flex-column min-vh-100 bg-dark text-light">
        
        {/* Contenido principal con grow para empujar footer */}
        <div className="flex-grow-1">
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

            <hr className="border border-dark opacity-50 mx-auto" />

            <Navbar
              bg=""
              expand="md"
              className="mb-4"
              expanded={expanded}
              onToggle={(isExpanded) => setExpanded(isExpanded)}
            >
              <Container className="d-flex justify-content-start align-items-center">
                <Navbar.Toggle
                  as={motion.button}
                  aria-controls="basic-navbar-nav"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  style={{
                    border: '2px solid white',
                    borderRadius: '4px',
                    background: 'transparent',
                  }}
                  className="ms-auto ms-md-0"
                />

                <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
                  <Nav className="d-flex gap-3">
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

            {/* Suspense envuelve las rutas y muestra un loader mientras carga */}
            <Suspense fallback={<div style={{ color: 'white', marginTop: '2rem' }}>Cargando...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/proyectos" element={<Proyectos />} />
              </Routes>
            </Suspense>
          </Container>
        </div>

        {/* Footer fijo al final */}
        <Footer />
      </div>
    </HashRouter>
  );
}
