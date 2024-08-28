import { StyleSheet } from 'react-native-web';

export const styles = StyleSheet.create({
    modal:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    tableView: {
        height: '75vh',
        width: '80vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 18,
        boxShadow: '0px 1.5px 5px 0.5px black',
        border: 'solid 3.5px #222',
    },
    titleTable: {
      width: '101%',
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      border: 'solid 3.5px #222',
      marginTop: -3,
    },
    title: {
      height: 20,
      fontWeight: 850,
      fontSize: 17,
      color: '#222',
      backgroundColor: '#fff',
      letterSpacing: 2,
    },
    firstTable: {
      marginTop: -3,
      width: 500,
      backgroundColor: '#0090e7',
      border: 'solid 3.5px #222',
    },
    row: {
      display: 'flex',
      flexDirection: 'row'
    },
    table: {
      marginTop: 20,
      width: 500,
      height: 53.5,
      backgroundColor: '#0090e7',
      border: 'solid 3.5px #222',
    },
    header: {
      backgroundColor: '#0090e7',
      width: 130,
      height: 24,
      fontWeight: 750,
      fontSize: 16,
      color: 'white',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: 4
    },
    details: {
      width: 150,
      border: 'solid 2px #222',
      backgroundColor: '#fea',
      textAlign: 'center'
    },
    calories: {
      width: 298,
      border: 'solid 2px #222',
      backgroundColor: '#fea'
    },
    empty: {
      flex:1,
      height: 24,
      backgroundColor: '#0090e7',
      color: 'white',
      fontWeight: 500,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    picker: {
      width: 146,
      height: 20,
      border: 'none',
      backgroundColor: '#fea',
    },
    sexPicker: {
      width: 295,
      height: 20,
      border: 'none',
      backgroundColor: '#fea',
    },
    stone: {
      display: 'flex',
      flexDirection: 'row',
      width: 150,
      border: 'solid 2px #222'
    },
    stoneInput: {
      backgroundColor: '#fea',
      width: 40,
      textAlign: 'center'
    },
    heightInput: {
      backgroundColor: '#fea',
      width: 110,
      textAlign: 'center'
    },
    stoneText: {
      backgroundColor: '#fea',
      width: 38,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center'
    },
    submit: {
      backgroundImage: 'linear-gradient(0deg, #008 0%, blue 50%, #0bf 99%)',
      boxShadow: '-0.5px 0.5px 4.5px 1px black',
      borderRadius: 5,
      width: 100,
      height: 25,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      marginTop: 12,
      marginRight: 12
  },
  submitText: {
      color: 'white',
      fontWeight: 600
  }
});