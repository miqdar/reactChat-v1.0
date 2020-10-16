var express = require('express');
var router = express.Router();
const Chat = require('../models/chat')


router.get('/', function (req, res, next) {
  // Chat.find({}).sort({ 'id': -1 }).then((data) => {    // sort yg terbaru diatas
  Chat.find({}).then((data) => {
    res.status(200).json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
});

router.post('/', function (req, res, next) {
  Chat.create({ id: Number(req.body.id), author: req.body.author, message: req.body.message }).then((data) => {
    res.status(200).json(data)
  }).catch((err) => {
    res.status(500).json(err)
    console.log(err)
  })
});

router.put('/:id', function (req, res, next) {
  Chat.findOneAndUpdate({ id: req.params.id }, { author: req.body.author, message: req.body.message }, { new: true }).then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.status(500).json(err)
    console.log(err)
  })
});

router.delete('/:id', function (req, res, next) {
  Chat.findOneAndRemove({ id: req.params.id }).then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.status(500).json(err)
    console.log(err)
  })
});

module.exports = router;
