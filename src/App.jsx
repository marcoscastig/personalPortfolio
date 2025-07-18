import { Container, Nav } from 'react-bootstrap'
import { HashRouter , Routes, Route, NavLink } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Footer from './components/Footer';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Proyectos from './pages/Proyectos.jsx'
import './transitions.css'; // Aquí pondremos los estilos CSS para la transición

function AnimatedRoutes() {
  const location = useLocation();

  // Scroll al tope al cambiar de ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Container className="mt-3">
        <h1 className="mt-3 mt-md-5 text-center">Marcos Castiglioni</h1>
          <h4 className="text-muted text-center">Programador y Desarrollador Web</h4>
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
      <AnimatedRoutes />
    </HashRouter>
  )
}
