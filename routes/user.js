const express = require('express')
const router = express.Router()
const userPages = require('../views/userPages')
const userList = require('../views/userList')

router.get('/', (req, res) => {
  res.send(userList([]))
})

router.get('/:userId', (req, res) => {

})

router.post('/', (req, res) => {

})

router.put('/:userId', (req, res) => {

})

router.delete('/:userId', (req, res) => {

})

module.exports = router;
