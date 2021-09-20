const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    deck: {
      type: Schema.Types.ObjectId,
      ref: "decks",
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)


module.exports = Comment = mongoose.model("Comment", CommentSchema);