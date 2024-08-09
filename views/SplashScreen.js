// import { StyleSheet, Text, View } from "react-native";
// import React, { useEffect } from "react";
// import * as SplashScreen from "expo-splash-screen";
// import * as Font from "expo-font";

// export default function CustomSplashScreen() {
//   const [fontsLoaded] = Font.useFonts({
//     "Yesteryear-Regular": require("../assets/fonts/Yesteryear-Regular.ttf"),
//   });

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await SplashScreen.preventAutoHideAsync();
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         if (fontsLoaded) {
//           setTimeout(async () => {
//             await SplashScreen.hideAsync();
//           }, 3000);
//         }
//       }
//     }

//     prepare();
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.Yesteryear}>
//         F<Text style={styles.blackColor}>OOD O</Text>FF
//         <Text style={styles.blackColor}>ER</Text>
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//   },
//   Yesteryear: {
//     fontFamily: "Yesteryear-Regular",
//     fontSize: 24,
//     color: "#FFC0CB",
//   },
//   blackColor: {
//     fontFamily: "Yesteryear-Regular",
//     fontSize: 24,
//     color: "#000000",
//   },
// });


import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export default function CustomSplashScreen() {

  const [fontsLoaded] = Font.useFonts({
    "Yesteryear-Regular": require("../assets/fonts/Yesteryear-Regular.ttf"),
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        if (fontsLoaded) {
          setTimeout(async () => {
            await SplashScreen.hideAsync();
          }, 3000);
        }
      }
    }
    prepare();
  }, [fontsLoaded]);

  useEffect(() => {
    if (fontsLoaded) {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [fontsLoaded, fadeAnim]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Animated.Text style={[styles.Yesteryear, { opacity: fadeAnim }]}>
        F<Text style={styles.blackColor}>OOD O</Text>FF
        <Text style={styles.blackColor}>ER</Text>
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Yesteryear: {
    fontFamily: "Yesteryear-Regular",
    fontSize: 24,
    color: "#FFC0CB",
  },
  blackColor: {
    color: "#000000",
  },
});

