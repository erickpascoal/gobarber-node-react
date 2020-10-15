
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#312E38" />
            <Routes />
        </NavigationContainer>
    );
}

export default App; 