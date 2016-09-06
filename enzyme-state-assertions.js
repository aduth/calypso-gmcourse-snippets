import React from 'react';
import { shallow } from 'enzyme';
import Button from 'components/button';

describe( '<Button />', () => {
	it( 'toggles isActive state on mouse down', () => {
		const wrapper = shallow( <Button /> );
		wrapper.find( 'button' ).simulate( 'mouseDown' );
		expect( wrapper ).to.have.state( 'isActive' ).be.true;
	} );
} );
