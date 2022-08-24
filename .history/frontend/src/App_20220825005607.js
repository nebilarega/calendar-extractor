import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import axios from "axios";

import LandingPage from "./component/LandingPage";

const sampleData = {
  submmary: "Nebil this is a new event",
  description: "A chance to hear more about Google's developer products.",
  location: "800 Howard St., San Francisco, CA 94103",
  start: "August 23, 2022 8:00 AM UTC",
  end: "August 23, 2022 9:00 AM UTC",
  hangoutLink: "meet.google.com/ysb-kjdn-hpp",
};
const App = () => {
  let url;
  const [disabled, setDisabled] = useState(false);
  const [postDisable, setPostDisable] = useState(false);
  const getUrl = () => {
    axios.get("/api/create-token-v2").then((response) => {
      url = response.data.url;
      if (url) {
        setDisabled(true);
      }
      window.open(url, "_blank");
    });
  };
  const handleClick = () => {
    axios.post("/api/create-events", sampleData).then((response) => {
      setPostDisable(true);
    });
  };
  return (
    <div className="App" style={{ height: "100vh" }}>
      <LandingPage
        disabled={disabled}
        getUrl={getUrl}
        handleClick={handleClick}
        postDisable={postDisable}
      ></LandingPage>
    </div>
  );
};

export default App;