import { values } from 'lodash';
import createSelector from 'state/utils';

export const getSites = createSelector( ( state ) => {
	return values( state.sites.items );
} );
