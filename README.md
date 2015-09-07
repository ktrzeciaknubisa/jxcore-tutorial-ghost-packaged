### Creating [ghost](https://github.com/tryghost/Ghost) blog and packaging it with [JXcore](https://github.com/jxcore/jxcore)

![Demo screenshot](https://raw.githubusercontent.com/karaxuna/jxcore-tutorial-ghost-packaged/master/screens/admin-create-post.png "Demo screenshot")

***See [repository](https://github.com/karaxuna/jxcore-tutorial-ghost-packaged) for completed demo.***

First [download](http://jxcore.com/downloads/) and install JXcore. Then add `ghost` and `express` dependencies in `package.json` file. After that, let's create main file named `index.js` in root of the project:

```javascript
var express = require('express'),
    app = express(),
    ghost = require('ghost'),
    path = require('path');

ghost({
    config: path.resolve(__dirname, 'config.js')
}).then(function (ghostServer) {
    app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
    ghostServer.start(app);
}).catch(function (err) {
    console.log(err);
});
```

Here we are creating ghost server and assigning express app to it. We set custom config file path (see [config](https://raw.githubusercontent.com/karaxuna/jxcore-tutorial-ghost-packaged/master/config.js) file). Ghost needs content folder where it stores post data and images. By default `/content` folder path is relative to `config.js` file:

    paths: {
        contentPath: path.join(__dirname, '/content/')
    }

You should have `/apps`, `/data`, `/images` and `/themes` folders inside `/content` folder. Here ghost saves dynamic information, such as images and post data and reads theme for the blog. That's all code needed to run blog. Now install npm depencencies:

    jx install
    
And run the server:

    jx index.js
    
The server will be run on `localhost:2368` by default. You can access admin panel from `/ghost` path. Now let's put everything in one file. Instead of regular compressing let's package it with JXcore, since pre-post extracting steps are managable. Run shell in the root of the project, then:

    jx package index.js "ghost" -extract
    
This starts packaging. First parameter (`index.js`) is main file of the project, second parameter (`"ghost"`) is package path. Talk later about `-extract` flag. After command execution is complete, two new files are created: `ghost.jx` and `ghost.jxp`. First one is packaged app, everything project needs is inside it, so you can copy it and run anywhere with command:

    jx ghost.jx

This will extract all files and folders of original project and run main file (`ghost/index.js`).