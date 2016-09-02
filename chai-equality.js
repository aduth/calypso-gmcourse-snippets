import { expect } from 'chai';

const namesA = [ 'Andrew', 'Bernie' ];
const namesB = [ 'Andrew', 'Bernie' ];

// [] !== []
expect( namesA ).to.not.equal( namesB );
expect( namesA ).to.eql( namesB );

// 'Andrew' === 'Andrew'
expect( namesA[ 0 ] ).to.equal( 'Andrew' );
expect( namesA[ 0 ] ).to.eql( 'Andrew' ); // Deep equality unnecessary
