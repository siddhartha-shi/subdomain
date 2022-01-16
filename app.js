var app, express = require('express');
var os = require("os");

app = express();

app.get('/', function (request, response) {
    if (request.headers.host.includes('new.')) {
        request.url = '/hello';
        return app._router.handle(request, response);
    } else if (request.headers.host.includes('sarker')) {
        request.url = '/hi';
        return app._router.handle(request, response);
    } else {
        response.send({"msg": `${request.headers.host}}: this is orgin`});
    }
});

app.get('/hello', function (request, response) {
    response.send({"msg": `${request.headers.host}: this is path of HELLO`});
});

app.get('/hi', function (request, response) {
    response.send({"msg": `${request.headers.host}}: this is path of HI`});
});

app.listen(process.env.PORT || 3000, function () {
    console.log('> listening on port 3000');
});
