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

router.get('/deck/:deck_id', (req, res) => {
  Flashcard.find({deck: req.params.deck_id})
    .then(flashcard => res.json(flashcard))
    .catch(err =>
        res.status(404).json({ noflashcardfound: 'No flashcard found from that deck' }
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

router.post('/deck/:deck_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFlashcardInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newFlashcard = new Flashcard({
      title: req.body.title,
      text: req.body.text,
      deck: req.params.deck_id
    });

    newFlashcard.save().then(flashcard => res.json(flashcard));
  }
);

router.patch('/:id', (req, res) => {
  // console.log(req.body);
  mongoose.set('returnOriginal', false);
  Flashcard.findByIdAndUpdate(req.params.id, req.body)
    .then( flashcard => res.json(flashcard))
    .catch(err => 
      res.status(404).json({ noflashcardfound: 'No flashcard found with that ID' })
    );
});

router.delete('/:id', (req, res) => {
  Flashcard.findByIdAndRemove(req.params.id)
    .then( () => res.json())
    .catch(err =>
      res.status(404).json({ noflashcardfound: 'No flashcard found with that ID' })
  );
});

module.exports = router;