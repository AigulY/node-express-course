const express = require('express')
const router = express.Router();

const { logon, dashboard } = require('../controllers/main')

const authMiddleware = require('../middleware/auth')

router.route('/hello').get(authMiddleware, dashboard)
router.route('/logon').post(logon)

module.exports = router;