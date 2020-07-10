import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    mainContainer: {
        //flex: 1,
        width: 375,
        height: 812,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F7F7FF',
    },
    backgroundContainer: {
        backgroundColor: '#F7F7FF',

    },
    backgroundContainer2: {
        backgroundColor: '#F6F7FB',

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
        paddingLeft: 70,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 9,

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
        paddingLeft: 70,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 9,

    },
    linkedinText: {
        color: '#F7F7F7',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 29,
        marginRight: 4,
        lineHeight: 22,
        fontFamily: 'Avenir',
    },
    inText: {
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
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

    mainContainer2: {
        //flex: 1,
        width: 375,
        height: 812,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#F6F7FB',
    },

    welcomeBox: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 54,
        marginBottom: 32,
        width: 291,

    },

    welcomeText3: {
        fontSize: 28,
        color: '#313349',
        marginTop: 15,
        fontWeight: 'bold',
        letterSpacing: 0.56,
        //lineHeight: 93,
    },
    welcomeText3_1: {
        color: '#464775',
        fontSize: 14,
        letterSpacing: 0.28,
        //lineHeight: 15,
    },
    carouselStyle: {
        marginTop: 14,
        backgroundColor: '#F6F7FB',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 21,

    },
    adpic: {
        alignSelf: 'flex-start',
        height: 191,
        width: 270,
        resizeMode: 'contain',

    },
    greenRectangle: {
        borderRadius: 2,
        height: 19,
        width: 57,
        backgroundColor: '#4AB7B2',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 6,
        alignItems: 'center',
    },
    greenRectangleText: {
        color: '#F7F7F7',
        fontSize: 8,
        //marginLeft: 3,
        //marginRight: 4,
        marginTop: 3,
        //marginBottom: 4,
        letterSpacing: 0.24,
        //lineHeight: 25,
        //justifyContent: 'center',
    },
    infoBox: {
        height: 162,
        width: 270,
        borderRadius: 4,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFFFFF',

    },
    joinBox: {
        backgroundColor: '#FFA700',
        borderRadius: 10,
        height: 40,
        width: 270,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center', //center med tanke på horisontalt
        justifyContent: 'center', //center med tanke på vertikalt
        marginBottom: 8,

    },
    joinText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#FFFFFF',
    },
    descriptionText1: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 9,
        marginTop: 24,
        letterSpacing: 0.36,
    },
    descriptionText2: {
        fontSize: 8,
        color: '#33395180',
        marginLeft: 3.02,
        //marginTop: 16,
        alignSelf: 'center',
    },
    descriptionText3: {
        fontSize: 8,
        color: '#33395180',
        marginLeft: 3.02,
        //marginTop: 10,
        alignSelf: 'center',

    },
    wwyText: {
        fontSize: 15,
        color: '#313349',
        fontWeight: 'bold',
        marginLeft: 55,
        marginTop: 72,
        letterSpacing: 0.3,
        //lineHeight: 78,

    },
    profilepic: {
        borderRadius: 80 / 2,
        width: 80,
        height: 80,
        marginLeft: 40,
    },
    overviewContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        //backgroundColor: '#33395180',
        width: 291,
        height: 66,
        marginBottom: 11,
    },
    overviewBox1: {
        height: 66,
        width: 132,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        marginRight: 27,
        borderRadius: 4,

        shadowColor: "#5656B75C",
        shadowOffset: { width: 0, height: 3, },
        shadowOpacity: 0.29,
        shadowRadius: 6,
        elevation: 7,

    },
    overviewBox2: {
        height: 66,
        width: 132,
        backgroundColor: '#FFFFFF',
        //flexDirection: 'row',
        //justifyContent: 'flex-start',
        borderRadius: 4,
        shadowColor: "#5656B75C",
        shadowOffset: { width: 0, height: 3, },
        shadowOpacity: 0.29,
        shadowRadius: 6,
        elevation: 7,
        //alignItems: 'flex-start',
    },

    foot: {
        backgroundColor: '#5656B7',
        height: 64,
        width: 375,

    },

    img1: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        marginTop: 10,
        marginLeft: 27,
    },

    img2: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        //alignSelf: 'center',
        marginTop: 10,
        marginLeft: 48,
    },
    img3: {
        height: 36,
        width: 35,
        resizeMode: 'contain',
        marginTop: 7,
        marginLeft: 27,
    },

    img4: {
        height: 30,
        width: 32,
        resizeMode: 'contain',
        marginTop: 18,
        marginLeft: 47.67,
    },

    imgPoints1: {
        fontWeight: 'bold',
        //alignSelf: 'center',
        marginLeft: 8,
        marginTop: 25,
        fontSize: 10,
        color: '#464775',
    },
    imgPoints2: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#464775',
        marginLeft: 3,
        marginTop: 25,
    },
    imgPoints3: {
        fontWeight: 'bold',
        fontSize: 11,
        color: '#464775',
        marginLeft: 5,
        marginTop: 22,
        letterSpacing: 0.22,

    },
    imgPoints4: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#464775',
        marginLeft: 4.71,
        marginTop: 33,
        letterSpacing: 0.2,

    },
    imgText1: {
        fontSize: 7,
        letterSpacing: 0.14,
        alignSelf: 'center',
        marginTop: 2,
        //marginRight: 30,
        //marginRight: 30,
        //justifyContent: 'center',
        marginRight: 4,
        marginBottom: 20,
        color: '#464775',


    },
    imgText2: {
        fontSize: 7,
        letterSpacing: 0.14,
        alignSelf: 'center',
        marginTop: 7,
        //marginRight: 30,
        //marginRight: 30,
        //justifyContent: 'center',
        //marginRight: 50,
        marginRight: 15,
        marginBottom: 20,
        color: '#464775',


    },
    imgText3: {
        fontSize: 7,
        letterSpacing: 0.14,
        alignSelf: 'center',
        marginTop: 4,
        //marginRight: 30,
        //marginRight: 30,
        //justifyContent: 'center',
        //marginRight: 50,
        marginBottom: 20,
        marginRight: 20,
        color: '#464775',
    },
    imgText4: {
        fontSize: 7,
        letterSpacing: 0.14,
        alignSelf: 'center',
        //marginTop: 4,
        //marginRight: 30,
        //marginRight: 30,
        //justifyContent: 'center',
        //marginRight: 50,
        marginBottom: 10,
        marginLeft: 5,
        color: '#464775',
    },


    overviewBox1_1: {
        flexDirection: 'row',
    },

    timepic: {
        height: 20,
        width: 20,
        alignSelf: 'center',
        marginLeft: 12,
    },
    timeBox: {
        flexDirection: 'row',
        //backgroundColor: '#FFA700',
        marginTop: 14,

    },
    locationpic: {
        width: 22,
        height: 20,
        alignSelf: 'center',
        marginLeft: 11,
    },
    locationBox: {
        flexDirection: 'row',
        //backgroundColor: '#FFA700',
        marginTop: 1,

    },






});