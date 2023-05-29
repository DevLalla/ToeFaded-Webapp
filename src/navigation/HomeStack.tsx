import React from "react";
import { DrawerNavigation } from "../components/navigation/Drawer/DrawerNavigation";
import { BarNavigation } from "../components/navigation/Bar/BarNavigation";
import { useWindowDimensions } from "react-native";

export const HomeStack = () => {
	const isLarge = () => {
		const windowDimensions = useWindowDimensions();
		const screenWidth = windowDimensions.width;
		return screenWidth > 600;
	};

	return isLarge() ? <BarNavigation /> : <DrawerNavigation />;
};
