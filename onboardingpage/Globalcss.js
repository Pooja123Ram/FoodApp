


import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const Globalcss = StyleSheet.create({
    containers: {
        flexGrow: 1,
        backgroundColor: "white",
    },
    headers: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: "white",

    },
    welcomeContainers: {
        flex: 0.6,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,

    },
    welcomes: {
        fontSize: wp('5%'),
        fontWeight: "bold",
    },
    welcometextss: {
        color: "rgb(207,216,229)",
        fontSize: hp('2.5%'),
        top: hp('1.5%'),
        fontFamily: 'Inter'
    },
    inputContainers: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D0DBEA",
        borderRadius: wp('6%'),
        paddingHorizontal: wp('2.5%'),
        marginVertical: hp('1%'),
        width: wp('85%'),
        height: hp('7%'),
        justifyContent: "center",
        left: wp('5%'),
        top: hp('0.5%'),
        fontFamily: 'Inter'
    },
    inputContainer1s: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D0DBEA",
        borderRadius: wp('6%'),
        paddingHorizontal: wp('2.5%'),
        marginVertical: hp('1%'),
        width: wp('85%'),
        height: hp('7%'),
        justifyContent: "center",
        left: wp('5%'),
        top: hp('0.5%'),
    },
    icons: {
        marginRight: wp('2%'),
        fontSize: wp('7%'),
        color: 'rgba(159, 165, 192, 1)',
    },
    errortext: {
        color: 'red',
        marginTop: hp('1.5%'),
        marginLeft: wp('10%'),
    },
    inputHome: {
        fontSize: 15,
        color: 'rgba(159, 165, 192, 1)',
        lineHeight: hp('3%'),
        width: wp('85%'),
        height: hp('7%'),
        fontWeight: '500',
        fontFamily: 'Inter'
    },
    errorsse: {
        bottom: hp('50%'),
        paddingHorizontal: wp('2.5%'),
        paddingLeft: wp('12.5%'),
        color: "rgb(134,148,175)",
    },
    errorss: {
        bottom: hp('2%'),
        paddingHorizontal: wp('2.5%'),
        paddingLeft: wp('12.5%'),
        color: "rgb(134,148,175)",
        fontSize: hp('2%')
    },
    errors: {
        paddingLeft: wp('3'),
        color: "rgb(134,148,175)",
        justifyContent: 'space-between',

    },
    errorserr: {
        paddingLeft: wp('12.5%'),
        color: "rgb(134,148,175)",
        justifyContent: 'space-between',

    },
    errorMessage: {
        // color: "rgba(159, 165, 192, 1)",
        // marginBottom: hp('1.5%'),
        // marginLeft: wp('0.5%'),
        lineHeight: 25,
        letterSpacing: 0.7,
        fontWeight: '500',
        fontSize: 15,
    },

    errorMessage1: {
        color: "rgba(159, 165, 192, 1)",
        lineHeight: 25,
        letterSpacing: 0.7,
        fontWeight: '500',
        fontSize: 15,
    },
    errorMessagee: {
        color: "rgba(46, 62, 92, 1)",
        fontSize: wp('3.5%'),
        // marginBottom: hp('1.5%'),
        marginLeft: wp('0.5%'),
        lineHeight: 25,
        letterSpacing: 0.7,
        fontWeight: '500',
        fontSize: 15,
        textAlign: 'right',
    },

    errorMessageContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
        marginBottom: hp('1%'),
    },

    errorMessageContainer1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 13,
        marginBottom: hp('1.5%'),
    },
    errorMessages: {
        color: "rgba(62, 84, 129, 1)",
        fontSize: 17,
        fontWeight: '500',
        marginBottom: hp('2%'),
        lineHeight: hp('4.5%'),
        letterSpacing: 0.5,
        fontFamily: 'Inter',
    },
    inputs: {
        flex: 1,
        height: hp('5%'),
        fontSize: 15,
        color: '#9FA5C0',
        lineHeight: hp('3%'),
        width: wp('85%'),
        fontWeight: '500',
        fontFamily: 'Inter'

    },

    getStartForget: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    loginTexts: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        lineHeight: hp('3.5%'),
        fontWeight: 'bold',
        letterSpacing: 0.7,
        fontSize: wp('5%')
    },
    forgets: {
        paddingLeft: wp('50%'),
        top: hp('0.5%'),
        fontSize: wp('5%'),
        fontFamily: 'Inter'
    },
    welcomeinputs: {
        paddingBottom: 30,
    },
    contines: {
        top: hp('8.5%'),
        justifyContent: "center",
        left: wp('30%'),
    },
    continetexts: {
        fontSize: wp('5%'),
        top: hp('2.5%'),
    },
    accounts: {
        flexDirection: "row",
        alignItems: "center",
        top: hp('20%'),
        left: wp('22.5%'),
    },
    continetextess: {
        fontSize: wp('5%'),
        top: hp('1.5%'),
        fontFamily: 'Inter'
    },
    loginTextss: {
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 0.7,
        lineHeight: 18.15,
        color: 'rgba(255, 255, 255, 1)'

    },
    containere: {
        flex: 1,
        backgroundColor: 'white',
    },
    contente: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('60%'),
    },
    texte: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: hp('2%'),
        lineHeight: hp('4.5%'),
        letterSpacing: 0.5,
        textAlign: 'center',
        fontFamily: 'Inter',
        color: 'rgba(46, 62, 92, 1)',

    },
    textparagraphe: {
        fontWeight: '500',
        lineHeight: 30,
        width: 300,
        letterSpacing: 0.5,
        fontSize: 17,
        color: 'rgba(159, 165, 192, 1)',
        textAlign: 'center',
        fontFamily: 'Inter'
    },
    textparagraphee: {
        fontWeight: '500',
        lineHeight: 25,
        letterSpacing: 0.5,
        fontSize: 17,
        marginBottom: hp('2%'),
        color: 'rgba(159, 165, 192, 1)',
        textAlign: 'center',
        fontFamily: 'Inter'
    },
    textparagraphemain: {
        display: 'flex',
        alignItems: 'center',
        height: hp('12%'),
        width: wp('50%'),
        fontSize: wp('4%'),
        fontFamily: 'Inter',

    },
    textparae: {
        fontSize: wp('4%'),
        color: 'rgba(159, 165, 192, 1)',
        marginBottom: hp('4%'),
    },

    startBtn: {
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 0.7,
        lineHeight: 18.15,
        color: 'rgba(255, 255, 255, 1)'
    },
    Buttonee: {
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 0.5,
        lineHeight: 14,
        color: 'rgba(255, 255, 255, 1)'

    },

    getStarted: {
        width: wp('85%'),
        height: hp('7%'),
        backgroundColor: 'rgba(31, 204, 121, 1)',
        borderRadius: wp('8%'),
        paddingVertical: hp('2.5%'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter'

    },
    getStartedLogin: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('4%'),
        height: hp('7%'),
        width: wp('85%'),
        backgroundColor: 'rgba(31, 204, 121, 1)',
        borderRadius: wp('8%'),
        // paddingVertical: hp('2.5%'),
        // marginLeft: wp('7.5%'),
    },

    ButtoneeLogin:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    getStartedLoginbtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('1%'),
        height: hp('7%'),
        width: wp('85%'),
        backgroundColor: 'rgba(31, 204, 121, 1)',
        borderRadius: wp('8%'),
        // paddingVertical: hp('2.5%'),
        // marginLeft: wp('7.5%'),
        fontFamily: 'Inter'

    },

    getStartedLoginbtn1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    done: {
        display: 'flex',
        height: hp('7%'),
        width: wp('85%'),
        justifyContent: "center",
        backgroundColor: 'rgba(31, 204, 121, 1)',
        borderRadius: wp('8%'),
        paddingVertical: hp('2.5%'),
        marginLeft: wp('7.5%'),
        fontFamily: 'Inter'
    },
    getStartedLoginre: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('4%'),
        height: hp('7%'),
        width: wp('85%'),
        backgroundColor: 'rgba(31, 204, 121, 1)',
        borderRadius: wp('8%'),
        paddingVertical: hp('2.5%'),
        marginLeft: wp('7.5%'),
        fontFamily: 'Inter'

    },
    getStartedGoogle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('1%'),
        height: hp('7%'),
        width: wp('85%'),
        backgroundColor: 'rgba(255, 88, 66, 1)',
        borderRadius: wp('8%'),
        paddingVertical: hp('1%'),
        marginLeft: wp('7.5%'),
        fontFamily: 'Inter'

    },
    // googleicon: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     fontSize: wp('4%'),
    //     color: 'white',

    // },
    imagee: {
        position: 'absolute',
        top: hp('5%'),
        width: '94%',
    },
    imageContainer: {
        width: wp('106%'),
    },
    headere: {
        width: "100%",
        height: hp('1%'),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    // Continuing from the previous code snippet...
    containerr: {
        flexGrow: 1,
        backgroundColor: "white",
        paddingTop: hp('7.25%'), // Adjust as needed
    },
    headerr: {
        width: "100%",
        height: hp('4%'),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    errorr: {
        marginTop: hp('1%'),
        paddingHorizontal: wp('2.5%'),
        paddingLeft: wp('12.5%'),
        color: "red",
    },
    welcomeContainerr: {
        flex: 0.7,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: hp('50%')
    },
    welcomeContainerrs: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: hp('7%')

    },
    welcomerr: {
        fontSize: wp('5%'),
        fontWeight: "bold",
    },
    welcometextrr: {
        color: "rgb(207,216,228)",
        fontSize: hp('2.5%'),
    },
    inputContainerrr: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D0DBEA",
        borderRadius: wp('6%'),
        paddingHorizontal: wp('2.5%'),
        marginVertical: hp('1%'),
        width: wp('85%'),
        height: hp('7%'),
        justifyContent: "center",
        left: wp('5%'),
    },
    iconr: {
        marginRight: wp('2%'),
    },
    inputr: {
        flex: 1,
        height: hp('5%'),
        fontSize: wp('4%'),
    },
    loginButtonr: {
        backgroundColor: "rgb(31,204,121)",
        paddingVertical: hp('1.5%'),
        borderRadius: wp('3.5%'),
        marginTop: hp('10%'),
        width: wp('85%'),
        height: hp('7%'),
        marginLeft: wp('7.5%'),
    },
    loginTextr: {
        color: "white",
        fontSize: wp('5%'),
        textAlign: "center",
        fontWeight: "bold",
    },
    welcomeinputr: {
        paddingBottom: 0.5,
    },
    containero: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeContainero: {
        alignItems: 'center',
        marginTop: hp('10%'),
    },
    welcomeo: {
        fontSize: wp('6%'),
        fontWeight: '700',
        color: 'rgba(62, 84, 129, 1)',
    },
    welcometexto: {
        fontSize: wp('4%'),
        color: 'rgba(159, 165, 192, 1)',
        marginTop: hp('1.3%'),
        fontWeight: '500',
    },
    otpContainero: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('7%'),
    },
    otpBoxo: {
        borderWidth: 1,
        width: wp('20%'),
        height: wp('20%'),
        textAlign: 'center',
        fontSize: wp('6%'),
        marginHorizontal: wp('1%'),
        borderRadius: wp('5%'),
    },
    timerTexto: {
        color: 'red',
    },
    otpBtno: {
        paddingTop: hp('2%'),
    },
    loginButtonTexto: {
        fontSize: wp('4.5%'),
        marginTop: hp('4%'),
    },
    loginButtono: {
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('2.5%'),
        justifyContent: 'center',
        width: wp('85%'),
        height: hp('7%'),
        marginTop: hp('6%'),
        borderWidth: 1,
        borderColor: 'rgba(208, 219, 234, 1)',
        borderRadius: wp('10.5%'),

    },

    check:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      gap:20
    },
    loginButton: {

        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('2.5%'),
        justifyContent: 'center',
        width: wp('85%'),
        height: hp('7%'),
        borderWidth: 1,
        borderColor: 'rgba(208, 219, 234, 1)',
        borderRadius: wp('10.5%'),
        backgroundColor: 'rgba(31, 204, 121, 1)',
        paddingLeft: '40',

    },
    loginButtonso: {
        backgroundColor: 'rgb(31,204,121)',
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('2.5%'),
        borderRadius: wp('10.5%'),
        justifyContent: 'center',
        width: wp('85%'),
        height: hp('7%'),
        marginTop: hp('8%'),
    },
    loginTexto: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: wp('5%'),
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginTextso: {
        fontSize: wp('5%'),
        textAlign: 'center',
        color: 'rgba(208, 219, 234, 1)',


    },
    modalContainerC: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '50',
    },
    modalContentC: {
        backgroundColor: 'white',
        padding: wp('5%'),
        borderRadius: wp('7%'),
        width: '100%',
        height: '50',
    },

    modalContent:{
padding:'2%'
    },
    otpTextC: {
        fontSize: wp('4.5%'),
        textAlign: 'center',
        marginBottom: hp('2%'),
    },
    otpValueC: {
        fontSize: wp('6%'),
        textAlign: 'center',
        fontWeight: 'bold',
    },
    closeButtonC: {
        paddingLeft: wp('76%'),
        fontSize: wp('4%')
    },
    closeButtonOtp: {
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: '500',
        color: '#9FA5C0',
        lineHeight: 25,
        letterSpacing: 0.5,
        paddingRight:'3%'
    },
    containerRegister: {
        marginHorizontal: hp('3%'),
    },

    welcomeContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp('15%'),
        fontSize: wp('10%'),

    },
    welcomepass: {
        fontSize: wp('6%'),
        fontWeight: "700",
        lineHeight: wp('7%'),
        letterSpacing: wp('0.3%'),
        textAlign: 'center',
        fontFamily: 'Inter',


    },

    welcome: {
        fontSize: 22,
        fontWeight: "700",
        lineHeight: wp('7%'),
        textAlign: 'center',
        fontFamily: 'Inter',
        color: 'rgba(62, 84, 129, 1)'
    },
    welcometext: {
        fontWeight: "500",
        lineHeight: 25,
        textAlign: 'center',
        color: 'rgba(159, 165, 192, 1)',
        fontSize: wp('4%'),
        fontFamily: 'Inter'
    },

    enterAccount: {
        height: hp('3%'),
        width: wp('78%'),
        marginBottom: hp('12%'),
    },
    welcomText: {
        height: hp('4%'),
        width: wp('54%'),
        fontFamily: 'Inter'

    },
    forget: {
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 25,
        letterSpacing: 0.5,
        textAlign: 'right',
        color: 'rgba(46, 62, 92, 1)',
        marginRight: 25,
        fontFamily: 'Inter'

    },

    emailrnumber: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: hp('4%'),
        fontFamily: 'Inter'

    },

    emailrnumberss: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: hp('17%'),
        fontFamily: 'Inter'

    },
    error: {
        bottom: hp('2%'),
        paddingHorizontal: wp('2.5%'),
        paddingLeft: wp('12.5%'),
        color: "rgb(134,148,175)",
        fontFamily: 'Inter'

    },
    inputContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: wp('6%'),
        paddingRight: wp('6%'),
        borderColor: "#D0DBEA",
        gap: wp('2%'),
        borderWidth: 1,
        borderRadius: wp('9%'),
        height: hp('7%'),
        width: wp('85%'),
        marginLeft: 25,
        marginBottom: 100,
        fontFamily: 'Inter'


    },
    inputContainerhome: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: wp('6%'),
        paddingRight: wp('6%'),
        borderColor: "#D0DBEA",
        gap: wp('2%'),
        borderWidth: 1,
        borderRadius: wp('9%'),
        height: hp('7%'),
        width: wp('85%'),
        fontFamily: 'Inter'

    },
    inputContainerReg: {
        display: 'flex',
        flexDirection: "row",
        borderColor: "#D0DBEA",
        alignItems: "center",
        paddingLeft: wp('6%'),
        paddingRight: wp('6%'),
        gap: wp('2%'),
        borderWidth: 1,
        borderRadius: wp('9%'),
        height: hp('7%'),
        width: wp('85%'),
        fontFamily: 'Inter'

    },
    inputContainerRegemail: {
        display: 'flex',
        flexDirection: "row",
        borderColor: "#D0DBEA",
        marginTop: hp('10%'),
        alignItems: "center",
        paddingLeft: wp('6%'),
        paddingRight: wp('6%'),
        gap: wp('2%'),
        borderWidth: 1,
        borderRadius: wp('9%'),
        height: hp('7%'),
        width: wp('85%'),
        fontFamily: 'Inter'

    },
    inputContainerRegr: {
        display: 'flex',
        flexDirection: "row",
        borderColor: "#D0DBEA",
        alignItems: "center",
        paddingLeft: wp('6%'),
        paddingRight: wp('6%'),
        gap: wp('2%'),
        borderWidth: 1,
        borderRadius: wp('9%'),
        height: hp('7%'),
        width: wp('85%'),
        marginBottom: 10,
        fontFamily: 'Inter'

    },
    icon: {
        color: 'rgba(159, 165, 192, 1)',
        fontSize: wp('6%'), // Adjust as needed
    },
    goolebtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    input: {
        flex: 1,
    },
    contine: {
        height: 25,
        marginTop: 24,
    },
    continetext: {
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 17,
        letterSpacing: 0.5,
        color: '#9FA5C0',
        textAlign: 'center',
        fontFamily: 'Inter'
    },

    account: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
    },

    continetextes: {
        lineHeight: 25,
        letterSpacing: 0.7,
        fontWeight: '500',
        color: 'rgba(46, 62, 92, 1)',
        paddingTop: hp('4%'),
        fontSize: 15,
        textAlign: 'right',
        fontFamily: 'Inter'

    },

    loginButtonText: {
        lineHeight: 25,
        letterSpacing: 0.7,
        fontWeight: '700',
        color: 'rgba(31, 204, 121, 1)',
        paddingTop: hp('4%'),
        fontSize: 15,
        textAlign: 'right',
        fontFamily: 'Inter'

    },

    intemail:{
        borderColor:'rgba(31, 204, 121, 1)',
        
    },

    signUpbtn:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

});