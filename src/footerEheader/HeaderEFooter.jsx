import React from 'react';
import styled from 'styled-components';
import Ninja from './img/ninja_1.png';
import Face from './img/facebook.png';
import Instagram from './img/instagram.png';
import Whatsapp from './img/whatsapp.png';
import IconButtons from './footerEheader/IconButtons';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import axios from "axios"

const Container = styled.div`
display: grid;
border: 1px solid black;
height: 100vh;
grid-template-rows: 100px 1fr 100px;
grid-template-areas: "h h h"
                      "b b b"
                      "f f f";                   
`

const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
grid-area: h;
background-color: #fe7e01;
`

const Footer = styled.footer`
grid-area: f;
border: 1px solid black;
background-color: #fbb34c;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
`

const Input = styled.input`
background-color: #f6c37cfa;
border: #f6c37cfa;
box-shadow: 0 0 5px 1px black;
margin-top: 50px;
padding: 5px;
`
const RedesSociais = styled.div`
font-size: 12px;
text-align: center;
margin-top: 45px;

`
const Img = styled.img`
width: 50px;
margin-left: 20px;
`

const ImgLink = styled.a`
text-align: center;
font-size: 12px;
padding: 10px;
`

// #fe7e01 #fbb34c #ffffff

export default class HeaderEFooter extends React.Component{
 

  render(){
  return (
    <Container>
   <Header>

   <Img src={Ninja}/>

   <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '26ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  id="outlined-basic" label="Pesquisa" variant="outlined" />
    </Box>
     <IconButtons/>
     </Header>
     
    <Footer>
    <ImgLink>
    <p>Equipe de desenvolvimento</p>
    <a href="https://www.linkedin.com/in/peterson-santana-maia-5291bb215/" target="_blank"><img width='40px' src='https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_200_200/0/1624194324042?e=1661990400&v=beta&t=aU4aVRjFGNDdp4iAPCsR7P9ssvTrHrphOagunlFqP1o' alt="" /></a>
    <a href="" target="_blank"><img width='40px' src='https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_200_200/0/1624194324042?e=1661990400&v=beta&t=aU4aVRjFGNDdp4iAPCsR7P9ssvTrHrphOagunlFqP1o' alt="" /></a>
    <a href="" target="_blank"><img width='40px' src='https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_200_200/0/1624194324042?e=1661990400&v=beta&t=aU4aVRjFGNDdp4iAPCsR7P9ssvTrHrphOagunlFqP1o' alt="" /></a>
    <a href="" target="_blank"><img width='40px' src='https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_200_200/0/1624194324042?e=1661990400&v=beta&t=aU4aVRjFGNDdp4iAPCsR7P9ssvTrHrphOagunlFqP1o' alt="" /></a>
    <a href="" target="_blank"><img width='40px' src='https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_200_200/0/1624194324042?e=1661990400&v=beta&t=aU4aVRjFGNDdp4iAPCsR7P9ssvTrHrphOagunlFqP1o' alt="" /></a>
    </ImgLink>
      <RedesSociais>

        <p>--- Nossas Redes ---</p>
     <a href="http://www.facebook.com.br"><img width='35px' src={Face} alt=""/></a>
     <a href="http://www.instagram.com.br"><img width='35px' src={Instagram} alt=""/></a>
     <a href="http://www.whatsapp.com"><img width='35px' src={Whatsapp} alt=""/></a>
     
     </RedesSociais>
    </Footer>

     </Container>


   )
  }
}
