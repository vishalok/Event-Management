const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Event = require('./models/event.model');

const { PORT } = require('./configs/server.config');
const { DB_URL } = require('./configs/db.config');

//Using the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//IIFE
(async ()=> {
    try{    
        await mongoose.connect(DB_URL);
        console.log('db connected');
        await init();
    }
    catch(err){
        console.error('error getting while connecting mongoDB', err);
    }

})();

// Inserting default enteries in DB
async function init(){
    try{
        await Event.collection.drop();
        const event1 =  await Event.create({
            title: 'My Awesome Event',
            regLink: 'https://example.com/register',
            date: {
              startTime: new Date('2023-04-01T14:00:00Z'),
              endTime: new Date('2023-04-01T16:00:00Z')
            },
            speakers: [
              {
                name: 'John Doe',
                about: 'John is an expert in event management.',
                image: 'https://example.com/john-doe.jpg'
              },
              {
                name: 'Jane Smith',
                about: 'Jane is a professional speaker with over 10 years of experience.',
                image: 'https://example.com/jane-smith.jpg'
              }
            ],
            moderator: {
              name: 'Bob Johnson',
              about: 'Bob has moderated hundreds of events and is highly skilled at keeping discussions on track.',
              image: 'https://example.com/bob-johnson.jpg'
            },
            resources: 'Here are some resources related to the event...',
            joiningInfo: 'To join the event, click this link: https://example.com/join',
            organisedBy: 'My Organization',
            tags: ['event', 'management', 'speakers']
    });
    
    console.log("Events inserted in the db");

}
catch(err){
    console.log('error while inserting default entries in DB', err);
}
}

// call the routes
require('./routes/event.routes')(app);

app.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}, please access it on http://localhost:${PORT}`)
})