import { createStore } from 'redux';
import reducer from './reducer';

const storageState = localStorage.getItem( 'redux-state' );

let initialState;
if ( null !== storageState ) {
	initialState = JSON.parse( storageState );
}

const store = createStore( reducer, initialState );

store.subscribe( () => {
	const serializedState = JSON.stringify( store.getState() );
	localStorage.setItem( 'redux-state', serializedState );
} );
