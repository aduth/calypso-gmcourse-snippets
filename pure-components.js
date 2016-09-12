import React, { Component, PureComponent } from 'react';

class Greeting extends PureComponent {
	render() {
		return <span>Hello, { this.props.user.name }!</span>;
	}
}

function App() {
	return <Greeting user={ { name: 'Andrew' } } />
}
