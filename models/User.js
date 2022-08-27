const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  blogs: {
    type: [Schema.Types.ObjectId],
    ref: "Blog",
  },
});
userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
