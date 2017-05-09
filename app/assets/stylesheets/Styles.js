import {
  StyleSheet
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
    backgroundColor: "yellow",
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
    alignItems: 'center',
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 60,
    margin: 2
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
    padding: 20
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'justify',
  },
  checkInput: {
    height: 40,
    width: 400,
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
    width: 470,
    resizeMode: 'cover'
  },
  showProjectHeader: {
    flex: 1,
    height: 220,
    width: 418,
    resizeMode: 'contain'
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
    height:40,
    backgroundColor: 'blue',
    borderColor: 'black',
    width: 80,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  btnWrapper: {
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
});

export default Styles