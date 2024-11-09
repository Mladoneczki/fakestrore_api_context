import React, { useContext, useState } from "react";
import { ApiContext } from "../../contexts/ApiContext";

function TermekUrlap() {
  const {postAdat}=useContext(ApiContext)
    const [adat, setAdat]=useState({
        title:'',
        price:100,
        category:'',
        description:'',
        image:''
    })
    function kuldesKezeles(event){
        // minden ürlapnak van sajat stateje ami az űrlapokat kezeli
       
        event.preventDefault() //leszedem az alapertelmezett esemenykezelot
        // összegyüjt9m az űrlapokat és összeállítok egy objektumot amit továbbküldök a szerver felé
        console.log("submit")
        postAdat('/products', adat)

    }
    function valtozasKezeles(event){
      const sv={...adat}
                sv[event.target.id]=event.target.value
                setAdat({...sv})

    }
  return (
    <div>
      <form onSubmit={kuldesKezeles}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Termék neve:
          </label>
          <input
            type="text"
            className="form_control"
            id="title"
            aria-describedby="tileHelp"
            value={adat.title}
            onChange={valtozasKezeles}
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Termék neve:
          </label>
          <input
            type="number"
            className="form_control"
            id="price"
            aria-describedby="priceHelp"
            value={adat.price}
            onChange={valtozasKezeles}
          />
         
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TermekUrlap;
