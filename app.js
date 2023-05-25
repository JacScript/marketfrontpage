//Imports
const express =  require('express');
const path = require("path");


const application =  express();
const port =  4000;

application.use(express.urlencoded({ extended: true}));

//Static Files
application.use(express.static('public'));
application.use('/css', express.static(__dirname + 'public/css'));
application.use('/js', express.static(__dirname + 'public/js'));
application.use('/img', express.static(__dirname + 'public/img'));

// application.use(express.static(path.join(__dirname, "../public")));


application.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/views/index.html'))
});

//Listen on Port 4000
application.listen(port, () => console.log(`Listening to port ${port}`));