import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './Robots';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			robots: robots,
			searchField: '',
		};
	}

	searchRobot(event) {
		console.log(event);
	}

	render() {
		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox />
				<CardList robots={this.state.robots} />
			</div>
		);
	}
}

export default App;
