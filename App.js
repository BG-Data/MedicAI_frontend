import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Login from './screens/Login';
import Home from './screens/Home';
import PrimeiroAcesso from './screens/PrimeiroAcesso';
import ResetSenha from './screens/ResetSenha';
import Chat from './screens/Chat';
import Historico from './screens/Historico';
import Perfil from './screens/Perfil';
import Assuntos from './screens/Assuntos';
import Favoritos from './screens/Favoritos';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = 'chat-outline';
          } else if (route.name === 'Historico') {
            iconName = 'history';
          } else if (route.name === 'Perfil') {
            iconName = 'account-outline';
          }

          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#069E6E',
        inactiveTintColor: '#545454',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Historico" component={Historico} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

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
        <Stack.Screen name="Home" component={HomeTabs}
        options={{ headerShown: false }}/>

        <Stack.Screen name="Favoritos" component={Favoritos}
          options={{...commonHeaderStyle,  title: 'Seus favoritos',}}/>

        <Stack.Screen name="Assuntos" component={Assuntos}
          options={{...commonHeaderStyle,  title: 'Seus assuntos',}}/>

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
