dispatch( {
	type: POST_EDIT,
	post: {
		author: 41217097
	},
	meta: {
		analytics: [
			type: ANALYTICS_EVENT_RECORD,
			payload: {
				service: 'ga',
				category: 'Editor',
				action: 'Changed Author'
			}
		]
	}
} );
