import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { EventEmitter } from 'events/';

class SitesList extends EventEmitter {
	get() {
		if ( ! this.data ) {
			this.fetch();
		}

		return this.data || [];
	}

	async fetch() {
		this.data = await wpcom.me().sites();
		this.emit( 'change' );
	}
}

class MyComponent extends Component {
	componentDidMount() {
		this.props.sites.on( 'change', this.forceUpdate );
	}

	render() {
		return this.props.sites.get().map( ( site ) => (
			<div key={ site.ID }>{ site.name }</div>
		) );
	}
}

ReactDom.render( MyComponent, { sites: new SitesList() }, document.body );
