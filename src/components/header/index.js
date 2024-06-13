import React from "react";

const Header = () => {
	return (
		<>
			<div className="top-header" id="top-header">
				<div className="container text-center">
					<div className="row">
						<div className="col-md-12">
							<img src="img/profile-pic.jpg" alt="Anamul Hasan" />
						</div>

						<div className="col-md-12">
							<h1>I'm Yuu Kimura</h1>
						</div>

						<div className="col-md-12">
							<p>Web Designer, Senior Web Developer, Senior Front End Developer,
								Senior Back End Developer, Graphic Designer</p>
							<h2></h2>
						</div>
					</div>
				</div>
			</div>

			<div className="header">
				<div className="container">

					<div className="logo pull-left">
						<h1><a href="index.html">MyFolio</a></h1>
					</div>

					<nav id="nav-menu-container">
						<ul className="nav-menu">
							<li><a href="#top-header">Home</a></li>
							<li><a href="#about">About me</a></li>
							<li><a href="#experience">Experience</a></li>
							<li><a href="#services">Services</a></li>
							<li><a href="#portfolio">Portfolio</a></li>
							<li><a href="#contact">Contact me</a></li>
						</ul>
					</nav>

					<nav className="nav social-nav pull-right d-none d-lg-inline">
						<a href="#">
							<i className="fa fa-twitter"/>
						</a>
						<a href="#">
							<i className="fa fa-facebook"/>
						</a>
						<a href="#">
							<i className="fa fa-linkedin"/>
						</a>
					</nav>
				</div>
			</div>
		</>
	)
}

export default Header;