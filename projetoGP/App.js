import { StatusBar } from 'expo-status-bar'; //Importação para fazer alteração em como barra de notificação do celular vai aparecer

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'; //Importação de customização de estilo do app e textos.

export default function App() {
  return (
    <KeyboardAvoidingView style = {styles.background}>
      <View style = {styles.containerLogo}>
        <Image style={styles.img} source = { require('C:/Users/joaov/Documents/React Native/projetoGP/assets/Pixel_Art-removebg-preview.png')}></Image>
      </View>

      <View style = {styles.container}>
        <TextInput style={styles.input} placeholder='Email' autoCorrect={false} onChangeText = {() => {}}></TextInput>
        <TextInput style={styles.input} placeholder='Senha' autoCorrect={false} onChangeText = {() => {}}></TextInput>
        <TouchableOpacity style = {styles.Submit}>
          <Text style = {styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.register}>
          <Text style = {styles.textRegister}>Cadastre-se</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    borderColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  Submit: {
    width: '90%',
    height: 45,
    backgroundColor: '#35aaff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
  },
  register: {
    marginTop: 20,
  },
  textRegister: {
    color: '#fff',
  },
  img: {
    
  }
});
