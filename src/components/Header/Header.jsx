import React from 'react';
import Ninja from '../img/ninja_1.png';
import IconButtons from './IconButtons';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const Container = styled.div`
display: grid;
border: 1px solid black;
height: 100vh;
grid-template-rows: 100px 1fr 100px;
grid-template-areas: "h h h"
                      ; 

@media screen and (min-device-width: 320px) and (max-device-width: 1024px) {
width: 100vw;
height: 100vh;
    }                      
                                      
`
const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
grid-area: h;
background-color: #fe7e01;
`
const Img = styled.img`
width: 50px;
margin-left: 20px;
`

export default class HeaderEFooter extends React.Component {


    render() {
        return (
            <Container>
                <Header>
                    <div>
                        <Img src={Ninja} />
                        <p> Labeninjas </p>
                    </div>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '24ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Pesquisa" variant="outlined" />
                    </Box>
                    <IconButtons />
                </Header>
            </Container>

        )


    }
}