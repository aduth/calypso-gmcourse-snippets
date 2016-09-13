import React, { Component, PureComponent } from 'react';
import ReactDom from 'react-dom';

class Greeting extends PureComponent {
	render() {
		return <span>Hello, { this.props.user.name }!</span>;
	}
}

function App( { user } ) {
	return <Greeting user={ user } />
}

function renderApp( user ) {
	ReactDom.render( <App user={ user } />, document.body );
}

const user = { name: 'Andrew' };
renderApp( user );
user.name = 'Bernie';
renderApp( user );
