const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Flashcard = require("../../models/Flashcard");
const validateFlashcardInput = require('../../validation/flashcards');

router.get('/', (req, res) => {
  Flashcard.find()
      .sort({ date: -1 })
      .then(flashcard => res.json(flashcard))
      .catch(err => res.status(404).json({ noflashcardfound: 'No flashcard found' }));
});

router.get('/user/:user_id', (req, res) => {
  Flashcard.find({user: req.params.user_id})
      .then(flashcard => res.json(flashcard))
      .catch(err =>
          res.status(404).json({ noflashcardfound: 'No flashcard found from that user' }
      )
  );
});

router.get('/:id', (req, res) => {
  Flashcard.findById(req.params.id)
      .then(flashcard => res.json(flashcard))
      .catch(err =>
          res.status(404).json({ noflashcardfound: 'No flashcard found with that ID' })
      );
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFlashcardInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newFlashcard = new Flashcard({
      title: req.body.title,
      text: req.body.text,
      user: req.user.id
    });

    newFlashcard.save().then(flashcard => res.json(flashcard));
  }
);

module.exports = router;