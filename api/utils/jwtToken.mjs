import jwt from "jsonwebtoken";

export const generateJwtToken = (userId, res) => {
  // console.log(process.env.NODE_ENV);
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    // this function creates a token
    expiresIn: "2h",
  });
  res.cookie("jwtToken", token, {
    // this function sets the token to the cookie
    maxAge: 1000 * 60 * 60 * 2,
    httpOnly: true, // prevent xss attacks
    sameSite: "strict", // csrf attacks
    secure: process.env.NODE_ENV != "Development",
  });
};

export const verifyToken = (req, res, next) => {
  // console.log("verify token");
  const token = req.cookies.jwtToken; // jwtToken should be same name as provided while setting the cookie
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        console.log(error);
        // console.log("some error in verify token");
        return res.status(403).send(error); // Forbidden
      }
      // console.log("token exist");
      req.user = decoded; // ads req.user property
    });
  }
  else {
    // console.log("verify token : no token");
  }
  next();
};
