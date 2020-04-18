import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'
import '../sass/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

render(
	<div className="container">
		<div className="row">
		    <div className="col-lg">Let's</div>
	        <div className="col-lg">Get</div>
	        <div className="col-lg">Started</div>
	    </div>
	</div>,
	document.getElementById("app")
);