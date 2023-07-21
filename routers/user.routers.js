const express = require('express')
const router = express.Router()
const useCtrl = require("../controllers/user.controller")


router.get('/',useCtrl.players)
router.get('/next/:id',useCtrl.next)

module.exports = router

