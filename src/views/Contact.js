import React from "react";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <h3>Contact Me</h3>
                    <p>
                        Morbi lacinia malesuada risus vel pellentesque. Cras malesuada, felis nec dignissim lobortis, nisl nulla venenatis arcu, et commodo lacus nulla sit amet libero.
                    </p>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="contact-info">
                            <p><i className="fa fa-user"></i>Poppy Jackson</p>
                            <p><i className="fa fa-tag"></i>Web Designer & Developer</p>
                            <p><i className="fa fa-map-marker"></i>123 Soft Street, Los Angeles, CA, USA</p>
                            <p><i className="fa fa-envelope"></i><a href="mailto:info@example.com">info@example.com</a></p>
                            <p><i className="fa fa-phone"></i><a href="tel:+1234567890">+123-456-7890</a></p>
                            <div className="social">
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-linkedin"></i></a>
                                <a href=""><i className="fa fa-instagram"></i></a>
                                <a href=""><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <form action="" method="">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;