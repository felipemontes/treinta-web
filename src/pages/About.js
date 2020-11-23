import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <>
      <div className="about-section">
        <img src="https://www.treinta.co/wp-content/uploads/2020/09/DobleScreen.png"></img>
        <h1>Treinta - ¡Aplicación financiera gratuita!</h1>
        <p>
          Gestiona las transacciones de tu negocio, conoce la utilidad de tu
          negocio en cualquier momento y registra y cobra deudas 3 veces más
          eficazmente.
        </p>
        <p>
          Ayuda a tu negocio a crecer más con Treinta, la aplicación financiera
          gratuita. ¡Treinta es gratis, seguro y fácil de usar!
        </p>
      </div>
      <h1 className="title">Descubre las ventajas de usar Treinta</h1>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="https://www.treinta.co/wp-content/uploads/2020/06/family-img-1.png"></img>
            <div className="container">
              <h3>Obtén un control eficaz de su flujo de caja</h3>
              <p>
                Registra diligentemente las ventas, los gastos y las cuentas por
                cobrar y calcula la utilidad de tu negocio fácilmente.
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="https://www.treinta.co/wp-content/uploads/2020/06/video-metting-img-1.png"></img>
            <div className="container">
              <h3>Automatiza tu negocio y obtén resultados precisos</h3>
              <p>
                Sin complicaciones de cálculos manuales. Todos los números se
                calculan automáticamente.
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="https://www.treinta.co/wp-content/uploads/2020/06/organization-img-1.png"></img>
            <div className="container">
              <h3>Ahorra tiempo y dedícalo en lo que más te gusta</h3>
              <p>
                Ten más libertad para administrar tu tiempo en el negocio, pasar
                más tiempo en familia y disfrutar de tus pasiones.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
