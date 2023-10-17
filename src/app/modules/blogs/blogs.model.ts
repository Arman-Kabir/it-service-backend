import { Schema, model } from "mongoose";
import { IBlogs } from "./blogs.interface";

const blogsSchema = new Schema<IBlogs>(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    reviews:[{
      type:String
    }],
    category: {
      type: String,      
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// 3. Create a Model.
export const Blogs = model<IBlogs>("Blogs", blogsSchema);
