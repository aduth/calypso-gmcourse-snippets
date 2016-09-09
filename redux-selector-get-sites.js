import { values } from 'lodash';
import createSelector from 'state/utils';

export const getSites = createSelector(
	( state ) => values( state.sites.items ),
	( state ) => state.sites.items
);
