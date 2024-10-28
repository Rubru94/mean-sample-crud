import { Schema } from 'mongoose';
import { IPost } from '../interfaces/post.interface';

export const PostSchema = new Schema<IPost>({
  title: {
    type: String
  },

  description: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },
  published: {
    type: Boolean,
    required: true,
    default: false
  }
});
