import Chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { receiveSites, requestSites } from './redux-actions';

Chai.use( sinonChai );

describe( 'actions', () => {
	describe( 'receiveSites()', () => {
		it( 'should return an action object', () => {
			const sites = [ { ID: 2916284, name: 'WordPress.com Example Sites' } ];
			const action = receiveSites( sites );

			expect( action ).to.eql( {
				type: 'SITES_RECEIVE',
				sites
			} )
		} );
	} );

	describe( 'requestSites()', () => {
		it( 'should return an action thunk', () => {
			expect( requestSites() ).to.be.a( 'function' );
		} );

		it( 'should dispatch request start when invoked', () => {
			const dispatch = sinon.spy();
			requestSites()( dispatch );

			expect( dispatch ).to.have.been.calledWith( {
				type: 'SITES_REQUEST'
			} );
		} );
	} );
} );
