const express = require('express');
const router = express.Router();

const dataLogic = require('./corelogic');



router.get('/contacts', (req, res, next) => {
    dataLogic.getAllContacts().then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})

router.get('/contacts/:id', (req, res, next) => {
    dataLogic.getSingleContact(req.params.id).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})

router.post('/contacts', (req, res, next) => {
    dataLogic.AddContact(req).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})

router.put('/contacts/:id', (req, res, next) => {
    dataLogic.updateContact(req).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})
router.delete('/contacts/:id', (req, res, next) => {
    dataLogic.deleteContact(req.params.id).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})



module.exports = router;
