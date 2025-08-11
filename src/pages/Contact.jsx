import { useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Contacto from '../components/Contacto';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wer67mt",     
        "template_pzzab6z",    
        form.current,
        "R5z05yUAvCk-hlY1N"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Mensaje enviado correctamente!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Error al enviar el mensaje. Intenta de nuevo.");
        }
      );
  };

  // Variants para animar cada input y botón con delay en cascada
  const inputVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <Container className="my-5">
      <motion.h2 
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contáctame
      </motion.h2>

      {/* Formulario con animación */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          custom={0}
          variants={inputVariant}
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Tu nombre completo"
            name="name"
            required
          />
        </motion.div>

        <motion.div
          custom={1}
          variants={inputVariant}
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="tu@email.com"
            name="email"
            required
          />
        </motion.div>

        <motion.div
          custom={2}
          variants={inputVariant}
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Asunto del mensaje (opcional)"
            name="subject"
          />
        </motion.div>

        <motion.div
          custom={3}
          variants={inputVariant}
          className="mb-4"
        >
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            name="message"
            required
          />
        </motion.div>

        <motion.div
          custom={4}
          variants={inputVariant}
          className="text-center"
        >
          <motion.button
            type="submit"
            className="btn btn-outline-light px-4 custom-submit-button"
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(255,255,255,0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar
          </motion.button>
        </motion.div>
      </motion.form>

      {/* Mensaje de estado con fade */}
      {status && (
        <motion.p
          className="text-center mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ color: status.toLowerCase().includes("error") ? "red" : "white" }}
        >
          {status}
        </motion.p>
      )}

      <Contacto />
    </Container>
  );
}
