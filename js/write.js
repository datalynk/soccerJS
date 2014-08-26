function writeJSON( filename, content ){

	$.ajax({
		type : 'POST',
		url  : 'write.php',
		data:{
			filename: filename,
			contents: content
		}
	})
	.done(function() {
		console.log( "SUCCESS: wrote file -> " + filename );
	})
	.fail(function( jqXHR, textStatus, errorThrown ){
		console.log( "FAILED: " + textStatus );
	})
	.always(function() {
		console.log( "COMPLETE: writeJSON() AJAX called" );
	});

}