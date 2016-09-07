import wpcom from 'lib/wp';
import Dispatcher from 'dispatcher';

export async function fetchSites() {
	const sites = await wpcom.me().sites();
	Dispatcher.handleServerAction( {
		type: 'RECEIVE_SITES',
		sites
	} );
}
