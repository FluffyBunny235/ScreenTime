import { Pressable, StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
export default function AddETO() {
  const plus = require('./icons/plusIcon.png')
  return(
    <Pressable style={styles.holder} onPress={()=>alert("Added")}>
      <Image source={plus} style={styles.icon}></Image>
      <Text style={styles.txt}>Add new option</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  holder: {
    display: 'flex',
    width: '95%',
    flexDirection: 'row',
    borderColor: '#fff',
    borderWidth: 1,
  },
  icon: {
    height: 50,
    width: 50,
  },
  txt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 10,
  },
})