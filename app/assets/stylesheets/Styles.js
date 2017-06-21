import {
  StyleSheet,
} from 'react-native';


var Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: null,
    height: null,
  },
  containerColumn: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: "rgba(0,0,0,0)"
  },
  containerColumnx: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: "rgba(0,0,0,0)",
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
    alignSelf: 'stretch',
    backgroundColor: "rgba(0,0,0,0)",
  },
  containerPadding: {
    flex: 0.5,
    alignSelf: 'stretch',
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerPaddingSmall: {
    flex: 0.1,
    alignSelf: 'stretch',
    //backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerPaddingSpacer: {
    flex: 0.1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerContent: {
    flex: 0.1,
    //alignSelf: 'stretch',
    //alignItems: 'center',
    justifyContent: 'center'
  },
  containerFirstColumn: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },
  containerSecondColumn: {
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },
  iconStyle: {
    resizeMode:'contain',
    height: 170,
    width: 170
  },
  regText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bigText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  smallText: {
    fontSize: 15,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'justify'
  },
  bText: {
    fontWeight: 'bold'
  },

  //components list item
  li: {
    flex: 1,
    backgroundColor: "white",
    height: 60,
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start' ,
    paddingLeft: 10,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  liItem: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  liItemInfo: {
    fontSize: 10,
    textAlign: 'left'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 0,
    paddingBottom: 20
  },
  textWrapper: {
    padding: 20,
    alignItems: 'center'
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'justify',
  },
  checkInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 20,
    marginTop: 10,
    color: 'black',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  projectItem: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    backgroundColor: 'skyblue',
    margin: 3
  },
  projectIcon: {
    flex: 1,
    height: 100,
    width: 140,
    resizeMode: 'cover'
  },
  showProjectIcon: {
    flex: 1,
    height: 300,
    width: 400,
    resizeMode: 'stretch'
  },
  showProjectHeader: {
    flex: 1,
    height: 220,
    width: 418,
    resizeMode: 'cover'
  },
  imageHolder: {
    flex: .4,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHolder: {
    flex: .6,
    padding: 10
  },
  //Searching
  searchInput: {
    height: 40,
    width: 300,
    fontSize: 18,
    color: 'black',
  },
  buttonText: {
    fontSize:18,
    color:'white',
    alignSelf: 'center'
  },
  button: {
    flex: 1,
    height:40,
    backgroundColor: 'blue',
    borderColor: 'black',
    width: 80,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  btnWrapper: {
    height: 50, 
    width: 300, 
    backgroundColor: 'blue', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  btnBlock: {
    backgroundColor: 'yellow',
    width: 200,
    alignItems: 'center'
  },

  textInputWrapper: {
    padding: 15
  },

  regTextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    margin: 3
  },

  backgroundImage:{
    flex: 1,
    width:500,
    height:880,
  },

  labelText:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 179, 
    height: 80, 
    backgroundColor: 'yellow'
  },

  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    marginBottom: 10
  },
    mainIconStyle: {
    resizeMode:'contain',
    height: 90,
    width: 90,
    borderWidth: .5,
  },
    mainMenuButton: {
    borderRadius: 70,
    width: 140,
    height: 140,
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
    iconSpacing: {
      width: 50, 
      height: 50,
    },
 

  map: {
     ...StyleSheet.absoluteFillObject,
  },


  menuButtonWrapper: {justifyContent: 'center', alignItems: 'center'},
  menuButtonText: {color: "white", fontSize: 12, fontWeight: 'bold'}

  
});

export default Styles