import { DEFAULT_NAMES } from './constants';

export function getNameByUser( user, names = DEFAULT_NAMES ) {
	if ( names.hasOwnProperty( user ) ) {
		return names[ user ];
	}

	throw new TypeError();
}
