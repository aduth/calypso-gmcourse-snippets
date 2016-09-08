import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore( reducer );

function receiveSites( sites ) {
	return {
		type: 'SITES_RECEIVE',
		sites
	};
}

store.dispatch( receiveSites( [
	{ ID: 2916284, name: 'WordPress.com Example Blog' },
	{ ID: 72145503, name: 'Andrew Duthie Test Site' }
] ) );
