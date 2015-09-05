var express = require('express'),
    app = express(),
    ghost = require('ghost'),
    path = require('path')

ghost({
    config: path.resolve(__dirname, 'config.js')
}).then(function (ghostServer) {
    app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
    ghostServer.start(app);
}).catch(function (err) {
    console.log(err);
});
