import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container text-center mt-5 px-3">

      {/* Descripción */}
      <motion.p
        className="mb-4 lead"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Estudiante de Ingeniería en Computación con pasión por crear experiencias digitales limpias y funcionales. Aquí comparto mis proyectos y mi camino profesional.
      </motion.p>

      {/* Botones de navegación */}
     

      {/* Sección de habilidades */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <h3>Habilidades</h3>
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
          {/* Podés reemplazar estos íconos por imágenes o SVGs */}
          <span className="badge bg-primary px-3 py-2">React</span>
          <span className="badge bg-secondary px-3 py-2">JavaScript</span>
          <span className="badge bg-success px-3 py-2">CSS</span>
          <span className="badge bg-info text-dark px-3 py-2">HTML</span>
          <span className="badge bg-warning text-dark px-3 py-2">SQL / MySQL</span>
          <span className="badge bg-dark px-3 py-2">Inteligencia Artificial</span>
        </div>
      </motion.div>

      {/* Redes sociales o contacto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <h3>Contacto</h3>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-dark fs-4">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary fs-4">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:tuemail@dominio.com" aria-label="Email" className="text-danger fs-4">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </motion.div>

    </div>
  );
}
