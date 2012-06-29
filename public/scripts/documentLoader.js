var loadDocument = function(doc){
	$('#documentViewer').attr('src' ,"http://docs.google.com/gview?url=http://174.7.105.30:8080/docs/"+doc+"&embedded=true");
	console.log($('#documentViewer').attr('src'));
}

var doStuff = function(){
	alert("hey");
}