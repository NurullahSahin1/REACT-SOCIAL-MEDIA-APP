import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">
            Sahin <span>Social</span>
          </h3>
          <span className="loginDesc">
            Connect with your friends around the world on Sahinsocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" type="email" className="loginInput" />
            <input
              placeholder="Password"
              type="Password"
              className="loginInput"
            />
            <input placeholder="Email" type="email" className="loginInput" />
            <input
              placeholder="Password Again"
              type="Password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Login into your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
