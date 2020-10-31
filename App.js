
import React, { useState ,useEffect ,Component} from 'react';
import { KeyboardAvoidingView, Text, 
  TextInput, Platform, Keyboard, 
Animated, StyleSheet, TouchableOpacity,
 View,StatusBar} from 'react-native';
import Estilos from './styles/Estilos'
import Login, {} from './screens/Login'

export default function App() {

 

const [offset, setOffset] =  useState(new Animated.ValueXY({x: 0, y: 80}));
const [opacity, setOpacity] =  useState(new Animated.Value(0));
const [logo, setLogo] =  useState(new Animated.ValueXY({x: 220, y: 220}));




useEffect(() => {
keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);  
Animated.parallel([
Animated.spring(offset.y, {
 
  toValue: 0,
  speed: 5,
  bounciness: 15,
  useNativeDriver : true ,
}),
Animated.timing(opacity, {
  toValue: 1,
  duration: 300,
  useNativeDriver : true ,

})
]).start();

}, []);


//Teclado Aberto
function keyboardDidShow () {
Animated.parallel([
  Animated.timing(logo.y, {
    toValue: (Platform.OS === 'android' ? 70 : 90),
    duration: 100,
   useNativeDriver : false,
  }),
  Animated.timing(logo.x, {
    toValue: (Platform.OS === 'android' ? 70 : 90),
    duration: 100,
    useNativeDriver : false, 
    
    
  }),
  
]).start();
}

//Teclado Fechou
function keyboardDidHide () {
Animated.parallel([
  Animated.timing(logo.y, {
    toValue: 220,
    duration: 150,
    useNativeDriver : false ,
  }),
  Animated.timing(logo.x, {
    toValue: 220,
    duration: 150,
    useNativeDriver : false,
    
  }),
]).start();
}

return (
<KeyboardAvoidingView  style={Estilos.background} behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
 
 <View style={{flex:1, justifyContent: 'center'}}>
  <Animated.Image 
  style={[
    Estilos.logo,
    {
      width: logo.x,
      height: logo.y  
    }
    
    
    ]} 
    source={{
      uri:
        'https://firebasestorage.googleapis.com/v0/b/aplicativo-35650.appspot.com/o/jk%20System_DobleColor.png?alt=media&token=99702801-aceb-4737-98ea-cc6b04e9e0e1',
    
    
      }}
 
 />

 <Text style={Estilos.texto}>Jk System</Text> 
   
 < StatusBar  
backgroundColor="#FF6146"  
barStyle="light-content"   
oculto={ true }    
translúcido={ false }  
/> 
 </View>

  <Animated.View 
  style={[
     Estilos.container,
    {
      opacity: opacity,
      transform: [
        { translateY: offset.y}
      ],
    },
    ]}
  
  //AQUI VAI O COMPONENTE DE LOGIN
  >
 <Login/>
    
  </Animated.View>
 
</KeyboardAvoidingView>
);
}




