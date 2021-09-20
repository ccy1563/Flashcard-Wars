const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
const validateCommentInput = require('../../validation/comments');

router.get('/', (req, res) => { // index
  Comment.find()
      .sort({ date: -1 })
      .then(comments => res.json(comments))
      .catch(err => res.status(404).json({ noCommentsfound: 'No comments found' }));
});




module.exports = router;