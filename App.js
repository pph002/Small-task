import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

// "Log in here" leads to Log in screen(second screen), and "Sign Up" leads to Home screen

//Home screen
function HomeScreen({ navigation }) {

  return (

    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>Welcome to Tryio</Text>

      <View style={styles.createContainer}>
        <Text style={styles.createText}>Create an account</Text>
      </View>

      <View style={styles.logInContainer}>
        <Text style={styles.textToLink}>Already have an account?</Text>
        <Text style={styles.linkToText} onPress={() => navigation.navigate('Go back')}> Log in here</Text>
      </View>

      <View style={styles.orLogInContainer}>
        <View style={styles.lineStyle} />
        <Text style={styles.orLogInText}>Or log in via</Text>
        <View style={styles.lineStyle} />
      </View>

      <View style={styles.facebookContainer}>
        <View style={styles.fBox}>
          <Text style={styles.f}>f</Text>
        </View>
        <Text style={styles.facebookText}>Facebook</Text>
      </View>

      <View style={styles.linkedinContainer}>
        <View style={styles.inBox}>
          <Text style={styles.inText}>in</Text>
        </View>
        <Text style={styles.linkedinText}>Linkedin</Text>
      </View>

    </View>

  );
}

//Log in screen (second screen)
function LogInScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText2}>Welcome to Tryio</Text>
      <View style={styles.userPassContainer}>
        <Icon name="account" size={20} color="#6C6CE5" />
        <Text style={styles.usernameAndPassword}>      Username</Text>
      </View>

      <View style={styles.userPassContainer}>
        <Icon name="lock" size={20} color="#6C6CE5" />

        <Text style={styles.usernameAndPassword}>      Password</Text>
      </View>

      <View style={styles.termsConditionsContainer}>
        <Icon name="check-box-outline" size={15} color="#6C6CE5" underlayColor="#33395180" />
        <Text style={styles.textToLink}>   I read and agree <Text style={styles.linkToText}>Terms & Conditions</Text></Text>
      </View>

      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 2.5, y: 0 }} colors={['#6C6CE5', '#363673']} style={styles.linearGradient}>
        <Text style={styles.signInText}>SIGN IN</Text>
      </LinearGradient>

      <View style={styles.signUpContainer}>
        <Text style={styles.textToSignUp}>Do not have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate('Home')}>Sign Up</Text></Text>
      </View>
    </View>
  );
}



const Stack = createStackNavigator();

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Loading fonts
        await Font.loadAsync({
          'Open Sans Bold': require('./assets/OpenSans-Bold.ttf'),
          'Arial rounded mt bold': require('./assets/arlrdbd.ttf'),
          'Avenir': require('./assets/Avenir-Roman.otf'),
          'Open Sans Semibold': require('./assets/open-sans.semibold.ttf'),
        });
      }
      catch (e) {
        console.warn(e);
      }
      finally {
        setLoadingComplete(true);
      }
    };
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  }
  else {
    return (
      //Navigating between screens. I've hidden the navigation header
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTintColor: '#333951',
              headerStyle: { backgroundColor: '#F7F7FF' },
              headerShown: false,
            }} />
          <Stack.Screen
            name="Go back"
            component={LogInScreen}
            options={{
              headerTintColor: '#333951',
              headerStyle: { backgroundColor: '#F7F7FF' },
              headerShown: false,
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F7F7FF',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Open Sans Bold',
    color: '#333951',
    marginBottom: 35,
    marginTop: 104,
    lineHeight: 38,
  },

  createContainer: {
    backgroundColor: '#5959BE',
    borderRadius: 8,
    height: 40,
    width: 274,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },

  createText: {
    fontSize: 15,
    color: '#FEFEFE',
    fontWeight: 'bold',
    lineHeight: 17,
    fontFamily: 'Arial rounded mt bold',
  },
  logInContainer: {
    marginBottom: 16,
    flexDirection: 'row',
  },
  textToLink: {
    color: '#33395180',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 14,
    fontFamily: 'Open Sans Semibold',
  },
  linkToText: {
    color: '#6C6CE5',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 14,
    fontFamily: 'Open Sans Semibold',
  },
  orLogInContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    width: 274,
  },
  orLogInText: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontSize: 11,
    color: '#313349',
    fontWeight: 'bold',
    lineHeight: 15,
    fontFamily: 'Open Sans Semibold',
  },
  lineStyle: {
    alignSelf: 'center',
    backgroundColor: '#707070',
    height: 0.8,
    flex: 1,
  },
  facebookContainer: {
    backgroundColor: '#4064B4',
    borderRadius: 8,
    height: 40,
    width: 274,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 9,
    paddingLeft: 70,

  },
  facebookText: {
    color: '#F7F7F7',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 29,
    lineHeight: 22,
    fontFamily: 'Avenir',
  },
  f: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    color: '#4064B4',
    lineHeight: 28,
    height: 24,
    marginLeft: 10,
  },

  fBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    height: 21,
    width: 23,
  },

  linkedinContainer: {
    backgroundColor: '#0277B5',
    borderRadius: 8,
    height: 40,
    width: 274,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 9,
    paddingLeft: 70,
  },

  linkedinText: {
    color: '#F7F7F7',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 29,
    marginRight: 9,
    lineHeight: 22,
    fontFamily: 'Avenir',
  },

  inText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0277B5',
  },

  inBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    height: 21,
    width: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeText2: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 27,
    fontFamily: 'Open Sans Bold',
    color: '#333951',
    marginBottom: 25,
    marginTop: 128,
  },
  userPassContainer: {
    width: 277,
    height: 41,
    backgroundColor: '#FFFFFF',
    borderColor: '#5656B7',
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 12,
  },
  usernameAndPassword: {
    color: '#33395180',
    fontSize: 11,
    fontWeight: 'bold',
    lineHeight: 15,
    fontFamily: 'Open Sans Semibold'
  },
  termsConditionsContainer: {
    flexDirection: 'row',
    marginVertical: 9,
    marginRight: 20,
  },

  linearGradient: {
    borderRadius: 9,
    width: 117,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 0.2,
    lineHeight: 14,
    fontFamily: 'Open Sans Semibold',
  },

  signUpContainer: {
    marginVertical: 12,
  },

  textToSignUp: {
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 13,
    color: '#33395180',
    fontFamily: 'Open Sans Semibold',
  },

  signUpLink: {
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 13,
    color: '#6C6CE5',
    fontFamily: 'Open Sans Semibold',
  },

});



