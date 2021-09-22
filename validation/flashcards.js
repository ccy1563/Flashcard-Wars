const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateFlashcardInput(data) {

  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.text = validText(data.text) ? data.text : "";

  if (!Validator.isLength(data.title, { min: 1, max: 140 })) {
    errors.title = "Title must be between 5 and 140 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (!Validator.isLength(data.text, { min: 5 })) { // if it breaks max: 400
    errors.text = "Text must be higher than 5 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};