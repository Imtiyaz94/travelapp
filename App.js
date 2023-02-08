import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, Discover } from './screens/index.js';
import { StatusBar } from 'expo-status-bar';

// YouTube video url of this project
// https://www.youtube.com/watch?v=JqPezeQiwxk

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Discover' component={Discover} />
        </Stack.Navigator>
        {/* <StatusBar style='auto' /> */}
      </NavigationContainer>
    </TailwindProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
