import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight } from "react-native";
import { postsStore } from "../../app/stores/Posts";
import { PostCard } from "../../components/PostCard";
import { useAuthentication } from "../../app/hooks/firebase/useAuthentication";
import { usePosts } from "../../services/firebase/usePosts";

export const Dashboard = () => {
	const { getAllPosts } = usePosts();
	const { userSignOut } = useAuthentication();
	const posts = postsStore((state) => state.posts);

	useEffect(() => {
		getAllPosts();
	}, []);

	return (
		<View style={styles.background}>
			<TouchableHighlight
				underlayColor={"transparent"}
				onPress={() => {
					userSignOut();
					alert("User Signed Out");
				}}
			>
				<Image
					style={styles.image}
					source={require("../../assets/icon-white-bg.svg")}
				/>
			</TouchableHighlight>
			<Text style={styles.screenName}>Dashboard</Text>
			<ScrollView
				style={styles.scroll}
				contentContainerStyle={{
					alignItems: "center",
				}}
			>
				{posts.length > 0 &&
					posts.map((post, index) => {
						return (
							<PostCard
								key={index}
								index={index}
								postInfo={post}
							/>
						);
					})}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: "transparent",
	},
	scroll: {
		flexDirection: "column",
		marginTop: 10,
		backgroundColor: "transparent",
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
