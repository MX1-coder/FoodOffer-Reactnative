import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BottomNavigator from "./BottomNavigator";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function FavouritePage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.StarContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Image source={require("../assets/starImage.png")} />
        </TouchableOpacity>
      </View>
      {/* ----------------------------------------------------- First Container ---------- */}
      <View style={styles.slideContainer}>
        <View style={styles.slideimageContainer}>
          <Image
            style={styles.slideimage}
            source={require("../assets/pizza.jpg")}
          />
        </View>
        <Text style={styles.slideText}>Pizza Italiano</Text>
        <View style={styles.starRating}>
          <EvilIcons name="star" size={20} />
          <Text>4/5</Text>
        </View>
      </View>
      {/* ------------------------------------------------------Second Conatiner ---------- */}
      <View style={styles.slideContainer}>
        <View style={styles.slideimageContainer}>
          <Image
            style={styles.slideimage}
            source={require("../assets/kabab.jpg")}
          />
        </View>
        <Text style={styles.slideText}>Traditional Kebab</Text>
        <View style={styles.starRating}>
          <EvilIcons name="star" size={20} />
          <Text>2/5</Text>
        </View>
      </View>
      {/* ------------------------------------------------------Third Container ------------ */}
      <View style={styles.slideContainer}>
        <View style={styles.slideimageContainer}>
          <Image
            style={styles.slideimage}
            source={require("../assets/seafood.jpg")}
          />
        </View>
        <Text style={styles.slideText}>Star Fish</Text>
        <View style={styles.starRating}>
          <EvilIcons name="star" size={20} />
          <Text>5/5</Text>
        </View>
      </View>
      {/* ------------------------------------------------------*----Fourth Conatiner ----------- */}
      <View style={styles.slideContainer}>
        <View style={styles.slideimageContainer}>
          <Image
            style={styles.slideimage}
            source={require("../assets/burger.jpg")}
          />
        </View>
        <Text style={styles.slideText}>Boston Burger's</Text>
        <View style={styles.starRating}>
          <EvilIcons name="star" size={20} />
          <Text>3/5</Text>
        </View>
      </View>
      {/* ---------------------------------------------------------------------------------------- */}
      <BottomNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    height: "100%",
  },
  StarContainer: {
    // backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  slideContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 60,
    marginVertical: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: "#808080",
    padding: 10,
  },
  slideimageContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    overflow: "hidden",
  },
  slideimage: {
    width: 100,
    height: 100,
  },
  slideText: {
    // color: "#FFF",
    fontWeight: "800",
  },
  starRating: {
    flexDirection: "row",
    backgroundColor: "#00FF00",
    justifyContent: "center",
    alignItems: "center",
  },
});
