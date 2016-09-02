export function sum() {
	return [ ...arguments ].reduce( ( memo, x ) => memo + x, 0 );
}
