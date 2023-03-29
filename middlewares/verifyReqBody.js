

function validateEventReqBody(req, res, next){
    if(!req.body.title){
        return res.status(400).send({
            msg: 'title field is missing in event creation'
        })
    }

    if(!req.body.regLink){
        return res.status(400).send({
            msg: 'regLink field is missing in event creation'
        })
    }

    if(!req.body.date){
        return res.status(400).send({
            msg: 'date field is missing in event creation'
        })
    }

    

        if (!req.body.speakers) {
            return res.status(400).send({
                message: "Failed! event speakers is not provided !"
            });
    
        }
        if (!req.body.moderator) {
            return res.status(400).send({
                message: "Failed! event moderator is not provided !"
            });
    
        }

        if (!req.body.resources) {
            return res.status(400).send({
                message: "Failed! event resources is not provided !"
            });
    
        }

        if (!req.body.joiningInfo) {
            return res.status(400).send({
                message: "Failed! event joining Info is not provided !"
            });
    
        }
        if (!req.body.organisedBy) {
            return res.status(400).send({
                message: "Failed! event organisedBy is not provided !"
            });
    
        }
        if (!req.body.tags) {
            return res.status(400).send({
                message: "Failed! event tags is not provided !"
            });
    
        }
    next();

}




module.exports = {
    validateEventReqBody
}