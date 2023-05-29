import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { HomeStack } from "../navigation/HomeStack";
import { AuthStack } from "../navigation/AuthStack";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { userStore } from "./stores/User";

import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

const App = () => {
	const authenticated = userStore((state) => state.user.authenticated);

	const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0));
	const fadeIn = () => {
		return Animated.timing(fadeAnimation, {
			toValue: 1,
			duration: 2000,
			delay: 250,
			useNativeDriver: false,
		}).start();
	};

	useEffect(() => {
		fadeIn();
	}, []);

	const VideoBackground = () => {
		return (
			<>
				<video
					style={styles.video}
					src={require("../assets/background-video-3.mp4")}
					autoPlay
					loop
					muted
				/>
				<View style={styles.overlay} />
			</>
		);
	};

	const Container = () => {
		return (
			<NavigationContainer theme={{ colors: { background: "#212121" } }}>
				<Animated.View style={{ ...styles.container, ...{ opacity: fadeAnimation } }}>
					<HomeStack />
				</Animated.View>
			</NavigationContainer>
		);
	};

	return (
		<View style={{ width: "100%", height: "100%" }}>
			<VideoBackground />
			<Container />
		</View>
	);
};

registerRootComponent(App);
serviceWorkerRegistration.register();

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
	},
	overlay: {
		position: "absolute",
		width: "100%",
		height: "100%",
		top: 0,
		backgroundColor: "rgba(0, 0, 0, 0.75)",
	},
	video: {
		position: "absolute",
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
});
