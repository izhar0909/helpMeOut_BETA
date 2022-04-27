const express = require('express')
const router = express.Router()

const { register, login, getNotifications } = require('../controllers/auth')

router.post('/register', register)
router.post('/login', login)
router.post('/notifications', getNotifications )

module.exports = router