import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from './assets/logo.png'
export default function App() {
  return (
    <View style={styles.Login}>
      <View style={styles.Logo}>
        <Image source={logo} style={styles.logoimage} ></Image>
      </View>
      <View style={styles.feild}>
        <TextInput style={styles.text1} placeholder="Enter your Email"></TextInput>
        <TextInput style={styles.text2} secureTextEntry={true} placeholder="Enter your Password"></TextInput>
        
      <TouchableOpacity><Text style={styles.forget}>Forget Password?</Text></TouchableOpacity>
        </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.loginbutton}> 
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupbutton}> 
          <Text style={styles.buttontext}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    backgroundColor: 'green',

  },
  Logo: {
    flex: 0.3,
    backgroundColor: 'black',

  },
  feild: {
    flex: 0.4,
    backgroundColor: 'black',

  },
  button: {
    flex: 0.3,
    backgroundColor: 'black',

  },
  logoimage: {
    width: 130,
    height: 130,
    marginTop: 80,
    marginLeft: 130,
  },
  text1: {
    width: 300,
    height: 40,
    margin: 12,
    backgroundColor: "#fff",
    marginLeft: 50,
    marginTop: 100,
    paddingLeft: 10,
    borderRadius:5
  },
  text2: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    marginLeft: 50,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius:5
  },
  loginbutton: {
    width: 150,
    height:40,
    marginLeft: 120,
    marginTop: 0,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:5
  },
  buttontext:{
    fontWeight:'bold',
    color:'#fff',
    fontSize:18,
  },
  signupbutton: {
    width: 150,
    height:40,
    marginLeft: 120,
    marginTop: 20,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:5
  },
  forget:{
    color: '#fff',
    marginLeft:235,
    marginTop:10,
  }
 
});
