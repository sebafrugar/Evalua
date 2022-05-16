import React from 'react';
import { Link } from 'react-router-dom';

const SchoolList = (props) => {

    const { schools } = props;

    return (
        <div>
            {schools?.map((school, i) => {
                return (
                    <div className='school-list-item' key={i}>
                        <div><Link to={`/reviews/${school._id}`}>{school.nombreescuela}</Link></div>
                        <div>
                            <p>Ciudad</p>
                            {school.ciudad}
                        </div>
                        <div>
                            <p>Dirección</p>
                            {school.direccionescuela}
                        </div>
                        <div>
                            <p>Evaluaciones</p>
                            {school.reviews.length}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default SchoolList;