import React, { Component, PureComponent } from 'react';

class Greeting extends PureComponent {
	render() {
		return <span>Hello, { this.props.toWhom }!</span>;
	}
}

// Equivalent to…

class Greeting extends Component {
	shouldComponentUpdate( nextProps ) {
		return this.props.toWhom !== nextProps.toWhom;
		// Or: return shallowCompare( this.props, nextProps );
	}

	render() {
		return <span>Hello, { this.props.toWhom }!</span>;
	}
}
