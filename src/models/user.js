const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

require('../config/databaseConnection');

const UserSchema = new mongoose.Schema(
  {
    userId: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
  },
  { versionKey: false }
);
UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema);
