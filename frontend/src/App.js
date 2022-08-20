import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

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
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <div className="academy">
          <div className="academy-calendar">10Academy to Calendar</div>
          <div className="center">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                responseGoogle(credentialResponse);
              }}
              onError={(errorResponse) => {
                responseError(errorResponse);
              }}
            ></GoogleLogin>
          </div>
        </div>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
