import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import japImg from '../assets/japflix.png';
import ecommerceImg from '../assets/Ecommerce.png';
import crudImg from '../assets/crud.jpg';
import calcImg from '../assets/calc.jpg';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";



const proyectos = [
   {
    titulo: "E-Commerce",
    descripcion: "Proyecto final de curso 2022, usando HTML CCS y JavaScript",
    imagen: ecommerceImg,
    url: "https://marcoscastig.github.io/E_commerce_Jap2022/",
  },
    {
    titulo: "Movies",
    descripcion: "Proyecto de películas con Javascript, HTML y CSS",
    imagen: japImg,
    url: "https://marcoscastig.github.io/Movies/",
  },
  {
    titulo: "Calculator",
    descripcion: "Una calculador aimple que hice por diversion",
    imagen: calcImg,
    url: "https://marcoscastig.github.io/Calculator/",
  },
  {
    titulo: "CRUD Api",
    descripcion: "MockApi es una herramienta que permite realizar operaciones usando la interface RESTful.",
    imagen: crudImg,
    url: "https://marcoscastig.github.io/Crud-MockApi/",
  },
  // ...otros proyectos
];

// Función para detectar móvil (simplificada)
const isMobile = () => {
  if (typeof navigator === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};



export default function Proyectos() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Solo se anima la primera vez
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

const [showArrow, setShowArrow] = useState(true);
const arrowDismissed = useRef(false); // persiste aunque el componente se renderice de nuevo

useEffect(() => {
  const handleScroll = () => {
    if (!arrowDismissed.current && window.scrollY > 50) {
      setShowArrow(false);
      arrowDismissed.current = true;
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const handleArrowClick = () => {
  const offset = window.innerHeight * 0.6; // bajamos un 60% del alto de la pantalla
  window.scrollBy({ top: offset, behavior: "smooth" });
  setShowArrow(false); // ocultamos la flecha
  arrowDismissed.current = true;
};


  return (
    <div className="text-center">
       <motion.h2 
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>Mis Proyectos</motion.h2>
            <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    ></motion.div>
      
      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
  {proyectos.map((proyecto, index) => (
  <React.Fragment key={index}>
    <Col className="d-flex">
      <div
        ref={el => (cardsRef.current[index] = el)}
        className="card-animate d-lg-none w-100"
      >
        <Card className="project-card h-100 shadow d-flex flex-column">
          <Card.Img variant="top" src={proyecto.imagen} alt={proyecto.titulo} />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{proyecto.titulo}</Card.Title>
            <Card.Text className="flex-grow-1">{proyecto.descripcion}</Card.Text>
            <motion.a
  href={proyecto.url}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary mt-2"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, delay: 0.2 }}
>
  Ver proyecto
</motion.a>

          </Card.Body>
        </Card>
      </div>

      {/* Versión escritorio */}
      <a
        href={proyecto.url}
        target="_blank"
        rel="noopener noreferrer"
        className="d-none d-lg-block w-100"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <Card className="h-100 shadow project-card d-flex flex-column cursor-hover">
          <Card.Img variant="top" src={proyecto.imagen} alt={proyecto.titulo} />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{proyecto.titulo}</Card.Title>
            <Card.Text className="flex-grow-1">{proyecto.descripcion}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>

    {/* Flecha solo después de la primera tarjeta (índice 0) */}
   {index === 0 && showArrow && (
  <Col xs={12} className="d-sm-none text-center my-2">
    <motion.div
      onClick={handleArrowClick}
      style={{ cursor: "pointer" }}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: [0, 10, 0], opacity: [1, 1, 1] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <i className="bi bi-chevron-down fs-1 text-light" />
    </motion.div>
  </Col>
)}


  </React.Fragment>
))}
</Row>

      
    </div>
  );
}