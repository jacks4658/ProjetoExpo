import * as React from 'react';
import { View, Text, Button,TouchableOpacity,StatusBar,ImageBackground,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {FontAwesome5}from   '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { color } from 'react-native-reanimated';




function Feed({ navigation }) {
  return (

   
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end',backgroundColor:'#262D35' }}>
      
      <StatusBar  
                    backgroundColor = "#FF6146"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  


       <SafeAreaView style={{flex:1}}>
       <TouchableOpacity style={{alignItems:'flex-end',margin:24}}  >

      <FontAwesome5 name="bars" size={30} color='#F39A4A' onPress={() => navigation.openDrawer()} />
    
      </TouchableOpacity>
    
      </SafeAreaView>
    </View>
   
  );

  
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    
    <DrawerContentScrollView style={{backgroundColor:'white'}} {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer" style={{fonteSize:50}}
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen  name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

