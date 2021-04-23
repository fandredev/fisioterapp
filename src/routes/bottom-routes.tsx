import { Feather, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Exercises } from "../pages/Exercises";
import { Welcome } from "../pages/Welcome";
const { Navigator, Screen } = createBottomTabNavigator();

const BottomRoutes = (): JSX.Element => {
  return (
    <Navigator
      tabBarOptions={{
        labelPosition: "beside-icon",
        style: { paddingVertical: 1, height: 65 },
        showLabel: false,
      }}
    >
      <Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome color={color} size={size} name="folder" />;
          },
        }}
      />
      <Screen
        name="Exercises"
        component={Exercises}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather color={color} size={size} name="message-square" />;
          },
        }}
      />
    </Navigator>
  );
};
export default BottomRoutes;
