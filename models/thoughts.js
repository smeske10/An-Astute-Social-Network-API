const mongoose = require("mongoose");

const thoughtsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const thoughts = mongoose.model("thoughts", thoughtsSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty to prevent duplicates
// More than one document can have the same name value
thoughts.find({}).exec((err, collection) => {
  if (collection.length === 0) {
    thoughts.insertMany(
      [
        { name: "" },
        { name: "Kids" },
        { name: "Kids" },
        { name: "Romance" },
        { name: "Mystery" },
        { name: "Contemporary" },
        { name: "Biography" },
      ],
      (insertErr) => {
        if (insertErr) {
          handleError(insertErr);
        }
      }
    );
  }
});

module.exports = thoughts;
