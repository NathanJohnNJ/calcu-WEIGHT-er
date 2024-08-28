import { View, Text, Modal, TextInput, Picker, Pressable} from 'react-native-web';
import { styles } from './styles';
import { useState } from 'react';

const OpeningModal = (props) => {

function getHeightValues(cm){
  const num = cm/2.54;
  const inches = Math.floor((num+Number.EPSILON)*100)/100;
  const feet = Math.floor(((inches/12)+Number.EPSILON)*100)/100;
  const feetWithoutDec = feet.toString().split(".")[0];
  const remainderInches = Math.floor(((inches-(12*Number(feetWithoutDec)))+Number.EPSILON)*10)/10;
  const array = [cm, inches, feet, remainderInches]
  return array;
}

function convertFromFeet(feet, inches){
  const totalInches = (feet*12)+inches;
  const num = totalInches/2.54;
  const cm = Math.floor((num+Number.EPSILON)*100)/100;
  const array = getHeightValues(cm);
  return array;
}
function convertFromInches(inches){
  const num = inches/2.54;
  const cm = Math.floor((num+Number.EPSILON)*100)/100;
  const array = getHeightValues(cm);
  return array;
}
  
  function weightSection(){
    if(props.weightUnits==="kg"){
      setWeight(props.weight[0]);
      return (
        <View style={styles.stone}>
          <TextInput
          style={styles.heightInput}
          onChangeText={setWeight}
          value={weight}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>{props.weightUnits}</Text>
        </View>
      )
    } else if (props.weightUnits==="lbs"){
      setWeight(props.weight[1]);
      return (
        <View style={styles.stone}>
          <TextInput
          style={styles.heightInput}
          onChangeText={setWeight}
          value={weight}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>{props.weightUnits}</Text>
        </View>
      )
    } else{
      setStone(props.weight[2]);
      setLbs(props.weight[3]);
      return(
        <View style={styles.stone}>
          <TextInput
          style={styles.stoneInput}
          onChangeText={setStone}
          value={stone}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>st</Text>
          <TextInput
          style={styles.stoneInput}
          onChangeText={setLbs}
          value={lbs}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>lbs</Text>
        </View>
      )
    } 
  }

  function heightSection(){
    if(props.heightUnits==="cm"){
      setHeight(props.height[0]);
      return (
        <View style={styles.stone}>
          <TextInput
          style={styles.heightInput}
          onChangeText={setHeight}
          value={height}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>{props.heightUnits}</Text>
        </View>
      )
    } else if(props.heightUnits==="inches"){
      setHeight(props.height[1]);
      return (
        <View style={styles.stone}>
          <TextInput
          style={styles.heightInput}
          onChangeText={setHeight}
          value={height}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>{props.heightUnits}</Text>
        </View>
      )
    } else {
      setFeet(props.height[2]);
      setInches(props.height[3]);
      return(
        <View style={styles.stone}>
          <TextInput
          style={styles.stoneInput}
          onChangeText={setFeet}
          value={feet}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>'</Text>
          <TextInput
          style={styles.stoneInput}
          onChangeText={setInches}
          value={inches}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>"</Text>
        </View>
      )
    }
  }

  function submit(){
    if (props.weightUnits==='stone'){
      const weightArray = convertFromSt(stone, lbs);
      props.setWeight(weightArray)
    } else if (props.weightUnits==='lbs'){
      const weightArray = convertFromLbs(weight);
      props.setWeight(weightArray)
    } else {
      const weightArray = getWeightValues(weight);
      props.setWeight(weightArray)
    }
    if (props.heightUnits==='feet'){
      const heightArray = convertFromFeet(feet, inches);
      props.setHeight(heightArray)
    } else if (props.heightUnits==='inches'){
      const heightArray = convertFromInches(height);
      props.setHeight(heightArray)
    } else {
      const heightArray = getHeightValues(height);
      props.setHeight(heightArray)
    }
  }

  // function submit(){
  //   if (props.heightUnits==='FeetAndInches'){
  //     const height = `${feet} '  ${inches} "`
  //     props.setHeight(height)
  //   }
  // }

  return (
          <View style={styles.row}>
            <Text style={styles.header}>
              Height
            </Text>
            <View style={{backgroundColor: '#fea', border: 'solid 1.6px #222', marginRight: '-1px'}}>
              <Picker
              style={styles.picker}
              onValueChange={props.setHeightUnits}
              selectedValue={props.heightUnits}
              >
                <Picker.Item
                value="cm"
                label="Centimeters" />
                <Picker.Item
                value='inches'
                label="Inches" />
                <Picker.Item
                value='feet'
                label="Feet & Inches" />
              </Picker>
            </View>
            {
              props.heightUnits==="cm"||props.heightUnits==='"'?
              <Height />
              :
              <Feet />
            }
          </View>
        
  )
}

export default OpeningModal;
