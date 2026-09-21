import { model, Schema} from "mongoose";


const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "This Field is Required"],
  },
  description: {
    type: String,
    required: [true, "This Field is Required"],
  }
}, {timestamps: true});

const postModel = model("post", postSchema);

export default postModel