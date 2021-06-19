import mongoose, { Schema } from 'mongoose';
import Publication from '../interfaces/publication';

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    body: { type: String, required: true },
    category: { type: String, required: true },
    image_url: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<Publication>('Post', PostSchema);
