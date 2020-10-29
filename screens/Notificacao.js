import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar ,ImageBackground, OpaqueColorValue} from 'react-native';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  const image = { uri: "https://firebasestorage.googleapis.com/v0/b/aplicativo-35650.appspot.com/o/jk%20System.png?alt=media&token=bfdfd638-6a6f-4949-bb90-02b53ddc6bbe" };
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "dark-content" : "light-content" }/>
        <Text style={{color: colors.text}}>Home Screen</Text>
     
        <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>JK System</Text>
    </ImageBackground>
     
     <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Feed")}
      />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: "column",
    backgroundColor:'#000029',
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 250,
    width: 250,
    marginLeft:20,
    marginTop:90
     
  },
});
