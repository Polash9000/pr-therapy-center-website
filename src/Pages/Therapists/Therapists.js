import React, { useEffect, useState } from 'react';
import Therapist from '../Therapist/Therapist';
import './Therapists.css'

const Therapists = () => {
    const [therapists, setTherapists] = useState([]);
    useEffect(() => {
        fetch('therapists.json')
        .then(res => res.json())
        .then(data => setTherapists(data));
    }, [])
    return (
        <div>
            <h2 className="text-warning">Our Experts</h2>
            <div className="therapist-container">
                {
                    therapists.map(therapist => <Therapist
                        key={therapist.id}
                        therapist={therapist}
                    ></Therapist>)
                }
            </div>
        </div>
    );
};

export default Therapists;