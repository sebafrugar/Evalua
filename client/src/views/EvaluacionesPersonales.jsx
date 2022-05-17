import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../contexts/userContext';
import { Link } from 'react-router-dom';


const EvaluacionesPersonales = () => {

const [reviews, setReviews] = useState();
const [counter, setCounter] = useState(0);
const [ideReview, setIdeReview] = useState();
const { user, setUser } = useUser();


const getReviews = () => {
    axios.get('http://localhost:8000/api/allreviewsbyuser/' + user._id)
            .then(res => {
                    setReviews(res.data.reviews);
            })
            .catch(err => console.log("Error:", err))
    }
    useEffect(() => { 
        getReviews();
    }, []);
    useEffect(() => {
        getReviews();
}, [counter]);

const deleteReview = (idReview) => {
    axios.delete("http://localhost:8000/api/review/delete/" + idReview)
        .then((res) => {
            console.log("eliminada: ", res);
            getReviews();
            setCounter(counter + 1);
        });
};

    return (
        <div>
            <h3>Hola </h3>
            <p>prueba</p>
            <div>
                {reviews?.map((review, j) =>
                            <div key={j}>
                                <p>Cargo: {review.cargo}</p>
                                <p>Experiencia:{review.experiencia}</p>
                                <p>Comentario:{review.comentario}</p>
                                <p>Lo bueno:{review.lobueno}</p>
                                <p>Lo Malo{review.lomalo}</p>
                                <p>Sueldo: {review.sueldo}</p>
                                <p>Entrega Materiales:{review.entregamateriales}</p>
                                <p>Ambiente de Trabajo : {review.ambientedetrabajo}</p>
                                <p>Liderazgo : {review.liderazgo}</p>
                                <p>Respeto a los Funcionarios:{review.respetoalosfuncionarios}</p>
                                <p>Promedio: {review.promedio}</p>
                                <div>
                                    <button onClick={ () => deleteReview(review._id)}>Eliminar</button>
                                </div>
                                <div>
                                    <Link to={"/editarevaluaciones/"+ review._id} >Editar</Link>
                                </div>
                            </div>)},
              
            </div>
        </div>
    );
}

export default EvaluacionesPersonales;
