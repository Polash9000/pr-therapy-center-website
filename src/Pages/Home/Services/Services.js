import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';
import Booking from '../../Booking/Booking';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="mt-5">
            <h2  className="text-warning">Our Services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;