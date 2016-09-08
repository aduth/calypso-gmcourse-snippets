const DEFAULT_STATE = { requesting: false, items: null };

export default function sites( state = DEFAULT_STATE, action ) {
	switch ( action.type ) {
		case 'SITES_REQUEST':
			return { ...state, requesting: true };

		case 'SITES_REQUEST_SUCCESS':
		case 'SITES_REQUEST_FAILURE':
			return { ...state, requesting: false };

		case 'SITES_RECEIVE':
			return { ...state, items: action.sites };
	}

	return state;
}
