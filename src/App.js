import React from "react";
import styled from "styled-components";
import Carrinho from "./components/Carrinho/Carrinho";
import CardServico from "./components/Card-Servico/CardServico";
import Inscricao from "./components/Formulario/Inscricao";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Detalhes from "./components/Detalhes-Servico/Detalhes";

const Corpo = styled.div`
  min-height: 81vh;
`

export default class App extends React.Component {

    state = {
        carrinhoVisivel: false,
        atualizaComponente: false,
        telaAtual: 'home',
        idServico: '',
        itensNoCarrinho: 0
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
        this.setState({ itensNoCarrinho: this.state.itensNoCarrinho - 1 })
    }
    atualizaCarrinho = () => {
        this.setState({ atualizaComponente: true })
        this.setState({ itensNoCarrinho: this.state.itensNoCarrinho + 1 })
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

    render() {
      console.log(this.state.telaAtual)
      let telaExibida = ''
      switch(this.state.telaAtual){
        
        case 'inscricao':
            telaExibida = <div>
              <Header voltarParaHome={this.irParaHome} clicouCarrinho={this.exibeCarrinho} itensNoCarrinho={this.state.itensNoCarrinho}/>
              <Carrinho
              mostrar={this.state.carrinhoVisivel}
              fechar={this.exibeCarrinho}
              carrinhoExcluiu={this.atualizaCard}
              atualizaComponente={this.state.atualizaComponente}
              concluido={this.concluido}
              />
              <Corpo>
                <Inscricao voltarHome={this.irParaHome}/>
              </Corpo>
              <Footer/>
            </div>;
            break;

        case 'servicos':
            telaExibida = <div>
              <Header voltarParaHome={this.irParaHome} clicouCarrinho={this.exibeCarrinho} itensNoCarrinho={this.state.itensNoCarrinho}/>
              <Carrinho
              mostrar={this.state.carrinhoVisivel}
              fechar={this.exibeCarrinho}
              carrinhoExcluiu={this.atualizaCard}
              atualizaComponente={this.state.atualizaComponente}
              concluido={this.concluido}
              />
              <Corpo>
                <CardServico botaoDetalhe={this.irParaDatalhes}
              cardAdicionou={this.atualizaCarrinho} 
              atualizaComponente={this.state.atualizaComponente} 
              concluido={this.concluido}
              />
              </Corpo> 
            <Footer/>
            </div>;
            break;

        case 'detalhes':
            telaExibida = <div>
              <Header voltarParaHome={this.irParaHome} clicouCarrinho={this.exibeCarrinho} itensNoCarrinho={this.state.itensNoCarrinho}/>
              <Carrinho
              mostrar={this.state.carrinhoVisivel}
              fechar={this.exibeCarrinho}
              carrinhoExcluiu={this.atualizaCard}
              atualizaComponente={this.state.atualizaComponente}
              concluido={this.concluido}
              />
              <Corpo>
                <Detalhes  id={this.state.idServico}  botaoVoltar = {this.irParaServicos}/>
              </Corpo>
              <Footer/>
            </div>;
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
                {telaExibida} 
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

