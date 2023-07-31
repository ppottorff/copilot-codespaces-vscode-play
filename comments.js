// create web server
const express = require('express');
// create router
const router = express.Router();
// create comment model
const Comment = require('../models/comment');

// create route for post comment
router.post('/post-comment', (req, res) => {
    // create comment object
    const comment = new Comment({
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    });
    // save comment
    comment.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});

// export router
module.exports = router;