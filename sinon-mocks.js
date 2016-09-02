import { mock } from 'sinon';

const expectation = mock( console )
	.expects( 'error' )
	.exactly( 1 )
	.withArgs( 'Oops!' );

console.error( 'Oops!' );

try {
	expectation.verify();
	console.log( 'Called as expected' );
} catch ( error ) {
	console.log( 'Not called as expected' );
}
