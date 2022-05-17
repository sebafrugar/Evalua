import React from 'react';

const ReviewDetail = (props) => {

    //aquí estoy pintando los comentarios

    const {id,
        cargo,
        experiencia,
        comentario,
        lobueno,
        lomalo,
        sueldo,
        entregamateriales,
        ambientedetrabajo,
        liderazgo,
        respetoalosfuncionarios,
        promedio } = props;

    return (
        <div key={id}>
            <p> Aqui Mostrar un colegio y sus evaluaciones</p>
            <p>{cargo}</p>
            <p>{experiencia}</p>
            <p>{comentario}</p>
            <p>{lobueno}</p>
            <p>{lomalo}</p>
            <p>{sueldo}</p>
            <p>{entregamateriales}</p>
            <p>{ambientedetrabajo}</p>
            <p>{liderazgo}</p>
            <p>{respetoalosfuncionarios}</p>
            <p>{promedio}</p>
        </div>
    );
}

export default ReviewDetail;
