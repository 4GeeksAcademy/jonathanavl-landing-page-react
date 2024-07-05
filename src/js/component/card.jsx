import React from "react";

//create your first component
export const Card = () => {
	return (
		 <div className="card" style={{ width: '100%' }}>
		  <img src="https://marketing4ecommerce.net/wp-content/uploads/2024/02/imagen-generada-con-nightcafe-e1708680739301.jpg" className="card-img-top" alt="..." />
		  <div className="card-body">
			<h5 className="card-title">Card title</h5>
			<p className="card-text">
			  Some quick example text to build on the card title and make up the bulk of the card's content.
			</p>
			<a href="#" className="btn btn-primary">Go somewhere</a>
		  </div>
		</div>
	  );
	};