import {
  StyleSheet
} from 'react-native';


var Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue"
  },
  containerColumn: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: "white"
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
    alignSelf: 'stretch',
    backgroundColor: "white"
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
  containerFirstColumn: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },
  containerSecondColumn: {
    backgroundColor: "white",
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
    fontWeight: 'bold',
    paddingTop: 15
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
    textAlign: 'justify'
  }
});

export default Styles