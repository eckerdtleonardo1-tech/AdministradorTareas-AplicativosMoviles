import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';




const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>


      <Stack.Navigator>


        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />


        <Stack.Screen
          name="NuevaTarea"
          component={AddTaskScreen}
        />


      </Stack.Navigator>


    </NavigationContainer>
  );
}
