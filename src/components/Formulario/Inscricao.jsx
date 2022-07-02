import React from 'react';
import Select from "react-select"
import { createJob } from '../../services/ConexoesApi';



export default class Inscricao extends React.Component{
    state = {
        inputTitulo:'',
        inputDescricao: '',
        inputPreco: '',
        formaPgto: [],
        inputPrazo: '',
    };
    
   
    handleInputTitulo = (event) =>
    this.setState({ inputTitulo: event.target.value });
    
    handleInputDescricao = (event) =>
    this.setState({ inputDescricao: event.target.value });

    handleInputPreco = (event) =>
    this.setState({ inputPreco: event.target.value });

    handleInputPrazo = (event) =>
    this.setState({ inputPrazo: event.target.value });

    
  selectOption = (item) => {
  const novaListaPgto = item.map(item =>{
    return item.value
  })
  this.setState({formaPgto: novaListaPgto})
  console.log(novaListaPgto);
  console.log(this.state.formaPgto)
}


criarNinja = () => {
  createJob()
}


render(){

  const options = [
    {
      label: "Cartão de Credito", value: "Cartão de Credito"
    },
    {
      label: "Cartão de Debito", value: "Cartão de Débito"
    },
    {
      label: "PayPal", value: "PayPal"
    },
    {
      label: "Boleto", value: "Boleto"
    },
    {
      label: "Pix", value: "Pix"
    }
  ];

    return(
       <center>
        <h2>Cadastre o seu serviço</h2>
        <input type="text" 
        placeholder='Título' 
        value={this.state.inputTitulo} 
        onChange={this.handleInputTitulo}/>
        <br />
        <input type="text" 
        placeholder='Descrição' 
        value={this.state.inputDescricao} 
        onChange={this.handleInputDescricao}/>
        <br />
        <input type="number" 
        placeholder='Preço' 
        value={this.state.inputPreco}
        onChange={this.handleInputPreco}/>
        <br />
        <Select
          options={options}
          isMulti
          onChange={(item) => this.selectOption(item)}
        />
        <button onClick={renderizaPgto}>Enviar</button>
        <br />
        <input type="date" 
        value={this.state.inputPrazo}
        onChange={this.handleInputPrazo}/>
        <br />
        {renderizaPgto}
        
        <button onClick={() => this.criarNinja()}>Cadastrar Serviço</button>
      
        </center>
        

    )
}
} 
