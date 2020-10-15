import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';
import logoImage from '../../assets/images/logo.png'
import Button from '../../components/Button';
import Input from '../../components/Input';


const SignIn: React.FC = () => {
    return (
        <Container>
            <Image source={logoImage} />
            <Title>Faça seu logon</Title>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => { console.log('deu') }}>Entrar</Button>
        </Container>
    );
}

export default SignIn;