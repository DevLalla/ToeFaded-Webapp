import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavBar } from "./NavBar";
import { navigationStore } from "../../../app/stores/Navigation";
import { NavScreenBuilder } from "../NavScreenBuilder";

const Stack = createStackNavigator();

export const BarNavigation = () => {
	const nav = navigationStore((state) => state);
	return (
		<Stack.Navigator
			initialRouteName={nav.currentScreen.toString()}
			screenOptions={{
				animationEnabled: true,
				headerShown: false,
			}}
		>
			{nav.screenList.map((screen, index) => {
				return (
					<Stack.Screen
						key={index}
						name={screen.toString()}
						component={NavScreenBuilder(screen)}
						options={{ title: screen.toString() }}
						// initialParams={{ screenName: screen }}
					/>
				);
			})}
		</Stack.Navigator>
	);
};
