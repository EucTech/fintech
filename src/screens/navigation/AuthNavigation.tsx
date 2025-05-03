import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../auth/SplashScreen';
import WelcomeScreen from '../auth/WelcomeScreen';
import LoginScreens from '../auth/LoginScreens';
import RegisterScreen from '../auth/RegisterScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        animation: true,
        gesture: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreens} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigation