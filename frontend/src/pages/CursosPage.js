import CursoModal from '../components/layout/CursoModal';
import '../styles/components/pages/CursosPage.css';
import ProximosCursos from './ProximosCursos';
import {CursoModalAnimacion, CursoModalIlustracion, CursoModalFotografia, CursoModalPintura, CursoModalModelado3D, CursoModalDisFondos}  from '../components/layout/CursoModal';


const CursosPage = (props) => {
    return (
        <main className="holder" >
        <div class="tituloseccion" >
         <h1>Nuestros cursos</h1>
            </div>
         <div class="cursos" >
            <img src="images/home/curso1.jpg" ></img>
            <CursoModalAnimacion />
        </div> 
<example />
        <div class="cursos">
            <img src="images/home/curso2.jpg"></img>
            
            <CursoModalIlustracion />
        </div>
       
        <div class="cursos">
            <img src="images/home/curso3.jpg" ></img>
            <CursoModalFotografia />
        </div>

        <div class="cursos">
            <img src="images/home/curso4.jpg" ></img>
            <CursoModalPintura />
        </div>

        <div class="cursos">
            <img src="images/home/curso5.jpg" ></img>
            <CursoModalDisFondos />
        </div>

        <div class="cursos">
            <img src="images/home/curso6.jpg" ></img>
            <CursoModalModelado3D />
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