import mongoose from "mongoose";
import { User } from "./User.model";
import { Videos } from "./video.model";

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Videos,
      required: true,
    },
    likes:{
        type:mongoose.Schema.Types.ObjectId;
        ref:"User",
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
  },
  { timestamps: true }
);

export const Comments=mongoose.model("Comments",commentSchema);