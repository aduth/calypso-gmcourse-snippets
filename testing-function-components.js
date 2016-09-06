import React from 'react';

export default function Greeting( { toWhom = 'World' } ) {
	return <span>Hello { toWhom }</span>;
}
