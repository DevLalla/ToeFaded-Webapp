import React, { useEffect, useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenComponent } from "../../../models/enums/ScreenComponents";
import { navigationStore } from "../../../app/stores/Navigation";
import { NavBarItem } from "./NavBarItem";

interface NavBarProps {
	screens: ScreenComponent[];
	darkMode: boolean;
	align?: "center" | "flex-start" | "flex-end";
}

export const NavBar = ({ screens, darkMode, align = "center" }: NavBarProps) => {
	return (
		<View
			style={{
				flex: 1,
				height: 65,
				maxHeight: 65,
				flexDirection: "row",
				justifyContent: align,
				backgroundColor: darkMode ? "#1c1c1c" : "white",
			}}
		>
			<View
				style={{
					flexDirection: "row",
					height: 65,
					maxHeight: 65,
					alignItems: "center", // align vertical
					justifyContent: "space-evenly",
				}}
			>
				{screens.map((text, index) => {
					return (
						<NavBarItem
							darkMode
							key={index}
							label={text}
							screen={ScreenComponent[text.toString()]}
						/>
					);
				})}
			</View>
		</View>
	);
};
