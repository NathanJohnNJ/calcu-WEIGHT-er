import { View, Text, Pressable, ScrollView} from 'react-native-web';
import { styles } from './styles';
import { useState } from 'react';
import OpeningModal from '../components/modals/opening';

const Home = (props) => {
    const [openingModalIsOpen, setOpeningModalIsOpen] = useState(false);

    function openOpeningModal(){ 
        setOpeningModalIsOpen(true)
    }

    function getWeight(){
      if (props.weightUnits==="kg"){
        return (
          <Text>{props.weight[0]} {props.weightUnits}</Text>
        )
      } else if(props.weightUnits==="lbs"){
        return (
          <Text>{props.weight[1]} {props.weightUnits}</Text>
        )
      } else {
        return (
          <Text>{props.weight[2]} st {props.weight[3]} lbs</Text>
        )
      }
    }
    function getHeight(){
      console.log(props.height)
      if (props.heightUnits==="cm"){
        return (
          <Text>{props.height[0]} {props.heightUnits}</Text>
        )
      } else if(props.heightUnits==='inches'){
        return (
          <Text>{props.height[1]} {props.heightUnits}</Text>
        )
      } else {
        return (
          <Text>{props.height[2]}' {props.height[3]}"</Text>
        )
      }
    }
    return (
      <ScrollView>
      <View style={styles.page}>
        <h1 style={styles.title}>Calcu-WEIGHT-er</h1>
        <View style={styles.btnSection}>
          <Pressable style={styles.button} onPress={openOpeningModal}>
            <Text style={styles.btnText}>
                Let's Begin...
            </Text>
          </Pressable>
          <OpeningModal openingModalIsOpen={openingModalIsOpen} setOpeningModalIsOpen={setOpeningModalIsOpen} weight={props.weight} height={props.height} setWeight={props.setWeight} setHeight={props.setHeight} waist={props.waist} setWaist={props.setWaist} age={props.age} setAge={props.setAge} setHeightUnits={props.setHeightUnits} heightUnits={props.heightUnits} weightUnits={props.weightUnits} setWeightUnits={props.setWeightUnits} sex={props.sex} setSex={props.setSex} calorieIntake={props.calorieIntake} setCalorieIntake={props.setCalorieIntake} exercise={props.exercise} setExercise={props.setExercise} waistUnits={props.waistUnits} setWaistUnits={props.setWaistUnits} feet={props.feet} setFeet={props.setFeet} inches={props.inches} setInches={props.setInches} stone={props.stone} setStone={props.setStone} lbs={props.lbs} setLbs={props.setLbs} cm={props.cm} setCm={props.setCm} kg={props.kg} setKg={props.setKg} pounds={props.pounds} setPounds={props.setPounds} feetInches={props.feetInches} setFeetInches={props.setFeetInches}  />
          
          <View style={styles.display}>
            <Text>Age: {props.age} years</Text>
            <Text>Height: {getHeight()}</Text>
            <Text>Weight: {getWeight()}</Text>
            <Text>Waist: {props.waist}{props.waistUnits}</Text>
            <Text>Sex: {props.sex}</Text>
            <Text>Calorie Intake: {props.calorieIntake} kcal/day</Text>
            <Text>Exercise: {props.exercise}</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    )
  }

export default Home;
