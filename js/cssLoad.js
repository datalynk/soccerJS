// copied from http://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript
// allows JavaScript to load CSS
// This is for better performance on the browser speed

function addCSS( path ){

	var link = document.createElement( "link" );
		link.href = path;
		link.type = "text/css";
		link.rel = "stylesheet";
		link.media = "screen,print";

	document.getElementsByTagName( "head" )[0].appendChild( link );
}

addCSS( 'css/reset.css'  );
addCSS( 'css/styles.css' );
