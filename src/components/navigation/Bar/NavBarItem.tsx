import React from "react";
import { useNavigation } from "@react-navigation/native";
import { navigationStore } from "../../../app/stores/Navigation";
import { ScreenComponent } from "../../../models/enums/ScreenComponents";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Text } from "react-native";

interface NavBarItem {
	label: ScreenComponent;
	screen: keyof typeof ScreenComponent;
	darkMode: boolean;
}

export const NavBarItem = ({ label, screen, darkMode }: NavBarItem) => {
	const navigation = useNavigation();
	const currentScreen = navigationStore((state) => state.currentScreen);
	const updateCurrentScreen = navigationStore((state) => state.updateCurrentScreen);

	const isCurrentScreen = currentScreen === label;

	const NavigationToScreen = () => {
		navigation.navigate(screen as never);
		updateCurrentScreen(screen as ScreenComponent);
	};

	return (
		<TouchableHighlight
			style={{
				minHeight: 32,
				borderRadius: 32 / 2,
				paddingHorizontal: 10,
				marginHorizontal: 22,
				justifyContent: "center",
				backgroundColor: isCurrentScreen ? (darkMode ? "#e9e9e9" : "#212121") : "transparent",
			}}
			underlayColor="white"
			onPress={() => {
				NavigationToScreen();
			}}
		>
			<Text
				style={{
					textAlign: "center",
					color: isCurrentScreen ? (darkMode ? "black" : "white") : darkMode ? "white" : "black",
				}}
			>
				{label.toString()}
			</Text>
		</TouchableHighlight>
	);
};
