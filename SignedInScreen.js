import * as React from 'react';
import { Text, View, Image } from 'react-native';
//import * as Font from 'expo-font';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import HomeScreen from './HomeScreen';
import LogInScreen from './LogInScreen';
import Carousel from 'react-native-snap-carousel';



class SignedInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {

                },
                {

                },
                {

                },

            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: '#F6F7FB',
                borderRadius: 5,
                height: 344,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 5,
                marginBottom: 5,

            }}>
                <Image source={require("./assets/Image36x2.png")} style={styles.image} />
                <View style={styles.greenRectangle}><Text style={styles.greenRectangleText}>7 places left</Text></View>
                <View style={styles.infoBox}>
                    <Text style={styles.descriptionText1}>Chocolate Almond Milk</Text>
                    <Text style={styles.descriptionText2}>13:00. Tuesday, April 24</Text>
                    <Text style={styles.descriptionText3}>Grensestien 10, Oslo</Text>
                    <View style={styles.joinBox}>
                        <Text style={styles.joinText}>See more and join</Text>
                    </View>
                </View>
                <View style={styles.joinBox}><Text style={styles.joinText}>See more and join</Text></View>



                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>

        )
    }


    render() {
        return (
            <View style={styles.mainContainer2}>
                <View style={styles.welcomeBox}>
                    <View>
                        <Text style={styles.welcomeText3} onPress={() => this.props.navigation.navigate('LogInScreen')}>Hi, Katarina!</Text>
                        <Text style={styles.welcomeText3_1}>Lorem ipsum</Text>

                    </View>
                    <Image source={require("./assets/IMG_20190626_154321_resized_20190626_055149350-kopi.png")} style={styles.image2} />
                </View>
                <View style={styles.overviewContainer}>
                    <View style={styles.overviewBox1}></View>
                    <View style={styles.overviewBox2}></View>

                </View>
                <View style={styles.overviewContainer}>
                    <View style={styles.overviewBox1}></View>
                    <View style={styles.overviewBox2}></View>

                </View>
                <Text style={styles.wwyText}>What would you like to test next?</Text>
                <View style={styles.carouselStyle}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={375}
                        itemWidth={285}
                        //itemHeight={400}
                        renderItem={this._renderItem}
                        inactiveSlideScale={0.8}


                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
                <View style={styles.foot}>

                </View>
            </View>

        );
    }
}

export default SignedInScreen;