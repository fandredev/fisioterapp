import React from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import hand from "../../assets/hand.png";
import { Button } from "../components/Button";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

export function Exercises(): JSX.Element {
  function handleCompleteChallenge() {
    Alert.alert(
      "Desafio completo!",
      "Você completou o desafio da ChallengeBox.",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        { text: "Uhuu!" },
      ]
    );
  }

  return (
    <View style={styles.containerApp}>
      <View>
        <Image source={hand} />
        <View style={styles.container}>
          <Text style={styles.containerText}>Fechar e abrir as mãos</Text>
          <Button label="Feito" onPress={handleCompleteChallenge} />
        </View>
      </View>
      <View style={styles.containerInfo}>
        <View>
          <Text style={styles.containerTitle}>Séries</Text>
          <Text style={styles.containerLabel}>10</Text>
        </View>
        <View>
          <Text style={styles.containerTitle}>Repetições</Text>
          <Text style={styles.containerLabel}>10</Text>
        </View>
        <View>
          <Text style={styles.containerTitle}>Descanso</Text>
          <Text style={styles.containerLabel}>20seg</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerText: {
    fontSize: 24,
    fontFamily: fonts.bold,
  },
  containerInfo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  containerTitle: {
    color: colors.gray,
    fontFamily: fonts.main,
  },
  containerLabel: {
    color: colors.purple,
    fontFamily: fonts.bold,
  },
});
