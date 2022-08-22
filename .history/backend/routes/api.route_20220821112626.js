const router = require("express").Router();
const { google } = require("googleapis");

let outh2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "http://localhost:3000/"
);
google.options({ auth: outh2Client });

router.post("/create-tokens", async (req, res, next) => {
  try {
    const code = req.body.credentials;
    console.log(code);
    const { tokens } = outh2Client.getToken({ code: code }, (err, tokens) => {
      if (err) {
        console.log("The fuckup is ========== ", err);
      }
      return tokens;
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
