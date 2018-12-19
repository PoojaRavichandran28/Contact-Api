var Contact = require('./contactModel')

exports.index = (req, res, next) => {
    Contact.find((err, contacts) => {
        if (err) return next(err)
        res.json({
                status: "success",
                message: "Contacts retrieved successfully",
                data: contacts
        })
    })
}

exports.new = (req, res, next) => {
    Contact.create(req.body,(err,contact) => {
        if(err) return next(err)
        res.json({
            status: "success",
            message: "Contacts created successfully",
            data: contact
        })
    })
}

exports.view = (req, res, next) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err) return next(err)
        res.json({
            message: "Contact details loading",
            data: contact
        })
    })
}

exports.update = (req,res,next) => {
    Contact.findOneAndUpdate({
                                _id : req.params.contact_id
                              }, req.body,(err, contact) => {
        if(err) return next(err)
        res.json({
            message: "Contact has been updated",
            data: contact
        })
    })
}


exports.delete = (req,res,next) => {
    Contact.findByIdAndRemove({
                                _id : req.params.contact_id
                                },req.body,(err,contact) => {
        if(err) return next(err)
        res.json({
            message: "Contact has been deleted",
            data : contact
        })
    })
}

