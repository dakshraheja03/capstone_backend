import mongoose from "mongoose";

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  token: {
    type: mongoose.Schema.Types.String,
    required: true
  }
}, {
  timestamps: true
})

schema.index({ 'updatedAt': 1 }, { expireAfterSeconds: 900 })

export default mongoose.model("PasswordReset", schema);