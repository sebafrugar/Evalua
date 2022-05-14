import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ReviewForm = () => {

    const { id } = useParams()
    let navigate = useNavigate()

    const back = () => {
        navigate(`/reviews/${id}`)
    }

    return (
        <div>
            <p>{id}</p>
            <p>crear formulario de reviews</p>
            <hr/>
            <button onClick={back}>Volver a escuela</button>
        </div>
    );
}

export default ReviewForm;
