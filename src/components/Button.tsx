import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export function Button({ label, ...rest }: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} {...rest} activeOpacity={0.5}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    width: "100%",
    padding: 15,
    marginVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: fonts.main,
    fontSize: 20,
    color: colors.white,
  },
});
