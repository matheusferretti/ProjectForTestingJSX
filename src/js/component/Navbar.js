import React from "react";

const Navbar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-dark"
			style={{
				background:
					"linear-gradient(90deg, rgba(32,53,91,1) 5%, rgba(108,206,222,1) 42%, rgba(114,143,228,1) 70%, rgba(91,81,107,1) 100%)"
			}}>
			<a className="navbar-brand" href="#">
				Quantum Web
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							About Us
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Services
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
