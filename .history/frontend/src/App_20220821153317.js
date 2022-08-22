import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
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
      console.log("response", response.data);
      fetch(response.data.url, { mode: "cors" })
        .then((response) => {})
        .catch((error) => {});
    });
  };
  return (
    <div className="App">
      <button onClick={getUrlsth}>Click Me</button>
    </div>
    // <div className="App">
    //   <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
    //     <div className="academy">
    //       <div className="academy-calendar">10Academy to Calendar</div>
    //       <div className="center">
    //         <GoogleLogin
    //           onSuccess={(credentialResponse) => {
    //             responseGoogle(credentialResponse);
    //           }}
    //           onError={(errorResponse) => {
    //             responseError(errorResponse);
    //           }}
    //           responseType="code"
    //           accessType="offline"
    //           scope="https://www.googleapis.com/auth/calendar"
    //         ></GoogleLogin>
    //       </div>
    //     </div>
    //   </GoogleOAuthProvider>
    // </div>
  );
};

export default App;
