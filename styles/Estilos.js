import React from 'react';
import { View ,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#494D70'
    },
    logo:{
    
    },
    container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 180,
    borderRadius: 5,
    paddingBottom: 50,
    },
    input:{
    backgroundColor: '#FFF',
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    width: '90%',
    marginBottom: 15,
    padding: 10,
    },
    btnSubmit:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6146',
    height: 45,
    width: '90%',
    borderRadius: 7,
    marginTop: 10,
    },
    submitText:{
    color: '#FFF',
    fontSize: 18,
    },
    btnRegister:{
    marginTop: 10,
    },
    registerText:{
    color: '#FFF',
    },
    texto:{
fontSize:40,
color:'white',
justifyContent:'center',
marginLeft:20

    }
    }); 

export default styles