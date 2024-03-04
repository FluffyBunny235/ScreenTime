import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import {useState} from 'react'
import BottomBar from './components/bottomBar';
import LimitTypeToggle from './components/limitTypeToggle';
import AddETO from './components/addETO.js'
export default function App() {
  const [topButtonSelected, setTopButtonSelected] = useState(true);
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Type of Limit</Text>
        </View>
        <LimitTypeToggle  button={topButtonSelected} buttonSelector={setTopButtonSelected}/>
        <View style={styles.header}>
          <Text style={styles.headerText}>Limits</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Extra Time Options</Text>
        </View>
        <AddETO></AddETO>
      </ScrollView>
      <View style={styles.bottomBar}>
        <BottomBar></BottomBar>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#3a619e',
    justifyContent: 'space-evenly'
  },
  header: {
    
    marginLeft: 10, 
    alignItems: 'left',
    justifyContent: 'top',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
  },
  bottomBar: {
    flex: 1,
    display: 'flex',
    alignContent: "flex-end",
    marginBottom: 0,
    paddingBottom: 0,
  },
  scroll: {
    height: '90%',
  }
});
