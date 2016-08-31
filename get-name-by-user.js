export function getNameByUser( user ) {
	const names = {
		'aduth': 'Andrew Duthie'
	};

	if ( ! names.hasOwnProperty( user ) ) {
		throw new TypeError();
	}

	return names[ user ];
}
