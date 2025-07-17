import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const proyectos = [
  {
    titulo: "Movies",
    descripcion: "Proyecto de películas con React",
    imagen: "src/assets/japflix.png",
    url: "https://marcoscastig.github.io/Movies/",
  },
   {
    titulo: "E-Commerce",
    descripcion: "Proyecto final de curso 2022, usando HTML CCS y JavaScript",
    imagen: "src/assets/Ecommerce.png",
    url: "https://marcoscastig.github.io/E_commerce_Jap2022/",
  },
  {
    titulo: "Calculator",
    descripcion: "Una calculador aimple que hice por diversion",
    imagen: "ruta/a/tu/imagen.jpg",
    url: "https://marcoscastig.github.io/Calculator/",
  },
  {
    titulo: "CRUD Api",
    descripcion: "MockApi es una herramienta que permite realizar operaciones usando la interface RESTful.",
    imagen: "ruta/a/tu/imagen.jpg",
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
  const mobile = isMobile();

  return (
    <div className="text-center">
      <h2 className="mb-4">Mis Proyectos</h2>
      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
        {proyectos.map((proyecto, index) => (
          <Col key={index}>
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={proyecto.imagen} alt={proyecto.titulo} />
              <Card.Body>
                <Card.Title>{proyecto.titulo}</Card.Title>
                <Card.Text>{proyecto.descripcion}</Card.Text>
                <Button
                  variant="primary"
                  href={proyecto.url}
                  target={mobile ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  Ver Proyecto
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
