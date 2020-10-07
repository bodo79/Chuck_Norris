import React, {Component} from 'react';
import { connect} from 'react-redux'
import JokeCard from '../components/JokeCard';
import Scroll from '../components/Scroll'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import { setSearchField, requestRobots, requestJoke} from '../actions'

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robotsIsPendig: state.requestRobots.robotsIsPendig,
		robotsArr: state.requestRobots.robotsArr,
		robotsError: state.requestRobots.robotsError,
		jokeIsPendig: state.requestJoke.jokeIsPendig,
		jokeArr: state.requestJoke.jokeArr,
		jokeError: state.requestJoke.jokeError,
		buttonText: state.requestJoke.buttonText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
		onRequestJoke: () => dispatch(requestJoke())
	}	
}

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const  { robotsIsPendig, onRequestJoke, jokeArr, buttonText } = this.props;
		
		return robotsIsPendig ? 
		<h1 className='tc'> LOADING... </h1> :
		(
			<div className="tc">
				<h1 className='f1'>Chuck Norris Roulette</h1>
				<Button variant="outline-danger" onClick={onRequestJoke}>{buttonText}</Button>{' '}
				<Scroll>
					<JokeCard joke={jokeArr}/>
				</Scroll>
			</div>
		);		
	
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);//connect is higher order function

// <SearchBox searchChange={onSearchChange}/>
// <CardList robots={filterRobots}/>
// const filterRobots = robotsArr.filter(robot => {
// 			return robot.name.toLowerCase().includes(searchField.toLowerCase());
// 		})