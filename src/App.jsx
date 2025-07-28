import { Container, Nav } from 'react-bootstrap'
import { HashRouter , Routes, Route, NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
import Footer from './components/Footer';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Proyectos from './pages/Proyectos.jsx'



export default function App() {
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

      {/* Subtítulo */}
      <motion.h2 
        className="mb-4 text-muted"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Programador y Desarrollador Web
      </motion.h2>
       
        <hr className="border border-dark opacity-50 mx-auto w-75" />

        <Nav variant="pills" className=" second justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/proyectos">
              Proyectos
            </Nav.Link>
          </Nav.Item>

        </Nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
        
              <Footer />
      </Container>
    </HashRouter>
  )
}
