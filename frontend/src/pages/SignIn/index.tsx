import { Form } from '@unform/web';
import React, { useCallback } from 'react';

import { FiLogIn } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../context/AuthContext';

import { Background, Container, Content } from './styles';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {

    const { signIn } = useAuth();

    const handleSignIn = useCallback(async (data: SignInFormData) => {

        signIn({ email: data.email, password: data.password });

    }, [signIn]);


    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="GoBarber" />

                <Form onSubmit={handleSignIn}>
                    <h1>Faça seu logon</h1>

                    <Input name="email" icon={FiMail} placeholder="E-mail" type="text" />
                    <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

                    <Button type="submit">Entrar</Button>

                    <a href="">Esqueci minha senha</a>
                </Form>

                <Link to="/signup">
                    <FiLogIn />
                    Criar conta
                </Link>
            </Content>

            <Background />
        </Container>
    );
}

export default SignIn;