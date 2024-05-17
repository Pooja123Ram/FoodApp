import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const globalStyles = StyleSheet.create({
  searchtext: {
    backgroundColor: '#d9d9d9',
    borderRadius: 30,
    width: 327,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    marginTop: 40,
  },

  searchtextItem: {
    backgroundColor: '#F4F5F7',
    borderRadius: 30,
    width: wp('65%'),
    height: hp('7%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
  },

  heartMainNext: {
    heartMainHome: {
      height: 30,
      width: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.2',
      borderRadius: 8,
      position: 'absolute',
      top: 10,
      right: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  },

  searchtextItemNext: {
    backgroundColor: '#d9d9d9',
    borderRadius: 30,
    width: 231,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  searchtextSearch: {
    backgroundColor: '#F4F5F7',
    borderRadius: 30,
    width: wp('85%'),
    height: hp('7%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '4%',
    marginTop: hp('4%'),
  },

  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },

  homeItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  containerItems: {
    marginVertical: '18%',
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    flex: 1,
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
  },

  // icon: {
  // marginRight: 5,
  // },

  category: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#3E5481',
    fontFamily: 'Inter',
  },

  searchHistory: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '6%',
    marginVertical: '2%',
  },

  searchHistoryMain: {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  searchHistoryText: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#3E5481',
    fontFamily: 'Inter',
  },

  clearHistoryText:{
    display:'flex',
    alignItems:'flex-end',
    marginHorizontal:wp(5),
    marginVertical:hp(2),
  },

  categorytextHome: {
    paddingHorizontal: hp('5%'),
    height: hp('5%'),
    marginVertical: hp('2%'),
  },

  containerBtnHme: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: hp('5%'),
    paddingVertical: 0,
    gap: 10,
  },

  buttonTextSearch: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18.15,
    letterSpacing: 0.7,
    color: '#9FA5C0',
    fontFamily: 'Inter',
  },

  foodHome: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18.15,
    letterSpacing: 0.7,
    color: '#9FA5C0',
    fontFamily: 'Inter',
  },

  ingreFood: {
    marginVertical: 26,
  },

  foodTab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F5F7',
    width: '100%',
    height: hp('5%'),
    marginTop: hp('2%')
  },


  lineHme: {
    borderBottomWidth: 8,
    borderColor: '#d9d9d9',
    marginVertical: 15,
  },


  cake: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#3E5481',
    fontFamily: 'Inter',
  },

  food: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  foodLikes: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginBottom: '6%',
    color: 'rgba(159, 165, 192, 1)'
  },

  mins: {
    color: 'rgba(159, 165, 192, 1)'
  },

  minsMain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  foodLikes1: {
    marginVertical: '1%',
  },

  carddiv: {
    display: 'flex',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    marginBottom: hp('3%'),

  },

  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },

  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 47,
    borderBottomWidth: 4,
    borderBottomColor: '#f5f5f5',
  },

  activeTabItem: {
    backgroundColor: '#EEEEEE',
    borderBottomColor: '#1FCC79',
    borderBottomWidth: 4,
  },
  tabTitle: {
    fontSize: 14,
    marginTop: 2,
    width: 45,
    letterSpacing: 0.7,
    lineHeight: 18.15,
    fontWeight: '600',
    fontFamily: 'Inter',
  },

  barmain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  activeButton: {
    backgroundColor: '#1FCC79',
  },

  activeButtonText: {
    color: '#fff',
  },


  cardAlign: {
    width: wp('35%'),
    marginLeft: wp('10%'),
  },

  carddivFood: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  new: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#3E5481',
    marginLeft: '6%',
    fontFamily: 'Inter',
  },

  today: {
    height: 27,
    width: 63,
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#3E5481',
    marginTop: '8%',
    // marginBottom:'4%',
    marginLeft: '6%',
    fontFamily: 'Inter',
  },

  yesterday: {
    marginTop: '5%',
    height: 27,
    width: 98,
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#3E5481',
    marginLeft: '6%',
    fontFamily: 'Inter',
  },

  todayImg: {
    position: 'relative',
    marginTop: 20,
  },

  imageFollow: {
    position: 'absolute',
    left: 5,
    bottom: 20
  },


  following: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },

  followingTwo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  followingSubTwo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 10,
  },

  todayImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginTop: 30,
  },

  textone: {
    height: hp('3%'),
    width: wp('20%'),
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 25,
    letterSpacing: 0.5,
    color: '#3E5481',
    fontFamily: 'Inter',
  },

  texttwo: {
    width: wp('45%'),
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18.52,
    letterSpacing: 0.5,
    color: '#9FA5C0',
    fontFamily: 'Inter',
  },

  followButtoon: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14.52,
    letterSpacing: 0.5,
    color: '#FFFFFF',
    fontFamily: 'Inter',
  },

  followButton: {
    height: 39,
    width: 87,
    borderRadius: 32,
    backgroundColor: '#1FCC79',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  todayText1: {
    height: 50,
    width: 138,
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 25,
    letterSpacing: 0.5,
    color: '#3E5481',
    fontFamily: 'Inter',
  },

  todayText2: {
    height: 51,
    width: 175,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14.52,
    letterSpacing: 0.5,
    color: '#9FA5C0',
    fontFamily: 'Inter',
  },

  todaySpan: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.007,
    textAlign: 'left',
    color: '#9FA5C0',
    fontFamily: 'Inter',
  },

  followedButtoon: {
    height: 39,
    width: 102,
    borderRadius: 32,
    backgroundColor: '#1FCC79',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14.52,
    letterSpacing: 0.5,
    textAlign: 'center',
    paddingTop: 12,
    color: '#2E3E5C',
    fontFamily: 'Inter',
  },

  containerModel: {
    position: 'relative'
  },

  reOpenModalText: {
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#3E5481'
  },

  reOpenModalMain: {
    position: 'absolute',
    bottom: hp(5),
    left: wp(44)
  },

  overlayImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlayTextScan: {
    height: hp('4%'),
    width: wp('20%'),
    fontSize: 22,
    fontWeight: '700',
    color: '#3E5481',
    lineHeight: 32,
    letterSpacing: 0.5,
    textAlign: 'center',
    marginTop: '4%',
    fontFamily: 'Inter',
  },


  foodNavIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 110,
    // marginLeft: 20,
  },

  foodNavIconIngre: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70,
    marginLeft: 10,
  },

  scanContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '8%',
  },
  scanButton: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#D0DBEA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    display: 'flex',
  },
  disabledButton: {
    opacity: 0,
  },
  scanButtonText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#3E5481',
    fontWeight: '700',
    lineHeight: 25,
    letterSpacing: 0.5,
    fontFamily: 'Inter',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
  },

  foodOverlayContainer: {
    padding: '5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: '8%',

  },

  modalBackgroundScan: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  modalContainerScan: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },


  modalItemMain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(5),
    gap: 70
  },

  modalItem: {
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#3E5481'
  },


  Scanedimage: {
    height: hp('20%'),
    width: wp('40%'),
    borderRadius: 100,
    marginTop: '5%',
  },

  scanFoodButtonOne: {
    display: "flex",
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    // gap: 30,
    height: 150,
    // width: 400,
    marginVertical: hp(5)
  },

  scanFoodButtonMain: {
    height: 230,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#D0DBEA',
    paddingTop: 20,
    borderRadius: 32,
    borderBottomWidth: 0,
  },

  scanFoodButtonText: {
    height: 27,
    color: '#3E5481',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 27,
    letterSpacing: 0.5,
    textAlign: 'center',
    fontFamily: 'Inter',
  },



  overlayText: {
    height: 32,
    width: 108,
    fontSize: 22,
    fontWeight: '700',
    color: '#3E5481',
    lineHeight: 32,
    letterSpacing: 0.5,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Inter',
  },

  iconLeft: {
    height: 24,
    width: 24,
  },

  foodName: {
    fontSize: 24,
    height: 32,
    width: 65,
    fontWeight: '700',
    color: '#3E5481',
    lineHeight: 32,
    letterSpacing: 0.5,
    textAlign: 'center',
    fontFamily: 'Inter',
  },

  foodNameIngre: {
    fontSize: 24,
    height: 35,
    fontWeight: '700',
    color: '#3E5481',
    lineHeight: 32,
    letterSpacing: 0.5,
    fontFamily: 'Inter',
  },

  foodNameScan: {
    fontSize: 24,
    height: 32,
    width: 65,
    fontWeight: '700',
    color: '#3E5481',
    lineHeight: 32,
    fontFamily: 'Inter',
  },



  iconBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },


  searchtextMain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchtextMainNext: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  timeicon: {
    paddingTop: 8,
  },

  suggestionText: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    marginHorizontal: 20,
    color: '#3E5481',
    fontFamily: 'Inter',
  },

  recentSearchMain: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  recentSearch: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  recentText: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#3E5481',
    paddingLeft: 17,
    fontFamily: 'Inter',

  },

  clockicon: {
    height: 24,
    width: 24,
  },

  arrowicon: {
    height: 24,
    width: 24,

  },

  home: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 60,
  },

  filtericon: {
    marginLeft: 10,
  },

  line3: {
    borderBottomWidth: 8,
    borderColor: '#F4F5F7',
    height: 8,
    width: '100%',
  },

  line4: {
    backgroundColor: 'rgba(208, 219, 234, 1)',
    height: 5,
    width: '20%',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  lineMain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '3%',
  },


  eraseicon: {
    height: 24,
    width: 24,
    color: '#2E3E5C',
  },


  input: {
    height: 20,
    width: 72,
    fontSize: 15,
    marginLeft: 5,
    lineHeight: 18.15,
    letterSpacing: 0.7,
    color: '#2E3E5C',
  },

  imgtext: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },


  cardIdOne1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },

  bottomnav_next: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },

  iconsearch: {
    // height: 24,
    // width: 24,
    height: hp('3%'),
    width: wp('6%'),
    color: '#3E5481',
  },

  suggetsted: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },

  suggetstedText: {
    backgroundColor: '#F4F5F7',
    height: hp('7%'),
    width: wp('30%'),
    borderRadius: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10%',
    marginTop: '10%',

  },

  suggetstedText1: {
    fontWeight: '500',
    fontSize: 15,
    letterSpacing: 0.7,
    lineHeight: 18,
    color: '#3E5481',
    fontFamily: 'Inter',
  },

  imageIndicator: {
    height: 5,
    width: 180,
    borderRadius: 20,
  },
  homeIndicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalView: {
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: '6%',
  },

  sliderText: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 20.57,
    letterSpacing: 0.7,
    fontFamily: 'Inter',
  },

  sliderTextMain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: '6%',
  },

  sliderText1: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#9FA5C0',
    fontFamily: 'Inter',
  },

  modalText: {
    height: 27,
    // width:200,
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#3E5481',
    textAlign: 'center',
    fontFamily: 'Inter',

  },

  imageDuration: {
    height: 100,
    // width:350,
    borderRadius: 10,
    resizeMode: 'contain',
    margin: 5,
  },

  buttonFood: {
    backgroundColor: '#F4F5F7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    width: wp('20%'),
    height: hp('6%'),
  },

  buttonFoodFil: {
    borderColor: '#F4F5F7',
    borderWidth: 2,
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    width: wp('22%'),
    height: hp('6%'),
  },

  containerBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 15,
    marginVertical: '2%'
  },

  buttonText: {
    color: '#9FA5C0',
    fontSize: 16,
    textAlign: 'center'
  },

  imageDurationNum1: {
    fontSize: 15,
    fontWeight: '700',
    color: '#9FA5C0',
    lineHeight: 18.15,
    letterSpacing: 0.7,
    fontFamily: 'Inter',
  },

  SliderNum: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  buttonText1: {
    color: '#9FA5C0',
    fontSize: 16,
    textAlign: 'center'
  },

  imageDurationMain: {
    paddingBottom: 20,
  },

  closeButton: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  closeButtonSub: {
    backgroundColor: '#F4F5F7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    width: 156,
    height: 56,
  },

  buttonTextCancel: {
    height: 18,
    // width:52,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18.15,
    letterSpacing: 0.7,
    color: '#2E3E5C',
    textAlign: 'center',
    fontFamily: 'Inter',
  },


  categorytext: {
    height: 27,
    width: 82,
    marginVertical: 20,
  },


  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },

  searchContainerNext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginVertical: '10%',
    paddingBottom: '5%'
  },

  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },

  searchIcon: {
    padding: 10,
  },

  image: {
    height: 31,
    width: 31,
    borderRadius: 31,
  },

  imagecontent: {
    height: hp('18%'),
    width: wp('38%'),
    borderRadius: 10,
    marginVertical: hp('1%'),
    position: 'relative',
  },




  homeIcon: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginVertical: 24,
  },

  cardmainItemSearch:{
display:'flex',
justifyContent:'center',
alignItems:'center',
marginVertical:hp(2)
  },

  erase: {
    marginLeft: 80,
  },

  backarrow: {
    height: 24,
    width: 24,
  },

  input: {
    height: 20,
    width: 72,
    fontSize: 15,
    marginLeft: 5,
    lineHeight: 18.15,
    letterSpacing: 0.7,
    color: '#2E3E5C',
  },

  line: {
    borderBottomWidth: 8,
    borderColor: '#F4F5F7',
    marginVertical: '7%',
    height: 8,
    width: 375,
  },

  homeFilter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },

  imageProfile: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },

  containerNotification1: {
    marginTop: '15%',
  },

  cardIdOne: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '6%',
  },

  buttonTextPressed:{
    color: 'white',
  },

  imageNotification: {
    height: hp('8%'),
    width: wp('16%'),
    borderRadius: 60,
  },

  profileNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '17%',
    marginHorizontal: '7%'
  },

  imageProfileDetails: {

    height: hp('15%'),
    width: wp('30%'),
    borderRadius: 60,
    marginBottom: '4%'
  },

  profileView: {
    // height: 27,
    // width: 126
    height: hp('3%'),
    width: wp('50%'),
  },

  profileView2: {
    width: '100%',
    height: '45%'
  },

  profileById: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  DetailsText: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: 'rgba(62, 84, 129, 1)',
    textAlign: 'center',
    fontFamily: 'Inter',
  },

  FollowersProfile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '5%'
  },

  recepeDetails: {
    height: hp('4%'),
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: 'rgba(62, 84, 129, 1)',
    textAlign: 'center',
    fontFamily: 'Inter',
  },

  recepeNum: {
    height: hp('2%'),
    // height: 15,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.52,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: 'rgba(159, 165, 192, 1)',
    fontFamily: 'Inter',
  },

  FollowProfileDet: {
    // height: 56,
    // width: 263,
    height: hp('6%'),
    width: wp('60%'),
    borderRadius: 50,
    backgroundColor: 'rgba(31, 204, 121, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '6%'
  },

  FollowProfileText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    lineHeight: 18.15,
    letterSpacing: 0.7,
    fontFamily: 'Inter',
  },

  indicator: {
    backgroundColor: 'rgba(31, 204, 121, 1)',
  },

  tabText: {
    color: 'rgba(159, 165, 192, 1)',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18.15,
    letterSpacing: 0.7,
    fontFamily: 'Inter',
  },

  tabTextFocused: {
    color: 'rgba(62, 84, 129, 1)'
  },

  imageRecipe: {
    height: hp('18%'),
    width: wp('38%'),
    borderRadius: 16,
    position: 'relative'
  },

  dishnameLike: {
    height: 27,
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    marginVertical: '1%',
    fontFamily: 'Inter',
  },

  firstScreen: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardMainImage: {
    width: '100%',
    height: 475,
    position: 'relative',
  },

  imageProfileDetailsCard: {
    height: '100%',
    width: '100%',
  },



  cardDetailsbyid: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    top: '75%',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: '8%',
    paddingBottom: 20,
  },


  minLine: {
    width: '15%',
    height: 4,
    backgroundColor: 'rgba(208, 219, 234, 1)',
    borderRadius: 20,
  },

  minLine1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '4%'
  },

  cardDishname: {
    fontSize: 17,
    fontWeight: '700',
    color: 'rgba(62, 84, 129, 1)',
    lineHeight: 27,
    letterSpacing: 0.5,
    fontFamily: 'Inter',
  },

  recepeImage1: {
    height: hp('4%'),
    width: wp('8%'),
    borderRadius: 20,
  },

  profileNameText: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#3E5481',
    paddingTop: hp(2)
  },

  scanIconRender: {

  },

  likesHeart: {
    height: hp('4%'),
    width: wp('8%'),
    borderRadius: 20,
    backgroundColor: 'rgba(31, 204, 121, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  recepeProfile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  recepeImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },

  recepeCand: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 25,
    letterSpacing: 0.5,
    color: 'rgba(62, 84, 129, 1)',
    fontFamily: 'Inter',
  },

  lineRecepe: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(208, 219, 234, 1)',
    marginVertical: '4%',
  },

  descriptionHeader: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: 'rgba(62, 84, 129, 1)',
    marginVertical: '2%',
    fontFamily: 'Inter',
  },

  descriptionLines: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25,
    letterSpacing: 0.5,
    color: 'rgba(159, 165, 192, 1)',
    fontFamily: 'Inter',
  },

  descriptionLines1: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25,
    letterSpacing: 0.5,
    color: 'rgba(159, 165, 192, 1)',
    width: '90%',
    fontFamily: 'Inter',
  },


  ingredientsCheck: {
    height: 24,
    width: 24,
    borderRadius: 30,
    backgroundColor: 'rgba(227, 255, 248, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  ingredientsList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: '1%',
  },

  stepOne: {
    height: 24,
    width: 24,
    borderRadius: 20,
    backgroundColor: 'rgba(46, 62, 92, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },

  stepHead: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10
  },

  ingreImageMain: {
    height: 155,
    width: '100%',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%'
  },

  ingreImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },

  cardMainTab: {
    marginVertical: '4%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    rowGap: 20,
  },

  cardDishnameImage1: {
    height: 375,
    width: '100%',
    position: 'relative',
  },

  image1card: {
    height: '100%',
    width: '100%'
  },

  cardDetailsImage1: {
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  stepTextone: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14.52,
    letterSpacing: 0.7,
    color: '#fff',
    fontFamily: 'Inter',
  },

  textImage1: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: 'rgba(62, 84, 129, 1)',
    marginBottom: '2%',
    fontFamily: 'Inter',
  },

  ingre1: {
    height: 155,
    width: '96%',
    borderRadius: 20,
  },

  backarrowCard: {
    position: 'absolute',
    top: 50,
    left: 30,
    height: 53,
    width: 53,
    borderRadius: 40,
    backgroundColor: 'rgba(204, 202, 196, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ingreImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '4%'
  },

  profile1card: {
    // height: 32,
    // width: 32,
    height: hp('4%'),
    width: wp('8%'),
    borderRadius: 20,
  },

  prfileName1: {
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 25,
    letterSpacing: 0.5,
    color: 'rgba(62, 84, 129, 1)',
    fontFamily: 'Inter',
  },

  name1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  profile1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textDesc: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgba(159, 165, 192, 1)',
    lineHeight: 25,
    letterSpacing: 0.5,
    fontFamily: 'Inter',
  },

  stepText: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25,
    letterSpacing: 0.5,
    color: 'rgba(62, 84, 129, 1)',
    fontFamily: 'Inter',
  },

  textDescone: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2E3E5C',
    lineHeight: 25,
    letterSpacing: 0.5,
    width: '90%',
    fontFamily: 'Inter',
  },

  heartMain: {
    // height: 30,
    // width: 30,
    height: hp('4%'),
    width: wp('8%'),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  heartMain1: {
    height: hp('4%'),
    width: wp('8%'),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    position: 'absolute',
    top: 20,
    right: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  heartMainHome: {
    height: hp('4%'),
    width: wp('8%'),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    position: 'absolute',
    top: 20,
    right: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  heartMainUpload: {
    height: hp('4%'),
    width: wp('8%'),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    position: 'absolute',
    top: 20,
    right: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  coverPhotoImage: {
    height: 100,
    width: 100,
  },

  backarrowUpload: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: '10%',
    paddingVertical: '4%'
  },

  uploadProfileMain: {
    flex: 1,
    marginTop: '10%',
  },

  coverImageUpload: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  FollowersProfileUpload: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '6%'
  },

  cardContainerAtTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  cardDetailsAtTop: {
    zIndex: 0,
    paddingHorizontal: '6%',
  },

  buttonDrinksFilter: {
    backgroundColor: '#d9d9d9',
    padding: 10,
    marginVertical: 5,
    borderRadius: 32,
    width: 98,
    height: 48,
    alignItems: 'center',
  },

  buttonFoodFilter: {
    backgroundColor: '#d9d9d9',
    padding: 10,
    marginVertical: 5,
    borderRadius: 32,
    width: 86,
    height: 48,
    alignItems: 'center',
  },

  buttonAllFilter: {
    backgroundColor: '#d9d9d9',
    padding: 10,
    marginVertical: 5,
    borderRadius: 32,
    width: 68,
    height: 48,
    alignItems: 'center',
  },
  containerBtnFilter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
  },

  homeIndicatorFilter: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  imageIndicatorFilter: {
    height: 10,
    width: 180,
    borderRadius: 20,
  },

  // Common Header Buttons
  mainContainerUploadStep1: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('6%'),
    flex: 1,
  },

  headerContUploadStep1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cancelButtonUploadStep1: {
    color: '#FF6464',
    fontSize: wp(5),
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  countnumtxt: {
    fontSize: wp(4.5),
    fontFamily: 'Inter',

  },


  // UploadStep1_Styles

  imageContUploadStep1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(2),
    borderWidth: wp(0.5),
    borderStyle: 'dashed',
    padding: wp(4),
    borderColor: '#D0DBEA',
    borderRadius: wp(4),
    marginTop: hp(3.8)
  },

  cancelUploadStep1: {
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#FF6464'
  },

  picLimtUploadStep1: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.52,
    letterSpacing: 0.5,
    color: '#9FA5C0',
    height: hp(3),
    marginTop: hp(0.8),
    textAlign: 'center'
  },

  countnumtxtUploadStep1: {
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 27,
    letterSpacing: 0.5,
    color: '#9FA5C0'
  },

  uploadLabelUploadStep1: {
    // height: hp(3),
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: '#3E5481',
    marginTop: hp(2),
    fontFamily: 'Inter',
  },
  coverPicUploadStep1: {
    width: wp(18),
    height: wp(18),
  },

  imageUploadStep1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  foodNamLabelUploadStep1: {
    fontSize: 17,
    paddingTop: hp(2),
    fontWeight: '700',
    color: '#3E5481',
    fontFamily: 'Inter',
    lineHeight: 27,
    letterSpacing: 0.5
  },


  foodIpUploadStep1: {
    height: hp(8),
    borderWidth: wp(0.3),
    borderColor: '#D0DBEA',
    borderRadius: wp(8),
    paddingLeft: wp(6),
    marginTop: hp(1),
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18.15,
    letterSpacing: 0.7,
    fontFamily: 'Inter',
  },

  descriLabelUploadStep1: {
    fontSize: wp(5),
    paddingTop: hp(2),
    fontWeight: '700',
    color: '#3E5481',
    fontFamily: 'Inter',
  },
  descriIpUploadStep1: {
    marginTop: hp(0.8),
    height: hp(11),
    borderWidth: wp(0.3),
    borderColor: '#D0DBEA',
    padding: wp(2),
    textAlignVertical: 'top',
    borderRadius: wp(4),
    paddingLeft: wp(4),
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18.15,
    letterSpacing: 0.7,
    fontFamily: 'Inter',
  },

  nxtbut1UploadStep1: {
    backgroundColor: '#1FCC79',
    marginTop: hp(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(7),
    borderRadius: wp(8),
  },
  nextBut1TxtUploadStep1: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18.15,
    letterSpacing: 0.7,
    fontFamily: 'Inter',
  },
  cookDuriUploadStep1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
    fontSize: wp(6),

  },
  cookDuriLabelUploadStep1: {
    fontWeight: '700',
    color: '#3E5481',
    fontFamily: 'Inter',
    lineHeight: 27,
    letterSpacing: 0.5,
    fontSize: 17,
  },
  cookDuriUnitsUploadStep1: {
    opacity: 0.5,
    fontFamily: 'Inter',
  },
  slideValuesUploadStep1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(3),
    fontFamily: 'Inter',
  },

  cookingDuration_SliderUploadStep1: {
    width: '100%',
    // width: wp(100),
    alignSelf: 'center',
    marginVertical: hp(2)
  },

  pageIndex: {
    color: '#3E5481'
  },

  // UploadStep2_Styles

  mainContainerUploadStep2: {
    marginHorizontal: wp('5%'),
    marginVertical: hp('6%'),
  },

  ingredientsLabelUploadStep2: {
    fontSize: 17,
    lineHeight: 27,
    letterSpacing: 0.5,
    marginVertical: hp(1),
    fontWeight: '700',
    color: '#3E5481',
    fontFamily: 'Inter',
  },

  groupUploadStep2: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18.15,
    letterSpacing: 0.7,
    color: '#3E5481'
  },

  inputIngredientUploadStep2: {
    borderWidth: wp(0.3),
    padding: hp(1.5),
    // marginBottom: hp(1),
    width: wp(80),
    borderRadius: wp(8),
    borderColor: '#D0DBEA',
    fontSize: 15,
    lineHeight: 18.15,
    letterSpacing: 0.7,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  groupPlustextUploadStep2: {
    color: "#3E5481",
    fontWeight: '500',
    fontFamily: 'Inter',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },


  ingredientsContainerUploadStep2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
  },
  ingredientFieldUploadStep2: {
    paddingTop: hp(1),
  },
  ingredientField1UploadStep2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: hp(2)
  },
  addIngredientButUploadStep2: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(7),
    borderRadius: wp(8),
    borderColor: '#D0DBEA',
    borderWidth: wp(0.3),
    marginTop: hp(4),
  },
  addIngredientButtxtUploadStep2: {
    color: '#3E5481',
    fontSize: wp(4.5),
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  plusIconUploadStep2: {
    fontSize: 14,
    color: "#3E5481",
    fontWeight: '700'
  },

  addIngredienttUploadStep2: {
    color: '#3E5481',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Inter',
    lineHeight: 18.15,
    letterSpacing: 0.7
  },

  separatorUploadStep2: {
    backgroundColor: '#F4F5F7',
    height: hp(1),
    marginTop: hp(4),
  },
  stepsSectionLabelUploadStep2: {
    fontSize: 17,
    marginVertical: hp(1),
    lineHeight: 20.57,
    letterSpacing: 0.7,
    fontWeight: '700',
    color: '#3E5481',
    fontFamily: 'Inter',
  },

  tellAboutUploadStep2: {
    height: hp('18%'),
    width: wp('80%'),
    borderWidth: 1,
    borderColor: '#D0DBEA',
    borderStyle: 'solid',
    borderRadius: 8,


  },
  stepnumContUploadStep2: {
    backgroundColor: '#3E5481',
    width: wp(6),
    borderRadius: wp(25),
    paddingLeft: wp(2),
    marginLeft: wp(1)
  },
  stepNumIconUploadStep2: {
    paddingTop: hp(2),
  },
  stepnumUploadStep2: {
    color: '#ffff',
    fontFamily: 'Inter',
  },
  ingredientsIconUploadStep2: {
    fontSize: wp(8),
    color: "#9FA5C0"
  },

  stepsIconUploadStep2: {
    paddingTop: hp(2),
    fontSize: wp(8),
    color: "#9FA5C0"
  },

  stepsmultilineInput: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '500',
    color: '#9FA5C0',
    lineHeight: 14.52,
    letterSpacing: 0.5,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1)
  },

  stepsContainUploadStep2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp(1)
  },
  stepsmultilineInputUploadStep2: {
    height: hp(15),
    textAlignVertical: 'top',
    marginTop: hp(1.8),
    borderRadius: wp(3),
    paddingHorizontal: wp(3),
    borderWidth: wp(0.3),
    borderColor: '#ccc',
    padding: wp(3),
    marginBottom: hp(1),
    width: wp(80),
    fontSize: wp(4.3),
    fontFamily: 'Inter',
  },
  imageCapturerIconContainerUploadStep2: {
    backgroundColor: '#F4F5F7',
    width: wp(90),
    height: hp(6),
    alignSelf: 'center',
    borderRadius: wp(4),
    marginTop: hp(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraIconUploadStep2: {
    alignSelf: 'center',
    // marginTop: hp(1),
    fontSize: wp(7),
    color: "#3E5481"
  },
  capturedImagePreviewUploadStep2: {
    width: wp(20),
    height: wp(20),
    marginLeft: wp(2)
  },

  navigationButtonsUploadStep2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp(4)
  },
  navbuttonBackUploadStep2: {
    height: hp(7),
    width: wp(40),
    backgroundColor: '#F4F5F7',
    alignItems: 'center',
    paddingTop: hp(2),
    borderRadius: wp(8)
  },
  navbuttonNextUploadStep2: {
    height: hp(7),
    width: wp(40),
    backgroundColor: '#1FCC79',
    alignItems: 'center',
    paddingTop: hp(2),
    borderRadius: wp(8)
  },
  navbuttonBackTxtUploadStep2: {
    fontWeight: '700',
    fontSize: wp(4),
    color: '#3E5481',
    fontFamily: 'Inter',
    lineHeight: 18.15,
    letterSpacing: 0.7
  },
  navbuttonNextTxtUploadStep2: {
    fontWeight: '700',
    fontSize: wp(4),
    // color: '#FFFFFF',
    color: '#2E3E5C',
    fontFamily: 'Inter',
    lineHeight: 18.15,
    letterSpacing: 0.7
  },

  navbuttonNext: {

    height: hp(6),
    width: wp(32),
    borderRadius: 32,
    // backgroundColor: '#1FCC79',
    backgroundColor: '#F4F5F7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  navbuttonBack: {
    height: hp(6),
    width: wp(32),
    borderRadius: 32,
    backgroundColor: '#F4F5F7',
    // backgroundColor:'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalContainerUploadStep2: {
    flex: 1,
    paddingLeft: wp(5),
    paddingRight: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContentUploadStep2: {
    backgroundColor: 'white',
    borderRadius: wp(3),
    padding: wp(5),
    alignItems: 'center',
    elevation: 5,
  },


  // Capturer_Styles

  cameraContainerCapture: {
    flex: 1,
    width: '100%',
  },
  captureButton: {
    position: 'absolute',
    bottom: hp(8),
    borderRadius: wp(8),
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    alignSelf: 'center',
  },
  closeButtonCapture: {
    position: 'absolute',
    top: hp(2),
    right: wp(4),
    backgroundColor: '#fff',
    borderRadius: wp(10),
    padding: wp(2),
  },
  cameraCapturer_Button_Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: hp(4)
  },
  camera_Capture_Icon: {
    fontSize: wp(15),
    color: 'silver'
  },
  camera_Close_Icon: {
    fontSize: wp(4),
    color: 'silver'
  },


  // Uploadsuccess_Styles

  uploadSuccess_container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  Uploadsuccess_Image_Container: {
    marginBottom: hp(4)

  },

  Uploadsuccess_Image: {
    width: wp(40),
    height: wp(40)
  },

  Uploadsuccess_Title: {
    fontSize: wp(6.5),
    fontWeight: '700',
    textAlign: 'center',
    color: '#3E5481',
    fontFamily: 'Inter',
  },

  Uploadsuccess_Message: {
    textAlign: 'center',
    fontSize: wp(4.5),
    fontFamily: 'Inter',
  },
  Uploadsuccess_Backbutton: {
    backgroundColor: '#1FCC79',
    padding: hp(2),
    borderRadius: wp(8),
    marginTop: hp(4),
    width: wp(50),
    paddingLeft: wp(9)

  },

  UploadBackbutton_text: {
    color: 'white',
    fontWeight: '700',
    fontSize: wp(5),
    fontFamily: 'Inter',
  },

  // UploadSuccess

  uploadSuccessImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  successImage: {
    marginVertical: '7%',
  },
  successMessage: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3E5481',
    lineHeight: 32,
    letterSpacing: 0.5,
    paddingVertical: '1%',
    fontFamily:'Inter'
  },

  successMessageOne: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25,
    letterSpacing: 0.5,
    color: '#2E3E5C',
    textAlign: 'center',
    fontFamily:'Inter'
  },

  successButtoon: {
    backgroundColor: '#1FCC79',
    paddingHorizontal: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 32,
    marginVertical: '10%',
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 18.15,
    letterSpacing: 0.7,
    fontFamily:'Inter'
  }

});