import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import axios from "axios";
const sampleData = {
  submmary: "Google I/O 2015",
  description: "A chance to hear more about Google's developer products.",
  start: {
    dateTime: "2019-01-28T09:00:00-07:00",
  },
  end: {
    dateTime: "2019-01-28T17:00:00-07:00",
  },
};
const App = () => {
  let url;
  const [disabled, setDisabled] = useState(false);
  const responseGoogle = (response) => {
    const code = response;
    axios
      .post("/api/create-tokens", code)
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const responseError = (response) => {
    console.log(response);
  };
  const getUrlsth = () => {
    axios.get("/api/create-token-v2").then((response) => {
      url = response.data.url;
      if (url) {
        setDisabled(true);
      }
      window.open(url, "_blank");
    });
  };
  return (
    <div className="App">
      {disabled ? (
        <div>Hey you have just logged in</div>
      ) : (
        <button onClick={getUrlsth} disabled={disabled}>
          Click Me
        </button>
      )}
    </div>
  );
};

export default App;