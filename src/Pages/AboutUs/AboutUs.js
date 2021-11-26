import React from 'react';
import about from '../../Images/about.jpg'

const AboutUs = () => {
    return (
        <div>
            <h2 className="text-warning">About us</h2>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={about} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body my-5 p-5">
                            <h5 class="card-title">About Our Clinic____</h5>
                            <p class="card-text">Chiropractic mind is the act of utilizing spinal arrangement to ease a wide assortment of physical infirmities, including muscle strain, neck torment, endless back torment, and then some. This is expert by altering the position of the spinal segment to its appropriate shape, giving a non-intrusive

                                At Healing Chiropractic our chiropractic group is prepared to address with you to talk about your issues. We will outline a program that is appropriate for you. We anticipate meeting you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;