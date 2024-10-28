import { model } from 'mongoose';
import { PostSchema } from '@post/schemas';
import { IPost } from '@post/interfaces/post.interface';

export const Post = model<IPost>('Post', PostSchema);
