import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    mainContainer1: {
        //flex: 1,
        width: 375,
        height: 812,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F7F7FF',
    },
    backgroundContainer1: {
        backgroundColor: '#F7F7FF',

    },
    backgroundContainer2: {
        backgroundColor: '#F6F7FB',

    },
    welcomeText1: {
        fontSize: 28,
        //fontWeight: 'bold',
        fontFamily: 'Open Sans Bold',
        color: '#333951',
        //marginBottom: 35,
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
        //marginVertical: 8,
        marginTop: 43,

    },
    createText: {
        fontSize: 15,
        color: '#FEFEFE',
        //fontWeight: 'bold',
        lineHeight: 17,
        fontFamily: 'Arial Rounded MT Bold',

    },
    logInContainer: {
        marginTop: 8,
        flexDirection: 'row',

    },
    textToLink: {
        color: '#33395180',
        fontSize: 10,
        lineHeight: 14,
        fontFamily: 'Open Sans Semibold',
    },
    linkToText: {
        color: '#6C6CE5',
        fontSize: 10,
        lineHeight: 14,
        fontFamily: 'Open Sans Semibold',
    },
    orLogInContainer: {
        marginTop: 26,
        flexDirection: 'row',
        width: 274,
    },
    orLogInText: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontSize: 11,
        color: '#313349',
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
        //marginVertical: 9,
        marginTop: 19,

    },
    facebookText: {
        color: '#F7F7F7',
        fontSize: 16,
        marginLeft: 29,
        fontFamily: 'Avenir Heavy',

    },
    fText: {
        fontSize: 24,

        fontFamily: 'Avenir Black',
        color: '#4064B4',
        lineHeight: 33,
        marginLeft: 7,
        position: "absolute",

    },
    fBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        height: 23,
        width: 21,
        paddingBottom: 4,

    },

    linkedinContainer: {
        backgroundColor: '#0277B5',
        borderRadius: 8,
        height: 40,
        width: 274,
        paddingLeft: 70,
        alignItems: 'center',
        flexDirection: 'row',
        //marginVertical: 9,
        marginTop: 18,

    },
    linkedinText: {
        color: '#F7F7F7',
        fontSize: 16,
        //fontWeight: 'bold',
        marginLeft: 29,
        marginRight: 4,
        //lineHeight: 25,
        fontFamily: 'Avenir Heavy',
        //marginTop: 10,
        //alignSelf: 'center',
    },
    inText: {
        fontSize: 17,
        //fontWeight: 'bold',
        fontFamily: 'Avenir Black',
        color: '#0277B5',
        //lineHeight: 23,
    },
    inBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        height: 23,
        width: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText2: {
        fontSize: 20,
        //fontWeight: 'bold',
        lineHeight: 27,
        fontFamily: 'Open Sans Bold',
        color: '#333951',
        //marginBottom: 25,
        marginTop: 128,

    },
    usernameContainer: {
        width: 277,
        height: 41,
        backgroundColor: '#FFFFFF',
        borderColor: '#5656B7',
        borderWidth: 1,
        borderRadius: 6,
        paddingLeft: 17.21,
        marginTop: 37,

        alignItems: 'center',
        flexDirection: 'row',
        //marginVertical: 12,
    },
    passwordContainer: {
        width: 277,
        height: 41,
        backgroundColor: '#FFFFFF',
        borderColor: '#5656B7',
        borderWidth: 1,
        borderRadius: 6,
        paddingLeft: 17.21,
        marginTop: 24,

        alignItems: 'center',
        flexDirection: 'row',
        //marginVertical: 12,
    },
    usernamePic: {
        height: 13.52,
        width: 13.32,
        resizeMode: 'contain',
        marginRight: 20,
        //color: '#6C6CE5',
    },
    passwordPic: {
        height: 16.7,
        width: 15.91,
        resizeMode: 'contain',
        marginRight: 20,
        //color: '#6C6CE5',
    },
    usernameAndPassword: {
        color: '#33395180',
        fontSize: 11,
        lineHeight: 15,
        fontFamily: 'Open Sans Semibold'
    },
    termsConditionsContainer: {
        flexDirection: 'row',
        marginRight: 20,
        marginTop: 28,
    },
    readAndAgree: {
        color: '#33395180',
        fontSize: 10,
        marginLeft: 10,
        lineHeight: 14,
        fontFamily: 'Open Sans Semibold',
    },
    termsAndConditionsLink: {
        color: '#6C6CE5',
        fontSize: 10,
        lineHeight: 14,
        fontFamily: 'Open Sans Semibold',
    },

    linearGradient: {
        borderRadius: 9,
        width: 117,
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 9,
    },

    signInText: {
        fontSize: 10,
        color: '#FFFFFF',
        letterSpacing: 0.2,
        lineHeight: 14,
        fontFamily: 'Arial Rounded MT Bold',
    },
    signUpContainer: {
        marginTop: 12,
    },

    textToSignUp: {
        fontSize: 9,
        lineHeight: 13,
        color: '#33395180',
        fontFamily: 'Open Sans Semibold',

    },
    signUpLink: {
        fontSize: 9,
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
        letterSpacing: 0.56,
        fontFamily: 'Arial Rounded MT Bold',
    },
    welcomeText3_1: {
        color: '#464775',
        fontSize: 14,
        letterSpacing: 0.28,
        fontFamily: 'Open Sans Regular',
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
        justifyContent: 'center',
    },
    greenRectangleText: {
        color: '#F7F7F7',
        fontSize: 7,
        letterSpacing: 0.24,
        fontFamily: 'Arial Rounded MT Bold',
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
        color: '#FFFFFF',
        fontFamily: 'Arial Rounded MT Bold',
    },
    descriptionText1: {
        fontSize: 18,
        marginLeft: 9,
        marginTop: 24,
        letterSpacing: 0.36,
        fontFamily: 'Arial Rounded MT Bold',
    },
    descriptionText2: {
        fontSize: 8,
        color: '#33395180',
        marginLeft: 3.02,
        alignSelf: 'center',
        fontFamily: 'Open Sans Semibold',
    },
    descriptionText3: {
        fontSize: 8,
        color: '#33395180',
        marginLeft: 3.02,
        alignSelf: 'center',
        fontFamily: 'Open Sans Semibold',

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
        borderRadius: 4,
        shadowColor: "#5656B75C",
        shadowOffset: { width: 0, height: 3, },
        shadowOpacity: 0.29,
        shadowRadius: 6,
        elevation: 7,
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
        marginLeft: 8,
        marginTop: 25,
        fontSize: 10,
        color: '#464775',
        fontFamily: 'Arial Rounded MT Bold',
    },
    imgPoints2: {

        fontSize: 10,
        color: '#464775',
        marginLeft: 3,
        marginTop: 25,
        fontFamily: 'Arial Rounded MT Bold',
    },
    imgPoints3: {

        fontSize: 11,
        color: '#464775',
        marginLeft: 5,
        marginTop: 22,
        letterSpacing: 0.22,
        fontFamily: 'Arial Rounded MT Bold',

    },
    imgPoints4: {

        fontSize: 10,
        color: '#464775',
        marginLeft: 4.71,
        marginTop: 33,
        letterSpacing: 0.2,
        fontFamily: 'Arial Rounded MT Bold',

    },
    imgText1: {
        fontSize: 7,
        letterSpacing: 0.14,
        alignSelf: 'center',
        marginTop: 2,
        marginRight: 4,
        marginBottom: 20,
        color: '#464775',
        fontFamily: 'Helvetica',


    },
    imgText2: {
        fontSize: 7,
        letterSpacing: 0.14,
        alignSelf: 'center',
        marginTop: 7,
        marginRight: 15,
        marginBottom: 20,
        color: '#464775',
        fontFamily: 'Helvetica',


    },
    imgText3: {
        fontSize: 7,
        letterSpacing: 0.14,
        alignSelf: 'center',
        marginTop: 4,
        marginBottom: 20,
        marginRight: 20,
        color: '#464775',
        fontFamily: 'Helvetica',
    },
    imgText4: {
        fontSize: 7,
        letterSpacing: 0.14,
        alignSelf: 'center',
        marginBottom: 10,
        marginLeft: 5,
        color: '#464775',
        fontFamily: 'Helvetica',
    },


    overviewBox1_1: {
        flexDirection: 'row',
    },

    wwyText: {
        fontSize: 15,
        color: '#313349',
        fontWeight: 'bold',
        marginLeft: 60,
        marginTop: 72,
        letterSpacing: 0.3,
        fontFamily: 'Arial Rounded MT Bold',
    },

    timepic: {
        height: 20,
        width: 20,
        alignSelf: 'center',
        marginLeft: 12,
    },
    timeBox: {
        flexDirection: 'row',
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
        marginTop: 1,

    },






});