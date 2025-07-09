import mongoose from "mongoose";

const linktreeUrlsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  handle: {
    type: String,
    required: true,
    unique: true,
  },
  LinkTree: {
    type: [
      {
        label: { type: String, required: true },
        url: { type: String, required: true },
        icon: { type: String, default: "" }, // optional: icon name or URL
        // order: { type: Number, default: 0 },
      },
    ],
    default: [],
  },
  ProfilePicture: {
    type: String,
  },
});

// Prevent model overwrite issue in dev
export default mongoose.models.Linktree ||
  mongoose.model("Linktree", linktreeUrlsSchema);
