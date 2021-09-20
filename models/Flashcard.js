const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    deck: {
      type: Schema.Types.ObjectId,
      ref: "decks",
    },
    // maybe we need it
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: "users",
    // }
  },
  {
    timestamps: true,
  }
)

module.exports = Flashcard = mongoose.model("Flashcard", FlashcardSchema);