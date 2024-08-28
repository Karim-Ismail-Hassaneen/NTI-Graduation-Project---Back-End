const express = require('express');
const router = express.Router();
const {createUserType,getUserType}= require('../../Controllers/Auth/userTypeController');

router.post('/',createUserType);
router.get('/',getUserType);

module.exports = router;