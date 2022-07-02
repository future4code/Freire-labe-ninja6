import React from "react";
import styled from "styled-components";
import Carrinho from "./components/Carrinho/Carrinho";
import CardServico from "./components/Card-Servico/CardServico";
import Inscricao from "./components/Formulario/Inscricao";
import Home from './components/Header-Footer-Home/Home'
import HeaderEFooter from './components/Header-Footer-Home/HeaderEFooter'



// CÓDIGO TESTE COM O CARRINHO
const DivBotao = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
`;
// ATÉ AQUI

export default class App extends React.Component {

    // CÓDIGO TESTE COM O CARRINHO
    state = {
        carrinhoVisivel: false,
        atualizaComponente: false
    };
    exibeCarrinho = () => {
        this.setState({ carrinhoVisivel: !this.state.carrinhoVisivel });
    };
    atualizaCard = () => {
        this.setState({ atualizaComponente: true })
    }
    atualizaCarrinho = () => {
        this.setState({ atualizaComponente: true })
    }
    concluido = () => {
        this.setState({ atualizaComponente: false })
    }
    // ATÉ AQUI

    render() {
        return (
            <div>
                <>
                {/* <HeaderEFooter/> */}
                <Home/>
                </>

                {/* CÓDIGO TESTE COM O CARRINHO */}
                <DivBotao>
                    <button>Logo</button>
                    <button onClick={this.exibeCarrinho}>Carrinho</button>
                    <Carrinho
                        mostrar={this.state.carrinhoVisivel}
                        fechar={this.exibeCarrinho}
                        carrinhoExcluiu={this.atualizaCard}
                        atualizaComponente={this.state.atualizaComponente}
                        concluido={this.concluido}
                    />
                </DivBotao>
                <hr />
                <CardServico cardAdicionou={this.atualizaCarrinho} 
                atualizaComponente={this.state.atualizaComponente}
                 concluido={this.concluido} />
                {/* ATÉ AQUI */}

                {/* <CardServico/> */}
                <Inscricao />
            </div>
        )
    }

}

