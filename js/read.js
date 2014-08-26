// filename = the file to read from
// cabllbackFn = the function to call when the data is captured
//		this is done so that the data can pass from the AJAX back to the proper code
//		workaround for trying to return data in nested functions

function readJSON( filename, callbackFn ){

	$.ajax({
		type    : 'POST',
		url     : filename,
		dataType: 'JSON'
	})
	.done(function( data ) {
		console.log( "SUCCESS: read file -> " + filename );
		// copied from: http://css-tricks.com/snippets/javascript/check-if-function-exists-before-calling/
		// test if the call back function exists before trying to execute
		if (typeof callbackFn == 'function') {
			callbackFn( data );
		}
	})
	.fail(function( jqXHR, textStatus, errorThrown ){
		console.log( "FAILED: " + textStatus );
	})
	.always(function() {
		console.log( "COMPLETE: readJSON() AJAX called" );
	});

}