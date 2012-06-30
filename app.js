var app = require("express").createServer();
var express = require("express");
var CAS = require('cas');
var cas = new CAS({base_url: 'https://cas.sfu.ca/cgi-bin/WebObjects/cas.woa/wa/serviceValidate', service: 'http://174.7.105.30:8080/login'});


var docList = ['PHIL120-Outline.doc', 'perf.ppt', 'perf.pptx','test.pptx','Slide1.pdf'];

app.configure(function(){

	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.set('view options', {layout: false});
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
	res.render('index',{title:"Document Viewer", docs: docList});
});

app.get(/login.*/, function(req,res){
	var ticket = req.query["ticket"];
	console.log(ticket);
	if (ticket) {
		cas.validate(ticket, function(err, status, username) {
			console.log(status + " " + username);
			if (err) {
				// Handle the error
	        	res.send({error: err});
	    	}
	    	else {
	        	// Log the user in
	       		res.send({status: status, username: username});
	      	}
	    });
	} 
	else{
    	res.redirect('/');
	}
});

app.listen(8080);