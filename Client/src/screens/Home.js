import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import Logo from "../assets/im4.png";
import Icon from "react-native-vector-icons/AntDesign";

const Home = ({ navigation }) => {
  return (
    <>
      <ImageBackground source={Logo} style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 45,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 35,
                color: "white",
                marginLeft: 20,
                marginBottom: 50,
                fontWeight: "bold",
              }}
            >
              Daily Bugle
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.replace("Homenews")}>
            <View >
            <Icon name="rightcircleo" style={{ fontSize:60,color:"#191970",   marginRight:30,marginBottom:20}}></Icon>
            </View>
          </TouchableOpacity>
          </View>
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: null,
    width: null,
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  icon: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 120,
    marginRight: 30,
  },
});

export default Home;
