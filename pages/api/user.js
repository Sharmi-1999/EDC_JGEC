import dbConnect from "../../lib/mongodb";
import User from "../../models/user";
import bcrypt from "bcryptjs";
export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const user = await User.findOne({
          email: req.query.email,
        });
        if (!user) {
          res.status(404).send({
            message: "User not found",
          });
        } else {
            console.log(user.password,req.query.password);
          bcrypt.compare(req.query.password, user.password, (err, result) => {
            // console.log(result);
            if (result) {
              res
                .status(200)
                .send({ message: "User authenticated", success: true });
            } else {
              res
                .status(400)
                .send({ message: "Incorrect password", success: false });
            }
          });
        }
      } catch (err) {
        res.status(500).send(err);
      }
      break;

    case "POST":
      const { name, email, password } = req.body;
      const old = await User.findOne({ email: email });
      if (!old) {
        const hash = await bcrypt.hash(password, 10);
        const user = new User({
          name: name,
          password: hash,
          email: email,
        });
        user
          .save()
          .then((user) => {
            res.status(200).send({ message: "User created", success: true });
          })
          .catch((err) => {
            res
              .status(500)
              .send({ message: "Internal server error", success: false, err });
          });
      } else {
        res
          .status(400)
          .send({ message: "User already exists", success: undefined });
      }
      break;
    default:
      res.status(405).send({
        message: "Method not allowed",
      });
  }
}
