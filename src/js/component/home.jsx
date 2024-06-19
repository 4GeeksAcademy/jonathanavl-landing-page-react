import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Card} from "./card.jsx";
import {NavBar} from "./navbar.jsx";
import {Jumbotron} from './Jumbotron';
import {Footer} from './Footer';

//create your first component
const Home = () => {
	return (
	<div>
		<NavBar />
		<div class="container">
			<br />
		<Jumbotron/>
		<br />
		<div className="d-flex justify-content-around">
			<br />
			<Card /> 
			<Card /> 
			<Card /> 
			<Card />
			</div>
			<br />
		</div>
		<br />
		<br />
		<Footer/>
	</div>
);
};

export default Home;
