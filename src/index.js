import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots, requestJoke} from './reducers';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots, requestJoke});
const store = 
	createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)) // usally you use root reducer

ReactDOM.render(
				<Provider  store={store}>
					<App/>
				</Provider>, document.getElementById('root'));
serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
