import React from "react";
import styled from "styled-components";
import Carrinho from "./components/Carrinho/Carrinho";
import CardServico from "./components/Card-Servico/CardServico";
import Inscricao from "./components/Formulario/Inscricao";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';



// CÓDIGO TESTE COM O CARRINHO
// const DivBotao = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 15px 15px;
// `;
// ATÉ AQUI

export default class App extends React.Component {

    // CÓDIGO TESTE COM O CARRINHO
    state = {
        carrinhoVisivel: false,
        atualizaComponente: false,
        telaAtual: 'home',
        idServico: ''
    };

    
    irParaHome = () => {
      this.setState({telaAtual: 'home'})
    }
    irParaDatalhes = (id) => {
        this.setState({telaAtual: 'detalhes', idServico: id})
    }

    irParaFormulario = () => {
      this.setState({telaAtual: 'inscricao'})
    }
    irParaServicos = () => {
        this.setState({telaAtual: 'servicos', idServico: ''})
    }
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
    // selecionaPagina = () => {
    //   switch(this.state.telaAtual){
        
    //       case 'inscricao':
    //           return <Inscricao/>;
    //       case 'serviços':
    //           return <CardServico botaoDetalhe= {this.irParaDatalhes}/>;
    //       case 'detalhes':
    //           return <Detalhes  id={this.state.idServico}  botaoVoltar = {this.irParaServicos}/>;
    //       case 'home':
    //           return <Home/>
    //       default:
    //           return <Home/>
    //   }
    // };

    // ATÉ AQUI

    render() {
      console.log(this.state.telaAtual)
      let telaExibida = ''
      switch(this.state.telaAtual){
        
        case 'inscricao':
            telaExibida = <Inscricao voltarHome={this.irParaHome}/>;
            break;
        case 'servicos':
            telaExibida = <CardServico botaoDetalhe={this.irParaDatalhes}/>;
            break;
        case 'detalhes':
            telaExibida = <Detalhes  id={this.state.idServico}  botaoVoltar = {this.irParaServicos}/>;
            break;
        case 'home':
            telaExibida = <Home botaoContratarNinja={this.irParaServicos} botaoSerUmNinja={this.irParaFormulario} />
            break;
        default:
            telaExibida = <Home botaoContratarNinja={this.irParaServicos} botaoSerUmNinja={this.irParaFormulario} />
            break;
    }
        return (
            <div>
                
                <Header/>
                

                
                {telaExibida} 
                <Footer/>
                {/* CÓDIGO TESTE COM O CARRINHO */}
                {/* <DivBotao>
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
                <CardServico 
                cardAdicionou={this.atualizaCarrinho} 
                atualizaComponente={this.state.atualizaComponente} 
                concluido={this.concluido}
                /> */}
                {/* ATÉ AQUI */}

                {/* <CardServico/> */}
                {/* <Detalhes/>
                <Inscricao /> */}
            </div>
        )
    }

}

