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
    reactions: [{ type: Schema.Types.ObjectId, ref: "Reactions" }],
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

const handleError = (err) => console.error(err);

Thoughts.find({}).exec((err, collection) => {
  if (collection.length === 0) {
    Thoughts.insertMany(
      [
        {
          thoughtText: "This application is awesome!",
          reactions: [
            "62522e8eed7fda4f2d05fdf4",
            "62522e8eed7fda4f2d05fdf6",
            "62522e8eed7fda4f2d05fdf8",
          ],
        },
        {
          thoughtText: "I can do so much with NoSQL",
          reactions: ["62522e8eed7fda4f2d05fdfa"],
        },
        { thoughtText: "Why am I CRUD at CRUD?!" },
        {
          thoughtText: "The Sixers need to get it together...",
          reactions: ["62522e8eed7fda4f2d05fdfe"],
        },
        { thoughtText: "Does anyone else think cats are evil?" },
        {
          thoughtText: "You can't handle the truth!",
          reactions: ["62522e8eed7fda4f2d05fdfc"],
        },
        {
          thoughtText:
            "I love this network because it allows me to share my thoughts",
        },
      ],
      (insertErr) => {
        if (insertErr) {
          handleError(insertErr);
        }
      }
    );
  }
});
