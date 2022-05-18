import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import SchoolCard from '../components/SchoolCard';
import ReviewDetail from '../components/ReviewDetail';
import { useUser } from '../contexts/userContext';

const SchoolDetails = () => {

    const { user, setUser } = useUser();
    const [school, setSchool] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getSchool();
    }, []);

    const getSchool = () => {
        setIsLoading(true)
        axios.get(`http://localhost:8000/api/school/average/${id}`)
            .then(res => {
                setIsLoading(false)
                setSchool(res.data.schoolById[0])
            })
    }

    const back = () => {
        navigate('/search')
    }

    

    return (
        <div className='school-details-container'>
            <div className='school-details'>
                <button onClick={back}>Volver al buscador</button>
                <hr />
                
                    {school&&<SchoolCard
                        
                        id={school._id}
                        nombre={school.nombreescuela}
                        ciudad={school.ciudad}
                        direccion={school.direccionescuela}
                        reviews={school.review_docs.length}
                        average={school.avgRating}
                    />}


                
                {/* DESPLEGAR DESGLOSE DE REVIEWS EN EL SIGUIENTE COMPONENTE */}
                {/* {schools?.map((school, i) => (
                    <ReviewDetail/>
                ))} */}
                
                {/* DESPLEGAR REVIEWS DE LA ESCUELA EN EL SIGUIENTE COMPONENTE */}
                {/* {schools?.map((school, i) => (
                    <SchoolReviews/>
                ))} */}
                
                <hr />
                {user?<Link to={`/create-review/${id}`}><button>Evaluar</button></Link>:''}
                <div>
                {
                        school?.review_docs?.map((review,i)=>
                        <ReviewDetail 
                            id={review._id}
                            cargo={review.cargo}
                            experiencia={review.experiencia}
                            comentario={review.comentario}
                            lobueno={review.lobueno}
                            lomalo={review.lomalo}
                            sueldo={review.sueldo}
                            entregamateriales={review.entregamateriales}
                            ambientedetrabajo={review.ambientedetrabajo}
                            liderazgo={review.liderazgo}
                            respetoalosfuncionarios={review.respetoalosfuncionarios}
                            promedio={review.promedio}
                        />)
                    }
                    </div>
            </div>

            

        </div>
    );
}

export default SchoolDetails;
