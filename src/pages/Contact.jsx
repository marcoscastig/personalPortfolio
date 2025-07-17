import { useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";

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
      <h2 className="text-center mb-4">Contáctame</h2>

     

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
        <p className="text-center mt-3" style={{ color: status.includes("error") ? "red" : "white" }}>
          {status}
        </p>
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
