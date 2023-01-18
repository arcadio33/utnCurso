import React from 'react';

const CursoItem = (props) => {
    const {nombre, detalles, fecha_inicio, fecha_hasta} = props;

    return (
        <div className ="proximoscursos">
            <h1>{nombre}</h1>
            <h2>{detalles}</h2>
            <h3>Fecha de inicio</h3>
            <div dangerouslySetInnerHTML={{ __html:fecha_inicio}} />
            <h3>Fecha de Finalización</h3>
            <div dangerouslySetInnerHTML={{ __html:fecha_hasta}} />
            <hr/>
        </div>
    );
}

export default CursoItem;