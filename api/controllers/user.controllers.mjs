import { matchedData, validationResult } from "express-validator";
import { User } from "../models/user.model.mjs";

// export const createUser = async (req, res) => {
//   const result = validationResult(req);
//   if (!result.isEmpty()) return res.status(401).send(result);
//   const data = matchedData(req);
//   try {
//     const user = await User.findOne({ username: data.username });
//     if (user)
//       return res
//         .status(401)
//         .send({ error: "User with username already exist !" });
//     const newUser = await User.create(data);
//     return res.status(201).send(data);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send({ error: error });
//   }
// };

export const deleteUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    return res.status(200).send(deletedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: error });
  }
};

export const getAllUsers = async (req, res) => {
  const {
    user: { userId },
  } = req;
  if (!userId) return res.status(401).send({ error: "User NOT loggd In !" });
  // console.log("get all users");
  try {
    // console.log("all user try!!");
    const allUsers = await User.find({ _id: { $ne: userId } }).select(
      "username displayName"
    );
    return res.status(200).send(allUsers);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: error });
  }
};