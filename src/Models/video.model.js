import mongoose from "mongoose";
import { User } from "./User.model";

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    videoURL: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
    },
    size: {
      type: Number,
    },
    format: {
      type: String,
    },
    uploadedby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      enum: ["Music", "Entertainment", "Education", "Sports", "Others"],
      default: "others",
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true }
);
export const Videos = mongoose.model("Videos", videoSchema);
