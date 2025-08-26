import mongoose, { Mongoose } from "mongoose";

const subscriptionSchema = mongoose.Schema(
  {
    subscriber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subscribedTo: {
      typeof: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "true",
    },
  },
  subscriptionSchema.index(
    { subscriber: 1, subscribedTo: 1 },
    { unique: true }
  ),
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
