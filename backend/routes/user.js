const express = require('express');
const router = express.Router();

const { signUp, login, details } = require('../controllers/user.js');
const { auth, isAdmin } = require('../middleware/auth.js');

router.post('/signup', signUp);
router.post('/signin', login);
router.get('/details', auth,details)

//Admin Routes
router.post('/deleteUser/:id', auth, isAdmin,)

module.exports = router;