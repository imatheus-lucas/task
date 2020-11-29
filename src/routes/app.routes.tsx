import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather'
import AddButton from '../components/AddButton'
import { Modal, Text  } from 'react-native'
import Home from '../screens/Home'
const icons = {
    
  Home: {
    lib: Feather, //nome da lib de icones
    name: "home", //nome do icone
  },
  Calendar:{
    lib:Feather,
    name:"calendar"
  }
};
const Tab = createBottomTabNavigator();
const routes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Add") {
            return <AddButton 
             focused={focused}
            />;
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
     
      tabBarOptions={{
        tabStyle:{
            paddingBottom:5
        },
        style: {
          position:"absolute",
          backgroundColor: "#131418",
          borderTopColor: "rgba(255,255,255,0.2)",
          width:300,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderBottomLeftRadius:25,
          borderBottomRightRadius:25,
          height: 60,
          left:30,
          bottom: 20
        },
         activeTintColor: "#fff",
         inactiveTintColor: "#92929c",
        }}
     >
     
      
      <Tab.Screen
        name="Home"
        options={{ title: "Home" }}
        component={Home}
      />
       <Tab.Screen
        name="Add"
        options={{ title: ""  }}
        component={Home}        
      />
      <Tab.Screen
        name="Calendar"
        options={{ title: "Calendar" }}
        component={Home}
      />
    </Tab.Navigator>
  );
}

export default routes;