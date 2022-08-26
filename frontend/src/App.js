import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import axios from "axios";

import LandingPage from "./component/LandingPage";

const message = {
  message: "Schedule the event",
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
    axios.post("/api/create-events", message).then((response) => {
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
