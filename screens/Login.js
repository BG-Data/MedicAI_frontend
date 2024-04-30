import React, { useState } from 'react';
import { Button, StyleSheet, View, Image, TouchableOpacity, Text, Alert, ActivityIndicator} from 'react-native';
import { Input } from 'react-native-elements';
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
      Alert.alert('Erroooo aaaaah')
    })
  }
  
  return (
    <View style={styles.container}>

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
          style={{ width: 20, height: 20, marginRight: 10 }}
      />

      <Input
        placeholder='Digite seu e-mail'
        inputStyle={styles.emailPlaceholder}
        onChangeText={value => setEmail(value)}
        keyboardType='email-address'
        containerStyle={{ flex: 1 }}
      />
      </View>

      <View style={styles.inputContainer1}>
      <Image
          source={require('../assets/password.png')}
          style={{ width: 20, height: 20, marginRight: 10 }}
      />
      <Input
        placeholder='Digite sua senha'
        inputStyle={styles.emailPlaceholder}

        onChangeText={value => setpassword(value)}
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
    </View>
  );
}