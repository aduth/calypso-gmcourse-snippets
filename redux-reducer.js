export function requesting( state = false, action ) {
	switch ( action.type ) {
		case 'SITES_REQUEST':
			return true;

		case 'SITES_REQUEST_SUCCESS':
		case 'SITES_REQUEST_FAILURE':
			return false;
	}

	return state;
}

export function items( state = null, action ) {
	switch ( action.type ) {
		case 'SITES_RECEIVE':
			return action.sites;
	}

	return state;
}

export default function sites( state, action ) {
	return {
		requesting: requesting( state, action ),
		items: items( state, action )
	};
}
