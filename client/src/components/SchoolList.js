import React from 'react';
import { Link } from 'react-router-dom';

const SchoolList = (props) => {

    const { schools } = props;

    return (
        <div>
            {schools?.map((school, i) => {
                return (
                    <div key={i}>
                        <h3>{school.nombreescuela}</h3>
                        <p>{school.direccionescuela}</p>
                        <p><Link to={`/reviews/${school._id}`}>{school.reviews.length} evaluaciones</Link></p>
                    </div>
                )
            })}
        </div>
    );
}

export default SchoolList;