import '../styles/components/pages/CursosPage.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import CursoItem from '../components/novedades/CursoItem';



const CurrentCursos = (props) => {
    return (
        <main className="holder" >
        <div class="tituloseccion" >
         <h1>Nuestros cursos</h1>
            </div>
         <div class="cursos" >
            <img src="images/home/curso1.jpg" ></img>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal">Animación Digital</button> 
        </div> 

        <a href="/enconstruccion"> <div class="cursos">
            <img src="images/home/curso2.jpg" ></img>
            <h1>Ilustración</h1> 
        </div>  </a>

        <a href="/enconstruccion"><div class="cursos">
            <img src="images/home/curso3.jpg" ></img>
            <h1>Fotografía</h1> 
        </div>  </a>

        <a href="/enconstruccion"><div class="cursos">
            <img src="images/home/curso4.jpg" ></img>
            <h1>Pintura</h1> 
        </div>  </a>

        <a href="/enconstruccion"><div class="cursos">
            <img src="images/home/curso5.jpg" ></img>
            <h1>Diseño de fondos</h1> 
        </div>  </a>

        <a href="/enconstruccion"><div class="cursos">
            <img src="images/home/curso6.jpg" ></img>
            <h1>Modelado 3D</h1> 
        </div>  </a>

        <div class="tituloseccion" >
            <div className="proximamente">
                <h1>Próximos inicio de cursos</h1>
              
            </div>
            </div>
        
            <div className="proximoscursos">
                <div className="mes">
                    <div className="persona">
                        <h1>Enero</h1>

                    </div>
                </div>
            </div>
        </main>


    )
    }
export default CurrentCursos
