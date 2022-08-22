const router = require("express").Router();
const { google } = require("googleapis");

const outh2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "http://localhost:3000/"
);

router.get("/create-tokens", async (req, res, next) => {
  try {
    const url = await outh2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/calendar"],
    });
    res.send(url);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
