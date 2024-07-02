import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import CartScreen from './components/CartScreen';
import { enableScreens } from 'react-native-screens';
import { Ionicons } from '@expo/vector-icons';


enableScreens();

const Tabs = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
            />


            <Tabs.Screen name="Cart" component={CartScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cart" size={size} color={color} />
                ),
              }}
            />
          </Tabs.Navigator>
        </NavigationContainer>
    );
}