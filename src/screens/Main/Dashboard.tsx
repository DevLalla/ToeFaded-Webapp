import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight } from "react-native";

export const Dashboard = () => {
	return (
		<View style={styles.background}>
			<TouchableHighlight underlayColor={"transparent"}>
				<Image
					style={styles.image}
					source={require("../../assets/icon-black-bg.png")}
				/>
			</TouchableHighlight>
			<Text style={styles.screenName}>Coming Soon</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: "transparent",
		justifyContent: "center",
	},
	scroll: {
		flexDirection: "column",
		marginTop: 10,
		backgroundColor: "transparent",
	},
	image: {
		marginTop: 20,
		width: 100,
		height: 100,
		resizeMode: "contain",
		alignSelf: "center",
	},
	screenName: {
		margin: 16,
		alignSelf: "center",
		color: "white",
		fontWeight: "700",
	},
});
