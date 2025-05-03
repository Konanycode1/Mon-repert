import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  dateOfBirth: String
}, { timestamps: true });