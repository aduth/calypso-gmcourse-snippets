import { names } from './constants';

export function getNameByUser( user ) {
	if ( names.hasOwnProperty( user ) ) {
		return names[ user ];
	}

	throw new TypeError();
}
