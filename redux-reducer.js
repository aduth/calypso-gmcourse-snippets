import { combineReducers } from 'redux';
import { keyBy } from 'lodash';
import {
	SITES_REQUEST,
	SITES_REQUEST_FAILURE,
	SITES_REQUEST_SUCCESS,
	SITES_RECEIVE,
	DESERIALIZE,
	SERIALIZE
} from './action-types';

export function requesting( state = false, action ) {
	switch ( action.type ) {
		case SITES_REQUEST:
			return true;

		case SITES_REQUEST_SUCCESS:
		case SITES_REQUEST_FAILURE:
			return false;

		case DESERIALIZE:
		case SERIALIZE:
			return false;
	}

	return state;
}

export function items( state = null, action ) {
	switch ( action.type ) {
		case SITES_RECEIVE:
			return keyBy( action.sites, 'ID' );

		case DESERIALIZE:
			if ( isStateValidWithSchema( state, schema ) ) {
				return state;
			}

			return null;
	}

	return state;
}

export default combineReducers( { requesting, items } );
