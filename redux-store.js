import { createStore } from 'redux';

const store = createStore( ( state, action ) => {
	if ( 'COUNT_INCREMENT' === action.type ) {
		return state + 1;
	}

	return state;
}, 0 );

console.log( store.getState() );
store.subscribe( () => console.log( store.getState() ) );
store.dispatch( { type: 'COUNT_INCREMENT' } );
