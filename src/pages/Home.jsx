import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container text-center mt-5 px-3">
      <h1 className="display-4 mb-3">Desarrollador Web Frontend</h1>
        
      <p className="fs-5 mx-auto mb-4" style={{ maxWidth: '700px' }}>
        Estudiante de Ingeniería en Computación con pasión por crear experiencias digitales limpias y funcionales. Aquí comparto mis proyectos y mi camino profesional.
      </p>

      <div className="d-flex justify-content-center gap-3">
        <link to="/proyectos" className="btn btn-outline-light px-4">
          Ver Proyectos
        </link>
        <link to="/about" className="btn btn-outline-light px-4">
          Sobre Mí
        </link>
      </div>
      
    </div>
  );
}
