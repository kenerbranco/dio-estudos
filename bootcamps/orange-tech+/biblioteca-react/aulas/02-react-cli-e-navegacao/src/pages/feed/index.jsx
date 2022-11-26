import { Link } from 'react-router-dom';
import bannerImage from '../../assets/banner.png';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighLight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight>#RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={100} nome="Kener Branco" image="https://avatars.githubusercontent.com/u/115368851?v=4" />
                <UserInfo percentual={80} nome="Kener Branco" image="https://avatars.githubusercontent.com/u/115368851?v=4" />
                <UserInfo percentual={60} nome="Kener Branco" image="https://avatars.githubusercontent.com/u/115368851?v=4" />
                <UserInfo percentual={55} nome="Kener Branco" image="https://avatars.githubusercontent.com/u/115368851?v=4" />
                <UserInfo percentual={25} nome="Kener Branco" image="https://avatars.githubusercontent.com/u/115368851?v=4" />
            </Column>
        </Container>
    </>)
}

export { Feed }