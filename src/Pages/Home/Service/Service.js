import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, description, img} = service;
    return (
        <div className="service pb-3">
            <img width="300px" height="300px" src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;