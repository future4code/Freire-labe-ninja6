import React from "react";
import axios from 'axios';
import styled from "styled-components";

const ItemLista = styled.li`
    width: fit-content;
`

export default class Detalhes extends React.Component{
    state = {
        servico: {}
    };

    getJobById = (id) =>{
        const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
        const auth = {
            headers: {
                Authorization: "2d0b7f1b-74aa-42c3-8a4b-c6e3484a4904"
            }};
        axios
        .get(url, auth)
        .then((res) => {
            this.setState({servico: res.data})
            console.log(res.data)
        })
        .catch((error) => alert(error.response))
    };

    componentDidMount(){
        this.getJobById(this.props.id);
    };
    

 
    render(){
        let renderizaPgto = ""
        if (this.state.servico.paymentMethods) {
            renderizaPgto = this.state.servico.paymentMethods.map((item)=>{
                return <ItemLista>{item}</ItemLista>
            })
        } else {
            renderizaPgto = "Carregando..."
        }
        
        return(
            <center>
                <h2>{this.state.servico.title}</h2>
                <h4>{this.state.servico.description}</h4>
                <p>Preço: R${this.state.servico.price},00</p>
                <p>
                    Pagamento:
                    <ul>
                        {renderizaPgto}
                    </ul>   
                </p>
                <p>Até {this.state.servico.dueDate} </p>
                
                <button onClick={this.props.botaoVoltar}>Voltar para lista</button>
            </center>

        )
    }
}