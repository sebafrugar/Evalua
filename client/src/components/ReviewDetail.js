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
            <p>Cargo : {cargo}</p>
            <p>Experiencia : {experiencia}</p>
            <p>Comentario: {comentario}</p>
            <p>Lo bueno: {lobueno}</p>
            <p>Lo Malo: {lomalo}</p>
            <p>Sueldo: {sueldo}</p>
            <p>Entrega de Materiales : {entregamateriales}</p>
            <p>Ambiente de trabajo:{ambientedetrabajo}</p>
            <p>Liderazgo : {liderazgo}</p>
            <p>Respeto a los Funcionarios: {respetoalosfuncionarios}</p>
            <p>Promedio de Evaluación: {promedio}</p>
        </div>
    );
}

export default ReviewDetail;
