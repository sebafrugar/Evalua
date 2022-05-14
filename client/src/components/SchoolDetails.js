import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

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
        <div>
            <div>
                <p>{id}</p>
                {!isLoading ? schools?.map((school, i) => {
                    return (
                        <div key={i}>
                            <h3>{school.nombreescuela}</h3>
                            <p>{school.direccionescuela}</p>
                        </div>
                    )
                }):<Loading/>}
                <Link to={`/create-review/${id}`}><button>Evaluar</button></Link>
                <hr/>
                <button onClick={back}>Volver al buscador</button>
            </div>

        </div>
    );
}

export default SchoolDetails;
