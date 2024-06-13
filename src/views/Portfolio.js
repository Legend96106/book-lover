import React from "react";

const Portfolio = () => {
    
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <header className="section-header">
                    <h3 className="section-title">My Portfolio</h3>
                    <p>
                        Morbi lacinia malesuada risus vel pellentesque. Cras malesuada, felis nec dignissim lobortis, nisl nulla venenatis arcu, et commodo lacus nulla sit amet libero.
                    </p>
                </header>

                <div className="row">
                    <div className="col-lg-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".web-des">Web Design</li>
                            <li data-filter=".web-dev">Web Development</li>
                            <li data-filter=".app-dev">App Development</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item web-des">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-1.jpg" className="img-fluid" alt="" />
                                <a href="img/portfolio-1.jpg" data-lightbox="portfolio" data-title="Curabitur semper erat" className="link-preview" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <h4 className="portfolio-title">Curabitur semper erat <span>Web Design</span></h4>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item web-des">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-2.jpg" className="img-fluid" alt="" />
                                <a href="img/portfolio-2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Maecenas a tempus tortor" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <h4 className="portfolio-title">Maecenas a tempus tortor <span>Web Design</span></h4>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-3.jpg" className="img-fluid" alt="" />
                                <a href="img/portfolio-3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Aliquam id sapien lorem" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <h4 className="portfolio-title">Aliquam id sapien lorem <span>Web Development</span></h4>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item web-dev">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-4.jpg" className="img-fluid" alt="" />
                                <a href="img/portfolio-4.jpg" className="link-preview" data-lightbox="portfolio" data-title="Quisque lectus mauris" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <h4 className="portfolio-title">Quisque lectus mauris <span>Web Development</span></h4>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item app-dev">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-5.jpg" className="img-fluid" alt="" />
                                <a href="img/portfolio-5.jpg" className="link-preview" data-lightbox="portfolio" data-title="Interdum et malesuada" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <h4 className="portfolio-title">Interdum et malesuada <span>Apps Development</span></h4>
                            </figure>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item app-dev">
                        <div className="portfolio-wrap">
                            <figure>
                                <img src="img/portfolio-6.jpg" className="img-fluid" alt="" />
                                <a href="img/portfolio-6.jpg" className="link-preview" data-lightbox="portfolio" data-title="Pellentesque lacus" title="Preview"><i className="fa fa-eye"></i></a>
                                <a href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></a>
                                <h4 className="portfolio-title">Pellentesque lacus <span>Apps Development</span></h4>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;