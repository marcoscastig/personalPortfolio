import { motion } from "framer-motion";
import formacionImg from "../assets/formacion.jpg";
import iaImg from "../assets/ia.jpg";
import desarrolloWebImg from "../assets/desarrolloWeb.jpg";
import personalFotoImg from "../assets/personalFoto.jpg";


export default function About() {
  const sections = [
    {
      img: formacionImg,
      title: "Mi formación",
      text: "Soy estudiante de Ingeniería en Computación en la Universidad de la República (UdelaR), finalizando el primer año de la carrera. Me encanta aprender y aplicar mis conocimientos en proyectos reales.",
    },
    {
      img: desarrolloWebImg,
      title: "Desarrollo Web",
      text: "Tengo experiencia en React, JavaScript, HTML, CSS y bases de datos SQL/MySQL. Me apasiona crear interfaces atractivas y funcionales que aporten valor al usuario.",
    },
    {
      img: iaImg,
      title: "Interés en IA",
      text: "Me interesa la inteligencia artificial, combinando programación con análisis avanzado para diseñar soluciones innovadoras.",
    },
    {
      img: personalFotoImg,
      title: "Visión y objetivos",
      text: "Soy apasionado, dedicado y en constante aprendizaje. Busco desafíos que me permitan crecer y aportar valor en los proyectos donde participo.",
    },
  ];

  const imageStyle = {
    width: "100%",
    height: "300px",      // altura fija
    objectFit: "cover",   // recorta sin deformar
    borderRadius: "0.5rem",
    border: "3px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
  };

  return (
    <div className="container py-5" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
      <motion.h2
        className="text-center mb-5 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textTransform: "uppercase", letterSpacing: "2px" }}
      >
        Sobre mí
      </motion.h2>

      {sections.map((sec, index) => (
        <motion.div
          key={index}
          className={`row align-items-center mb-5`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {/* Imagen */}
          <div
            className={`col-md-6 mb-3 ${index % 2 === 0 ? "" : "order-md-2"}`}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={sec.img}
              alt={sec.title}
              style={imageStyle}
            />
          </div>

          {/* Texto */}
          <div
            className={`col-md-6 ${index % 2 === 0 ? "" : "order-md-1"}`}
          >
            <motion.div>
              <h4
                className="text-white fw-bold"
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "1rem",
                }}
              >
                {sec.title}
              </h4>
              <p
                className="text-white"
                style={{ lineHeight: 1.5, fontWeight: 400 }}
              >
                {sec.text}
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}