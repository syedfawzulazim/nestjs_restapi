import * as mongoose from 'mongoose';

export const AuthSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export interface Auth {
  email: string;
  password: string;
}
