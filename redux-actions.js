import wpcom from './wpcom';

export function receiveSites( sites ) {
	return {
		type: 'SITES_RECEIVE',
		sites
	};
}

export function requestSites() {
	return async ( dispatch ) => {
		dispatch( { type: 'SITES_REQUEST' } );
		const sites = await wpcom.me().sites();
		dispatch( receiveSites( sites ) );
		dispatch( { type: 'SITES_REQUEST_SUCCESS' } );
	};
}
