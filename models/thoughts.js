const { Schema, Types, model } = require("mongoose");

const thoughtsSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 100,
      minlength: 4,
    },
    createdAt: { type: Date, default: Date.now },
    reactions: [{ body: String, date: Date }],
    user: { type: Schema.Types.ObjectId, ref: "user" },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thoughts = model("thoughts", thoughtsSchema);

module.exports = Thoughts;

// const handleError = (err) => console.error(err);

// Thoughts.find({}).exec((err, collection) => {
//   if (collection.length === 0) {
//     Thoughts.insertMany(
//       [
//         { name: "" },
//         { name: "Kids" },
//         { name: "Kids" },
//         { name: "Romance" },
//         { name: "Mystery" },
//         { name: "Contemporary" },
//         { name: "Biography" },
//       ],
//       (insertErr) => {
//         if (insertErr) {
//           handleError(insertErr);
//         }
//       }
//     );
//   }
// });
