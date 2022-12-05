import React from "react";
import { useParams } from "react-router-dom";

function ThankYou() {
  const idOrder = useParams().idOrder;

  return (
    <div style={{ color: "white" }}>
      <h1>Gracias por su compra vuelva prontos</h1>
      <h2>
        Su numero de transaccion es : <strong>{idOrder}</strong>
      </h2>
    </div>
  );
}

export default ThankYou;
