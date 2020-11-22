import React from "react";
import "./styles/Login.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSingup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <div className="loginIcon">
          <i class="glyphicon glyphicon-user"></i>
        </div>
        <label>Usuario</label>
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
          onChange={(e) => setPassword(e.target.password)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Ingresar</button>
              <p>
                No tienes cuenta?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Crear cuenta
                </span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSingup}>Crear cuenta</button>
              <p>
                Tienes cuenta?
                <span onClick={() => setHasAccount(!hasAccount)}>Ingresar</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
