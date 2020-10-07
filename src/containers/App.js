import React, {Component} from 'react';
import { connect} from 'react-redux'
import JokeCard from '../components/JokeCard';
import Scroll from '../components/Scroll'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from '../components/Player';


import { setSearchField, requestRobots, requestJoke, startPlayer} from '../actions'

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robotsIsPendig: state.requestRobots.robotsIsPendig,
		robotsArr: state.requestRobots.robotsArr,
		robotsError: state.requestRobots.robotsError,
		jokeIsPendig: state.requestJoke.jokeIsPendig,
		jokeArr: state.requestJoke.jokeArr,
		jokeError: state.requestJoke.jokeError,
		buttonText: state.requestJoke.buttonText,
		PlayerIsPendig: state.startPlayer.PlayerIsPendig,
		playing: state.startPlayer.playing
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
		onRequestJoke: () => dispatch(requestJoke()),
		onReady: () => dispatch(startPlayer())
	}	
}

class App extends Component {
	
	componentDidMount() {
	}

	render() {
		const  { robotsIsPendig, onRequestJoke, jokeArr, buttonText, playing, onReady, PlayerIsPendig } = this.props;			
		return robotsIsPendig ? 
		<h1 className='tc'> LOADING... </h1> :
		(
			<div className='tc'>
				<h1 className='f1'>Chuck Norris App</h1>
				<Button variant="outline-danger" onClick={onRequestJoke}>{buttonText}</Button>{' '}
				<Scroll>
					<JokeCard joke={jokeArr}/>
				</Scroll>
				<Player playing={playing} onReady={onReady} url={'https://www.youtube.com/watch?v=7DzFZ_4Byw8&ab_channel=hishamwaffaii'}/>
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