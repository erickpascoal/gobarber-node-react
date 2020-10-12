import React from 'react';

import { FiLogIn } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import LogoImg from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Background, Container, Content } from './styles';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="GoBarber" />

                <form action="">
                    <h1>Faça seu logon</h1>


                    <Input name="email" icon={FiMail} placeholder="E-mail" type="text" />
                    <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

                    <Button type="submit">Entrar</Button>

                    <a href="">Esqueci minha senha</a>
                </form>

                <a href="">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>

            <Background />
        </Container>
    );
}

export default SignIn;