import { matchedData, validationResult } from "express-validator";
import { User } from "../models/user.model.mjs";
import { generateJwtToken } from "../utils/jwtToken.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;
export const login = async (req, res) => {
  if (req.user)
    return res.status(200).send({ error: "user already logged in" });
  const {
    body: { username, password },
  } = req;
  const findUser = await User.findOne({ username });
  if (!findUser)
    return res
      .status(400)
      .send({ error: "No user exist with this username !" });
  const passwordMatched = await bcrypt.compare(password, findUser.password);
  if (passwordMatched) generateJwtToken(findUser._id, res);
  else return res.status(403).send({ error: "wrong credentials!" });
  return res.status(200).send({
    username: findUser.username,
    displayName: findUser.displayName,
    profilePic: findUser.profilePic,
    _id: findUser._id,
  });
};
export const logout = (req, res) => {
  if (!req.user)
    return res.status(400).send({ error: "User is already logged out!" });
  res.clearCookie("jwtToken");
  return res.send({ message: "logout successfully" });
};
export const signup = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(401).send(result);
  const data = matchedData(req);
  try {
    const user = await User.findOne({ username: data.username });
    if (user)
      return res
        .status(401)
        .send({ error: "User with username already exist !" });
    data.password = await bcrypt.hash(data.password, saltRounds);
    const newUser = await User.create({
      ...data,
      profilePic: `https://avatar.iran.liara.run/username?username=${data.displayName}`,
    });
    generateJwtToken(newUser._id, res);
    return res
      .status(201)
      .send({ message: "User is succesfully created and logged in!" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: error });
  }
};
export const status = (req, res) => {
  if (req.user) return res.status(200).send({ message: "User is logged in!" });
  return res.status(200).send({ message: "User is NOT logged in !" });
};
