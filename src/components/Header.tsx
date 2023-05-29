import Divider from "@mui/material/Divider";
import React from "react";
import { View, StyleSheet } from "react-native";
import { AppLogo } from "./AppLogo";

interface Props {
	enableDivider?: boolean;
}

const Header = ({ enableDivider = true }: Props) => {
	return (
		<View style={{ marginBottom: 24 }}>
			<View style={styles.heroContainer}>
				<AppLogo />
			</View>
			{enableDivider && (
				<Divider
					color={"white"}
					style={styles.divider}
					orientation={"horizontal"}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	heroContainer: {
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
	},
	divider: {
		marginTop: 12,
		width: 300,
	},
});

export default Header;
