import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark p-5">
            <h2><Link to="/home">PR Therapy</Link></h2>
            <p className="text-primary">Copyright &copy; <Link to="/home">PR Therapy</Link> 2021 All rights reserved.</p>
        </div>
    );
};

export default Footer;