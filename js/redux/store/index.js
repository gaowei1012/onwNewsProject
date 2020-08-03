import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducres from '../reducre/index'
import logger from 'redux-logger'
import {middleware} from '../../navigation/AppNavigation';

const middlewares = [middleware, thunk, logger];

export default createStore(reducres, applyMiddleware(...middlewares));
