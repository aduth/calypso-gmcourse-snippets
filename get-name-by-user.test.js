import { expect } from 'chai';
import { getNameByUser } from './get-name-by-user';

describe( 'getNameByUser()', () => {
	it( 'should throw on missing username', () => {
		expect( () => getNameByUser( 'ockham' ) ).to.throw( TypeError );
	} );

	it( 'should throw on missing username by object prototype member', () => {
		expect( () => getNameByUser( 'valueOf' ) ).to.throw( TypeError );
	} );

	it( 'should return a user\'s name', () => {
		expect( getNameByUser( 'aduth' ) ).to.equal( 'Andrew Duthie' );
	} );
} );
