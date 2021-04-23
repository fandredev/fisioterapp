import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomRoutes from "./bottom-routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomRoutes />
    </NavigationContainer>
  );
};
export default Routes;
