import { StyleSheet } from 'react-native-web';

export const styles = StyleSheet.create({
    tableView: {
        width: 486,
        margin:15,
        marginLeft: 100,
        boxShadow: '-2px 2px 5px 2px black',
        borderTopLeftRadius: '18px',
        borderTopRightRadius: '18px',
    },
    weightTableView: {
      display: 'block',
      width: 486,
      margin:15,
      marginLeft: 100,
      marginTop: 50,
      boxShadow: '-2px 2px 5px 2px black',
      borderTopLeftRadius: '18px',
      borderTopRightRadius: '18px',
  },
    title: {
        fontWeight: 850,
        fontSize: 17,
        color: 'white',
        backgroundColor: '#000eaf',
        alignText: 'center',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 3px #888',
        padding: 10,
        letterSpacing: 5,
        borderTopLeftRadius: '18px',
        borderTopRightRadius: '18px',
    },
    table: {
        marginTop:"-2px",
        backgroundColor: '#888',
    },
    row: {
        backgroundColor: 'black',
    },
    weightRow: {
      backgroundColor: '#aaa',
      textAlign: 'right',
  },
  weightHoverRow: {
    scale: 1.2
    },
    hoverRow: {
        scale: 1.2
    },
    header: {
        border: 'solid 1px #888',
        backgroundColor: '#00c',
        margin:'-12px',
    },
    headerText: {
        fontWeight: 750,
        fontSize: 16,
        color: 'white',
    },
    data: {
        width: 120,
        marginTop:'-5px',
    },
    text: {
        color: 'white',
        fontWeight: 550,
        fontSize: 15,
    }
  })