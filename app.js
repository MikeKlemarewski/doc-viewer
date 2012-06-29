var app = require("express").createServer();
var express = require("express");

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

app.listen(8080);