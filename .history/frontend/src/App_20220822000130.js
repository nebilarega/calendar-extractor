import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import axios from "axios";
const sampleData = {
  submmary: "Google I/O 2015",
  description: "A chance to hear more about Google's developer products.",
  location: "800 Howard St., San Francisco, CA 94103",
  start: "2022-08-22 09:00:00-07:00",
  end: "2022-08-22 23:00:00-07:00",
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
  const handleClick = () => {
    axios.post("/api/create-events", sampleData).then((response) => {
      console.log("response", response.data);
    });
  };
  return (
    <div className="App">
      {disabled ? (
        <div>
          <button onClick={handleClick}>Post an event</button>
        </div>
      ) : (
        <button onClick={getUrlsth} disabled={disabled}>
          Click Me
        </button>
      )}
    </div>
  );
};

export default App;
