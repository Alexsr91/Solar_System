const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const planetSchema = new Schema(
  {
    apiReferenceId: String,
    description: String,
  },
  {
    timestamps: true
  }
);

module.exports = model('Planet', planetSchema);