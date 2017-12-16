var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    serverCtrl = require('./controllers/serverCtrl'),
    userCtrl = require('./controllers/userCtrl'),
    mostLikelyCtrl = require('./controllers/mostLikelyCtrl'),
    worstCtrl = require('./controllers/worstCtrl'),
    blendedCtrl = require('./controllers/blendedCtrl'),
    config = require('./config.js'),
    mongoose = require('mongoose');



mongoose.connect(config.MONGO_URI,  function (err, res) {
      if (err) {
        console.log ('ERROR connecting to products. '  + err);
      } else {
        console.log ('Successfully connected to products.');
      }
    });

var app = express();
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});
var corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));


//User DB
app.get('/api/users', userCtrl.getUsers)
app.post('/api/users', userCtrl.createUser);
app.get('/api/users/:id', userCtrl.findIndividual)
app.put('/api/users/:id', userCtrl.updateUser)
app.delete('/api/users/:id', userCtrl.removeUser)

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on port", port)
})
