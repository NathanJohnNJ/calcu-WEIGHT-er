import { View, Text } from 'react-native-web';
import { styles } from './styles';

const HeightTable = (props) => {
    const headers = ["Feet & Inches", 'Feet', 'Inches', 'Centimetre']
    function getValues(cm){
        const num = cm/2.54;
        const inches = Math.floor((num+Number.EPSILON)*100)/100;
        const feet = Math.floor(((inches/12)+Number.EPSILON)*100)/100;
        const feetWithoutDec = feet.toString().split(".")[0];
        const feetInches = Math.floor(((inches-(12*Number(feetWithoutDec)))+Number.EPSILON)*10)/10;
        const feetAndInches = `${feetWithoutDec}' ${feetInches}"`;
        const values = {
            cm: `${cm}`,
            inches: `${inches}`,
            feet: `${feet}`,
            feetAndInches: `${feetAndInches}`,
        };
        return values;
    }
    let arr = [];
    for (let i=140; i<=206; i++){
        arr.push(getValues(i));
    }

    function hoverFunc(id, i){
        console.log(id)
        const aboveID = `heightRow${i-1}`;
        const belowID = `heightRow${i+1}`;
        const above = document.getElementById(aboveID);
        const row = document.getElementById(id);
        const below = document.getElementById(belowID);
        row.style.scale = "1.1";
        row.style.backgroundColor = "#333";
        if(above===null){

        }else{
            above.style.scale = "1.05";
            above.style.backgroundColor = "#121212";
        }
        if (below===null){

        }else{
            below.style.scale = "1.05";
            below.style.backgroundColor = "#121212";
        }
        
    }
    function endHoverFunc(id, i){
        const aboveID = `heightRow${i-1}`;
        const belowID = `heightRow${i+1}`;
        const above = document.getElementById(aboveID);
        const row = document.getElementById(id);
        const below = document.getElementById(belowID);
        row.style.scale = "1";
        row.style.backgroundColor = "#000";
        if(above===null){

        }else{
            above.style.scale = "1";
            above.style.backgroundColor = "#000";
        }
        if (below===null){

        }else{
            below.style.scale = "1";
            below.style.backgroundColor = "#000";
        }
    }

    return (
        <View style={styles.tableView} id="heightTable">
            <Text style={styles.title}>
                HEIGHT
            </Text>
            <table style={styles.table} >
                <thead>
                    <tr style={styles.row}>
                        {headers.map((header, i) => {
                            return(
                                <th style={styles.header} key={i}>
                                    <Text style={styles.headerText}>
                                        {header}
                                    </Text>
                                </th>
                            )
                        })}
                   
                    </tr>
                </thead> 
                <tbody>
                    {arr.map((object, i) => {
                        const rowID = `heightRow${i}`
                        return(
                            <tr style={styles.row} key={i} id={rowID} onMouseOver={() => hoverFunc(rowID, i)} onMouseOut={() => endHoverFunc(rowID, i)}>
                                <td style={styles.data}>
                                    <Text style={styles.text}>
                                        {object.feetAndInches}
                                    </Text>
                                </td>
                                <td style={styles.data}>
                                    <Text style={styles.text}>
                                        {object.feet}
                                    </Text>
                                </td>
                                <td style={styles.data}>
                                    <Text style={styles.text}>
                                        {object.inches}
                                    </Text>
                                </td>
                                <td style={styles.data}>
                                    <Text style={styles.text}>
                                        {object.cm}
                                    </Text>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
                   
        </View>
    )
};

export default HeightTable;

