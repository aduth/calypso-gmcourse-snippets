import React from 'react';
import { connect } from 'react-redux';
import { getCurrentGreetingTarget } from 'state/ui/selectors';

export function Greeting( { toWhom = 'World' } ) {
	return <span>Hello { toWhom }</span>;
}

export default connect( ( state ) => ( {
	toWhom: getCurrentGreetingTarget( state )
} ) )( Greeting );
