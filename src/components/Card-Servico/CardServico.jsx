import React from "react";
import axios from "axios";

import { Card } from "./styled";
import { CardContainer } from "./styled";
import { getAllJobs } from "../../services/ConexoesApi";
import { addToCart } from "../../services/ConexoesApi";
import { removeFromCart } from "../../services/ConexoesApi";

export default class CardServico extends React.Component {
    state = {
        servicos: []
    }
    
    componentDidMount = () => {
        getAllJobs().then((result) => {
            this.setState({servicos: result})
        })                
    }


    pegarServiços
    render(){
        const servicos = this.state.servicos.map(servico => {
            let today = new Date(servico.dueDate);
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            
            return(
                <Card key={servico.id}>
                    <p>{servico.title}</p>
                    <p>Prazo: {today}, Preço: R${servico.price}</p>
                    <div>
                        <button
                        onClick={() => {removeFromCart(servico.id)}}
                        >Detalhes</button>
                        <button 
                        onClick={() => addToCart(servico.id)}
                        disabled={servico.taken}
                        >Adicionar</button>
                    </div>
                </Card>
            )
        })
        return(
            <CardContainer>{servicos}</CardContainer>
        )
    }
}