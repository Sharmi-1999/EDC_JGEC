import dbConnect from "../../lib/mongodb";
import User from "../../models/user";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case "GET": // API endpoint to verify user
      try {
        const user = await User.findOne({
          email: req.query.email,
        });
        if (!user) {
          res.status(404).send({
            message: "User not found",
          });
        } else {
          bcrypt.compare(req.query.password, user.password, (err, result) => {
            if (result) {
              res.status(200).send(user);
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
      try {
        const { name, email, password } = req.body;
        const exist = await User.findOne({ email: email });
        if (!exist) {
          const user = new User({
            name: name,
            password: password,
            email: email,
          });
          user
            .save()
            .then((user) => {
              res
                .status(200)
                .send({ message: "User created", success: true, user });
            })
            .catch((err) => {
              res
                .status(500)
                .send({
                  message: "Internal server error",
                  success: false,
                  err,
                });
            });
        } else {
          res
            .status(400)
            .send({ message: "User already exists", success: undefined });
        }
      } catch (err) {
        res.status(500).send(err);
      }

      break;
    default:
      res.status(405).send({
        message: "Method not allowed",
      });
  }
}
