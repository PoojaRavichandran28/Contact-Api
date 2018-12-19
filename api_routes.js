var express = require('express')
var router = express.Router()
var contactController = require('./contactController')

router.get('/', (req,res) => {
    res.send({
        status : "Success",
        message : "Welcome to contacts API"
    })
})

// router.get('/contacts', contactController.index)
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .put(contactController.update)
    .patch(contactController.update)
    .delete(contactController.delete);
module.exports = router