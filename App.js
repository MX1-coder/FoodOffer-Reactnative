import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoverScreen from "./views/CoverScreen";
import SignUpScreen from "./views/SignUpScreen";
import LoginScreen from "./views/LoginScreen";
import HomePage from "./views/HomePage";
import BottomNavigator from "./views/BottomNavigator";
import FavouritePage from "./views/FavouritePage";
import CartPage from "./views/CartPage";
import {Provider} from "react-redux";
import { store } from "./context/store";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={CoverScreen}
            options={{ title: "SignIn" }}
          />
          <Stack.Screen
            name="Signup"
            component={SignUpScreen}
            options={{ title: "SignUp" }}
          />
          <Stack.Screen
            name="Main"
            component={LoginScreen}
            options={{ title: "Main" }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ title: "Main" }}
          />
          {/* BottomNavigator */}
          <Stack.Screen
            name="BottomNavigator"
            component={BottomNavigator}
            options={{ title: "Navigator" }}
          />
          {/* FavouritePage */}
          <Stack.Screen
            name="FavouritePage"
            component={FavouritePage}
            options={{ title: "Favourite" }}
          />
          {/* CartPage.js */}
          <Stack.Screen
            name="Cart"
            component={CartPage}
            options={{ title: "Cart" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
