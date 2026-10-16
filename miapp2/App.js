/*1. Zona Importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

/*2. Zona Render o main*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={require('./assets/manita.png')}></Image>

        <Text> _________________________ </Text>
        <Saludo></Saludo>
        <Saludo/>

        <Text> _________________________ </Text>
        <Saludo2></Saludo2>
        <Saludo2/>

        <Text> _________________________ </Text>
        <Perfil></Perfil>
        <Perfil/> 
      <StatusBar style="auto" />
    </View>
  );
}
/*3. Zona estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

