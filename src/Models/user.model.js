import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: string,
      lowercase: true,
      unique: true,
      required: true,

      profilepic: {
        type: string,
        default: "",
      },
    },
    passwor: {
      type: string,
      unique: true,
      required: true,
    },
  },
  { timestamp: true }
);

export const User = mongoose.model("User", userSchema);
