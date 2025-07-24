import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import japImg from '../assets/japflix.png';
import ecommerceImg from '../assets/Ecommerce.png';
import crudImg from '../assets/crud.jpg';
import calcImg from '../assets/calc.jpg';
import { motion } from "framer-motion";

const proyectos = [
   {
    titulo: "E-Commerce",
    descripcion: "Proyecto final de curso 2022, usando HTML CCS y JavaScript",
    imagen: ecommerceImg,
    url: "https://marcoscastig.github.io/E_commerce_Jap2022/",
  },
    {
    titulo: "Movies",
    descripcion: "Proyecto de películas con React",
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

import { useEffect, useRef } from "react";

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
          <Col key={index} className="h-100">
            <div
              ref={el => (cardsRef.current[index] = el)}
              className="card-animate d-lg-none"
            >
              <Card className="project-card h-100 shadow d-flex flex-column">
  <Card.Img variant="top" src={proyecto.imagen} alt={proyecto.titulo} />
  <Card.Body className="d-flex flex-column">
    <Card.Title>{proyecto.titulo}</Card.Title>
    <Card.Text className="flex-grow-1">{proyecto.descripcion}</Card.Text>
    <a
      href={proyecto.url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary mt-2"
    >
      Ver proyecto
    </a>
  </Card.Body>
</Card>
            </div>

            {/* Vista escritorio sin animación */}
            <a
              href={proyecto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="d-none d-lg-block"
            >
              <Card className="h-100 shadow project-card">
                <Card.Img variant="top" src={proyecto.imagen} alt={proyecto.titulo} />
                <Card.Body>
                  <Card.Title>{proyecto.titulo}</Card.Title>
                  <Card.Text>{proyecto.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}