const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DeckSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
)

module.exports = Deck = mongoose.model("Deck", DeckSchema);


// user <- deck <- flashcards