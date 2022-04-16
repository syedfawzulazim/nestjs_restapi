import * as mongoose from 'mongoose';

export const OderSchema = new mongoose.Schema({});

export const PurchaseSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  bookId: { type: String, required: true },
  title: { type: String, required: true },
  quantity: { type: Number, required: true },
});

export interface Purchase {
  userId: string;
  bookId: string;
  title: string;
  quantity: number;
}
