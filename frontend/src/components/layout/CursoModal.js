import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../styles/components/layout/Modal.css';

function CursoModalAnimacion() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} type="button" class="buttonmodal" data-toggle="modal" data-target="#modal">Animación Digital</button> 
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Animación Digital</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h1>Este curso se concentra en comprender los fundamentos de la animación y diferentes herramientas para animación digital cut-out y frame by frame</h1>
        <h2>Contenidos:</h2>
        <ul>
        <li>12 principios de la animación</li>
        <li>Diferentes medios digitales</li>
        <li>Harmony Toon Boom</li>
        <li>After Effects</li>
        </ul>
        <h3>El proyecto final consistirá de un cortometraje de 30 segundos animado</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function CursoModalIlustracion() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} type="button" class="buttonmodal" data-toggle="modal" data-target="#modal">Ilustración Digital</button> 
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ilustración Digital</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h1>Este curso se concentra en comprender fundamentos del color, trazos, texturas e historia de los medios gráficos digitales e impresos</h1>
        <h2>Contenidos:</h2>
        <ul>
        <li>Historia del diseño gráfico</li>
        <li>Colorimetría</li>
        <li>Estudio de artistas</li>
        <li>Illustrator y After Effects</li>
        </ul>
        <h3>El proyecto final consistirá del diseño de un set de cuadernos</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


function CursoModalFotografia() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} type="button" class="buttonmodal" data-toggle="modal" data-target="#modal">Fotografía</button> 
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fotografía</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h1>Este curso se concentra en comprender la cámara, el espacio y la iluminación como herramientas para el registro digital de imagen</h1>
        <h2>Contenidos:</h2>
        <ul>
        <li>La cámara fotográfica analógica y digital</li>
        <li>Iluminación técnica y artística</li>
        <li>Retratos</li>
        <li>Fotografía de productos</li>
        </ul>
        <h3>El proyecto final consistirá en un proyecto de campaña para algún producto comercial</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function CursoModalPintura() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} type="button" class="buttonmodal" data-toggle="modal" data-target="#modal">Pintura</button> 
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fotografía</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h1>Este curso se comprender las texturas, la historia y las técnicas de pintura para medios físicos y digitales</h1>
        <h2>Contenidos:</h2>
        <ul>
        <li>Historia del arte</li>
        <li>Análisis de artistas</li>
        <li>Medios físicos</li>
        <li>Medios digitales</li>
        </ul>
        <h3>El proyecto final consistirá en una serie de ilustraciones que mezclarán trabajo en oleo, acuarela, pastel y digital</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function CursoModalDisFondos() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} type="button" class="buttonmodal" data-toggle="modal" data-target="#modal">Diseño de fondos</button> 
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Diseño de Fondos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h1>Este curso se comprender el diseño, la composición y el tratamiento digital de fondos para animación</h1>
        <h2>Contenidos:</h2>
        <ul>
        <li>Pipeline 2D y 3D</li>
        <li>Diseño digital</li>
        <li>Composición en After Effects</li>
        <li>Composición en Blender</li>
        </ul>
        <h3>El proyecto final consistirá en el diseño de fondos y composición con personajes animados en 2D o 3D</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


function CursoModalModelado3D() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} type="button" class="buttonmodal" data-toggle="modal" data-target="#modal">Modelado 3D</button> 
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modelado 3D</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul>
        <h1>Este curso se concentra en aprender el pipeline de modelado y escultura 3D, texturizado y optimización de modelos</h1>
        <h2>Contenidos:</h2>
        <li>Blender</li>
        <li>Modelado Tradicional</li>
        <li>Escultura 3D</li>
        <li>UV Mapping y retopología</li>
        </ul>

        <h3>El proyecto final consistirá en la escultura y retopología de un personaje en 3D</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export {CursoModalAnimacion, CursoModalIlustracion, CursoModalFotografia, CursoModalPintura, CursoModalModelado3D, CursoModalDisFondos} 