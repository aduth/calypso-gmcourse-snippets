import { preload } from 'sections-preload';

function MySectionLink() {
	return (
		<a
			href="/my-section"
			onMouseEnter={ () => preload( 'my-section' ) }>
			Navigate to My Section
		</a>
	);
}
