import mongoose from "npm:mongoose@8.0.0";
import { Monument } from "../types.ts";

const Schema = mongoose.Schema;

const monumentSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    postalcode: { type: Number, required: true },
    iso: { type: String, required: true },
  },
  { timestamps: true }
);

export type MonumentModelType = mongoose.Document & Omit<Monument, "id">;

export default mongoose.model<MonumentModelType>("Person", monumentSchema);