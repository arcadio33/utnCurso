import {useState, useEffect} from 'react';
import axios from 'axios';
import CursoItem from '../components/novedades/CursoItem';




export const ProximosCursos = (props) => {
  const [loading, setLoading] = useState(false);
  const [cursos, setCurso] = useState([]);

  useEffect(() => {
    const cargarCurso = async () => {
    setLoading(true);
    const response = await axios.get('http://localhost:3000/api/cursos')
    setCurso(response.data);
    setLoading(false)  
    };

    cargarCurso();
  }, []);

  return (
    <section className="holder">
     {loading ? (
      <p>Cargando...</p>
     ): (cursos.map(item => <CursoItem key={item.id}
     nombre={item.nombre} detalles={item.detalles}
     fecha_inicio={item.fecha_inicio} fecha_hasta={item.fecha_hasta} />)
     )}
    </section>
  );
}

export default ProximosCursos;