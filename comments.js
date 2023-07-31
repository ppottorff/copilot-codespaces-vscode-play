// Create web server

// Import modules   
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');
const { isLoggedIn } = require('../middleware');

// Create comment
router.post('/posts/:id/comments', isLoggedIn, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const comment = new Comment(req.body.comment);
        comment.author = req.user._id;
        post.comments.push(comment);
        await comment.save();
        await post.save();
        req.flash('success', 'Created a comment!');
        res.redirect(`/posts/${post._id}`);
    } catch (err) {
        req.flash('error', 'Cannot create comment!');
        res.redirect('back');
    }
}
);