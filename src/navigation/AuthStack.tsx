import React from "react";
import { View, StyleSheet } from "react-native";
import { Login } from "../screens/Authentication/Login";
import { Register } from "../screens/Authentication/Register";
import { DefaultRoute } from "../models/enums/DefaultRoute";
import { navigationStore } from "../app/stores/Navigation";
import Header from "../components/Header";

export const AuthStack = () => {
	const defaultAuthRoute = navigationStore((state) => state.defaultAuthRoute);

	const AuthScreens = () => {
		return defaultAuthRoute === DefaultRoute.Login ? <Login /> : <Register />;
	};

	return (
		<View style={styles.authContainer}>
			<Header />
			<AuthScreens />
		</View>
	);
};

const styles = StyleSheet.create({
	authContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
});
