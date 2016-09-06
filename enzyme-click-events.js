import React from 'react';
import { shallow } from 'enzyme';
import Button from 'components/button';

describe( '<Button />', () => {
	it( 'triggers onClick callback on click event', () => {
		const onClick = sinon.spy();
		const wrapper = shallow( <Button onClick={ onClick } /> );
		wrapper.find( 'button' ).simulate( 'click' );
		expect( onClick ).to.have.been.calledOnce;
	} );
} );
