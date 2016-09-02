import { sum } from './math';

describe( 'math', () => {
	describe( 'sum()', () => {
		it( 'should return the sum of its arguments', () => {
			const result = sum( 1, 2, 3 );
			if ( 6 !== result ) {
				throw new Error();
			}
		} );
	} );
} );
