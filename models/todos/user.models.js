import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type : String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      type : String,
      require: true,
      unique: true,
      lowercase: true
    },
    password:{
      type: String,
      required: true
    }

  },{timestamps: true} //model making in user model
  )

export const User = mongoose.model("User", userSchema)