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
//import Star from './assets/Star.png';
//import SvgTest from './svgs/SvgTest';




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
                //paddingRight: 5,


            }}>
                <Image source={require("./assets/Image36x2.png")} style={styles.adpic} />
                <View style={styles.greenRectangle}><Text style={styles.greenRectangleText}>7 places left</Text></View>
                <View style={styles.infoBox}>
                    <Text style={styles.descriptionText1}>Chocolate Almond Milk</Text>
                    <View style={styles.timeBox}>
                        <Image source={require("./assets/Time.png")} style={styles.timepic} />
                        <Text style={styles.descriptionText2}>13:00. Tuesday, April 24</Text>
                    </View>

                    <View style={styles.locationBox}>
                        <Image source={require("./assets/Location.png")} style={styles.locationpic} />
                        <Text style={styles.descriptionText3}>Grensestien 10, Oslo</Text>
                    </View>
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
            <View style={styles.backgroundContainer2}>
                <View style={styles.mainContainer2}>
                    <View style={styles.welcomeBox}>
                        <View>
                            <Text style={styles.welcomeText3} onPress={() => this.props.navigation.navigate('LogInScreen')}>Hi, Katarina!</Text>
                            <Text style={styles.welcomeText3_1}>Lorem ipsum</Text>


                        </View>
                        <Image source={require("./assets/IMG_20190626_154321_resized_20190626_055149350-kopi.png")} style={styles.profilepic} />
                    </View>
                    <View style={styles.overviewContainer}>
                        <View style={styles.overviewBox1}>
                            <View style={styles.overviewBox1_1}>
                                <Image source={require("./assets/Missionssymbol.png")} style={styles.img1} />
                                <Text style={styles.imgPoints1}>0</Text>
                            </View>
                            <Text style={styles.imgText1}>Missions completed</Text>
                        </View>

                        <View style={styles.overviewBox2}>
                            <View style={styles.overviewBox1_1}>
                                <Image source={require("./assets/Star.png")} style={styles.img2} />
                                <Text style={styles.imgPoints2}>1</Text>
                            </View>
                            <Text style={styles.imgText2}>Stars given</Text>
                        </View>
                    </View>
                    <View style={styles.overviewContainer}>
                        <View style={styles.overviewBox1}>
                            <View style={styles.overviewBox1_1}>
                                <Image source={require("./assets/Cash.png")} style={styles.img3} />
                                <Text style={styles.imgPoints3}>NOK 0.00</Text>
                            </View>
                            <Text style={styles.imgText3}>Cash earned</Text>
                        </View>
                        <View style={styles.overviewBox2}>
                            <View style={styles.overviewBox1_1}>
                                <Image source={require("./assets/Reward.png")} style={styles.img4} />
                                <Text style={styles.imgPoints4}>0</Text>
                            </View>
                            <Text style={styles.imgText4}>Rewards earned</Text>

                        </View>

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
                            inactiveSlideScale={0.85}
                            //inactiveSlideShift={0}
                            marginLeft={14}
                            firstItem={1}




                            onSnapToItem={index => this.setState({ activeIndex: index })} />
                    </View>
                    <View style={styles.foot}>

                    </View>
                </View>

            </View>


        );
    }
}

export default SignedInScreen;