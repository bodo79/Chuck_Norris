import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
	REQUEST_JOKE_PENDING,
	REQUEST_JOKE_SUCCESS,
	REQUEST_JOKE_FAILED
} from './constants.js'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD, //it's constunt this why is CAPS
	payload: text
})

export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}

export const requestJoke = () => (dispatch) => {
	dispatch({ type: REQUEST_JOKE_PENDING});
	fetch('https://api.chucknorris.io/jokes/random')
		.then(response=> response.json())
		.then(data => dispatch({ type: REQUEST_JOKE_SUCCESS, payload: data}))
		.catch(error => dispatch({ type: REQUEST_JOKE_FAILED, payload: error}))
}