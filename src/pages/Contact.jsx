import { useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";


export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs //usuario creado en este provedor de servicios de recepcion de mails
      .sendForm(
        "service_wer67mt",     //  Service ID
        "template_pzzab6z",    //  Template ID
        form.current,
        "R5z05yUAvCk-hlY1N"         //  User ID (public key)
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

  return (
    <Container className="my-5">
      <motion.h2 
      className="text-center mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>Contáctame</motion.h2>

      <motion.p
      className="second text-center mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      Llena el formulario y contáctame
    </motion.p>

     <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    ></motion.div>
     

      <Form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <Form.Group className="mb-3" controlId="formNombre">
         
          <Form.Control type="text" className="second" placeholder="Tu nombre completo" name="name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          
          <Form.Control type="email" className="second" placeholder="tu@email.com" name="email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAsunto">
         
          <Form.Control type="text" className="second" placeholder="Asunto del mensaje (opcional)" name="subject" />
        </Form.Group>

        <Form.Group className="mb-4"  controlId="formMensaje">
         
          <Form.Control className="second"
            as="textarea"
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            name="message"
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button  className="btn btn-outline-light px-4 custom-submit-button" type="submit">
            Enviar
          </Button>
        </div>
      </Form>

      {status && (
  <motion.p
    className="text-center mt-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    style={{ color: status.includes("error") ? "red" : "white" }}
  >
    {status}
  </motion.p>
)}

      <div className="mt-5 text-center">
        <p>
          Puedes escribirme directamente a:{" "}
          <a href="mailto:tuemail@ejemplo.com">1castiglionimarcos@gmail</a>
        </p>
        <p>
          O visitar mi perfil en{" "}
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </Container>
  );
}
