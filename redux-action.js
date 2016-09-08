import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore( reducer );

store.dispatch( {
	type: 'SITES_RECEIVE',
	sites: [
		{ ID: 2916284, name: 'WordPress.com Example Blog' },
		{ ID: 72145503, name: 'Andrew Duthie Test Site' }
	]
} );
