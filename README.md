### Creating [ghost](https://github.com/tryghost/Ghost) blog and packaging it with [JXcore](https://github.com/jxcore/jxcore)

![Demo screenshot](https://raw.githubusercontent.com/karaxuna/jxcore-tutorial-ghost-packaged/master/screens/admin-create-post.png "Demo screenshot")

***See [repository](https://github.com/karaxuna/jxcore-tutorial-jxcore-tutorial-ghost-packaged) for completed demo.***

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
    
The server will be run on `localhost:2368` by default.
