import React, { useState } from 'react';
import { Button, TextInput, View, Image, TouchableOpacity, Text, Alert, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';
import styles from '../style/MainStyle';
import UsuarioService from '../services/UsuarioService';

export default function PrimeiroAcesso ({navigation}) {

    const [name, setName] = useState(null)
    const [document, setDocument] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setpassword] = useState(null)
    const [isSelected, setSelected] = useState(false)
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
          data_protection_terms: isSelected,
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
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
   <KeyboardAvoidingView behavior="padding" style={styles.container}>
   <ScrollView>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.CampoIcon}
        />
        <TextInput
        placeholder='Digite seu nome'
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
          source={require('../assets/documento-pessoal.png')}
          style={styles.CampoIcon}
        />
        <TextInput
          placeholder='Digite seu documento'
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
          style={styles.CampoIcon}
        />
        <TextInput
          placeholder='Qual tipo de documento digitado?'
          onChangeText={value => {
            setDocumentType(value)
          }}
          containerStyle={{ flex: 1 }}
          returnKeyType='done'
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/data-nascimento.png')}
          style={styles.CampoIcon}
        />
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'YYYY-MM-DD'
          }}
          placeholder='Digite sua data de nascimento'
          value={birthdate} // Use o valor de birthdate para exibir o texto digitado
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
          style={styles.CampoIcon}
        />
        <TextInput
          placeholder='Digite seu e-mail'
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
          style={styles.CampoIcon}
        />
        <TextInput
          placeholder='Digite sua senha'
          onChangeText={value => setpassword(value)}
          secureTextEntry
          returnKeyType='done'
          errorMessage = {errorSenha}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/cpf.png')}
          style={styles.CampoIcon}
        />
        <TextInput
          placeholder='Você é medico ou cliente?'
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
        onPress={() => setSelected(!isSelected)}
      />

      <CustomButton
        title="Salvar"
        onPress={() => salvar()}
      />

    </View>
   </ScrollView>
   </KeyboardAvoidingView>
 </TouchableWithoutFeedback>
  );  
}