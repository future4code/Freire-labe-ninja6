import React from 'react';
import styled from 'styled-components';
import Face from '../img/facebook.png';
import Instagram from '../img/instagram.png';
import Whatsapp from '../img/whatsapp.png';
// import axios from "axios"

const Container = styled.div`
display: grid;
border: 1px solid black;
height: 100vh;
grid-template-rows: 100px 1fr 100px;
grid-template-areas: "h h h"
                      "b b b"
                      "f f f";   

@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
width: 100vw;
height: 100vh;

    }                                                        
`

const Footer = styled.footer`
grid-area: f;
border: 1px solid black;
background-color: #fbb34c;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   font-size: 10px;
   display: grid;
   grid-template-columns: 2fr 1fr;

    }
`

const RedesSociais = styled.div`
font-size: 12px;
text-align: center;
margin-top: 45px;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   font-size: 12px;
   margin-top: 25%;
    }
`

const ImgLink = styled.a`
text-align: center;
font-size: 12px;
padding: 10px;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   font-size: 12px;
   margin-top: 8%;
   display: block;

    }
`

const TextoEquipe = styled.p`
margin-bottom: 2%;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   margin-bottom: 2%;
}
`

const Imagem = styled.a`
margin: 4px;
margin-top: 5px;
@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
   margin: 1%;
}
`

export default class HeaderEFooter extends React.Component {


  render() {
    return (


      <Container>

        <Footer>

          <ImgLink>
            <TextoEquipe> --- Equipe de desenvolvimento --- </TextoEquipe>
            <Imagem href="https://www.linkedin.com/in/peterson-santana-maia-5291bb215/" target="_blank"><img width='40px' src='https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_200_200/0/1624194324042?e=1661990400&v=beta&t=aU4aVRjFGNDdp4iAPCsR7P9ssvTrHrphOagunlFqP1o' alt="" /></Imagem>
            <Imagem href="" target="_blank"><img width='40px' src='https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_200_200/0/1624194324042?e=1661990400&v=beta&t=aU4aVRjFGNDdp4iAPCsR7P9ssvTrHrphOagunlFqP1o' alt="" /></Imagem>
            <Imagem href="" target="_blank"><img width='40px' src='https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_200_200/0/1624194324042?e=1661990400&v=beta&t=aU4aVRjFGNDdp4iAPCsR7P9ssvTrHrphOagunlFqP1o' alt="" /></Imagem>
            <Imagem href="" target="_blank"><img width='40px' src='https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_200_200/0/1624194324042?e=1661990400&v=beta&t=aU4aVRjFGNDdp4iAPCsR7P9ssvTrHrphOagunlFqP1o' alt="" /></Imagem>
            <Imagem href="" target="_blank"><img width='40px' src='https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_200_200/0/1624194324042?e=1661990400&v=beta&t=aU4aVRjFGNDdp4iAPCsR7P9ssvTrHrphOagunlFqP1o' alt="" /></Imagem>
          </ImgLink>

          <RedesSociais>
            <p>--- Nossas Redes ---</p>
            <a href="http://www.facebook.com.br"><img width='35px' src={Face} alt="" /></a>
            <a href="http://www.instagram.com.br"><img width='35px' src={Instagram} alt="" /></a>
            <a href="http://www.whatsapp.com"><img width='35px' src={Whatsapp} alt="" /></a>
          </RedesSociais>

        </Footer>

      </Container>


    )
  }
}
