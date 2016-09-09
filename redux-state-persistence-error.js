const sites = localStorage.getItem( 'sites' );
// Stale state:
//  [ { ID: 2916284, ... } ]

console.log( sites[ 2916284 ].name );
// Uncaught TypeError: Cannot read property 'name' of undefined
