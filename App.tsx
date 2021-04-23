import { Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import { useFonts } from "expo-font";
import React from "react";
import { Loading } from "./src/components/Loading";
import Routes from "./src/routes";

export default function App(): JSX.Element {
  const [loadedFonts] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!loadedFonts) return <Loading />;
  return <Routes />;
}
