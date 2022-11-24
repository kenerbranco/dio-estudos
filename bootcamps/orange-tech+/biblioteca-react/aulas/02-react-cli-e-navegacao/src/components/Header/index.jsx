import React from 'react'
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './style'

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="logo da dio" />
                <BuscarInputContainer>
                    <Input placeholder="Busca..."/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button tittle="Entrar"/>
                <Button tittle="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }