import React from "react"
// import HeaderEFooter from "./componentes/HeaderEFooter"
import styled from "styled-components"
import Ninja from './img/ninja_1.png'


const Body = styled.body`
text-align: center;

background-color: #fe7e01;
border: 1px solid black;
align-items: center;
text-align: center;
height: 100vh;

`

const H1 = styled.h1`
font-size: 100px;
margin-top: 8%;
`


const BotaoLinkContrate = styled.button`
text-decoration: none;
font-size: 20px;
border: 1px solid black;
margin: 10px;
padding: 100px;
padding-bottom: 11%;
text-align: center;
box-shadow: 0 0 5px 1px;
background-color: #fbb34c; 
border-radius: 5%;
cursor: pointer;
`
const BotaoLinkSeja = styled.button`
text-decoration: none;
font-size: 20px;
border: 1px solid black;
margin: 10px;
padding: 100px;
padding-bottom: 11%;
text-align: center;
box-shadow: 0 0 5px 1px;
background-color: #fbb34c; 
border-radius: 5%;
cursor: pointer;

`

const Div = styled.div`
margin-top: 10%;
`

const TextoPrincipal = styled.div`
display: flex;
justify-content: center ;

`

const Img = styled.img`
margin-top: 8%;
margin-right: 3%;
width: 110px;
height: 110px;

`
const TextoButton = styled.p`

`

export default class App extends React.Component {

  render(){
return(

<>
<Body>
  <TextoPrincipal>
  <Img src={Ninja} alt=""/>
  <H1>LABENINJAS</H1>
  </TextoPrincipal>

  <Div>
<BotaoLinkSeja>
 <p>Seja um Ninja</p> 
</BotaoLinkSeja>

<BotaoLinkContrate>
  Contrate um Ninja
</BotaoLinkContrate>
</Div>

</Body>
</>

)
  }
}