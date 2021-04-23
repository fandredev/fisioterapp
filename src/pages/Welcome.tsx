import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import person from "../../assets/person.png";
import { Button } from "../components/Button";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

export function Welcome(): JSX.Element {
  const navigation = useNavigation();

  function handleNavigateToExercise() {
    navigation.navigate("Exercises");
  }

  return (
    <View style={styles.containerApp}>
      <Image source={person} />
      <Text style={styles.welcomeText}>
        Vamos iniciar o seu {"\n"} tratamento? :)
      </Text>
      <Button label="Iniciar tratamento" onPress={handleNavigateToExercise} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  welcomeText: {
    textAlign: "center",
    lineHeight: 30,
    fontSize: 20,
    fontFamily: fonts.bold,
  },
  startTratamentButton: {
    color: colors.blue,
  },
});
