import React from "react";

const Services = () => {
    
    return (
        <div className="services" id="services">
            <div className="container">
                <header className="section-header">
                    <h3>My Services</h3>
                    <p>
                        Morbi lacinia malesuada risus vel pellentesque. Cras malesuada, felis nec dignissim lobortis, nisl nulla venenatis arcu, et commodo lacus nulla sit amet libero.
                    </p>
                </header>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"><i className="fa fa-television"></i></div>
                            <h4><a href="#">Web Design</a></h4>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et cubilia Curae</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"> <i className="fa fa-laptop"></i> </div>
                            <h4><a href="#">Web Development</a></h4>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et cubilia Curae</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"> <i className="fa fa-android"></i> </div>
                            <h4><a href="#">Apps Development</a></h4>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et cubilia Curae</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"> <i className="fa fa-envelope-o"></i> </div>
                            <h4><a href="#">Email List Building</a></h4>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et cubilia Curae</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"> <i className="fa fa-signal"></i> </div>
                            <h4><a href="#">Custom Analytics</a></h4>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et cubilia Curae</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"> <i className="fa fa-globe"></i> </div>
                            <h4><a href="#">Online Marketing</a></h4>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et cubilia Curae</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;