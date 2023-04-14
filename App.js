import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Lista from "./src/components/Lista";
import BuscaCep from "./src/components/BuscaCep";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="BuscaCep" component={BuscaCep} />
          <Stack.Screen name="Lista" component={Lista} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };