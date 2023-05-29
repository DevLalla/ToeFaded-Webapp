import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Animated, TextInput } from "react-native";
import { useAuthentication } from "../../app/hooks/firebase/useAuthentication";
import { BasicButton } from "../../components/BasicButton";
import { BasicTextField } from "../../components/BasicTextField";
import { navigationStore } from "../../app/stores/Navigation";
import { DefaultRoute } from "../../models/enums/DefaultRoute";
import { Container, Box, Grid } from "@mui/material";

export const Login = () => {
	const { googleSignIn } = useAuthentication();
	const updateDefaultRoute = navigationStore((state) => state.updateDefaultRoute);
	const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0));
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const fadeIn = () => {
		return Animated.timing(fadeAnimation, {
			toValue: 1,
			duration: 750,
			useNativeDriver: false,
		}).start();
	};

	const fadeOut = (doAfter: () => void) => {
		return Animated.timing(fadeAnimation, {
			toValue: 0,
			duration: 750,
			useNativeDriver: false,
		}).start(() => {
			doAfter();
		});
	};

	useEffect(() => {
		fadeIn();
	}, []);

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
		googleSignIn();
	};

	return (
		<Animated.View
			style={{
				opacity: fadeAnimation,
			}}
		>
			<Container
				component="main"
				maxWidth="xs"
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid
							container
							mb={2}
							alignItems={"center"}
							flexDirection={"column"}
							spacing={1}
						>
							<Grid item>
								<Text style={styles.title}>Sign In</Text>
							</Grid>
							<Grid item>
								<Text style={styles.subtitle}>Welcome to Infinity</Text>
							</Grid>
						</Grid>
						<Grid
							container
							spacing={2}
						>
							<Grid
								item
								xs={12}
							>
								<BasicTextField
									required
									fullWidth
									id="email"
									name="email"
									size="small"
									label="Email"
									margin="normal"
									onChange={handleEmailChange}
									inputProps={{ style: { color: "white" } }}
								/>
							</Grid>
							<Grid
								item
								xs={12}
							>
								<BasicTextField
									required
									fullWidth
									id="password"
									name="password"
									size="small"
									label="Password"
									type="password"
									onChange={handlePasswordChange}
									inputProps={{ style: { color: "white" } }}
								/>
							</Grid>
						</Grid>
						<Grid
							container
							mt={2}
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={2}
						>
							<Grid item>
								<BasicButton
									title={"Login"}
									type="submit"
									style={{ marginTop: 16, marginBottom: 6, width: 130 }}
								/>
							</Grid>
							<Grid item>
								<BasicButton
									title={"Register"}
									variant={"text"}
									onClick={() => {
										fadeOut(() => {
											updateDefaultRoute(DefaultRoute.Register);
										});
									}}
								/>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 22,
		fontWeight: "600",
		marginBottom: 4,
		textAlign: "center",
		color: "white",
	},
	subtitle: {
		fontSize: 12,
		fontWeight: "600",
		textAlign: "center",
		color: "white",
	},
});
