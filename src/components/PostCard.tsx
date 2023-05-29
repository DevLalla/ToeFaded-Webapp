import React from "react";
import { Posts } from "../app/stores/Posts";
import { View, Text } from "react-native";

interface Props {
	postInfo: Posts;
	index: number;
}

export const PostCard = ({ postInfo, index }: Props) => {
	return (
		<View
			style={{
				margin: 4,
				borderRadius: 8,
				backgroundColor: "white",
				padding: 10,
				shadowRadius: 3,
				shadowOpacity: 0.2,
				shadowOffset: {
					width: 0,
					height: 2,
				},
				width: 300,
			}}
		>
			<Text style={{ fontSize: 11, fontWeight: "600", color: "black", marginBottom: 4 }}>
				Post {index + 1}
			</Text>
			<Text style={{ fontSize: 11, color: "black" }}>{postInfo.post_message}</Text>
		</View>
	);
};
