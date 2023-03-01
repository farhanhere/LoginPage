import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import{styles} from "./cssStyle";
import logo from './assets/logo.png';
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
