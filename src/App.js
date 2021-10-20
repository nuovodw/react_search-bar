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

	searchRobot = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const filterRobots = this.state.robots.filter((robot) => {
			return robot.name
				.toLowerCase()
				.includes(this.state.searchField.toLowerCase());
		});
		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox searchRobot={this.searchRobot} />
				<CardList robots={filterRobots} />
			</div>
		);
	}
}

export default App;
