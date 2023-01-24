import {useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/NovedadesPage.css';


const NovedadesPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
    setLoading(true);
    const response = await axios.get('http://localhost:3000/api/novedades')
    setNovedades(response.data);
    setLoading(false)  
    };

    cargarNovedades();
  }, []);

  return (
  
    
   
    <section className="holder">
      <div class="tituloseccion">
      <h1>¡Enterate de los próximos cursos y eventos!</h1>
      </div>
        <div class="cursosyeventos">
          {loading ? (
            <p>Cargando...</p>
          ): (novedades.map(item => <NovedadItem key={item.id}
          title={item.titulo} subtitle={item.subtitulo}
          imagen={item.img_id === null ? "https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg":item.img_id} 
          body={item.cuerpo} />)
          )}
      </div>
    </section>

  );
}

export default NovedadesPage;