import { spy } from 'sinon';
import { POSTS_REQUEST } from 'state/action-types';
import { requestSitePosts } from '../actions';

describe( 'actions', () => {
	const dispatch = spy();

	it( 'should dispatch fetch action when thunk triggered', () => {
		requestSitePosts( 2916284 )( dispatch );

		expect( dispatch ).to.have.been.calledWith( {
			type: POSTS_REQUEST,
			siteId: 2916284,
			query: {}
		} );
	} );
} );
