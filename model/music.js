import mongoose from "mongoose";

const Schema = mongoose.Schema;

const musicSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  musicUrl: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  }
}, {timestamps: true})

export default mongoose.model('music', musicSchema)