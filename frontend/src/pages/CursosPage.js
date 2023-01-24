import CursoModal from '../components/layout/CursoModal';
import '../styles/components/pages/CursosPage.css';
import ProximosCursos from '../components/novedades/ProximosCursos';
import {CursoModalAnimacion, CursoModalIlustracion, CursoModalFotografia, CursoModalPintura, CursoModalModelado3D, CursoModalDisFondos}  from '../components/layout/CursoModal';


const CursosPage = (props) => {
    return (
        <main className="holder" >
            <div class="tituloseccion" >
                <h1>Nuestros cursos</h1>
            </div>
            <div class="cursos">
                <div class="curso" >
                    <img src="images/home/curso1.jpg" alt='Curso'></img>
                    <CursoModalAnimacion />
                </div> 
                <example />
                <div class="curso">
                    <img src="images/home/curso2.jpg" alt='Curso de Ilustración'></img>
                    <CursoModalIlustracion />
                </div>
                <div class="curso">
                    <img src="images/home/curso3.jpg"  alt='Curso de Fotografía'></img>
                    <CursoModalFotografia />
                </div>
                <div class="curso">
                    <img src="images/home/curso4.jpg" alt='Curso de Pintura'></img>
                    <CursoModalPintura />
                </div>
                <div class="curso">
                    <img src="images/home/curso5.jpg" alt='Curso de diseño de fondos'></img>
                    <CursoModalDisFondos />
                </div>
                <div class="curso">
                    <img src="images/home/curso6.jpg" alt='Curso de modelado 3D'></img>
                    <CursoModalModelado3D />
                </div>
            </div>
        <div class="tituloseccion" >
            <div className="proximamente">
                <h1>Próximos inicios de cursos</h1>
            </div>
        </div>
        <div class="cursosyeventos">
            <ProximosCursos />
        </div>
    </main>
        
    )
   
}
  

export default CursosPage