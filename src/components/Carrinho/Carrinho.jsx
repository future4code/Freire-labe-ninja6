import React from "react";
import { getAllJobs, removeFromCart } from "../../services/ConexoesApi";
import { BalaoCarrinho, CardCarrinho, TituloCarrinho, BotaoEsvaziar, FinalCarrinho } from "./styles";

{/* 

Fiz o componente com base nesse código comentado abaixo. 
Há nesse código uma exemplo de como fazer o componente Carrinho aparecer e desaparecer da tela
Os props do componente Carrinho são 'mostrar' e 'fechar' - linha 35 até linha 38

import React from "react";
import "./styles.css";
import styled from "styled-components";
import Carrinho from "./components/Carrinho";

const DivBotao = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
`;

export default class App extends React.Component {
  state = {
    carrinhoVisivel: false
  };

  exibeCarrinho = () => {
    this.setState({ carrinhoVisivel: !this.state.carrinhoVisivel });
    console.log(this.state.carrinhoVisivel);
  };

  render() {
    console.log(this.state.carrinhoVisivel);
    return (
      <div>
        <DivBotao>
          <button>Logo</button>
          <button onClick={this.exibeCarrinho}>Carrinho</button>
          <Carrinho
            mostrar={this.state.carrinhoVisivel}
            fechar={this.exibeCarrinho}
          />
        </DivBotao>
        <hr />
      </div>
    );
  }
}
 */}
export default class Carrinho extends React.Component {
  state = {
    itensCarrinho: []
  };

  adicionaItemCarrinho = (id) => {
    console.log("Adicionou");
    // O this.state.itensCarrinho deve ser preenchido
    // com uma consulta a API pelo ID fornecido pelo
    //  componente Home
  };

  excluiItemCarrinho = (id) => {
    if (window.confirm("Tem certeza que deseja remover esse item?")) {
      // O item deve ser excluído pelo ID, consertar quando conectar API
      removeFromCart(id).then(() => {
        getAllJobs().then((result) => {
          const itensAdicionados = result.filter((item) => {
            return item.taken
          })
          this.setState({ itensCarrinho: itensAdicionados });
          this.props.carrinhoExcluiu();
        });
      });
    }
  };

  esvaziarCarrinho = () => {
    if (window.confirm("Deseja mesmo excluir todos os itens?")) {
      this.setState({ itensCarrinho: [] });
    }
  };

  contratarServico = () => {
    this.setState({ itensCarrinho: [] });
    alert("Agradecemos a preferência! Em breve entraremos em contato!");
  };

  componentDidMount() {
    getAllJobs().then((result) => {
      const itensAdicionados = result.filter((item) => {
        return item.taken
      })
      this.setState({ itensCarrinho: itensAdicionados });
    });
  }

  componentDidUpdate() {
    if (this.props.atualizaComponente) {
      getAllJobs().then((result) => {
        const itensAdicionados = result.filter((item) => {
          return item.taken
        })
        this.setState({ itensCarrinho: itensAdicionados });
        this.props.concluido()
      })
    }
  }

  render() {
    console.log(this.state.itensCarrinho)
    let itensExibidos = "";
    if (this.state.itensCarrinho.length !== 0) {
      itensExibidos = this.state.itensCarrinho
        .map((item) => {
          return (
            <CardCarrinho key={item.id}>
              <div>
                <span>{item.title}</span>
                <span>R$ {item.price.toFixed(2).replace(".", ",")}</span>
              </div>
              <button onClick={() => this.excluiItemCarrinho(item.id)}>
                Excluir
              </button>
            </CardCarrinho>
          );
        });
    } else {
      itensExibidos = <h2>{"Carrinho vazio :("}</h2>;
    }

    let valorTotal = 0;

    if (this.state.itensCarrinho) {
      for (let item of this.state.itensCarrinho) {
        valorTotal += item.price;
      }
    }

    return (
      <BalaoCarrinho mostrar={this.props.mostrar}>
        <TituloCarrinho>
          <span>Meu Carrinho</span>
          <button onClick={this.props.fechar}>Fechar</button>
        </TituloCarrinho>
        <hr />

        {itensExibidos}
        <hr />
        <BotaoEsvaziar
          onClick={this.esvaziarCarrinho}
          disabled={this.state.itensCarrinho.length === 0}
        >
          Esvaziar Carrinho
        </BotaoEsvaziar>
        <FinalCarrinho>
          <h3>Total: R$ {valorTotal.toFixed(2).replace(".", ",")}</h3>
          <button
            onClick={this.contratarServico}
            disabled={this.state.itensCarrinho.length === 0}
          >
            Contratar
          </button>
        </FinalCarrinho>
      </BalaoCarrinho>
    );
  }
}