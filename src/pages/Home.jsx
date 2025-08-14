
import { motion } from "framer-motion";

import personalFotoImg from "../assets/personalFoto.jpg";
import Contacto from '../components/Contacto';

export default function Home() {
  return (
    <div className="container vh-100 d-flex flex-column flex-md-row gap-4 py-4">
      <div className="row w-100">
        {/* Izquierda: foto, título, texto corto y botón CV */}
        <motion.div
          className="col-12 col-md-6 px-4 d-flex flex-column align-items-center align-items-md-start mb-4 mb-md-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Foto */}
          <motion.img
            src={personalFotoImg}
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
            href="/cv/MarcosCastiglioniCV.pdf"
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
          className="col-12 col-md-6 px-4 text-white mb-4 mb-md-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3>Habilidades</h3>
          <p className="lead" style={{ textAlign: "justify" }}>
            🚀 Estudiante de Ingeniería en Computación en la Universidad de la República (UdelaR), con experiencia en JavaScript, SQL, C/C++, React y desarrollo web moderno. Desarrollo proyectos personales que me permiten aplicar y profundizar mis conocimientos técnicos. Me enfoco en la resolución de problemas y mantengo un compromiso constante con el aprendizaje y el crecimiento profesional.
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
        <Contacto />
      </div>
    </div>
  );
}
