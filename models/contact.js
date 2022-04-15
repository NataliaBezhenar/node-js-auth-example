const { Schema, model } = require("mongoose");

const contactSchema = Schema(
  {
    name: String,
    email: String,
    phone: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

module.exports = { Contact };
