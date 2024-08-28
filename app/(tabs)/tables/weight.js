import { View, Text, StyleSheet } from 'react-native-web';

const WeightTable = (props) => {
    const headers = ["Stone & Pounds", 'Pounds', 'Kilograms']
    function getValues(kg){
        const num = kg*2.20462;
        const lbs = Math.floor((num+Number.EPSILON)*100)/100;
        const stone = Math.floor(((lbs/14)+Number.EPSILON)*100)/100;
        const stoneWithoutDec = stone.toString().split(".")[0];
        const stoneLbs = Math.floor(((lbs-(14*Number(stoneWithoutDec)))+Number.EPSILON)*10)/10;
        const stoneAndPounds = `${stoneWithoutDec}st ${stoneLbs}lbs`;
        const values = {
            kg: `${kg}`,
            lbs: `${lbs}`,
            stone: `${stone}`,
            stoneAndPounds: `${stoneAndPounds}`,
        };
        return values;
    }
    let arr = [];
    for (let i=39; i<=350; i++){
        arr.push(getValues(i));
    }

    function hoverFunc(id, i){
        console.log(id)
        const aboveID = `weightRow${i-1}`;
        const belowID = `weightRow${i+1}`;
        const above = document.getElementById(aboveID);
        const row = document.getElementById(id);
        const below = document.getElementById(belowID);
        row.style.scale = "1.1";
        row.style.backgroundColor = "#ccc";
        if(above===null){

        }else{
            above.style.scale = "1.05";
            above.style.backgroundColor = "#bbb";
        }
        if (below===null){

        }else{
            below.style.scale = "1.05";
            below.style.backgroundColor = "#bbb";
        }
        
    }
    function endHoverFunc(id, i){
        const aboveID = `weightRow${i-1}`;
        const belowID = `weightRow${i+1}`;
        const above = document.getElementById(aboveID);
        const row = document.getElementById(id);
        const below = document.getElementById(belowID);
        row.style.scale = "1";
        row.style.backgroundColor = "#aaa";
        if(above===null){

        }else{
            above.style.scale = "1";
            above.style.backgroundColor = "#aaa";
        }
        if (below===null){

        }else{
            below.style.scale = "1";
            below.style.backgroundColor = "#aaa";
        }
    }

  return (
    <View style={styles.tableView} id="weightTable">
      
      <View style={styles.table}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>
            WEIGHT
          </Text>
        </View>
        <View style={styles.row}>
          {headers.map((header, i) => {
            return(
              <View style={styles.header} key={i}>
                <Text style={styles.headerText}>
                  {header}
                </Text>
              </View>
            )
          })}  
        </View>
          {arr.map((object, i) => {
            const rowID = `weightRow${i}`
            return(
              <View style={styles.row} key={i} id={rowID} onMouseOver={() => hoverFunc(rowID, i)} onMouseOut={() => endHoverFunc(rowID, i)}>
                <View style={styles.data}>
                  <Text style={styles.text}>
                    {object.stoneAndPounds}
                  </Text>
                </View>
                <View style={styles.data}>
                  <Text style={styles.text}>
                    {object.lbs}
                  </Text>
                </View>
                <View style={styles.data}>
                  <Text style={styles.text}>
                    {object.kg}
                  </Text>
                </View>
              </View>
              )
            }
          )}
      </View>                 
    </View>
  )
};

export default WeightTable;

const styles = StyleSheet.create({
  tableView: {
    width: 390,
    margin: 10,
    boxShadow: '-2px 2px 5px 2px black',
    borderTopLeftRadius: '18px',
    borderTopRightRadius: '18px',
  },
  title: {
    width: 390,
    fontWeight: 850,
    fontSize: 17,
    color: 'white',
    backgroundColor: '#000eaf',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid 2px #888',
    padding: 10,
    letterSpacing: 5,
    borderTopLeftRadius: '18px',
    borderTopRightRadius: '18px',
  },
  table: {
    borderTopLeftRadius: '18px',
    borderTopRightRadius: '18px',
    width: 390,
    backgroundColor: '#888',
    border: 'solid 2px #888',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#aaa',
  },  
  header: {
    border: 'solid 2px #888',
    backgroundColor: '#00c',
    width:130,
    display: 'flex',
    alignItems: 'center',
    height: 30,
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 750,
    fontSize: 16,
    color: 'white',
  },
  data: {
    width: 130,
    display: 'flex',
    alignItems: 'flex-end',
    border: 'solid 2px #888',
  },
  text: {
    color: 'white',
    fontWeight: 550,
    fontSize: 15,
    marginRight: 20
  }
})