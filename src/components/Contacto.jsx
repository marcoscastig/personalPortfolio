
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
              href="https://github.com/marcoscastig"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-light fs-4"
              style={{ cursor: 'pointer' }}
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/castiglioni-marcos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-light fs-4"
              style={{ cursor: 'pointer' }}
            >
              <i className="bi bi-linkedin"></i>
            </a>
           <a
  href="https://mail.google.com/mail/?view=cm&to=1castiglionimarcos@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-light fs-4"
  style={{ cursor: 'pointer' }}
>
  <i className="bi bi-envelope-fill"></i>
</a>
          </div>
          <footer className=" text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">© 2025 Marcos Castiglioni</p>
        <p className="mb-0 small">Desarrollador web · Montevideo, Uruguay</p>
      </div>
    </footer>
        </motion.div>
        );
}