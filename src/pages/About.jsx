import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mt-4">
       <motion.h2 
      className="text-center mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>Sobre mi</motion.h2>

      <motion.p
        className="second text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Hola, soy Marcos, estudiante de Ingeniería en Computación en la Universidad de la República (UdelaR), y estoy finalizando el primer año de la carrera.
      </motion.p>

      <motion.p
        className="second text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Me especializo en desarrollo web, con experiencia en tecnologías como React, JavaScript, HTML, CSS y bases de datos con SQL y MySQL. También tengo interés y conocimientos en inteligencia artificial, lo que me permite combinar programación con análisis avanzado y soluciones innovadoras.
      </motion.p>

      <motion.p
        className="second text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Soy una persona apasionada, dedicada y en constante aprendizaje, siempre buscando nuevos desafíos que me permitan crecer profesionalmente y aportar valor en los proyectos en los que participo.
      </motion.p>

      <motion.p
        className="second text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        Este portfolio es una pequeña ventana a lo que hago. Si querés colaborar, charlar o simplemente pasar a saludar, ¡bienvenido!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      />
    </div>
  );
}
