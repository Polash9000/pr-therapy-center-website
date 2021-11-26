import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Repotation from '../Repotation/Repotation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <Repotation></Repotation>
        </div>
    );
};

export default Home;