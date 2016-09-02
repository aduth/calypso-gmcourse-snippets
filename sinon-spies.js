import { spy } from 'sinon';

spy( console, 'error' );

console.error( 'Oops!' );

console.log( `Called with "${ console.error.firstCall.args.join() }"` );
