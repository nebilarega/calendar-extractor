import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const App = () => {
  const onSubmit = () => {
    axios
      .get("/api/create-tokens")
      .then((req, res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const responseError = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <button onClick={onSubmit}>Touch me</button>
    </div>
  );
};

export default App;

/**
 * {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
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
      </GoogleOAuthProvider> */
