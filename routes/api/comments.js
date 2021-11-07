const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
const validateCommentInput = require('../../validation/comments');

// test to see all
router.get('/', (req, res) => { // index
  Comment.find()
      .sort({ date: -1 })
      .then(comments => res.json(comments))
      .catch(err => res.status(404).json({ noCommentsfound: 'No comments found' }));
});

// get comment from deck id
router.get('/deck/:deck_id', (req, res) => {
  Comment.find({deck: req.params.deck_id})
      .then(comment => res.json(comment))
      .catch(err =>
          res.status(404).json({ nocommentfound: 'No comment found from that deck' }
      )
  );
});

// getting comment by id
router.get('/:id', (req, res) => {
  Comment.findById(req.params.id)
      .then(comment => res.json(comment))
      .catch(err =>
          res.status(404).json({ nocommentfound: 'No comment found with that ID' })
      );
});

// creating comment
router.post('/deck/:deck_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // console.log(req);

    const newComment = new Comment({
      text: req.body.text,
      user: req.user.id,
      deck: req.params.deck_id
    });

    newComment.save().then(comment => res.json(comment));
  }
);

router.patch('/:id', (req, res) => {
  // console.log(req.body);
  mongoose.set('returnOriginal', false);
  Comment.findByIdAndUpdate(req.params.id, req.body)
    .then( comment => res.json(comment))
    .catch(err => 
      res.status(404).json({ nocommentfound: 'No comment found with that ID' })
    );
});

router.delete('/:id', (req, res) => {
  Comment.findByIdAndRemove(req.params.id)
    .then( () => res.json())
    .catch(err =>
      res.status(404).json({ nocommentfound: 'No comment found with that ID' })
  );
});


module.exports = router;