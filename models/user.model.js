const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    Email: String,
    Planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}]
  },
  {
    timestamps: true
  }
);
module.exports = model('User', userSchema);