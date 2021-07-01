import {createStore, applyMiddleware} from 'redux';
import {listReducer}  from '../redux/reducers/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { fetchRequest,fetchPost } from './actions/Actions';

//middleware thunk let the actioncreator to return a function rather than an object.
const store=createStore(listReducer,
    applyMiddleware(thunk)
)
export default store;