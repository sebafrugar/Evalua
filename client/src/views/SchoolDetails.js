import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import SchoolCard from '../components/SchoolCard';
import Loading from '../components/Loading';
import ReviewDetail from '../components/ReviewDetail';
import SchoolReviews from '../components/SchoolReviews';

const SchoolDetails = () => {

    const [schools, setSchools] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getSchool();
    }, []);

    const getSchool = () => {
        setIsLoading(true)
        axios.get(`http://localhost:8000/api/school/${id}`)
            .then(res => {
                setIsLoading(false)
                setSchools([res.data.schoolById])
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
                {schools?.map((school, i) => (
                    <SchoolCard
                        key={i}
                        id={school._id}
                        nombre={school.nombreescuela}
                        ciudad={school.ciudad}
                        direccion={school.direccionescuela}
                        reviews={school.reviews.length}
                    />
                ))}

                {/* DESPLEGAR DESGLOSE DE REVIEWS EN EL SIGUIENTE COMPONENTE */}
                {/* {schools?.map((school, i) => (
                    <ReviewDetail/>
                ))} */}
                
                {/* DESPLEGAR REVIEWS DE LA ESCUELA EN EL SIGUIENTE COMPONENTE */}
                {/* {schools?.map((school, i) => (
                    <SchoolReviews/>
                ))} */}
                
                <hr />
                <Link to={`/create-review/${id}`}><button>Evaluar</button></Link>
            </div>

        </div>
    );
}

export default SchoolDetails;
