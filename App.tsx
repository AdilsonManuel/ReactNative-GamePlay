import React, { Fragment } from "react";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";

import { Home } from "../GamePlay/src/screens/Home"
// import { Home } from "../GamePlay/src/screens/Home"
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";


export default function App(): JSX.Element {

  const [fonstsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fonstsLoaded) {
    <AppLoading />
  }
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </Background>
  )
}