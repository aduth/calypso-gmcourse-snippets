import { combineReducers } from 'redux';

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
	}

	return state;
}

export default combineReducers( { requesting, items } );
