import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
import FavoriteListScreen from './src/screen/FavoriteListScreen'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import CategorieScreen from './src/screen/CategorieScreen'

const Stack = createStackNavigator();

function HomeScreenStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} /> 
    </Stack.Navigator>
  );
}

function FavoriteListScreenStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="FavoriteList" component={FavoriteListScreen} />
      <Stack.Screen name="DetailsFav" component={DetailScreen} /> 
    </Stack.Navigator>
  );
}

function CategorieScreenStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Categorie" component={CategorieScreen} />
      <Stack.Screen name="DetailsCategorie" component={DetailScreen} /> 
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
               
            } else if (route.name === 'FavoriteList') {
              iconName = focused 
                ? 'ios-heart' 
                : 'ios-heart-outline';
            } else if (route.name === 'Categorie') {
              iconName = focused 
                ? 'ios-layers' 
                : 'ios-layers-outline';
            }

            return <Ionicons name={iconName} size={27} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: '#000100',
          inactiveTintColor: '#000100',
          showLabel: false,
          keyboardHidesTabBar: true,
          style: {
            height: 50
          }
          
        }}
      >
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Categorie" component={CategorieScreenStack} />
        <Tab.Screen name="FavoriteList" component={FavoriteListScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
