import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView, Keyboard } from 'react-native';
import { Container, Title, CreateAcountButton, CreateAcountButtonText } from './styles';
import logoImage from '../../assets/images/logo.png'
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';

const SignIn: React.FC = () => {

    const [isKeyboardOpen, setIsKeyboadOpen] = useState(false);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", () => { setIsKeyboadOpen(true) });
        Keyboard.addListener("keyboardDidHide", () => { setIsKeyboadOpen(false) });

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", () => { setIsKeyboadOpen(true) });
            Keyboard.removeListener("keyboardDidHide", () => { setIsKeyboadOpen(false) });
        };
    }, []);

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <Container>
                    <Image source={logoImage} />

                    <View>
                        <Title>Faça seu logon</Title>
                    </View>

                    <Input name="email" icon="mail" placeholder="E-mail" />
                    <Input name="password" icon="lock" placeholder="Senha" />

                    <Button onPress={() => { console.log('deu') }}>Entrar</Button>

                    <CreateAcountButton isKeyboardOpen={isKeyboardOpen} >
                        <Icon name="log-in" size={20} color="#ff9000" />
                        <CreateAcountButtonText>
                            Criar uma conta
                 </CreateAcountButtonText>
                    </CreateAcountButton>

                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default SignIn;