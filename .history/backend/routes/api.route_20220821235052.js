const router = require("express").Router();
const { google } = require("googleapis");
const urlParse = require("url-parse");
const queryParse = require("query-string");
const outh2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "http://localhost:3001/api/steps"
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
router.get("/steps", async (req, res, next) => {
  const queryUrl = new urlParse(req.url);
  const code = queryParse.parse(queryUrl.query).code;

  console.log(" -------- code -------------", code);

  const tokens = await outh2Client.getToken(code).then((tokens) => {
    console.log("tokens", tokens.tokens.refresh_token);
  });
  res.send("ok");
});
router.post("/create-events", async (req, res, next) => {
  const { submmary, description, start, end } = req.body;
});
