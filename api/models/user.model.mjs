import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      //   type: mongoose.Schema.Types.String,
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    profilePic : {
      type : String,
      default : "",
    }
    // conversations : [{type : mongoose.Schema.Types.ObjectId, ref : ""}]
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
