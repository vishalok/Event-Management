const { getAllEvents, createEvent, deleteEvent, updateEvent ,getEventBasedOnId } = require('../controllers/event.controller');
const { validateEventReqBody  } = require('../middlewares');


module.exports = (app) => {
    app.get('/event/api/v1/events', getAllEvents); 
    app.get('/event/api/v1/events/:id', getEventBasedOnId);    
    app.post('/event/api/v1/event', validateEventReqBody,createEvent); 
    app.put('/event/api/v1/event/:id', validateEventReqBody, updateEvent);
    app.delete('/event/api/v1/event/:id', deleteEvent);
}
