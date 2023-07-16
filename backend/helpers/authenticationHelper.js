import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      sub: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};
