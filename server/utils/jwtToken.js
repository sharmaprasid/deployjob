const token = user.getJWTToken();
export const sendToken = (user, statusCode, res, message) => {

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only secure in prod
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // required for cross-site cookies
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
