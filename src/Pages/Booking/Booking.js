import React from 'react';
import { useParams } from 'react-router';

const Booking = ({service}) => {
    const {serviceId, serviceName, serviceDescription, serviceImg} = useParams();
    return (
        <div>
            <h2>This is booking: {serviceId}</h2>
            <img src={serviceImg} alt="" />
            <h3>{serviceName}</h3>
            <p>{serviceDescription}</p>

        </div>
    );
};

export default Booking;