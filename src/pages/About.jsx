import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mt-4">
       <motion.h2 
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>Sobre mi</motion.h2>
            <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    ></motion.div>
      <motion.p className="second">
        ¡Hola! Soy Marcos, desarrollador web con foco en frontend y una gran curiosidad por cómo funcionan las cosas. Me gusta combinar lógica, diseño y una pizca de creatividad para dar vida a ideas en la web.
      </motion.p>
      <p className="second">
        Estudié Ingeniería en Computación en la Universidad de la República, donde descubrí que el código puede ser tan expresivo como un idioma. Desde entonces, me dedico a crear experiencias digitales limpias, modernas y funcionales, usando herramientas como React, Bootstrap y algo de ingenio.
      </p>
      <p className="second">
        Me entusiasma trabajar en equipo, aprender nuevas tecnologías y enfrentar desafíos técnicos como si fueran acertijos. Disfruto los proyectos que me invitan a pensar, repensar y seguir mejorando.
      </p >
      <p className="second">
        Cuando no estoy programando, probablemente esté resolviendo un problema de matemáticas, inventando juegos de palabras o caminando para despejar la mente. Creo que un poco de humor (y buena música) siempre mejora cualquier jornada de desarrollo.
      </p>
      <p className="second">
        Este portfolio es una pequeña ventana a lo que hago. Si querés colaborar, charlar o simplemente pasar a saludar, ¡bienvenido!
      </p>
    </div>
  );
}
