### Creating [ghost](https://github.com/tryghost/Ghost) blog and packaging it with [JXcore](https://github.com/jxcore/jxcore)

![Demo screenshot](https://raw.githubusercontent.com/karaxuna/jxcore-tutorial-ghost-packaged/master/screens/admin-create-post.png "Demo screenshot")

***See [repository](https://github.com/karaxuna/jxcore-tutorial-ghost-packaged) for completed demo.***

First [download](http://jxcore.com/downloads/) and install JXcore. Then add `ghost` and `express` dependencies in `package.json` file. After that, let's create main file named `index.js` in root of the project:

```javascript
var express = require('express'),
    app = express(),
    ghost = require('ghost');

ghost().then(function (ghostServer) {
    app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
    ghostServer.start(app);
}).catch(function (err) {
    console.log(err);
});
```

Here we are creating ghost server and assigning express app to it. That's all code needed to run blog. Now install npm depencencies:

    jx install
    
And run the server:

    jx index.js
    
The server will be run on `localhost:2368` by default. You can access admin panel from `/ghost` path. Now let's package it with JXcore (run shell in the root of the project):

    jx package index.js "build/ghost" --slim "config.js,content"
    
This starts packaging. First parameter (`index.js`) is main file of the project and second parameter (`"myPackage"`) is package name. After command execution is complete, two new files are created: `myPackage.jx` and `myPackage.jxp`. First one is packaged app, everything project needs is inside it, so you can copy it and run anywhere with command:

    jx ghost.jx

You can also create native package by adding `-native` flag to `jx package` command. For more about packaging see JXcore [documentation](http://jxcore.com/packaging-code-protection/).
