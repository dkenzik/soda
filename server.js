//setup Dependencies
var connect = require('connect')
    , express = require('express')
    , io = require('socket.io')
    , db = require('mongoose')
    , routes = require('./routes')
    , property = require('./property')
    , flash_mw = require('./flash_mw')
    , port = (process.env.PORT || 8081);

//Setup Express
var server = express.createServer();
server.configure(function(){
    server.set('views', __dirname + '/views');
    server.use(connect.logger({format : 'dev'}));
    server.use(connect.bodyParser());
    server.use(express.cookieParser());
    server.use(express.session({ secret: "QrCmInvoUYn5COjfzAYriypPDng5JOHOA0iTb3t"}));
    server.use(connect.static(__dirname + '/static'));
    server.use(flash_mw.request_mw);
    server.use(server.router);
});
server.dynamicHelpers ({
	page_title: property.creator()
});

//setup the errors
server.error(function(err, req, res, next){
    if (err instanceof routes.NotFound) {
        res.render('404.jade', { locals: { 
                  title : '404 - Not Found'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX' 
                },status: 404 });
    } else {
        res.render('500.jade', { locals: { 
                  title : 'The Server Encountered an Error'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX'
                 ,error: err 
                },status: 500 });
    }
});

///////////////////////////////////////////
//              Routes                   //
///////////////////////////////////////////
server.get('/', routes.index);
server.get('/profile', routes.profile);
server.get('/search', routes.search);
server.get('/help', routes.help);
server.post('/signin', routes.signin);

//A Route for 500 Error
server.get('/500', routes.HTTP500);
//The 404 Route (ALWAYS Keep this as the last route)
server.get('/*', routes.HTTP404);


server.listen( port);

console.log('Listening on http://0.0.0.0:' + port );
