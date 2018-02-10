const express = require('express');
const port = process.env.PORT || 9000;
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRouter = require('./routes/auth_routes');
const cors = require('cors');

mongoose.connect(keys.db_connect).then(()=>{
    console.log('Connected to mongoDB');
}).catch(err=>{
    console.log('Error connecting to db: ', err.message);
});

app.get('/', function(req, res){
    res.send('<h1>App is working!</h1>');
});

app.use(cors());
app.use(express.json());

authRouter(app);

app.listen(port, ()=>{
    console.log(`listening in on port: ${port}`);
});