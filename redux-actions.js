import wpcom from 'lib/wp';

export function receiveSites( sites ) {
	return {
		type: 'SITES_RECEIVE',
		sites
	};
}

export function fetchSites() {
	return async ( dispatch ) => {
		const sites = await wpcom.me().sites();
		dispatch( receiveSites( sites ) );
	}
}
