import React from 'react';

const SchoolList = (props) => {

    const { schools } = props;

    return (
        <div>
            {schools?.map((school, i) => {
                return (
                    <div key={i}>
                        <h3>{school.nombreescuela}</h3>
                        <p>{school.direccionescuela}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default SchoolList;
