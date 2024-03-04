import { Pressable, StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

const infoIcon = require("./icons/infoIcon.png");

export default function LimitTypeToggle( {button, buttonSelector} ) {
  const topButton = button ? require("./icons/closedButton.png") : require("./icons/openButton.png");
  const bottomButton = button ? require("./icons/openButton.png") : require("./icons/closedButton.png");
  function changeButton(bool) { 
    buttonSelector(bool);
  }
  return(
    <View style={styles.main}>
      <View style={styles.rows}>
        <Pressable onPress={() => changeButton(true)}>
          <Image source={topButton} style={styles.inlineIcon}></Image>
        </Pressable>
        <Text style={styles.txt}>Suggestion</Text>
        <Pressable onPress={() => alert("Info")}>
          <Image source={infoIcon} style={styles.inlineIcon}></Image>
        </Pressable>
      </View>
      <View style={styles.rows}>
        <Pressable onPress={() => changeButton(false)}> 
          <Image source={bottomButton} style={styles.inlineIcon}></Image>
        </Pressable>
        <Text style={styles.txt}>🔒Hard Lock</Text>
        <Pressable onPress={() => alert("Info")}>
          <Image source={infoIcon} style={styles.inlineIcon}></Image>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column"
  },
  rows: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  txt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginRight: 190,
  },
  inlineIcon: {
    width: 30,
    height: 30,
  },
});