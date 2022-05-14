import React, { useState, useEffect } from 'react';
import UserOptions from '../components/UserOptions';
import axios from 'axios';
import Loading from '../components/Loading';
import SchoolList from '../components/SchoolList';

const Main = () => {

    const [schools, setSchools] = useState();
    const [activeFilter, setActiveFilter] = useState('getAllReview');
    const [searchParam, setSearchParam] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const filteredSchools = schools?.filter(school => {
        return school.nombreescuela.toLowerCase().includes(searchParam.toLowerCase()) ||
            school.direccionescuela.toLowerCase().includes(searchParam.toLowerCase())
    })

    useEffect(() => {
        getAllSchool()
    }, [searchParam]);

    const getAllSchool = () => {
        setIsLoading(true)
        axios.get('http://localhost:8000/api/allschool')
            .then(res => {
                setIsLoading(false)
                setSchools(res.data.allSchools)
                setActiveFilter('getAllSchool')
            })
    }

    const getBest = () => {
        setIsLoading(true)
        axios.get('http://localhost:8000/api/allschool')
            .then(res => {
                setIsLoading(false)
                setSchools(res.data.allSchools)
                setActiveFilter('getBest')
            })
    }

    const getWorst = () => {
        setIsLoading(true)
        axios.get('http://localhost:8000/api/allschool')
            .then(res => {
                setIsLoading(false)
                setSchools(res.data.allSchools)
                setActiveFilter('getWorst')
            })
    }

    return (
        <div className='main-container'>
            <div className='main'>
                <div className='user-options'>
                    <UserOptions></UserOptions>
                </div>
                <div>
                    <h2>Encuentra un establecimiento</h2>
                    <form>
                        <input type="text" placeholder='Ingresa el nombre o dirección de la escuela' value={searchParam} onChange={(e) => setSearchParam(e.target.value)} />
                    </form>
                    <div>
                        <button onClick={getAllSchool} disabled={activeFilter === 'getAllSchool'}>Todos</button>
                        <button onClick={getBest} disabled={activeFilter === 'getBest'}>Mejor valorados</button>
                        <button onClick={getWorst} disabled={activeFilter === 'getWorst'}>Peor valorados</button>
                    </div>
                    {searchParam && <p>Hay {filteredSchools?.length} escuela(s) que coinciden con la búsqueda.</p>}
                    {!isLoading ? <div><SchoolList schools={filteredSchools} /></div> : <Loading />}
                </div>
            </div>
        </div>
    );
}

export default Main;
