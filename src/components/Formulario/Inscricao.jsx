import React from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { createJob } from '../../services/ConexoesApi';


export default class Inscricao extends React.Component{
    state = {
        inputTitulo:'',
        inputDescricao: '',
        inputPreco: '',
        inputPgto: '',
        formaPgto: [],
        inputPrazo: '',

    };

    pegarValorInputTitulo = (event) =>
    this.setState({ inputTitulo: event.target.value });
    
    pegarValorInputDescricao = (event) =>
    this.setState({ inputDescricao: event.target.value });

    pegarValorInputPreco = (event) =>
    this.setState({ inputPreco: event.target.value });
    
    pegarValorInputPgto = (event) =>
    this.setState({ inputPgto: event.target.value });

    pegarValorInputPrazo = (event) =>
    this.setState({ inputPrazo: event.target.value });

    // addPgto = () => {
    //     const novaListaPgto = [...this.state.formaPgto, inputPgto];
    //     this.setState({ formaPgto: novaListaPgto });  
    //   };

      
  deletarPgto = (item) => {
    const pgtoFiltrados = this.state.formaPgto.filter((id) => {
      return id !== item;
    });
    this.setState({ formaPgto: pgtoFiltrados });
  };

//   renderizaPgto = () =>{
//     this.state.formaPgto.map((item) => {
//         return (
//           <div className="container">
//             <p>{item}</p>
         
//             <button onClick={() => this.deletarPgto(id)}>
//               X
//             </button>
//           </div>
//         )
//   }
// };
criarNinja = () => {
  createJob()
}

render(){
    
    const options = [
      {
        label: "Cartão", value: "cartao"
      },
      {
        label: "Pix", value: "pix"
      }
    ]
    const Example = () => {
      const [selected, setSelected] = useState([]);

    return(
        <center>
        <form action="">
        <h2>Cadastre o seu serviço</h2>
        <input type="text" placeholder='Título' />
        <br />
        <input type="text" placeholder='Descrição' />
        <br />
        <input type="number" placeholder='Preço'/>
        <br />
        Cartão de Credito <input type="checkbox" />
        <br />
        Cartão de Débito <input type="checkbox" />
        <br />
        PayPal <input type="checkbox" />
        <br />
        Boleto <input type="checkbox" />
        <br />
        Pix <input type="checkbox" />
        <br /> 
        <label for="pagamento">Forma de pagamento:</label>
        {/* <input list="pagamentos" name="pagamento" id="pagamento" /> */}
        {/* <select multiple id="pagamentos" >
            <option id='1' value="Cartão de Credito">Cartão de Credito</option>
            <option id='2' value="Cartão de Débito">Cartão de Débito</option>
            <option id='3' value="PayPal">PayPal</option>
            <option id='4' value="Boleto" >Boleto</option>
            <option id='5' value="Pix" >Pix</option>
        </select> */}
        <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        />
        <button onClick={this.addPgto}>Enviar</button>
        <br />
        <input type="date" />
        <br />
        
        </form>
        <button onClick={() => this.criarNinja()}>Cadastrar Serviço</button>
        </center>
        

    )
}
} 
}