import React from 'react';
import {Text} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import {HomeScreen} from './Screens/Home';
import {CategoryScreen} from './Screens/Category';
import {AccountScreen} from './Screens/Profile';
import {CartScreen} from './Screens/Cart';

const Tab = createBottomTabNavigator();
export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}): BottomTabNavigationOptions => ({
        tabBarIcon: ({color}): React.ReactElement => {
          if (route.name === 'Home') {
            return (
              <Text>H</Text>
            );
          } else if (route.name === 'Category') {
            return (
              <Text>C</Text>
            );
          } else if (route.name === 'Cart') {
            return (
              <Text>CA</Text>
            );
          } else {
            return (
              <Text>A</Text>
            );
          }
        },
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarInactiveTintColor: '#333',
        tabBarActiveTintColor: '#2b7f68',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};
