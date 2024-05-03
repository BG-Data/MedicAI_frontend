import React, { useState } from 'react';
import { Button, TextInput, View, Image, TouchableOpacity, Text, Alert, ActivityIndicator, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../style/MainStyle';
import AuthService from '../services/AuthService';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setpassword] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const handleLogin = () => {
    
    let data ={
      username: email,
      password: password
    }
    
    setLoading(true)
    
    AuthService.login(data)
    .then((response) => {
      setLoading(false)
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      })
    })
    .catch((error)=> {
      setLoading(false)
      Alert.alert('Opa, tivemos um erro')
    })
  }
  
  return (
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null} >

      <View style={styles.header}>
        <Text style={styles.headerText}> Bem vindo ao MedicAI, {'\n'} seu facilitador na medicina.</Text>
      </View>
      
       <Image
         source={require('../assets/doctorai.png')}
         style={{ width: 200, height: 200}}
        />

      <View style={styles.inputContainer}>
       <Image
          source={require('../assets/email.png')}
          style={styles.CampoIcon}
       />
       <TextInput
          placeholder='Digite seu e-mail'
          onChangeText={value => setEmail(value)}
          keyboardType='email-address'
          containerStyle={{ flex: 1 }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/password.png')}
          style={styles.CampoIcon}
        />
        <TextInput
          placeholder='Digite sua senha'
          onChangeText={value => setpassword(value)}
          containerStyle={{ flex: 1 }}
          secureTextEntry
        />
      </View>

     { isLoading &&
       <ActivityIndicator/>
     }

     { !isLoading &&
     <TouchableOpacity
        style={styles.customButton}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      }
      
      <View style={{ marginTop: 10 }}>
        <Text style={styles.linkText}>
          Ainda não tem uma conta?{' '}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('PrimeiroAcesso')}
          >
            Clique aqui
          </Text>
        </Text>

        <Text style={styles.linkText} onPress={() => navigation.navigate('ResetSenha')}>
          Esqueci minha senha
        </Text>
      </View>
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
  );
}