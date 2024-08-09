import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Vector2Image from "../assets/vector2.png";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { SignUp_user } from "../context/Actions/Authactions";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpScreen = ({ navigation, isAuthenticated, SignUp_user }) => {
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [error, setError] = useState({
    FirstnameError: null,
    LastNameError: null,
    EmailError: null,
    PhoneNumberError: null,
    PasswordError: null,
    termsError: false,
  });

  // console.log(isAuthenticated, "isAuthenticated-----------------");

  const validateInputs = () => {
    let isValid = true;

    // Normalize inputs to lower case for case-insensitive comparison
    const normalizedFirstName = FirstName.trim().toLowerCase();
    const normalizedEmail = email.trim().toLowerCase();

    setError({
      FirstnameError: null,
      LastNameError: null,
      EmailError: null,
      PhoneNumberError: null,
      PasswordError: null,
      termsError: false,
    });

    if (FirstName.trim() === "") {
      setError((prevState) => ({
        ...prevState,
        FirstnameError: "First name is required",
      }));
      isValid = false;
    } else if (normalizedFirstName.includes("admin")) {
      setError((prevState) => ({
        ...prevState,
        FirstnameError:
          "You cannot sign up with the admin name. Please use a different name.",
      }));
      isValid = false;
    } else if (normalizedFirstName.length < 4) {
      setError((prevState) => ({
        ...prevState,
        FirstnameError: "First name length should be atleast 3 alphabets ",
      }));
      isValid = false;
    }

    if (LastName.trim() === "") {
      setError((prevState) => ({
        ...prevState,
        LastNameError: "Last name is required",
      }));
      isValid = false;
    } else if (LastName.trim().length < 4) {
      setError((prevState) => ({
        ...prevState,
        FirstnameError: "Last Name length should be atleast 3 alphabets ",
      }));
      isValid = false;
    }

    if (email.trim() === "") {
      setError((prevState) => ({
        ...prevState,
        EmailError: "Email is required",
      }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError((prevState) => ({
        ...prevState,
        EmailError: "Email is invalid",
      }));
      isValid = false;
    } else if (normalizedEmail.includes("admin")) {
      setError((prevState) => ({
        ...prevState,
        EmailError:
          "You cannot sign up with this email. Please use a different email.",
      }));
      isValid = false;
    }

    if (Password.trim() === "") {
      setError((prevState) => ({
        ...prevState,
        PasswordError: "Password is required",
      }));
      isValid = false;
    } else if (
      !/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/.test(
        Password
      )
    ) {
      setError((prevState) => ({
        ...prevState,
        PasswordError:
          "Password must be 8 or more characters long and contain at least one letter, one number, and one special character",
      }));
      isValid = false;
    }

    // if (!termsChecked) {
    //   setError((prevState) => ({
    //     ...prevState,
    //     termsError: "Please accept the terms and Conditions",
    //   }));
    //   isValid = false;
    // }

    return isValid;
  };

  const HandleSubmit = async () => {
    // console.log(FirstName, "----------- FirstName");
    // console.log(LastName, "-----------LastName");
    // console.log(email, "-----------email");
    // console.log(PhoneNumber, "-----------PhoneNumber");
    // console.log(Password, "----------------------------Password");

    if (validateInputs()) {
      // Submit the form
      // navigation.navigate("HomePage");
      const formData = {
        FirstName,
        LastName,
        Email:email,
        PhoneNumber,
        Password,
      };
      // console.log(formData, "formData ----------------");
      SignUp_user(formData)
      .then(result => {
        // console.log(result.payload.token , "-------------------result------")
        AsyncStorage.setItem("token", result.payload.token);
        navigation.navigate("HomePage");
      }).catch(err => {
        // console.log(err, "------------error--------");
      })
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ImageConatiner}>
        <Image style={styles.vectorimage} source={Vector2Image} />
      </View>
      <View style={styles.headerView}>
        <Text style={styles.yesteryear}>
          F<Text style={styles.blackColor}>OOD O</Text>FF
          <Text style={styles.blackColor}>ER</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.blackColor}>SignUp</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome5 name="user-tie" size={22} style={styles.vector} />
        <TextInput
          style={styles.userInput}
          onChangeText={setFirstName}
          value={FirstName}
          keyboardType="default"
          placeholder="First name"
        />
      </View>
      {error.FirstnameError && (
        <Text style={styles.errorText}>{error.FirstnameError}</Text>
      )}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="users" size={22} style={styles.vector} />
        <TextInput
          style={styles.userInput}
          onChangeText={setLastName}
          value={LastName}
          keyboardType="default"
          placeholder="Last name"
        />
      </View>
      {error.LastNameError && (
        <Text style={styles.errorText}>{error.LastNameError}</Text>
      )}
      <View style={styles.inputContainer}>
        <Entypo name="email" size={22} style={styles.vector} />
        <TextInput
          style={styles.userInput}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          placeholder="Email address"
        />
      </View>
      {error.EmailError && (
        <Text style={styles.errorText}>{error.EmailError}</Text>
      )}
      <View style={styles.inputContainer}>
        <Ionicons name="call" size={22} style={styles.vector} />
        <TextInput
          style={styles.userInput}
          onChangeText={setPhoneNumber}
          value={PhoneNumber}
          keyboardType="number-pad"
          placeholder="Phone number"
        />
      </View>
      {error.PhoneNumberError && (
        <Text style={styles.errorText}>{error.PhoneNumberError}</Text>
      )}
      <View style={styles.inputContainer}>
        <Fontisto name="locked" size={22} style={styles.vector} />
        <TextInput
          style={styles.userInput}
          onChangeText={setPassword}
          value={Password}
          secureTextEntry
          keyboardType="default"
          placeholder="Password"
        />
      </View>
      {error.PasswordError && (
        <Text style={styles.errorText}>{error.PasswordError}</Text>
      )}
      <TouchableOpacity onPress={HandleSubmit}>
        <LinearGradient
          colors={["#FFFFFF", "#FFC0CB"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0, 0.5]}
          style={styles.submitButtonContainer}
        >
          <Text style={styles.submitButton}>Sign Up</Text>
        </LinearGradient>
      </TouchableOpacity>
      {error.termsError && (
        <Text style={styles.errorText}>{error.termsError}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  SigninText: {
    color: "#0000000",
  },
  ImageConatiner: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginVertical: 12,
  },
  userInput: {
    width: 235,
    height: 50,
    marginLeft: 15,
  },
  vector: {
    marginLeft: 20,
  },
  headerView: {
    marginBottom: 40,
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
  submitButtonContainer: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#FFC0CB",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  submitButton: {
    marginVertical: 10,
    color: "#FFF",
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
    textAlign: "center",
    width: 300,
  },
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  SignUp_user: (userData) => dispatch(SignUp_user(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
