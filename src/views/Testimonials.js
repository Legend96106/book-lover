import React from "react";

const Testimonials = () => {
    
    return (
        <div className="testimonials" id="testimonials">
            <div className="container">
                <i className="fa fa-4x fa-quote-left"></i>
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <img src="img/testimonial-1.jpg" className="testimonial-img" alt="" />
                        <h3>Abigail Shaw</h3>
                        <h4>Greenhouse worker</h4>
                        <p>
                            Duis elementum consequat feugiat. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas. 
                        </p>
                    </div>

                    <div className="testimonial-item">
                        <img src="img/testimonial-2.jpg" className="testimonial-img" alt="" />
                        <h3>Jake Gregory</h3>
                        <h4>News correspondent</h4>
                        <p>
                            Curabitur bibendum euismod augue, eu rutrum metus consectetur id. Duis lacus erat, gravida laoreet molestie eget, congue in erat.
                        </p>
                    </div>

                    <div className="testimonial-item">
                        <img src="img/testimonial-3.jpg" className="testimonial-img" alt="" />
                        <h3>Maddison Hughes</h3>
                        <h4>Social worker</h4>
                        <p>
                            Nulla at luctus ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim quam, interdum nec turpis at, volutpat ultricies ligula.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;