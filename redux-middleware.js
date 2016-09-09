import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const thunk = ( store ) => ( next ) => ( action ) => {
	if ( 'function' === typeof action ) {
		return action( store.dispatch, store.getState );
	}

	return next( action );
};

createStore( reducer, applyMiddleware( thunk ) );
