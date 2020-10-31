import React,{Component} from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import Estilos from '../styles/Estilos'
import {} from './Home'
// import { Container } from './styles';

class Login extends Component{
    state={
    
      email:'',
      password:'',
    }
    login= ()=>{

        
    }
    render(){
      return(
        
        <View style={Estilos.container}>
    
    <TextInput
          style={Estilos.input}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={email=>this.setState({email})}
          autoFocus={true} 
          keyboardType='email-address'
          value={this.state.email}
          
        />
    
        <TextInput
          style={Estilos.input}       
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          //onChangeText={password=>this.setState ({password})}
          autoFocus={false} 
          secureTextEntry={true}
          value={this.state.password}>
    
          /></TextInput>

          <TouchableOpacity onPress={this.login} style={Estilos.btnSubmit}>
      <Text style={Estilos.submitText}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={Estilos.btnRegister}>
      <Text style={Estilos.registerText}>Criar conta gratuita</Text>
    </TouchableOpacity>

        </View>
        
      );
    } 
}
export default Login