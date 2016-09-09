import { expect } from 'chai';
import { requesting, items } from './redux-reducer';
import deepFreeze from 'deep-freeze';
import {
	SITES_REQUEST,
	SITES_REQUEST_FAILURE,
	SITES_REQUEST_SUCCESS,
	SITES_RECEIVE,
	DESERIALIZE,
	SERIALIZE
} from './action-types';

describe( 'reducer', () => {
	describe( 'requesting', () => {
		it( 'should default to false', () => {
			const state = requesting( undefined, {} );

			expect( state ).to.be.false;
		} );

		it( 'should return true on request start', () => {
			const state = requesting( false, {
				type: SITES_REQUEST
			} );

			expect( state ).to.be.true;
		} );

		it( 'should return false on request succeed', () => {
			const state = requesting( true, {
				type: SITES_REQUEST_SUCCESS
			} );

			expect( state ).to.be.false;
		} );

		it( 'should return false on request failed', () => {
		} );

		it( 'should return default state on serialize', () => {
		} );

		it( 'should return default state on deserialize', () => {
		} );
	} );

	describe( 'items', () => {
		it( 'should default to null', () => {
		} );

		it( 'should return merged object of received sites by ID', () => {
			const original = deepFreeze( {} );
			const sites = [ { ID: 2916284, name: 'WordPress.com Example Sites' } ];
			const state = items( original, {
				type: SITES_RECEIVE,
				sites
			} );

			expect( state ).to.not.equal( original );
			expect( state ).to.eql( {
				2916284: { ID: 2916284, name: 'WordPress.com Example Sites' }
			} );
		} );

		it( 'should return same state on serialize', () => {
		} );

		it( 'should return same state on valid deserialize state', () => {
		} );

		it( 'should return default state on invalid deserialize state', () => {
		} );
	} );
} );
