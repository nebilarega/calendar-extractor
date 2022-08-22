import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
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
      url = response.data.url;
      window.open(url, "_blank");
    });
  };
  return (
    <div className="App">
      <button onClick={getUrlsth}>Click Me</button>
      <button
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        And then me
      </button>
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
