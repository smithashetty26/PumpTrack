import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-box">

        <h1>PumpTrack</h1>

        <p>Real-Time Fuel Availability Tracker</p>

        <InputField
          type="email"
          placeholder="Email"
        />

        <InputField
          type="password"
          placeholder="Password"
        />

        <Button text="Login" />

        <h4>Create New Account</h4>

      </div>

    </div>
  );
}

export default Login;