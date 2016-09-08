export default function sites( state = null, action ) {
	switch ( action.type ) {
		case 'SITES_RECEIVE':
			return action.sites;
	}

	return state;
}

// sites( undefined, { type: 'USER_RECEIVE' } )                 => null
// sites( null,      { type: 'SITES_RECEIVE', sites: [] } )     => []
// sites( [],        { type: 'SELECTED_SITE_SET', siteId: 1 } ) => []
