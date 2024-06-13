import React from "react";

const Counter = () => {
    return (
        <div className="counters">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="counter">
                            <div className="counter-icon-box"><i className="fa fa-calendar"></i></div>
                            <div className="number animateNumber" data-toggle="counter-up"> <span>10</span></div>
                            <h4 className="font-weight">Years of Experience</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter">
                            <div className="counter-icon-box"><i className="fa fa-check"></i></div>
                            <div className="number animateNumber" data-toggle="counter-up"> <span>395</span></div>
                            <h4 className="font-weight">Completed Projects</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter">
                            <div className="counter-icon-box"><i className="fa fa-users"></i></div>
                            <div className="number animateNumber" data-toggle="counter-up"> <span>225</span></div>
                            <h4 className="font-weight">Total Clients</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter">
                            <div className="counter-icon-box"><i className="fa fa-heart"></i></div>
                            <div className="number animateNumber" data-toggle="counter-up"> <span>9</span></div>
                            <h4 className="font-weight">Award Won</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;