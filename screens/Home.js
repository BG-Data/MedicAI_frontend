import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from "react-native-elements";
import styles from '../style/MainStyle';

export default function Home() {
  
  const handleButtonPress = (buttonChat) => {
    console.log(`Botão "${buttonChat}" pressionado.`);
  };

  const navigation = useNavigation();

  const navigateToHistorico = () => {
    navigation.navigate('Historico');
  };

  const navigateToChat = () => {
    navigation.navigate('Chat');
  };

  const navigateToFavoritos = () => {
    navigation.navigate('Favoritos');
  };

  const navigateToAssuntos = () => {
    navigation.navigate('Assuntos');
  };

  return (

    <ScrollView>
     
    <View style={styles.containerhome}>
      <View style={styles.column}>

        <Text style={styles.headerText}> Oi Medico</Text>

        <TouchableOpacity onPress={navigateToChat}>
          <Card containerStyle={styles.cardContainer} wrapperStyle={styles.cardWrapper}> 
            <Card.Title>CHAT</Card.Title>
            <Image
              source={require('../assets/chat-robo.png')}
              style={{width:"100%",height:100}}
              resizeMode="contain"
            />
            <Text > Você pode me perguntar o que quiser. {'\n'} Guardar nossas interações por assuntos e mais... </Text>
          </Card>
        </TouchableOpacity>

     <View style={styles.row}>

        <TouchableOpacity onPress={navigateToAssuntos}>
            <Card containerStyle={styles.cardContainer } wrapperStyle={styles.cardWrapper}> 
            <Card.Title>ASSUNTOS</Card.Title>
            <Image
                source={require('../assets/assuntos.png')}
                style={{width:"100%",height:100}}
                resizeMode="contain"
            />
            <Text > Confira sua lista de assuntos {'\n'} e temas cadastrados. </Text>
            </Card>
          </TouchableOpacity>
          
        <TouchableOpacity onPress={navigateToFavoritos}>
            <Card containerStyle={styles.cardContainer} wrapperStyle={styles.cardWrapper}> 
              <Card.Title>FAVORITOS</Card.Title>
              <Image
                source={require('../assets/favoritos.png')}
                style={{width:"100%",height:100}}
                resizeMode="contain"
            />
              <Text > Você pode favoritar seus temas {'\n'} mais pesquisados ou de interesse.</Text>
            </Card>
          </TouchableOpacity>
          
    </View>

      <TouchableOpacity onPress={navigateToHistorico}>
        <Card containerStyle={styles.cardContainer} wrapperStyle={styles.cardWrapper}> 
          <Card.Title>HISTÓRICO</Card.Title>
          <Image
            source={require('../assets/arquivo-icon.png')}
            style={{width:"100%",height:100}}
            resizeMode="contain"
          />
          <Text > Tenha acesso a todas nossas conversas  {'\n'} em um só lugar.</Text>
        </Card>
      </TouchableOpacity>

    </View>
    </View>
    </ScrollView>

  );
}
