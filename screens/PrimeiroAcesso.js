import React, { useState } from 'react';
import { Button, StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import { Input } from 'react-native-elements';
import styles from '../style/MainStyle';

export default function PrimeiroAcesso ({navigation}) {

    const [nome, setNome] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [email, setEmail] = useState(null)
    const [confirmarEmail, setConfirmarEmail] = useState(null)
    const [senha, setpassword] = useState(null)

    const CustomButton = ({ title, onPress, style }) => {
        return (
          <TouchableOpacity style={[styles.customButton, style]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
        );
      };

    const entrar = () => {
        navigation.reset({
        index: 0,
        routes: [{name: 'Home'}]
    })
  }

    return (
        
        <View style={styles.container}>

        <View style={styles.inputContainer}>

          <Image
              source={require('../assets/profile.png')}
              style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Input
            placeholder='Digite seu nome'
            inputStyle={styles.emailPlaceholder}
            onChangeText={value => setNome(value)}
            containerStyle={{ flex: 1 }}
          />
          </View>

        
        <View style={styles.inputContainer}>

          <Image
              source={require('../assets/cpf.png')}
              style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Input
            placeholder='Digite seu CPF'
            inputStyle={styles.emailPlaceholder}
            onChangeText={value => setCpf(value)}
            keyboardType='numeric'
            containerStyle={{ flex: 1 }}
          />
          </View>

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
    
          <View style={styles.inputContainer}>
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
    
          <CustomButton
            title="ENTRAR"
            onPress={() => entrar()}
          />

        </View>
      );  

}