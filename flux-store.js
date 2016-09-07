import { EventEmitter } from 'events/';
import Dispatcher from 'dispatcher';

let sites;
class SitesStore extends EventEmitter {
	get() {
		return sites;
	}
}

const sitesStore = new SitesStore();

Dispatcher.register( ( { action } ) => {
	switch ( action.type ) {
		case 'RECEIVE_SITES':
			sites = action.sites;
			sitesStore.emit( 'change' );
			break;
	}
} );

export default sitesStore;
