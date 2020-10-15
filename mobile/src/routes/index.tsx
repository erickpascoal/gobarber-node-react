import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <AuthStack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#312E38' }
        }}>
            <AuthStack.Screen name="SignIn" component={SignIn} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>

    );
}

export default Routes;