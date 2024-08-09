import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./LoginScreen";
import CustomSplashScreen from "./SplashScreen";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { me } from "../context/Actions/Authactions";
import HomePage from "./HomePage";

const CoverScreen = ({ navigation, isAuthenticated, token, me }) => {
  const [viewSplashScreen, setviewSplashScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setviewSplashScreen(true);
    }, 7000);
  }, []);

  useEffect(() => {
    // console.log("get async token is run--------------");
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        // console.log(token, "after token async token is run--------------");
        if (token) {
          me({ token: token });
        }
      } catch (error) {
        console.error("Failed to get token:", error);
      }
    };

    getToken();
  }, []);

  console.log(
    isAuthenticated,
    "---------------isAuthenticated at the Cover Screen "
  );
  console.log(token, "---------------token at the Cover Screen ");

  return (
    <View style={styles.container}>
      {viewSplashScreen ? (
        isAuthenticated ? (
          <HomePage navigation={navigation} />
        ) : (
          <LoginScreen navigation={navigation} />
        )
      ) : (
        <CustomSplashScreen />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  me: (token) => dispatch(me(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoverScreen);
