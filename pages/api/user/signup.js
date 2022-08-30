import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";


export default async function handler(req, res) {


  if (req.method === 'POST') {
    try {
      await dbConnect();
      const { name, email, password } = req.body;
      console.log(req.body);
      if (name && email && password) {
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
                .status(201)
                .json({ message: "User created", success: true, user });
            })
            .catch((err) => {
              res
                .status(500)
                .json({
                  message: "Internal server error",
                  success: false,
                  err,
                });
            });
        } else {
          res
            .status(400)
            .json({ message: "User already exists", success: undefined });
        }
      }
      else {
        res.status(400).json({ message: "Bad Request" })
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  else {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
}
