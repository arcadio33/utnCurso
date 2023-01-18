import React from 'react';
import '../styles/components/pages/HomePage.css';




const HomePage = (props) => {
    return (
        
    
        // main con placeholder para carousel con potencialmente bootstrap
    <main className="holder">
   
       
            <div clasName="columnas">
                <div className="bienvenidos">
                <h2>SOMOS ARTAN</h2>
                <img src="images/artanlogoinv.png" alt="Artan - Escuela de arte"></img>
                <p>Somos un centro de capacitación artística avocacada al desarrollo basado en lo que inspira al alumno. Trabajamos diferentes metodologías, orientadas tanto para la inserción al mercado laboral.
                Como para el desarrollo por si mismo
                </p>
                <p> </p>
                </div>
            </div>
        
        <div class="mainpageflex">

            <div class="box">
                <div class="imgbox">
                    <img src="images/home/cursos.jpg" class="img-responsive" alt="Cursos"/>
                </div>
                <div class="content">
                    <a href="/cursos">Cursos</a>
                    <p>Enterate de las capacitaciones que tenemos para ofrecerte</p> 
                </div>
            </div>

            <div class="box">
                <div class="imgbox">
                    <img src="images/home/cursos.jpg" class="img-responsive" alt="Cursos"/>
                </div>
                <div class="content">
                    <a href="/cursos">Cursos</a>
                    <p>Enterate de las capacitaciones que tenemos para ofrecerte</p> 
                </div>
            </div>

             
            {/* <div class="row">
              <div class="col">
                  <div class="box">
                  <div class="imgbox">
                      <img src="images/home/eventos.jpg" class="img-responsive" alt="Novedades y Eventos">
                      </img> </div>
                      <div class="content">
                      <a href="/novedades"><h3>Novedades</h3></a>
                          <p>¡Enterate de las novedades y eventos que se vienen!</p>
                         
                      </div>
                  </div>
                  </div>   
                  </div>*/}
                  
        </div> 

  
<div class="eventos">
<div id="online">
    <h3>Si querés averiguar sobre alguno de nuestros cursos podés mandarnos un mensaje</h3>
    <a href="/contacto"> <button id="check">Contactanos!</button></a>
    
</div>    

</div>
        </main>

    );


}

export default HomePage
