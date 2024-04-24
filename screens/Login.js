import React, { useState } from 'react';
import { Button, StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import { Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../style/MainStyle';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setpassword] = useState(null)

  // Defina o componente CustomButton
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
          style={{ width: 20, height: 20, marginRight: 10 }} // Defina o tamanho do ícone e a margem direita conforme necessário
      />

      <Input
        placeholder='Digite seu e-mail'
        inputStyle={styles.emailPlaceholder}
        onChangeText={value => setEmail(value)}
        keyboardType='email-address' //tipo de caixa
        containerStyle={{ flex: 1 }}
      />
      </View>

      <View style={styles.inputContainer1}>
      <Image
          source={require('../assets/password.png')}
          style={{ width: 20, height: 20, marginRight: 10 }} // Defina o tamanho do ícone e a margem direita conforme necessário
      />
      <Input
        placeholder='Digite sua senha'
        inputStyle={styles.emailPlaceholder}

        onChangeText={value => setpassword(value)}
        secureTextEntry // Isso oculta o texto digitado para a senha
      />
     </View>

      <CustomButton
        title="ENTRAR"
        onPress={() => entrar()}
        
      />
      
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