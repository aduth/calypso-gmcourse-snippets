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
import createReducer from './util-create-reducer';
let schema;

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

export const items = createReducer( {}, {
	[ SITES_RECEIVE ]: ( state, action ) => {
		return Object.assign( {}, state, keyBy( action.sites, 'ID' ) );
		// OR: return { ...state, ...keyBy( action.sites, 'ID' ) };
	}
}, schema );

export default combineReducers( { requesting, items } );
