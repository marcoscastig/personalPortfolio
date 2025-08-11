
import { motion } from "framer-motion";
export default function Contacto({ to, end, children, onClick }) {
  return (
<motion.div
          className="text-center mt-2 w-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-2 text-white">Contacto</h3>
          <div className="d-flex justify-content-center gap-4">
            <a
              href="https://github.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-light fs-4"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-light fs-4"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="mailto:tuemail@dominio.com"
              aria-label="Email"
              className="text-light fs-4"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </motion.div>
        );
}