import React from "react";
import "./styles/Login.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <img
          src="https://www.treinta.co/wp-content/uploads/2020/08/treinta-logo-yellow-gmail-1.png"
          width="160"
          height="60"
          alt="logo"
          className="loginImg"
        ></img>
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Contraseña</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button className="loginBtn" onClick={handleSignup}>Crear cuenta</button>
              <p>
                Tienes cuenta?
                <span onClick={() => setHasAccount(!hasAccount)}>Ingresar</span>
              </p>
            </>
          ) : (
            <>
              <button className="loginBtn" onClick={handleLogin}>Ingresar</button>
              <p>
                No tienes cuenta?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Crear cuenta
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
