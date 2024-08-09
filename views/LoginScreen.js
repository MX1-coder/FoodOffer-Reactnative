import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import vector1 from "../assets/vector1.png";
import React, { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Signin_user } from "../context/Actions/Authactions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation, Signin_user, isAuthenticated, token }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSignInSubmit = () => {
    // console.log(email, "---------------email ----------");
    // console.log(password, "-*----------------------- password------");

    Signin_user({
      Email: email,
      Password: password,
    })
      .then((result) => {
        // console.log(result.payload.token, "-------------------result------");
        AsyncStorage.setItem("token", result.payload.token);
      })
      .catch((err) => {
        // console.log(err, "------------error--------");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={vector1} />
      </View>
      <View style={styles.headerView}>
        <Text style={styles.yesteryear}>
          F<Text style={styles.blackColor}>OOD O</Text>FF
          <Text style={styles.blackColor}>ER</Text>
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <EvilIcons name="user" size={30} style={styles.vector} />
        <TextInput
          style={styles.userInput}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          placeholder="Email Address"
        />
      </View>
      <View style={styles.inputContainer}>
        <EvilIcons name="lock" size={30} style={styles.vector} />
        <TextInput
          style={styles.userInput}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View>
        <Text style={styles.forgetPassword}>Forget Password?</Text>
      </View>

      {/* <View style={styles.submitButtonContainer}>
        <Text style={styles.submitButton}>Sign In</Text>
      </View> */}
      <TouchableOpacity onPress={() => HandleSignInSubmit()}>
        <LinearGradient
          colors={["#FFFFFF", "#FFC0CB"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0, 0.5]}
          style={styles.submitButtonContainer}
        >
          <Text style={styles.submitButton}>Sign In</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.FooterContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text style={styles.signupText}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
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
  headerView: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    height: 340,
  },
  inputContainer: {
    width: 300,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  vector: {
    marginLeft: 20,
  },
  userInput: {
    width: 235,
    height: 50,
    marginLeft: 15,
  },
  footerText: {
    fontSize: 16,
    color: "#BEBEBE",
  },
  signupText: {
    fontSize: 16,
    color: "#4169e1",
  },
  forgetPassword: {
    fontSize: 12,
    color: "#4169e1",
  },
  submitButtonContainer: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#FFC0CB",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  submitButton: {
    marginVertical: 10,
    color: "#FFF",
    fontWeight: "600",
  },
  FooterContainer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 40,
  },
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  Signin_user: (formData) => dispatch(Signin_user(formData)),
});

export default connect(mapStateToProps , mapDispatchToProps)(LoginScreen);
