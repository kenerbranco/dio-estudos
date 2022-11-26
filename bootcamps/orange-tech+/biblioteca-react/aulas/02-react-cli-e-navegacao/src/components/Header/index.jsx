import React from 'react'
import logo from '../../assets/logo-dio.png';
import { useNavigate } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
} from './style'

const Header = ({autenticado}) => {

    const navigateHome = useNavigate();

    const handClickHome = () => {
        navigateHome('/')
    }

    return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="logo da dio" onClick={handClickHome}/>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder="Busca..."/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <>
                        <UserPicture src="https://avatars.githubusercontent.com/u/115368851?v=4"/>
                            <MdMenu size={28}/>
                    </>
                ) : (
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                    </>
                    )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }