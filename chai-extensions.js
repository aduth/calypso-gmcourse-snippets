// sinon-chai
expect( console.error ).to.have.been.called;

// chai-enzyme
expect( element ).to.have.className( 'is-selected' );

// test/helpers/immutable-chai
expect( subscription ).to.immutablyEqual( fromJS( {
	blog_id: 789,
	delivery_frequency: 168,
	state: 'SUBSCRIBED'
} ) );
