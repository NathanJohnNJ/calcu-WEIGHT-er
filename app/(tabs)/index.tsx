import { View, StyleSheet } from 'react-native';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react'; 
// import * as Font from 'expo-font';
import Home from '../pages/home';
import Calendar from '../pages/calendar';
import Credits from '../pages/credits';
// import Footer from './components/footer';
// import NavBar from './components/navbar';

function App() {
  const [age, setAge] = useState(18);
  const [height, setHeight] = useState([181, 71.25, 5, 11.2]);
  const [weight, setWeight] = useState([78, 171.96, 12, 3.9]);
  const [cm, setCm] = useState(181);
  const [kg, setKg] = useState(78);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(71.25);
  const [feetInches, setFeetInches] = useState(11.2);
  const [pounds, setPounds] = useState(171.96)
  const [stone, setStone] = useState(12);
  const [lbs, setLbs] = useState(3.9);
  const [waist, setWaist] = useState(38);
  const [sex, setSex] = useState("-");
  const [heightUnits, setHeightUnits] = useState('cm');
  const [weightUnits, setWeightUnits] = useState('kg');
  const [waistUnits, setWaistUnits] = useState('"');
  const [calorieIntake, setCalorieIntake] = useState(2500);
  const [exercise, setExercise] = useState('-');

  // async function loadFonts() {
  //   await Font.loadAsync({
  //     'UG88-Beefy': require('./assets/fonts/UBG88-Beefy.ttf'),
  //     'UG88-SkinnyBold': require('./assets/fonts/UBG88-SkinnyBold.ttf'),
  //     'UG88-SkinnyRegular': require('./assets/fonts/UBG88-SkinnyRegular.ttf'),
  //   });
  // }
  // loadFonts();
  return (
    <BrowserRouter>
      <View style={styles.app}>
        {/* <Header /> */}
        
        {/* <Footer /> */}
      </View>
      <Routes>
        <Route key="home" index element={<Home weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} waist={waist} setWaist={setWaist} age={age} setAge={setAge} heightUnits={heightUnits} setHeightUnits={setHeightUnits} weightUnits={weightUnits} setWeightUnits={setWeightUnits} waistUnits={waistUnits} setWaistUnits={setWaistUnits} sex={sex} setSex={setSex} calorieIntake={calorieIntake} setCalorieIntake={setCalorieIntake} exercise={exercise} setExercise={setExercise} feet={feet} setFeet={setFeet} inches={inches} setInches={setInches} stone={stone} setStone={setStone} lbs={lbs} setLbs={setLbs} cm={cm} setCm={setCm} kg={kg} setKg={setKg}  pounds={pounds} setPounds={setPounds} feetInches={feetInches} setFeetInches={setFeetInches} />} />
        <Route key="calendar" path="/calendar" element={<Calendar />} />
        <Route key="credits" path="/credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const styles = StyleSheet.create({
  app: {
    // textAlign: 'center'
  }
})