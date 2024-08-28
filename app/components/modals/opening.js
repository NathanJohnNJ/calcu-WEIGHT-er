import { View, Text, Modal, TextInput, Picker, Pressable} from 'react-native-web';
import { styles } from './styles';
import { useState } from 'react';

const OpeningModal = (props) => {

  async function getWeightValues(kg){
    const num = kg*2.20462;
    const lbs = Math.floor((num+Number.EPSILON)*100)/100;
    const stone = Math.floor(((lbs/14)+Number.EPSILON)*100)/100;
    const stoneWithoutDec = stone.toString().split(".")[0];
    const stoneLbs = Math.floor(((lbs-(14*Number(stoneWithoutDec)))+Number.EPSILON)*10)/10;
    const array = [kg, lbs, stoneWithoutDec, stoneLbs];
    return array;
  }
  async function convertFromSt(stone, lbs){
    const totalLbs = (stone*14)+lbs;
    const num = totalLbs/2.20462;
    const kg = Math.floor((num+Number.EPSILON)*100)/100;
    const array = await getWeightValues(kg);
    return array;
  }
  async function convertFromLbs(lbs){
    const num = lbs/2.20462;
    const kg = Math.floor((num+Number.EPSILON)*100)/100;
    const array = await getWeightValues(kg);
    return array;
  }

   function getHeightValues(cm){
    const num = cm/2.54;
    const inches = Math.floor((num+Number.EPSILON)*100)/100;
    const feet = Math.floor(((inches/12)+Number.EPSILON)*100)/100;
    const feetWithoutDec = feet.toString().split(".")[0];
    const remainderInches = Math.floor(((inches-(12*Number(feetWithoutDec)))+Number.EPSILON)*10)/10;
    const array = [Number(cm), inches, Number(feetWithoutDec), remainderInches];
    return array;
  }
  
   function convertFromFeet(feet, inches){
    const totalInches = Number((feet*12))+Number(inches);
    const num = totalInches*2.54;
    const cm = Math.floor(((num+Number.EPSILON)*100)/100);
    const array = getHeightValues(cm);
    return array;
  }
   function convertFromInches(inches){
    const num = inches/2.54;
    const cm = Math.floor((num+Number.EPSILON)*100)/100;
    const array = getHeightValues(cm);
    return array;
  }

function closeModal(){
  props.setOpeningModalIsOpen(false);
}

const Weight = () => {
    if(props.weightUnits==="kg"){
      return (
        <View style={styles.stone}>
          <TextInput
          style={styles.heightInput}
          onChangeText={props.setKg}
          value={props.kg}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>{props.weightUnits}</Text>
        </View>
      )
    } else if (props.weightUnits==="lbs"){
      return (
        <View style={styles.stone}>
          <TextInput
          style={styles.heightInput}
          onChangeText={props.setPounds}
          value={props.pounds}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>{props.weightUnits}</Text>
        </View>
      )
    } else{
      return(
        <View style={styles.stone}>
          <TextInput
          style={styles.stoneInput}
          onChangeText={props.setStone}
          value={props.stone}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>st</Text>
          <TextInput
          style={styles.stoneInput}
          onChangeText={props.setLbs}
          value={props.lbs}
          keyboardType="numeric" />
          <Text style={styles.stoneText}>lbs</Text>
        </View>
      )
    } 
  }

  const Height = () => {
    if(props.heightUnits==="cm"){
        return (
          <View style={styles.stone}>
            <TextInput
            style={styles.heightInput}
            onChangeText={props.setCm}
            value={props.cm}
            keyboardType="numeric" />
            <Text style={styles.stoneText}>{props.heightUnits}</Text>
          </View>
        )
    } else if(props.heightUnits==="inches"){
        return (
          <View style={styles.stone}>
            <TextInput
            style={styles.heightInput}
            onChangeText={props.setInches}
            value={props.inches}
            keyboardType="numeric" />
            <Text style={styles.stoneText}>"</Text>
          </View>
        )
    } else {
        return(
          <View style={styles.stone}>
            <TextInput
            style={styles.stoneInput}
            onChangeText={props.setFeet}
            value={props.feet}
            keyboardType="numeric" />
            <Text style={styles.stoneText}>'</Text>
            <TextInput
            style={styles.stoneInput}
            onChangeText={props.setFeetInches}
            value={props.feetInches}
            keyboardType="numeric" />
            <Text style={styles.stoneText}>"</Text>
          </View>
        )
    }
  }

  async function submit(){
    if (props.weightUnits==='stone'){
      const weightArray = await convertFromSt(props.stone, props.lbs);
      props.setWeight(weightArray)
    } else if (props.weightUnits==='lbs'){
      const weightArray = await convertFromLbs(props.pounds);
      props.setWeight(weightArray)
    } else {
      const weightArray = await getWeightValues(props.kg);
      props.setWeight(weightArray)
    }
    if (props.heightUnits==='feet'){
      const heightArray = convertFromFeet(props.feet, props.feetInches);
      props.setHeight(heightArray)
    } else if (props.heightUnits==='inches'){
      const heightArray = convertFromInches(props.inches);
      props.setHeight(heightArray)
    } else {
      const heightArray = getHeightValues(props.cm);
      props.setHeight(heightArray)
    }
    closeModal()
  }

  return (
  <Modal
  animationType="slide"
  transparent={false}
  visible={props.openingModalIsOpen}
  onRequestClose={closeModal}
  >
    <View style={styles.modal}>
      <View style={styles.tableView}>

        <View style={styles.titleTable} >
          <Text style={styles.title}>
            YOUR CURRENT DETAILS
          </Text>
        </View>

        <View style={styles.firstTable} >
          <View style={styles.row}>
            <Text style={styles.header}>
              Age
            </Text>
            <TextInput
            style={styles.details}
            onChangeText={props.setAge}
            value={props.age}
            inputType="numeric" />
          </View>
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
            <Height />
          </View>
          <View style={styles.row}>
            <Text style={styles.header}>
              Weight
            </Text>
            <View style={{backgroundColor: '#fea', border: 'solid 1.6px #222', marginRight: '-1px'}}>
              <Picker
              style={styles.picker}
              onValueChange={props.setWeightUnits}
              selectedValue={props.weightUnits}
              >
                <Picker.Item
                value="kg"
                label="Kilograms" />
                <Picker.Item
                value="lbs"
                label="Pounds" />
                <Picker.Item
                value="stone"
                label="Stone & Pounds" />
              </Picker>
            </View>
            <Weight />
          </View>
        </View>


        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.header}>
              Waist
            </Text>
            <View style={{backgroundColor: '#fea', border: 'solid 1.6px #222', marginRight: '-1px'}}>
              <Picker
              style={styles.picker}
              onValueChange={props.setWaistUnits}
              selectedValue={props.waistUnits}
              >
                <Picker.Item
                value="Centimeters"
                label="Centimeters" />
                <Picker.Item
                value="Inches"
                label="Inches" />
              </Picker>
            </View>
            <TextInput
            style={styles.details}
            onChangeText={props.setWaist}
            value={props.waist}
            keyboardType="numeric" />
          </View>
          <View style={styles.row}>
            <Text style={styles.header}>
              Sex
            </Text>
            <View style={{backgroundColor: '#fea', border: 'solid 1.6px #222', marginRight: '-1px'}}>
              <Picker
              style={styles.sexPicker}
              onValueChange={props.setSex}
              selectedValue={props.sex}
              >
                <Picker.Item
                value="Please select"
                label="Please select" />
                <Picker.Item
                value="Male"
                label="Male" />
                <Picker.Item
                value="Female"
                label="Female" />
              </Picker>
            </View>
          </View>
        </View>


        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.header}>
              Calorie Intake
            </Text>
            <TextInput
            style={styles.calories}
            onChangeText={props.setCalorieIntake}
            value={props.calorieIntake}
            keyboardType="numeric" />
            <Text style={styles.empty}>
              kcal/day
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.header}>
              Exercise
            </Text>
            <View style={{backgroundColor: '#fea', border: 'solid 1.6px #222'}}>
              <Picker
              style={styles.sexPicker}
              onValueChange={props.setExercise}
              selectedValue={props.exercise}
              >
                <Picker.Item
                value="Please select"
                label="Please select" />
                <Picker.Item
                value="none"
                label="No Exercise" />
                <Picker.Item
                value="light"
                label="Light (1-2 days)" />
                <Picker.Item
                value="moderate"
                label="Moderate (3-5 days)" />
                <Picker.Item
                value="high"
                label="High (6-7 days)" />
              </Picker>
            </View>
            <Text style={styles.empty}>Weekly</Text>
          </View>
        </View>
        <Pressable onPress={submit} style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
      </View>   
    </View>
    
  </Modal>
  )
}

export default OpeningModal;
