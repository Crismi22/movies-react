import React from 'react';
import "./style404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
  	<div id="notfound">
		<div className="notfound no-nav-footer">
			<div className="notfound-404">
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
      <Link to={`/`}>Home</Link>
		</div>
	</div>
  );
};

export default Error404;
 