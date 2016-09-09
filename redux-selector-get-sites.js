import { values } from 'lodash';

export function getSites( state ) {
	return values( state.sites.items );
}
