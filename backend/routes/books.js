const express = require('express');
const router = express.Router();

const { createBook, getBook, showAllBooks, editBookDetails, deleteBook } = require('../controllers/books.js')
const { auth, isAdmin } = require('../middleware/auth.js')

router.get('/getBook/:id', getBook)
router.get('/getAllBooks', showAllBooks)

//Admin routes
<<<<<<< HEAD
router.post('/createBook',createBook)
router.put('/editBook/:id',editBookDetails)
router.delete('/deleteBook/:id',deleteBook)
=======
router.post('/createBook', createBook)
router.put('/editBook/:id', auth, isAdmin, editBookDetails)
router.delete('/deleteBook/:id', deleteBook)
>>>>>>> 68a7505537cc98958cf77b9b563f9f0dad9850d9

module.exports = router