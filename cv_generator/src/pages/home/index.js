import React, { Component } from 'react';
import { URL } from '../../config/constants';
import { Button } from 'react-bootstrap';
import './index.css';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.changeRouter = this.changeRouter.bind(this);
	}
	changeRouter(url) {
		this.props.history.push(url);
	}

	render() {
		return (
			<div className = 'home'>
				<Button 
					bsStyle="success" 
					onClick ={ () => this.changeRouter(URL.PERSONAL_INFO) }>
					Create New Resume
				</Button>
			</div>
		);
	}
}
