const Event = require("../models/event.model");

async function getAllEvents(req, res){

    let reqObject = {};
    if(req.query.title){
        reqObject.title = req.query.title;
    }
    const result = await Event.find(reqObject);

    res.send(result);
}

async function getEventBasedOnId(req, res){

    const result = await Event.findOne({
        _id: req.params.id
    });

    res.send(result);
}


async function createEvent(req,res){
    const eventObject = {
        title: req.body.title,
        regLink: req.body.regLink,
        date: req.body.date,
        speakers: req.body.speakers,
        moderator: req.body.moderator,
        resources: req.body.resources,
        joiningInfo: req.body.joiningInfo,
        organisedBy: req.body.organisedBy,
        tags: req.body.tags
    }

    const event = await Event.create(eventObject);
    res.status(201).send(event);
}

async function updateEvent(req,res){
    let savedEvents = await Event.findOne({
        _id: req.params.id
    })

    if(!savedEvents){
        return res.status(400).send({
            msg: `Event Id ${req.params.id} does not exist`
        })
    }

    savedEvents.title = req.body.title ?  req.body.title: savedEvents.title; 
    savedEvents.regLink = req.body.regLink != undefined ?  req.body.regLink : savedEvents.regLink; 
    savedEvents.date = req.body.date != undefined ? req.body.date : savedEvents.date;
    savedEvents.speakers = req.body.speakers != undefined ? req.body.speakers : savedEvents.speakers;
    savedEvents.moderator = req.body.moderator != undefined ? req.body.moderator : savedEvents.moderator;
    savedEvents.resources = req.body.resources != undefined ? req.body.resources : savedEvents.resources;
    savedEvents.joiningInfo = req.body.joiningInfo != undefined ? req.body.joiningInfo : savedEvents.joiningInfo;
    savedEvents.organisedBy = req.body.organisedBy != undefined ? req.body.organisedBy : savedEvents.organisedBy;
    savedEvents.tags = req.body.tags != undefined ? req.body.tags : savedEvents.tags;

    const updateEvent = await savedEvents.save();
    res.send(updateEvent);
}

async function deleteEvent(req,res){
    await Event.deleteOne({
        _id : req.params.id
    })

    res.send(`Event id ${req.params.id} got deleted `);
}

module.exports = {
    createEvent,
    getAllEvents,
    getEventBasedOnId,
    updateEvent,
    deleteEvent
    
}