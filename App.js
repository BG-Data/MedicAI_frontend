import React, { useState } from 'react';
import { Button, StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import { Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style/MainStyle';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import PrimeiroAcesso from './screens/PrimeiroAcesso';
import ResetSenha from './screens/ResetSenha';

const Stack = createNativeStackNavigator();

function MyStack() {

  const commonHeaderStyle = {
    headerStyle: {
      backgroundColor: '#069E6E',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitleVisible: false,
  };

  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
        options={commonHeaderStyle}/>
        <Stack.Screen name="PrimeiroAcesso" component={PrimeiroAcesso} 
          options={{...commonHeaderStyle,  title: 'Primeiro Acesso',}}/>
        <Stack.Screen name="ResetSenha" component={ResetSenha}
          options={{...commonHeaderStyle,  title: 'Recuperar senha',}}/>
        <Stack.Screen name="Home" component={Home}
        options={commonHeaderStyle}/>
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}