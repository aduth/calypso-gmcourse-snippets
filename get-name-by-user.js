export function getNameByUser( user ) {
	const names = {
		'aduth': 'Andrew Duthie'
	};

	if ( ! user in names ) {
		throw new TypeError();
	}

	return names[ user ];
}
