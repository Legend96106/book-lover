import React from "react";

const AboutMe = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-4">
                        <img className="img-fluid" src="img/about-us.jpg" />
                    </div>

                    <div className="col-md-6 col-lg-8">
                        <header className="section-header">
                            <h2>About Me</h2>
                        </header>
                        <h3><strong>Name:</strong> Poppy Jackson</h3>
                        <h4><strong>Profession:</strong> Web Designer & Developer</h4>
                        <p>
                            Aliquam volutpat libero vitae tellus tristique lacinia. Donec convallis eros quis purus fringilla feugiat. Morbi blandit sapien vestibulum. Donec maximus ligula a ultrices placerat.
                        </p>
                        <p>
                            Mauris ac odio vel tortor facilisis scelerisque. Donec mattis interdum erat, at scelerisque augue mattis at. Integer nec scelerisque nisl. Duis urna justo, placerat bibendum mattis nec, venenatis ac nisl.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque neque auctor nisl ornare, id gravida mi elementum. Pellentesque convallis auctor efficitur. Pellentesque turpis turpis, placerat eu tempor id, fermentum eu magna.
                        </p>
                        <a href="#">Hire Me</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="skills">
                            <h3>Front End Skills</h3>
                            <div className="skill-name">
                                <p>HTML</p><p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div className="skill-name">
                                <p>CSS</p><p>95%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div className="skill-name">
                                <p>jQuery</p><p>80%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skills">
                            <h3>Back End Skills</h3>
                            <div className="skill-name">
                                <p>PHP</p><p>90%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div className="skill-name">
                                <p>Laravel</p><p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <div className="skill-name">
                                <p>MySQL</p><p>95%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;