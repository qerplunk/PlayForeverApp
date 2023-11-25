import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import Home from './Home';
import MemberPage from './MemberPage';
import Programs from './Programs';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false}/>
      <Stack.Navigator initialRouteName='Home'>

        { /* HOME screen */ }
        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown: false}}
        />

        { /* MEMBER screen */ }
        <Stack.Screen
          name='MemberPage'
          component={MemberPage}
          options={{headerShown: false}}
        />

        { /* PROGRAMS screen */ }
        <Stack.Screen
          name='Programs'
          component={Programs}
          options={{headerShown: false}}
        />

        { /* CONTACT US screen */ }
        <Stack.Screen
          name='ContactUs'
          component={ContactUs}
          options={{headerShown: false}}
        />

        { /* ABOUT US screen */ }
        <Stack.Screen
          name='AboutUs'
          component={AboutUs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
