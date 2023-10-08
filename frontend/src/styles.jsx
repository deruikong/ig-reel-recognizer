import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    height: 40,
    padding: 10,
    margin: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'center',
  },
  song: {
    marginLeft: 50,
    fontSize: 50,
    fontWeight: 'bold',
    // marginBottom: 15,
  },
  artist: {
    fontSize: 30,
    marginLeft: 50,
    // fontWeight: '',
    // marginBottom: 15,
  },
  video: {
    width: 200,
    height: 200,
    marginBottom: 15,
    alignSelf: 'center',
  },
  button: {
    margin: 10,
  },
  albumCover: {
    width: 300,
    height: 300,
    marginBottom: 15,
    alignSelf: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText:{
    marginBottom: 15,
    textAlign: 'center',
  },
  // leftAligned: {
  //   // backgroundColor: 'red',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'stretch',
  //   // justifyContent: 'center',
  //   backgroundColor: 'red',
  //   // flex: 1,
  // }
  // centered: {
  //   // backgroundColor: 'red',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'stretch',
  //   // justifyContent: 'center',
  //   backgroundColor: 'red',
  //   // flex: 1,
  // }
});

export default styles;