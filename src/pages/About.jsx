import { motion } from "framer-motion";
import formacionImg from "../assets/formacion.jpg";
import iaImg from "../assets/ia.jpg";
import desarrolloWebImg from "../assets/desarrolloWeb.jpg";
import metaImg from "../assets/meta.jpg";
import Contacto from '../components/Contacto';


export default function About() {
  const sections = [
    {
      img: formacionImg,
      title: "Mi formación",
      text: "Soy estudiante de Ingeniería en Computación en la Universidad de la República (UdelaR), actualmente finalizando el primer año de la carrera. Egresé del curso “Jóvenes a Programar” en 2022, donde descubrí mi verdadera vocación por la tecnología.  Me apasiona aprender y aplicar mis conocimientos en proyectos reales, especialmente en desarrollo web y análisis de datos. Valoro el trabajo en equipo, la perseverancia y la creatividad para resolver problemas complejos. Además, en mi tiempo libre disfruto adquirir nuevos conocimientos en diversas áreas para mantenerme en constante evolución. Estoy comprometido con el aprendizaje continuo y en contribuir de manera positiva a los equipos y proyectos en los que participo.",
    },
    {
      /*img: desarrolloWebImg,*/
      title: "Desarrollo Web",
      text: "Desde 2022 he desarrollado proyectos web utilizando HTML, CSS y JavaScript, dominando estas tecnologías de forma fluida. Trabajo con bibliotecas como Bootstrap, que facilitan la creación de interfaces responsivas y funcionales. También he creado varios proyectos frontend con React y desarrollado sitios completos integrando backend con SQL/MySQL y Node.js. Mis conocimientos abarcan todo el ciclo de desarrollo web, desde el diseño y la programación hasta la implementación y el mantenimiento de aplicaciones. Varios de estos proyectos están disponibles para que los puedas ver en la sección de proyectos.",
    },
    {
      /*img: iaImg,*/
      title: "Interés en IA",
      text: "Tengo conocimientos en inteligencia artificial y la aplico para agilizar y potenciar la creación y producción de componentes. Sé aprovechar el poder de las herramientas de IA para impulsar el desarrollo de soluciones innovadoras. Con una base sólida que me permite trabajar de forma independiente, integro la IA de manera estratégica y constructiva, utilizando prompts efectivos para maximizar su rendimiento y precisión.",
    },
    {
      /*img: metaImg,*/
      title: "Visión y objetivos",
      text: "Mi intención es crecer y consolidarme como desarrollador de software. He estado preparándome con dedicación, adquiriendo conocimientos y habilidades, y estoy listo para aprovechar la oportunidad que me permita demostrar mi compromiso y aportar valor en un entorno profesional. Me caracterizo por ser responsable, perseverante y abierto al aprendizaje continuo. Valoro el trabajo en equipo y la colaboración para lograr objetivos comunes. A mediano plazo, aspiro a participar en proyectos desafiantes y contribuir positivamente al crecimiento de la organización y mi desarrollo personal.",
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
      <Contacto/>
    </div>
  );
}
