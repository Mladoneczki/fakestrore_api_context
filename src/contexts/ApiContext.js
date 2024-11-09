import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("")
export const ApiProvider=({children})=>{
    // a terméklistát api végpontról töltjük fel

    const [tLista, setTLista]=useState([])

    // asszinkron hívás axios-szal

    function getadat(vegpont){
        myAxios.get(vegpont)
  .then(function (response) {
    // handle success
    console.log(response.data);
    setTLista(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    }
    function postAdat(vegpont,adat){
      myAxios.post(vegpont,adat)
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.finally(function () {
  // always executed
});
  }
    useEffect(()=>{
    getadat(`/products`)}, [])

    return <ApiContext.Provider value={{tLista, postAdat}}>
        {children}
    </ApiContext.Provider>
}
