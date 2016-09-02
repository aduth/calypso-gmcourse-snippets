import { assert, expect, should } from 'chai';
import { DEFAULT_NAMES as names } from './constants';

should();

assert.equal( names[ 'ockham' ], 'Bernie Reiter' );
assert( names[ 'ockham' ] === 'Bernie Reiter' );
expect( names[ 'ockham' ] ).to.equal( 'Bernie Reiter' );
names.should.have.ownProperty( 'ockham' );
