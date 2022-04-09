const { Schema, Types, model } = require("mongoose");

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      maxlength: 12,
      minlength: 4,
    },
    lastAccessed: { type: Date, default: Date.now },
    thoughts: { type: Schema.Types.ObjectId, ref: "Thoughts" },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Users = model("users", userSchema);

const handleError = (err) => console.error(err);

module.exports = Users;

// const handleError = (err) => console.error(err);

// Users.find({}).exec((err, collection) => {
//   if (collection.length === 0) {
//     Users.insertMany(
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
