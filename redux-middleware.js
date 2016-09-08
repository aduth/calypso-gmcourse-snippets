import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const logger = ( store ) => ( next ) => ( action ) => {
	console.log( 'dispatching', action );
	const result = next( action );
	console.log( 'next state', store.getState() );
	return result;
};

createStore( reducer, applyMiddleware( logger ) );
