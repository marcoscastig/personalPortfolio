import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import heroVideo from '../assets/hero.mp4'
import personalFotoImg from "../assets/personalFoto.jpg";


export default function Home() {
  return (
    <div className="container vh-100 d-flex">
      <div className="row w-100">
        {/* Izquierda: foto, título, texto corto y botón CV */}
        <motion.div
  className="col-12 col-md-6 px-4 d-flex flex-column align-items-center align-items-md-start"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Foto */}
  <motion.img
    src={personalFotoImg} // cambia esta ruta por la tuya
    alt="Foto de Marcos Castiglioni"
    className="rounded-circle"
    style={{ width: 150, height: 150, objectFit: "cover" }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  />

  {/* Texto pegado justo debajo */}
  <div style={{ marginTop: "0.5rem", width: "100%" }}>
    <h1 className='text-center text-md-start' style={{ marginBottom: "0.25rem", textAlign: "left" }}>
      Bienvenid@ a mi portfolio
    </h1>
    <p className='text-center text-md-start' style={{ textAlign: "left" }}>Desarrollador Fullstack y más</p>
  </div>

  {/* Botón descargar CV */}
  <motion.a
    href="/cv/MarcosCastiglioniCV.pdf" // cambia esta ruta por tu CV
    download
    className="btn btn-outline-light mt-3"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    Descargar CV <i className="bi bi-file-earmark-arrow-down ms-2"></i>
  </motion.a>
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
            🚀 Desarrollador apasionado por convertir ideas en proyectos reales.
            Experiencia en C/C++, React y desarrollo web moderno.
            Amante de los desafíos y de seguir aprendiendo cada día.
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

        {/* Contacto */}
        <motion.div
          className="text-center mt-2 w-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-2 text-white">Contacto</h3>
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