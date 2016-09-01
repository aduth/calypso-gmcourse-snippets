const names = {
	'aduth': 'Andrew Duthie'
};

export function getNameByUser( user ) {
	if ( names.hasOwnProperty( user ) ) {
		return names[ user ];
	}

	throw new TypeError();
}
