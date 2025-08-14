import React, { useEffect, useRef, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import japImg from "../assets/japflix.png";
import ecommerceImg from "../assets/Ecommerce.png";
import crudImg from "../assets/crud.jpg";
import calcImg from "../assets/calc.jpg";
import rickAndMortyImg from "../assets/rickAndMorty.jpg";
import { motion } from "framer-motion";
import Contacto from '../components/Contacto';

const proyectos = [
  {
    titulo: "E-Commerce",
    descripcion: "Proyecto final de curso 2022, usando HTML CCS y JavaScript",
    imagen: ecommerceImg,
    url: "https://marcoscastig.github.io/E_commerce_Jap2022/",
  },
  {
    titulo: "Rick and Morty",
    descripcion: "Simple pagina hecha con React",
    imagen: rickAndMortyImg,
    url: "https://rickandmortyappreactreact.netlify.app/",
  },
  {
    titulo: "CRUD Api",
    descripcion:
      "MockApi es una herramienta que permite realizar operaciones usando la interface RESTful.",
    imagen: crudImg,
    url: "https://marcoscastig.github.io/Crud-MockApi/",
  },
  {
    titulo: "Movies",
    descripcion: "Proyecto de películas con Javascript, HTML y CSS",
    imagen: japImg,
    url: "https://marcoscastig.github.io/Movies/",
  },
  {
    titulo: "Calculator",
    descripcion: "Una calculadora basica que hice por diversión",
    imagen: calcImg,
    url: "https://marcoscastig.github.io/Calculator/",
  },
  
];

export default function Proyectos() {
  const cardsRef = useRef([]);
  const mobileScrollRef = useRef(null);

  // Animación cuando las tarjetas entran en pantalla (desktop)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Flecha
  const [showArrow, setShowArrow] = useState(true);
  const arrowDismissed = useRef(false);

  // Ocultar flecha al hacer scroll manual
  useEffect(() => {
    const handleScroll = () => {
      if (!arrowDismissed.current && mobileScrollRef.current) {
        const scrollLeft = mobileScrollRef.current.scrollLeft;
        if (scrollLeft > 20) {
          setShowArrow(false);
          arrowDismissed.current = true;
        }
      }
    };

    const container = mobileScrollRef.current;
    if (container) container.addEventListener("scroll", handleScroll);

    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleArrowClick = () => {
    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.firstChild.offsetWidth;
      mobileScrollRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
    setShowArrow(false);
    arrowDismissed.current = true;
  };

  return (
    <div className="text-center">
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mis Proyectos
      </motion.h2>

      {/* Vista móvil con scroll horizontal */}
      <div
        ref={mobileScrollRef}
        className="d-lg-none mb-4"
        style={{
          position: "relative",
          overflowX: "auto",
          display: "flex",
          gap: "1rem",
          padding: "0 1rem",
          scrollSnapType: "x mandatory",
        }}
      >
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            style={{
              minWidth: "85%",
              maxWidth: "85%",
              flex: "0 0 auto",
              scrollSnapAlign: "center",
              position: "relative",
            }}
          >
            <Card className="project-card shadow d-flex flex-column h-100">
              <Card.Img
                variant="top"
                src={proyecto.imagen}
                alt={proyecto.titulo}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{proyecto.titulo}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {proyecto.descripcion}
                </Card.Text>
                <motion.a
                  href={proyecto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver proyecto
                </motion.a>
              </Card.Body>
            </Card>

            {/* Flecha flotante solo en la primera tarjeta */}
            {index === 0 && showArrow && (
              <motion.div
                onClick={handleArrowClick}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "-1.5rem",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  borderRadius: "50%",
                  padding: "0.4rem",
                  cursor: "pointer",
                  zIndex: 10,
                }}
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                <i className="bi bi-chevron-right fs-4 text-light" />
              </motion.div>
            )}
          </motion.div>
        ))}
        
      </div>

      {/* Vista escritorio con grid */}
      <Row xs={1} sm={2} md={2} lg={4} className="g-4 d-none d-lg-flex">
  {proyectos.map((proyecto, index) => (
    <Col key={index} className="d-flex">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15, duration: 0.6 }}
        style={{ width: "100%" }}
      >
        <a
          href={proyecto.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none", width: "100%" }}
        >
          <Card className="h-100 shadow project-card d-flex flex-column cursor-hover">
            <Card.Img
              variant="top"
              src={proyecto.imagen}
              alt={proyecto.titulo}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{proyecto.titulo}</Card.Title>
              <Card.Text className="flex-grow-1">
                {proyecto.descripcion}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </motion.div>
    </Col>
  ))}
</Row>

      <Contacto/>
    </div>
  );
}
