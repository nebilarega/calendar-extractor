const router = require("express").Router();
const { google } = require("googleapis");
const urlParse = require("url-parse");
const queryParse = require("query-string");
const fs = require("fs");
const outh2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "http://localhost:3001/api/steps"
);

let refresh_token;
google.options({ auth: outh2Client });
router.post("/create-tokens", async (req, res, next) => {
  try {
    const code = req.body.clientId;
    const tokens = outh2Client.getToken({ code: code }, (err, tokens) => {
      if (err) {
        console.error();
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

  const tokens = await outh2Client.getToken(code).then((tokens) => {
    // console.log("tokens", tokens.tokens.refresh_token);
    refresh_token = tokens.tokens.refresh_token;
  });
  res.send("ok");
});
router.post("/create-events", async (req, res, next) => {
  const { message } = req.body;
  if (!message) return;

  const events_buffer = fs.readFileSync(
    "/Users/nebilarega/Desktop/reactCalendar/backend/cleaned_data.json"
  );
  let events = JSON.parse(events_buffer);
  outh2Client.setCredentials({ refresh_token: refresh_token });
  const calendar = google.calendar({ version: "v3" });
  events.forEach((event) => {
    const response = calendar.events.insert({
      auth: outh2Client,
      calendarId: "primary",
      requestBody: {
        summary: event.submmary,
        description: event.description + "  " + event.hangoutLink,
        start: {
          dateTime: new Date(event.start),
        },
        end: {
          dateTime: new Date(event.end),
        },
      },
    });
  });
  res.send({ message: "Finished" });
});
