import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';

const Store = createStore(Reducers,applyMiddleware(thunk));

const getToken = () => Store?.getState()?.generalState?.token;

export {Store, getToken};