const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Deck = require("../../models/Deck");
const validateDeckInput = require("../../validation/decks");


router.get('/', (req, res) => {
  Deck.find()
    .sort({ date: -1 })
    .then(deck => res.json(deck))
    .catch(err => res.status(404).json({ nodeckfound: 'No deck found' }));
});

router.get('/user/:user_id', (req, res) => {
  // console.log(Deck.find({user: req.params.user_id}))
  Deck.find({user: req.params.user_id})
      .then(deck => res.json(deck))
      .catch(err =>
        res.status(404).json({ nodeckfound: 'No deck found from that user' }
      )
  );
});

router.get('/:id', (req, res) => {
  Deck.findById(req.params.id)
    .then(deck => res.json(deck))
    .catch(err =>
      res.status(404).json({ nodeckfound: 'No deck found with that ID' })
    );
});

router.post('/user/:user_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDeckInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newDeck = new Deck({
      title: req.body.title,
      user: req.params.user_id
    });

    newDeck.save().then(deck => res.json(deck));
  }
);

router.patch('/:id', (req, res) => {
  // console.log(req.body);
  mongoose.set('returnOriginal', false);
  Deck.findByIdAndUpdate(req.params.id, req.body)
    .then( deck => res.json(deck))
    .catch(err => 
      res.status(404).json({ nodeckfound: 'No deck found with that ID' })
    );
});

router.delete('/:id', (req, res) => {

  Deck.findByIdAndRemove(req.params.id)
    .then( () => res.json())
    .catch(err =>
      res.status(404).json({nodeckfound: 'No deck found with that ID'})
  );
})

module.exports = router;