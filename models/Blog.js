const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
