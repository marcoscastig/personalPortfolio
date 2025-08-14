

import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

export default function AnimatedNavLink({ to, end, children, onClick }) {
  return (
    <NavLink to={to} end={end} style={{ textDecoration: 'none' }}>
      {({ isActive }) => (
        <motion.span
          onClick={onClick}
          initial={{ opacity: 0.8, scale: 1, y: 0 }}
          animate={{
            opacity: isActive ? 1 : 0.8,
            scale: isActive ? 1.1 : 1,
            y: isActive ? -3 : 0,
            color: isActive ? '#0dfd91' : '#E0E0E0', // activo: verde azulado, normal: gris claro
          }}
          whileHover={{ scale: 1.05, y: -2, opacity: 1, color: '#0dfd91' }} // hover: mismo verde azulado
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            backgroundColor: 'transparent',
            borderRadius: '0.25rem',
            padding: '0.375rem 0.75rem',
            display: 'inline-block',
            cursor: 'pointer',
          }}
        >
          {children}
        </motion.span>
      )}
    </NavLink>
  );
}




