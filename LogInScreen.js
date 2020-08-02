import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
//import * as Font from 'expo-font';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import HomeScreen from './HomeScreen';

import SignedInScreen from './SignedInScreen';

class LogInScreen extends Component {
    render() {

        return (
            <View style={styles.backgroundContainer1}>
                <View style={styles.mainContainer1}>
                    <Text style={styles.welcomeText2}>Welcome to Tryio</Text>
                    <View style={styles.usernameContainer}>
                        <Image source={require("./assets/Username.png")} style={styles.usernamePic} />

                        <Text style={styles.usernameAndPassword}>      Username</Text>
                    </View>

                    <View style={styles.passwordContainer}>
                        <Image source={require("./assets/Password.png")} style={styles.passwordPic} />

                        <Text style={styles.usernameAndPassword}>      Password</Text>
                    </View>

                    <View style={styles.termsConditionsContainer}>
                        <Icon name="check-box-outline" size={15} color="#6C6CE5" underlayColor="#33395180" />
                        <Text style={styles.readAndAgree}>I read and agree <Text style={styles.termsAndConditionsLink}>Terms & Conditions</Text></Text>
                    </View>


                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 2.5, y: 0 }} colors={['#6C6CE5', '#363673']} style={styles.linearGradient} >
                        <Text style={styles.signInText} onPress={() => this.props.navigation.navigate('SignedInScreen')}>SIGN IN</Text>
                    </LinearGradient>


                    <View style={styles.signUpContainer}>
                        <Text style={styles.textToSignUp}>Do not have an account? <Text style={styles.signUpLink} onPress={() => this.props.navigation.navigate('HomeScreen')}>Sign Up</Text></Text>
                    </View>
                </View>

            </View>

        );
    }
}

export default LogInScreen;