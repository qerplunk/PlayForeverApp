import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, LogBox } from 'react-native';

import Home from './screens/Home';
import MemberPage from './screens/MemberPage';
import Programs from './screens/Programs';
import ContactUs from './screens/ContactUs';
import AboutUs from './screens/AboutUs';

const Stack = createStackNavigator();

// To ignore navigation animation warning
// https://github.com/react-navigation/react-navigation/issues/7839
LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);

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
