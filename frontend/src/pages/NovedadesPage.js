import {useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';



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
    <div class="cursosyeventos">
      <section className="holder">
      {loading ? (
        <p>Cargando...</p>
      ): (novedades.map(item => <NovedadItem key={item.id}
      title={item.titulo} subtitle={item.subtitulo}
      imagen={item.img_id === null ? "https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg":item.img_id} 
      body={item.cuerpo} />)
      )}
      </section>
    </div>
  );
}

export default NovedadesPage;