import React, { useCallback } from 'react';

import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import LogoImg from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Form } from '@unform/web'


import { Background, Container, Content } from './styles';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

interface SignInFormData {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {

    const { signUp } = useAuth();

    const handleSubimt = useCallback(async (data: SignInFormData) => {
        console.log(data);
        const response: any = await signUp({
            name: data.name,
            email: data.email,
            password: data.password
        });

        console.log(response.data);

    }, [signUp]);

    return (
        <Container>
            <Background />

            <Content>
                <img src={LogoImg} alt="GoBarber" />

                <Form onSubmit={handleSubimt}>
                    <h1>Faça seu cadastro</h1>

                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input name="password" icon={FiLock} placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>
                </Form>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para logon
                </Link>
            </Content>
        </Container>
    );
}

export default SignUp;