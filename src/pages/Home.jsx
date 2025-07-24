import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="container text-center mt-5 px-3">
      <motion.h2 
      className="text-center mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>Desarrollador Web Frontend</motion.h2>

      <motion.p
      className="second text-center mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
Estudiante de Ingeniería en Computación con pasión por crear experiencias digitales limpias y funcionales. Aquí comparto mis proyectos y mi camino profesional.    </motion.p>

     <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    ></motion.div>

    

      <div className="d-flex justify-content-center gap-3">
        <Link to="/proyectos" className="btn btn-outline-light px-4">
          Ver Proyectos
        </Link>
        <Link to="/about" className="btn btn-outline-light px-4">
          Sobre Mí
        </Link>
      </div>
      
    </div>
  );
}
