import { Pressable, StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
const settingsImage = require("./icons/threeLines.png");
const homeImage = require("./icons/homeIcon.png");
const friendsImage = require("./icons/friendsIcon.png");
export default function BottomBar() {
  return(
    <View style={styles.row}>
      <Pressable onPress={() => alert("Settings")}>
        <Image source={settingsImage} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => alert("Home")}>
        <Image source={homeImage} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => alert("Friends")}>
        <Image source={friendsImage} style={styles.icon} />
      </Pressable>
    </View>
  );
} 
const styles = StyleSheet.create({
  icon: {
    width: 70,
    height: 60,
  },
  row: {
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "row",
    flex: 1,
  }
});