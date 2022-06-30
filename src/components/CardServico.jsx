import React from "react";
import axios from "axios";

import { Card } from "./styled";
import { CardContainer } from "./styled";

export default class CardServico extends React.Component {
    state = {
        servicos: []
    }

    url = "https://labeninjas.herokuapp.com"
    auth = {
        headers: {
            Authorization: "2d0b7f1b-74aa-42c3-8a4b-c6e3484a4904"
        }
    }
    
    componentDidMount = () => {
        this.getAllJobs()
    }

    getAllJobs = () => {
        axios.get(`${this.url}/jobs`, this.auth)
        .then((res) => {
            this.setState({servicos: res.data.jobs})
            console.log(this.state.servicos);
        })
        .catch((err) => {
            alert('Erro ao carregar os serviços')
        })
    }

    pegarServiços
    render(){
        const servicos = this.state.servicos.map(servico => {
            return(
                <Card key={servico.id}>
                    <p>{servico.title}</p>
                    <p>Prazo: {servico.dueDate}, Preço: R${servico.price}</p>
                    <div>
                        <button>Detalhes</button>
                        <button>Adicionar</button>
                    </div>
                </Card>
            )
        })
        return(
            <CardContainer>{servicos}</CardContainer>
        )
    }
}