import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";

export const Blog = () => {
	return (
		<View style={styles.background}>
			<TouchableHighlight underlayColor={"transparent"}>
				{/* <Image
					style={styles.image}
					source={require("../../assets/icon-white-bg.svg")}
				/> */}
			</TouchableHighlight>
			<Text style={styles.screenName}>Blog</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "center",
	},
	image: {
		marginTop: 20,
		width: 50,
		height: 50,
		resizeMode: "contain",
		alignSelf: "center",
	},
	screenName: {
		margin: 16,
		alignSelf: "center",
		color: "white",
		fontWeight: "500",
	},
});
