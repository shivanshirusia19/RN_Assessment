import React from 'react';
import {Alert, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';

function SearchScreen() {
  Alert.alert('Search Screen', 'Welcome to Search Screen!', [
    {
      text: 'OK',
      onPress: () => console.log('Search Screen OK Pressed'),
    },
  ]);
  return null;
}

function MoreScreen() {
  Alert.alert('More Screen', 'Welcome to More Screen!', [
    {
      text: 'OK',
      onPress: () => console.log('More Screen OK Pressed'),
    },
  ]);
  return null;
}

const Tab = createBottomTabNavigator();

export default function BottomNavig() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        //initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'white',
          labelStyle: {fontSize: 12},
          style: {
            backgroundColor: 'black',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={focused ? styles.activeIcon : styles.icon}
                  source={require('../../assets/homeIcon1.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={focused ? styles.activeIcon : styles.icon}
                  source={require('../../assets/searchIcon1.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={focused ? styles.activeIcon : styles.icon}
                  source={require('../../assets/moreIcon.png')}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
  activeIcon: {
    height: 30,
    width: 30,
    tintColor: 'green',
  },
});
