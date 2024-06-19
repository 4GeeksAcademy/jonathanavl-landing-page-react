import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card.jsx";
import { NavBar } from "./navbar.jsx";
import { Jumbotron } from './Jumbotron';
import { Footer } from './Footer';

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div class="container">
				<br />
				<Jumbotron />
				<br />
				<div class="d-flex justify-content-around col-12">
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-3 mb-3">
						<Card />
						</div>
						<div class="col-xs-12 col-sm-6 col-md-3 mb-3">
						<Card />
						</div>
						<div class="col-xs-12 col-sm-6 col-md-3 mb-3">
						<Card />
						</div>
						<div class="col-xs-12 col-sm-6 col-md-3 mb-3">
						<Card />
						</div>
					</div>
				</div>
				<br />
			</div>
			<br />
			<br />
			<Footer />
		</div>
	);
};

export default Home;
