import React, { Component } from 'react';
import { Text, View } from 'react-native';
//import * as Font from 'expo-font';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

import LogInScreen from './LogInScreen';
import SignedInScreen from './SignedInScreen';

class HomeScreen extends Component {
    render() {

        return (
            <View style={styles.mainContainer}>
                <Text style={styles.welcomeText}>Welcome to Tryio</Text>

                <View style={styles.createContainer}>
                    <Text style={styles.createText}>Create an account</Text>
                </View>

                <View style={styles.logInContainer}>
                    <Text style={styles.textToLink}>Already have an account?</Text>
                    <Text style={styles.linkToText} onPress={() => this.props.navigation.navigate('LogInScreen')}> Log in here</Text>
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
}

export default HomeScreen;