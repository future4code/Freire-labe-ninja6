import React from "react";
import CardServico from "./components/Card-Servico/CardServico";
import Inscricao from "./components/Formulario/Inscricao";

export default class App extends React.Component {
  render(){
    return(
      <div>
        <CardServico/>
        <Inscricao/>
      </div>
    )
  }

}

