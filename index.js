var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./api/models/contants');

var loginRoutes = require('./api/routes/loginRoutes');
var userRoutes = require('./api/routes/userRoutes');

loginRoutes(app);
userRoutes(app);


app.listen(port);
