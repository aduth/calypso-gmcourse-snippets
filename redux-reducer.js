import { combineReducers } from 'redux';
import { keyBy } from 'lodash';

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

export const items = createReducer( null, {
	[ SITES_RECEIVE ]: ( state, action ) => keyBy( action.sites, 'ID' )
}, schema );

export default combineReducers( { requesting, items } );
