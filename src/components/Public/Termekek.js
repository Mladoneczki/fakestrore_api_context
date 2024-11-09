import React, { useContext } from "react";
import Termek from "./Termek";
import { ApiContext } from "../../contexts/ApiContext";

function Termekek() {
  const { tLista } = useContext(ApiContext);
  return (
    <div className="row">
      {tLista.map((elem) => {
        return <Termek elem={elem} key={elem.id} />;
      })}
    </div>
  );
}

export default Termekek;
