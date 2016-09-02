import { stub } from 'sinon';

stub( console, 'error', () => {
	// ...Your stub function behavior
} );

console.error( 'Oops!' );

console.log( `Called with "${ console.error.firstCall.args.join() }"` );
