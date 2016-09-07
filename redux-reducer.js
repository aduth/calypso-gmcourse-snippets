export default function sites( state = null, action ) {
	switch ( action.type ) {
		case 'SITES_RECEIVE':
			return action.sites;
	}

	return state;
}
