var express = require('express'),
    app = express(),
    ghost = require('ghost');

ghost().then(function (ghostServer) {
    app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
    ghostServer.start(app);
}).catch(function (err) {
    console.log(err);
});