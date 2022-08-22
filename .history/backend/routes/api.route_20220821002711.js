const router = require("express").Router();
const { google } = require("googleapis");

const outh2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "http://localhost:3000/"
);

router.post("/create-tokens", async (req, res, next) => {
  try {
    const code = req.body;
    const { tokens } = await outh2Client.getToken(code, (err, tokens) => {
      if (err) {
        return res.status(500).json({
          message: "Something went wrong",
          error: err,
        });
      }
      return tokens;
    });
    outh2Client.setCredentials(tokens);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
