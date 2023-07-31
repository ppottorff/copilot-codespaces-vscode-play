// create web server
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// post comment
router.post('/', auth, multer, commentsCtrl.createComment);
// get all comments
router.get('/', auth, commentsCtrl.getAllComments);
// get one comment
router.get('/:id', auth, commentsCtrl.getOneComment);
// update comment
router.put('/:id', auth, multer, commentsCtrl.modifyComment);
// delete comment
router.delete('/:id', auth, commentsCtrl.deleteComment);

module.exports = router;