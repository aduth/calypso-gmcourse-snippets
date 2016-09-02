import { expect } from 'chai';

const name = 'Andrew';

expect( name ).to.be.a( 'string' );
expect( name ).to.equal( 'Andrew' );
expect( name ).to.have.length( 6 );
expect( name ).to.include( 'ndr' );
expect( name ).to.be.ok;
