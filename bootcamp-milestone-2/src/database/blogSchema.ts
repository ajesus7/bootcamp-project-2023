import * as mongoose from "mongoose";

export interface IComment {
  user: string;
  comment: string;
  time: Date;
};

const commentSchema = new mongoose.Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true },
});

// typescript type (can also be an interface)
export interface IBlog {
  date: string;
  title: string;
  description: string; // for preview
  slug: string;
  image: string; // for individual blog page
  imagealt: string;
  content: string;
  comments: IComment[]; // array for comments
};

// mongoose schema
const blogSchema = new mongoose.Schema<IBlog>({
  date: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
  imagealt: { type: String, required: true },
  content: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true },
    },
  ],
});

// defining the collection and model

export default mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);
