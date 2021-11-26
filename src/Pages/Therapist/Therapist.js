import React from 'react';
import './Therapist.css'

const Therapist = ({ therapist }) => {
    const { name, address, expertIn, img } = therapist;
    return (
        <div className="therapist">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{address}</h5>
            <p>Expert In: {expertIn}</p>
        </div>
    );
};

export default Therapist;