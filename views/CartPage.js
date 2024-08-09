import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Entypo from "@expo/vector-icons/Entypo";

export default function CartPage({ navigation }) {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.headingView}>
        <Text style={styles.headingViewText}>Previous Order</Text>
      </View>
      {/* ------------------------------------------------------------ */}
      <View style={styles.CartBarContainer}>
        <View style={styles.locationHeading}>
          <EvilIcons size={22} name="location" style={{ color: "#FFC0CB" }} />
          <Text>Paris, France</Text>
          <Entypo
            size={22}
            name="chevron-small-down"
            style={{ color: "#FFC0CB" }}
          />
        </View>
        <EvilIcons name="cart" size={40} />
      </View>
      <View style={styles.CartContentBoxContainer}>
        <View style={styles.CartContentBoxRowContainer}>
          <Image
            style={styles.CartContentBoxRowContainerImage}
            source={require("../assets/pizza.jpg")}
          />
          <View style={styles.CartContentBoxRowContainertitle}>
            <Text style={styles.CartContentBoxRowtitle}>Star Fish</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.CartContentBoxRowtitledate}>25 feb 2022</Text>
              <Text style={styles.CartContentBoxRowtitledate}>20:30</Text>
            </View>
          </View>
          <Text style={styles.Tag}>Delievered</Text>
        </View>
        <View style={styles.SecondCartContentBoxRowContainer}>
          <Text style={styles.SecondCartContentBoxRowFirsttext}>
            Order Review
          </Text>
          <Entypo name="chevron-small-right" size={15} />
          <Text style={styles.SecondCartContentBoxRowSecondtext}>
            Baked Seashell
          </Text>
          <View style={styles.SecondCartContentBoxRowSecondimagecontainer}>
            <Image
              style={styles.SecondCartContentBoxRowSecondimage}
              source={require("../assets/seafood.jpg")}
            />
          </View>
        </View>
        <View style={styles.ThirdCartBoxContainer}>
          <Text style={styles.PaidTag}>Paid: $17.50</Text>
          <Text style={styles.RateTExt}>Rate & Comment</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    alignItems: "center",
    height: "100%",
  },
  headingView: {
    backgroundColor: "#FFC0CB",
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
  headingViewText: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 18,
  },
  CartBarContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    width: 300,
  },
  locationHeading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  CartContentBoxContainer: {
    width: 300,
    height: 220,
    borderRadius: 20,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 20,
    overflow: "hidden",
  },
  CartContentBoxRowContainer: {
    width: "100%",
    // backgroundColor: "red",
    padding:30,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  CartContentBoxRowContainerImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  CartContentBoxRowContainertitle: {
    alignItems: "flex-start",
    marginLeft: 20,
  },
  CartContentBoxRowtitle: {
    fontWeight: "400",
  },
  CartContentBoxRowtitledate: {
    fontSize: 10,
    marginVertical: 10,
    marginRight: 20,
  },
  Tag: {
    position: "absolute",
    right: 14,
    top: 10,
    backgroundColor: "#12AD2B",
    padding: 10,
    fontSize: 10,
    borderRadius: 10,
  },
  //   --------------------------------------------SecondCartContentBoxRowContainer
  SecondCartContentBoxRowContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  SecondCartContentBoxRowSecondtext: {
    fontSize: 12,
    fontWeight: "500",
  },
  SecondCartContentBoxRowSecondimagecontainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginBottom: 5,
  },
  SecondCartContentBoxRowSecondimage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  SecondCartContentBoxRowFirsttext: {
    fontWeight: "700",
  },
  //   ---------------------------------------------------------------ThirdCartBoxContainer
  ThirdCartBoxContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal:30,
    // marginVertical:10
  },
  PaidTag: {
    fontWeight: "700",
    padding:5,
    backgroundColor: "#12AD2B",
    borderRadius:10,
    fontSize:14,
    justifyContent:"center",
    alignItems:"center"
  },
  RateTExt: {
    color: "#964B00",
    fontSize:10,
    marginTop:10
  },
});
