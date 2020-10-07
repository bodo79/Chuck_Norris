import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
	REQUEST_JOKE_PENDING,
	REQUEST_JOKE_SUCCESS,
	REQUEST_JOKE_FAILED
} from './constants.js'

const initialStateSearch = {
	searchField: ''
}

// searchRobots Reducer
export const searchRobots = (state=initialStateSearch, action={}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField:action.payload});
		default:
			return state;
	}
}

const initialStateRobots = {
	robotsIsPendig: false,
	robotsArr: [],
	robotsError: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
	switch (action.type) {
		case 	REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { robotsIsPendig: true});
		case 	REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robotsArr: action.payload, robotsIsPendig: false});
		case 	REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, { robotsError: action.payload, robotsIsPendig: false});
		default:
			return state;
	}
}


const initialStateJoke = {
	jokeIsPendig: false,
	jokeArr: [],
	jokeError: '',
	buttonText: 'Do NOT press (if you are not Chuck)' 
}

export const requestJoke = (state=initialStateJoke, action={}) => {
	switch (action.type) {
		case 	REQUEST_JOKE_PENDING:
			return Object.assign({}, state, { jokeIsPendig: true, buttonText: 'Loading...'});
		case 	REQUEST_JOKE_SUCCESS:
			return Object.assign({}, state, { jokeArr: action.payload, jokeIsPendig: false, buttonText: 'Give Me another Chuck joke'});
		case 	REQUEST_JOKE_FAILED:
			return Object.assign({}, state, { jokeError: action.payload, jokeIsPendig: false});
		default:
			return state;
	}
}