const router = require("express").Router();
const { google } = require("googleapis");
const urlParse = require("url-parse");

const outh2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "http://localhost:3000/api/steps"
);

google.options({ auth: outh2Client });
router.post("/create-tokens", async (req, res, next) => {
  try {
    const code = req.body.clientId;
    console.log("code", code);
    const tokens = outh2Client.getToken({ code: code }, (err, tokens) => {
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

router.get("/create-token-v2", async (req, res, next) => {
  try {
    const url = outh2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/calendar profile openid email"],
      state: JSON.stringify({
        callbackUrl: req.body.callbackUrl,
        userId: req.body.userid,
      }),
    });

    res.send({ url });
  } catch (error) {
    next(error);
  }
});
router.post("/steps", async (req, res, next) => {
  try {
    const code = new urlParse(req.body.url).query.code;
    console.log(code);
    // const tokens = outh2Client.getToken({ code: code }, (err, tokens) => {
    //   if (err) {
    //     console.log("The fuckup is ========== ", err);
    //   }
    //   return tokens;
    // });
    // console.log("tokens", tokens);
  } catch (error) {}
});