import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './src/Pages/Home/home-screen';
import SplashScreen from './src/Pages/Splash/splash-screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash Screen' screenOptions={{headerShown: false}}> 
        <Stack.Screen name='Splash Screen' component={SplashScreen} />
        <Stack.Screen name='Home Screen' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;