import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const AppLogo = () => {
	const heroImage = require("../assets/icon-white.svg");
	return (
		<View
			style={{
				alignItems: "center",
			}}
		>
			<Image
				style={styles.heroImage}
				source={heroImage}
			></Image>
			<Text style={styles.heroTitle}>infiniti</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	heroImage: {
		width: 90,
		height: 90,
		resizeMode: "contain",
	},
	heroTitle: {
		marginTop: -22,
		fontSize: 22,
		fontWeight: "800",
		color: "white",
	},
});
