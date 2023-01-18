import React from 'react';
import '../styles/components/pages/ContactoPage.css';


const ContactoPage = (props) => {
    return (
    
                <main className="holder-contacto">
                    <div id="formcontacto">
                        <h1>Contactanos</h1>
                        <form action="" method="" className="formulario">
                            <p>
                                <label for="nombre">Nombre </label>
                                <input type="text" name="" />
                            </p>
                            <p>
                                <label for="email">Email </label>
                                <input type="text" name="" />
                            </p>
                            <p>
                                <label for="telefono">Telefono </label>
                                <input type="text" name="" />
                            </p>
                            <p id="cont_mensaje">
                                <label for="mensaje">Mensaje </label>
                                <textarea name=""></textarea>
                            </p>


                            <p class="acciones"><input type="submit" value="Enviar" />
                            </p>
                        </form>
                    </div>
                    <div class="datos">
                        <h1>Otras vias de comunicación</h1>
                        <p>También puede contactarse con nosotros usando los siguientes medios</p>
                        <ul>
                            <li>Teléfono: 4000-1111</li>
                            <li>Email:artan@artan.com</li>
                            <li>Instagram:</li>
                            <li>Twitter:</li>
                            <li>Skype: +54567865875</li>
                        </ul>
                    </div>
                </main>
            );
          }


export default ContactoPage;