import React from 'react';
import { Link } from 'react-router-dom'

const SchoolCard = (props) => {

    const { id, nombre, ciudad, direccion, reviews, average } = props;

    return (
        <div className='school-list-item'>
            <div><Link to={`/reviews/${id}`}>{nombre}</Link></div>
            <div>
                <p>Ciudad</p>
                {ciudad}
            </div>
            <div>
                <p>Dirección</p>
                {direccion}
            </div>
            <div>
                <p>Evaluaciones</p>
                {reviews}
            </div>
            <div>
                <p>Promedio Escuela</p>
                {average}
            </div>
        </div>
    );
}

export default SchoolCard;
