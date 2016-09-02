import { expect } from 'chai';
import { readFile } from 'fs';

describe( 'post', () => {
	describe( 'actions', () => {
		let sampleText;
		before( ( done ) => {
			readFile( './sample.txt', ( error, text ) => {
				sampleText = text;
				done( error );
			} );
		} );

		describe( 'savePost()', () => {
			it( 'should save a new post', () => {
				return savePost( 2916284, null, {
					content: sampleText
				} ).then( ( post ) => {
					expect( post.content ).to.equal( sampleText );
				} );
			} );
		} );
	} );
} );
