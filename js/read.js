function readJSON( filename, callbackFn ){

	$.ajax({
		type    : 'POST',
		url     : filename,
		dataType: 'JSON'
	})
	.done(function( data ) {
		console.log( "SUCCESS: read file -> " + filename );
		callbackFn( data );
	})
	.fail(function( jqXHR, textStatus, errorThrown ){
		console.log( "FAILED: " + textStatus );
	})
	.always(function() {
		console.log( "COMPLETE: readJSON() AJAX called" );
	});

}