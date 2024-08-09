import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import FontAwesome from "@expo/vector-icons/FontAwesome"


export default function BottomNavigator({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          backgroundColor: "#FFC0CB",
          width: 65,
          height: 65,
          borderRadius: 35,
          bottom: 35,
          zIndex: 10,
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("FavouritePage")}
        >
          <View style={[styles.button, styles.actionBtn]}>
            <Ionicons name="cart" style={{ color: "#FFF" }} size={25} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          position: "absolute",
          backgroundColor: "white",
          border: 2,
          radius: 3,
          shadowOpacity: 0.3,
          shadowRadius: 3,
          shadowOffset: {
            height: 3,
            width: 3,
          },
          x: 0,
          y: 0,
          style: { marginVertical: 5 },
          bottom: 0,
          width: "100%",
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 25,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Alert.alert("click");
            }}
          >
            <FontAwesome6 name="house-chimney" size={25} />
          </TouchableOpacity>
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            Home
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            marginStart: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Alert.alert("click");
            }}
          >
            <FontAwesome name="search" size={25} />
          </TouchableOpacity>
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            search{" "}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            marginStart: 85,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Alert.alert("click");
            }}
          >
            <Ionicons name="menu" size={25} />
          </TouchableOpacity>
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            Menu{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Alert.alert("click");
            }}
          >
            <Ionicons size={25} name="settings" />
          </TouchableOpacity>
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            Setting{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  button: {
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
  },
  actionBtn: {
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
