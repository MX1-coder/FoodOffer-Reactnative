import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import BottomNavigator from "./BottomNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { Get_Created_Post, Logout } from "../context/Actions/Authactions";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";

const HomePage = ({ navigation, Logout, Data, Get_Created_Post }) => {
  const [SearchValue, setSearchValue] = useState("");

  // console.log("--------------Data", Data);
  const handleLogout = async () => {
    try {
      console.log("handle logout run");
      await Logout();
      await AsyncStorage.removeItem("token");
      navigation.replace("Home"); // Assuming you have a 'Login' screen in your navigation stack
    } catch (error) {
      console.error("Error removing token from AsyncStorage", error);
    }
  };

  useEffect(() => {
    console.log("Get_Created_Post hit---------------------");
    Get_Created_Post();
  }, []);

  console.log(Data, "-------------mapDispatchToProps");

  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <View style={styles.flexBox}>
        <Text style={styles.Imagetext}>{item.Dish_Name}</Text>
        <Image
          style={styles.flexBoxImage}
          source={{ uri: item.Dish_Image[0] }}
        />
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.HomePageText}>HomePage</Text> */}
      {/* -------------------------------------------------- HEADER ---------- */}
      <View style={styles.headerView}>
        <Text style={styles.yesteryear}>
          F<Text style={styles.blackColor}>OOD O</Text>FF
          <Text style={styles.blackColor}>ER</Text>
        </Text>
      </View>
      {/* --------------------------------------------------- MenuNav --------- */}
      <View style={styles.NavBarConatiner}>
        {/* <Feather size={40} name="menu" /> */}
        <View style={styles.locationname}>
          <EvilIcons size={22} name="location" style={styles.pinkredcolor} />
          <Text>Paris, France</Text>
          <Entypo size={22} name="chevron-small-down" style={styles.dropdown} />
        </View>
        <View style={styles.ProfileImage}>
          <Image
            style={styles.ProfileImageImage}
            source={require("../assets/jordan.jpg")}
          />
        </View>
        <TouchableOpacity onPress={() => handleLogout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
        {/* <Text style={styles.ProfileImage}>Image</Text> */}
      </View>
      {/* ---------------------------------------------------- SubheadingContainer ---------  */}
      <View style={styles.SubheadingContainer}>
        <Text style={styles.subheadingtext}>Delicious Food ?</Text>
        <Text style={styles.subheadingtextgo}>Go Ahead ...</Text>
      </View>
      {/* ---------------------------------------------------- SearchBar  ----------------- */}
      <View style={styles.SearchmenuContainer}>
        <AntDesign style={styles.SearchIcon} name="search1" />
        <TextInput
          value={SearchValue}
          onChange={(value) => setSearchValue(value)}
          style={styles.SearchMenuInput}
          placeholder="...Search for your favourite food"
        />
        <Entypo style={styles.SearchIcon} name="sound-mix" />
      </View>
      {/* ------------------------------------------------------------- Offer Container ------ */}
      <View style={styles.offerconatiner}>
        <Text style={styles.offerconatinertext}>
          30% Off on your first purchase
        </Text>
      </View>
      {/* ----------------------------------------------------- FlexBoxConatiner ------------------ */}
      {Data ? (
        <View style={styles.FlexContainer}>
          <FlatList
            horizontal
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      ) : null}
      {/* ----------------------------------------------------------------------------------------- */}
      <View style={styles.FlexContainer}>
        <View style={styles.flexBox}>
          <Text style={styles.Imagetext}>Sandwich</Text>
          <Image
            style={styles.flexBoxImage}
            source={require("../assets/sandwich.jpg")}
          />
        </View>
        <View style={styles.flexBox}>
          <Text style={styles.Imagetext}>Fries</Text>
          <Image
            style={styles.flexBoxImage}
            source={require("../assets/fries.jpg")}
          />
        </View>
        <View style={styles.flexBox}>
          <Text style={styles.Imagetext}>kabab</Text>
          <Image
            style={styles.flexBoxImage}
            source={require("../assets/kabab.jpg")}
          />
        </View>
      </View>
      {/* ----------------------------------------------------------------------------------------- */}
      <View style={styles.seemoreview}>
        <Text style={styles.seemoreviewtext}>See More...</Text>
      </View>
      {/* ------------------------------------------------------------Small food box -------------- */}
      <View style={styles.FlexContainer}>
        <View style={styles.circleboxview}>
          <View style={styles.circleview}>
            <Image
              style={styles.circleviewimage}
              source={require("../assets/vegan.jpg")}
            />
          </View>
          <Text style={styles.circleboxviewtext}>Vegan</Text>
        </View>

        <View style={styles.circleboxview}>
          <View style={styles.circleview}>
            <Image
              style={styles.circleviewimage}
              source={require("../assets/seafood.jpg")}
            />
          </View>
          <Text style={styles.circleboxviewtext}>Sea Food</Text>
        </View>

        <View style={styles.circleboxview}>
          <View style={styles.circleview}>
            <Image
              style={styles.circleviewimage}
              source={require("../assets/burger.jpg")}
            />
          </View>
          <Text style={styles.circleboxviewtext}>Fast Food</Text>
        </View>

        <View style={styles.circleboxview}>
          <View style={styles.circleview}>
            <Image
              style={styles.circleviewimage}
              source={require("../assets/kabab.jpg")}
            />
          </View>
          <Text style={styles.circleboxviewtext}>Kabab</Text>
        </View>
      </View>
      {/* ----------------------------------------------------------------------------------------- */}
      <View style={styles.FlexContainer}>
        <View style={styles.circleboxview}>
          <View style={styles.circleview}>
            <Image
              style={styles.circleviewimage}
              source={require("../assets/salad.jpg")}
            />
          </View>
          <Text style={styles.circleboxviewtext}>Salad</Text>
        </View>

        <View style={styles.circleboxview}>
          <View style={styles.circleview}>
            <Image
              style={styles.circleviewimage}
              source={require("../assets/desert.jpg")}
            />
          </View>
          <Text style={styles.circleboxviewtext}>Desert</Text>
        </View>

        <View style={styles.circleboxview}>
          <View style={styles.circleview}>
            <Image
              style={styles.circleviewimage}
              source={require("../assets/cake.jpg")}
            />
          </View>
          <Text style={styles.circleboxviewtext}>Cake</Text>
        </View>

        <View style={styles.circleboxview}>
          <View style={styles.circleview}>
            <Image
              style={styles.circleviewimage}
              source={require("../assets/coffee.jpg")}
            />
          </View>
          <Text style={styles.circleboxviewtext}>Coffee</Text>
        </View>
      </View>
      {/* ----------------------------------------------------------Last div Component ------------ */}
      <BottomNavigator navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  HomePageText: {
    color: "#FFF",
  },
  headerView: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  yesteryear: {
    fontFamily: "Yesteryear-Regular",
    fontSize: 24,
    color: "#FFC0CB",
  },
  blackColor: {
    fontFamily: "Yesteryear-Regular",
    fontSize: 24,
    color: "#000000",
  },
  NavBarConatiner: {
    marginHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#FFF",
  },
  locationname: {
    fontSize: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  pinkredcolor: {
    color: "#FF033E",
  },
  dropdown: {
    color: "#FF033E",
    marginLeft: 8,
  },
  ProfileImage: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 10,
    overflow: "hidden",
  },
  ProfileImageImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  SubheadingContainer: {
    color: "#000",
    marginHorizontal: 35,
    marginVertical: 8,
  },
  subheadingtext: {
    fontFamily: "Yesteryear-Regular",
    fontSize: 20,
  },
  subheadingtextgo: {
    fontSize: 14,
    marginHorizontal: 2,
  },
  SearchmenuContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFF",
    flexDirection: "row",
    borderRadius: 20,
    padding: 5,
    marginHorizontal: 16,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  SearchMenuInput: {
    fontFamily: "Yesteryear-Regular",
    fontSize: 16,
    width: 280,
    color: "#808080",
    justifyContent: "center",
    alignItems: "center",
  },
  SearchIcon: {
    fontSize: 18,
  },
  offerconatiner: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 30,
  },
  offerconatinertext: {
    color: "#FFF",
    fontSize: 16,
  },
  FlexContainer: {
    // backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  flexBox: {
    width: 100,
    height: 110,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#FFF",
    marginHorizontal:10
  },
  flexBoxImage: {
    width: 100,
    height: 110,
    resizeMode: "cover",
  },
  Imagetext: {
    position: "absolute",
    zIndex: 1,
    top: 10,
    left: 20,
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  seemoreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  seemoreviewtext: {
    borderBottomWidth: 1,
    fontSize: 14,
    padding: 4,
    color: "#4169e1",
  },
  circleview: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  circleviewimage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  circleboxview: {
    justifyContent: "center",
    alignItems: "center",
  },
  circleboxviewtext: {
    marginTop: 5,
  },
  // -------------------------------------------------------------------
  NavigationBar: {
    backgroundColor: "red",
    // justifyContent:"center",
    // alignItems:"center"
  },
  item: {},
  flatListContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const mapStateToProps = (state) => ({
  Data: state.auth.Data,
});

const mapDispatchToProps = (dispatch) => ({
  Logout: () => dispatch(Logout()),
  Get_Created_Post: () => dispatch(Get_Created_Post()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
