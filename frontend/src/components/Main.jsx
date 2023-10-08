import { StyleSheet, View, Text, Form, TextInput, Pressable, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import ResultScreen from './ResultScreen';


// import theme from '../theme';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Search" component={SearchScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Result" component={ResultScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Main;