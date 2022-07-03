import React from "react";
import axios from 'axios';
export default class Detalhes extends React.Component{
    state = {
        servico: {

        }
    };

    componentDidMount(){
        this.getJobById();
    };
    getJobById = () =>{
        const url = 'https://labeninjas.herokuapp.com/jobs/:id';
        const auth = {
            headers: {
                Authorization: "2d0b7f1b-74aa-42c3-8a4b-c6e3484a4904"
            }};
        const id = '2693db6a-6959-444c-8db1-54f0236c63be';
        axios
        .get(url, auth, id)
        .then((res) => console.log(res))
        // this.setState({servico: res}))
        .catch((error) => alert(error.response))
    };

 
    render(){
        const renderizaPgto = this.state.servico.paymentMethods.map((item)=>{
        return <ul>{item}</ul>
        })
        return(
            <center>
                <h2>{this.state.servico.title}</h2>
                <h4>{this.state.servico.description}</h4>
                <p>Preço: R${this.state.servico.price},00</p>
                <p>Pagamento: {renderizaPgto}</p>
                <p>Até {this.state.servico.dueDate} </p>
                
                <button onClick={this.props.botaoVoltar}>Voltar para lista</button>
            </center>

        )
    }
}