//Loads the express module
const express = require('express');
//Creates our express server
const app = express();
const port = process.env.port || 3000;

//Sets a basic route
app.get('/', (req, res) => res.send('Hello World !'));

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));