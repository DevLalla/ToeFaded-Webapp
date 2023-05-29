import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "@mui/material";

interface Props {
	onClick?: () => void;
	title: string;
	style?: {};
	variant?: "text" | "contained" | "outlined";
	type?: "submit" | "reset" | "button";
	sx?: {};
}

export const BasicButton = ({
	onClick = () => {},
	title,
	style,
	variant = "contained",
	type = "button",
	sx = {},
}: Props) => {
	return (
		<Button
			type={type}
			sx={sx}
			style={{ ...styles.button, ...style }}
			variant={variant}
			onClick={onClick}
		>
			{title}
		</Button>
	);
};

const styles = StyleSheet.create({
	button: {
		height: 35,
		borderRadius: 30,
		fontWeight: "600",
		fontSize: 11,
	},
});
