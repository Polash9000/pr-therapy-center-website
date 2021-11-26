import React from 'react';
import chooseUs from '../../../Images/chooseUs.jpg'

const ChooseUs = () => {
    return (
        <div className="my-3">
            <div className="card mb-3 bg-success">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={chooseUs} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body mt-5 pt-5">
                            <h5 className="card-title text-white">Why Choose Us___</h5>
                            <p className="card-text text-white">We Proudly give quality, thorough chiropractic to the group and the encompassing regions.
                                Chiropractic mind is the act of utilizing spinal arrangement to ease a wide assortment of physical infirmities, including muscle strain, neck torment, endless back torment, and then some.At Healing Chiropractic our chiropractic group is prepared to address with you to talk about your issues. We will outline a program that is appropriate for you. We anticipate meeting you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;