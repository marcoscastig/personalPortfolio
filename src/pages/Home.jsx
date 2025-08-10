import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import heroVideo from '../assets/hero.mp4'


export default function Home() {
  return (
    <div className="container vh-100 d-flex ">
      <div className="row w-100">
        {/* Izquierda: título y texto corto */}
        <motion.div
          className="col-12 col-md-6 px-4 d-flex flex-column "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Bienvenido a mi portfolio</h1>
          <p>Desarrollador Fullstack y más</p>
        </motion.div>

        {/* Derecha: contenido descriptivo, habilidades y contacto */}
        <motion.div
          className="col-12 col-md-6 px-4 text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3>habilidades</h3>
          <p className="lead">
            Estudiante de Ingeniería en Computación con pasión por crear experiencias digitales limpias y funcionales. Aquí comparto mis proyectos y mi camino profesional.
          </p>
          
          <div className="skills-slider">
  <div className="skills-track">
    <span className="badge bg-primary px-3 py-2">React</span>
    <span className="badge bg-secondary px-3 py-2">JavaScript</span>
    <span className="badge bg-dark px-3 py-2">IA</span>
    <span className="badge bg-success px-3 py-2">CSS</span>
    <span className="badge bg-info text-dark px-3 py-2">HTML</span>
    <span className="badge bg-warning text-dark px-3 py-2">SQL / MySQL</span>
    

    {/* Repetimos para loop infinito */}
    <span className="badge bg-primary px-3 py-2">React</span>
    <span className="badge bg-secondary px-3 py-2">JavaScript</span>
    <span className="badge bg-dark px-3 py-2">IA</span>
    <span className="badge bg-success px-3 py-2">CSS</span>
    <span className="badge bg-info text-dark px-3 py-2">HTML</span>
    <span className="badge bg-warning text-dark px-3 py-2">SQL / MySQL</span>
    
  </div>
</div>


          
        </motion.div>
        <motion.div
    className="text-center mt-2"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="mb-2">Contacto</h3>
    <div className="d-flex justify-content-center gap-4">
      <a
        href="https://github.com/tu_usuario"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-light fs-4"
      >
        <i className="bi bi-github"></i>
      </a>
      <a
        href="https://linkedin.com/in/tu_usuario"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-light fs-4"
      >
        <i className="bi bi-linkedin"></i>
      </a>
      <a
        href="mailto:tuemail@dominio.com"
        aria-label="Email"
        className="text-light fs-4"
      >
        <i className="bi bi-envelope-fill"></i>
      </a>
    </div>
  </motion.div>


      </div>
    </div>
  );
}