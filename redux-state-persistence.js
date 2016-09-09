import { createStore } from 'redux';
import reducer from './reducer';

const storageState = localStorage.getItem( 'redux-state' );

let initialState;
if ( null !== storageState ) {
	initialState = storageState;
}

const store = createStore( reducer, initialState );

store.subscribe( () => {
	localStorage.setItem( 'redux-state', store.getState() );
} );
