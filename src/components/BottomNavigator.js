import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function SearchScreen() {
  Alert.alert('Search Screen', 'Welcome to Search Screen!', [
    {
      text: 'OK',
      onPress: () => console.log(' Search Screen OK Pressed'),
    },
  ]);
  return null;
}

function CallScreen() {
  Alert.alert('Call Screen', 'Welcome to Call Screen!', [
    {
      text: 'OK',
      onPress: () => console.log(' Call Screen OK Pressed'),
    },
  ]);
  return null;
}

function NotificationScreen() {
  Alert.alert('Notification Screen', 'Welcome to Notification Screen!', [
    {
      text: 'OK',
      onPress: () => console.log(' Notification Screen OK Pressed'),
    },
  ]);
  return null;
}

function AccountScreen() {
  Alert.alert('Account Screen', 'Welcome to Account Screen!', [
    {
      text: 'OK',
      onPress: () => console.log(' Account Screen OK Pressed'),
    },
  ]);
  return null;
}

function TabRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#8f5e99',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name={'home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name={'search'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Call"
        component={CallScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'phone'}
              color={'white'}
              size={25}
              style={styles.callIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name={'bell'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name={'user'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function BottomNavigator() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#8f5e99',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    paddingLeft: 15,
    paddingTop: 13,
  },
});
