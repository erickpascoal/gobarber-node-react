import React from 'react';

import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import LogoImg from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Form } from '@unform/web'


import { Background, Container, Content } from './styles';

const SignUp: React.FC = () => {

    const handleSubimt = (data: Object) => {
        console.log(data);
    }

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

                <a href="">
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </Content>
        </Container>
    );
}

export default SignUp;