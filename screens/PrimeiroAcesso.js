import React, { useState } from 'react';
import { Button, StyleSheet, View, Image, TouchableOpacity, Text, Alert, ScrollView} from 'react-native';
import { CheckBox, Input } from 'react-native-elements';
import {TextInputMask} from 'react-native-mask-input';
import styles from '../style/MainStyle';
import UsuarioService from '../services/UsuarioService';

export default function PrimeiroAcesso ({navigation}) {

    const [name, setName] = useState(null)
    const [document, setDocument] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setpassword] = useState(null)
    const [isSelected, setSelected] = useState(false)
    const [isSelected2, setSelected2] = useState(false)
    const [birthdate, setBirthdate] = useState(null)
    const [errorSenha, setErrorSenha] = useState (null)
    const [errorEmail, setErrorEmail] = useState (null)
    const [errorDocument, setErrorDocument] = useState (null)
    const [errorName, setErrorName] = useState (null)
    const [loading, setLoading] = useState(false)
    const [documentType, setDocumentType] = useState(null)
    const [userType, setUserType] = useState(null)

    const validar = () => {
      let error = false
      setErrorEmail (null)
      setErrorDocument (null)
      setErrorName (null)

      if (email == null) {
        setErrorEmail ("Preencha seu e-mail corretamente")
        error = true
      }
      if (document == null) {
        setErrorDocument ("Preencha seu CPF")
        error = true
      }

      if (name == null) {
        setErrorName ("Preencha com seu nome")
        error = true
      }

      return !error
    }

    const CustomButton = ({ title, onPress, style }) => {
      return (
        <TouchableOpacity style={[styles.customButton, style]} onPress={() => {onPress(); setLoading(!loading);}}>
        <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );
    };

    const salvar = () => {
      if (validar ()) {
        setLoading(true)

        let data = {
          email: email,
          name: name,
          password: password,
          birthdate: birthdate,
          document: document,
          document_type: documentType,
          user_type: userType,
          privacy_terms: isSelected,
          data_protection_terms: isSelected2,
         }

        UsuarioService.cadastrar(data)
        .then((response) => {
          setLoading(false)
          Alert.alert("Sucesso!", "Usuário cadastrado com sucesso") //posso deixar a mensagem a partir da API tbm
        })
        .catch((error) => {
          setLoading(false)
          Alert.alert("Erro!", "Houve um erro inesperado")
        })
      }
    }

  return (
   <ScrollView>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/profile.png')}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Input
        placeholder='Digite seu nome'
        inputStyle={styles.emailPlaceholder}
        onChangeText={value => {
          setName(value)
          setErrorName(null)
          }}
        containerStyle={{ flex: 1 }}
        errorMessage = {errorName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/cpf.png')}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Input
          placeholder='Digite seu documento'
          inputStyle={styles.emailPlaceholder}
          onChangeText={value => {
            setDocument(value)
            setErrorDocument (null)
          }}
          keyboardType='numeric'
          containerStyle={{ flex: 1 }}
          returnKeyType='done'
          errorMessage = {errorDocument}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/cpf.png')}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Input
          placeholder='Qual tipo de documento digitado?'
          inputStyle={styles.emailPlaceholder}
          onChangeText={value => {
            setDocumentType(value)
          }}
          containerStyle={{ flex: 1 }}
          returnKeyType='done'
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/cpf.png')}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Input
          placeholder='Digite sua data de nascimento'
          inputStyle={styles.emailPlaceholder}
          onChangeText={value => {
            setBirthdate(value)
          }}
          keyboardType='numeric'
          containerStyle={{ flex: 1 }}
          returnKeyType='done'
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
          onChangeText={value => {
            setEmail(value)
            setErrorEmail(null)
          }}
          keyboardType='email-address'
          containerStyle={{ flex: 1 }}
          errorMessage = {errorEmail}
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
          returnKeyType='done'
          errorMessage = {errorSenha}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/cpf.png')}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Input
          placeholder='Você é medico ou cliente?'
          inputStyle={styles.emailPlaceholder}
          onChangeText={value => {
            setUserType(value)
          }}
          containerStyle={{ flex: 1 }}
          returnKeyType='done'
        />
      </View>
    
      <CheckBox
        title = "Eu aceito os termos de uso"
        checkedIcon = "check"
        uncheckedIcon="square-o"
        checkedColor='#069E6E'
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}
      />

      <CheckBox
        title = "Concordo com os termos da Politica de Privacitade"
        checkedIcon = "check"
        uncheckedIcon="square-o"
        checkedColor='#069E6E'
        checked={isSelected}
        onPress={() => setSelected(!isSelected2)}
      />

      <CustomButton
        title="Salvar"
        onPress={() => salvar()}
      />

    </View>
   </ScrollView>
  );  
}