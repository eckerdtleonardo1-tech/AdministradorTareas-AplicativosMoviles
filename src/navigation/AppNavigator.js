import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';


const Stack = createNativeStackNavigator();


export default function AppNavigator() {


 return (
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
 );
}
