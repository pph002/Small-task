import * as React from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import LogInScreen from './LogInScreen';
import SignedInScreen from './SignedInScreen';

// "Log in here" leads to Log in screen(second screen), and "Sign Up" leads to Home screen

const Stack = createStackNavigator();

function CreateHomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTintColor: '#333951',
          headerStyle: { backgroundColor: '#F7F7FF' },
          headerShown: false,
        }} />
      <Stack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{
          headerTintColor: '#333951',
          headerStyle: { backgroundColor: '#F7F7FF' },
          headerShown: false,
        }} />
      <Stack.Screen
        name="SignedInScreen"
        component={SignedInScreen}
        options={{
          headerTintColor: '#333951',
          headerStyle: { backgroundColor: '#F7F7FF' },
          headerShown: false,
        }} />

    </Stack.Navigator>

  );
}



export default function App() {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Loading fonts
        await Font.loadAsync({
          'Open Sans Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
          'Open Sans Semibold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
          'Open Sans Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
          'Avenir Heavy': require('./assets/fonts/Avenir-Heavy.ttf'),
          'Avenir Black': require('./assets/fonts/Avenir-Black.ttf'),
          'Arial Rounded MT Bold': require('./assets/fonts/arlrdbd.ttf'),
          'Helvetica': require('./assets/fonts/Helvetica.ttf'),
        });
      }
      catch (e) {
        console.warn(e);
      }
      finally {
        setLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  }
  else {
    return (
      <NavigationContainer>
        <CreateHomeStack />
      </NavigationContainer>
    );

  }


}



