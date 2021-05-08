import AsyncStorage from '@react-native-async-storage/async-storage';
import React ,{ useState }from 'react';
import { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

 export default  SignInScreen = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [token, setToken] = useState(null);

  const onSubmit = async() => {
    try{
      await AsyncStorage.setItem('token', username)
      console.log('connexion bonne')
        navigation.navigate('Home')
    } catch(e){
      console.log('faux')

    }
  }

  const tokenlogin = async() => {
    try {
      const value = await AsyncStorage.getItem('token')
      if (value !== null) {
        navigation.navigate('Home')
        console.log('Tu es connecté',value)
    }
    return(value)
    } catch (error) {
      console.log('Tu dois te connecter')
    }

  }
  tokenlogin()

  useEffect(() =>{
    tokenlogin().then((res) =>{
     setUsername(res)
    }).catch(err => console.log(err))
 }, []);



  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Username"
        style={styles.input}
        onChangeText={(value) => setUsername(value)}
      />
      <TouchableOpacity
       onPress={onSubmit}
        style={{ ...styles.input, backgroundColor: 'skyblue', borderWidth: 0 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Se connecter</Text>
      </TouchableOpacity>
      <Text>username : {username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 8,
    marginVertical: 3,
    // marginHorizontal: 10,
    width: '95%',
  },
});



