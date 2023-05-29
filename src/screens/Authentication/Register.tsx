import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Animated } from "react-native";
import { useAuthentication } from "../../app/hooks/firebase/useAuthentication";
import { navigationStore } from "../../app/stores/Navigation";
import { AccessLevel } from "../../models/enums/AccessLevel";
import { BasicButton } from "../../components/BasicButton";
import { Box, Container, FormControlLabel, Grid, Radio } from "@mui/material";
import { DefaultRoute } from "../../models/enums/DefaultRoute";
import { BasicTextField } from "../../components/BasicTextField";

export const Register = () => {
	const { createStandardUser } = useAuthentication();
	const updateDefaultRoute = navigationStore((state) => state.updateDefaultRoute);
	const [accessLevel, setAccessLevel] = useState(AccessLevel.Sales);
	const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0));

	useEffect(() => {
		fadeIn();
	}, []);

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

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAccessLevel(event.target.value as AccessLevel);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			firstName: data.get("firstName"),
			lastName: data.get("lastName"),
			email: data.get("email"),
			password: data.get("password"),
			accessLevel: accessLevel,
		});
	};

	return (
		<Animated.View style={{ opacity: fadeAnimation }}>
			<Container
				component="main"
				maxWidth="xs"
			>
				<Box
					sx={{
						marginTop: { sm: 4 },
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
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
								<Text style={styles.title}>Register</Text>
							</Grid>
							<Grid
								item
								sx={{ mb: 2 }}
							>
								<Text style={styles.subtitle}>
									Fill out the form below to add a user to the platform
								</Text>
							</Grid>
						</Grid>
						<Grid
							container
							spacing={2}
						>
							<Grid
								item
								xs={12}
								sm={6}
							>
								<BasicTextField
									size="small"
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									sx={{ input: { color: "white" } }}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								sm={6}
							>
								<BasicTextField
									size="small"
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									sx={{ input: { color: "white" } }}
								/>
							</Grid>
							<Grid
								item
								xs={12}
							>
								<BasicTextField
									size="small"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									sx={{ input: { color: "white" } }}
								/>
							</Grid>
							<Grid
								item
								xs={12}
							>
								<BasicTextField
									size="small"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									sx={{ input: { color: "white" } }}
								/>
							</Grid>
							<Grid
								container
								marginY={1}
								direction={"row"}
								justifyContent="center"
								alignItems="center"
							>
								<Grid item>
									<FormControlLabel
										checked={accessLevel === AccessLevel.Admin}
										control={
											<Radio
												size="small"
												sx={{ color: "white" }}
												onChange={handleChange}
											/>
										}
										sx={{ color: "white" }}
										value={AccessLevel.Admin}
										label={AccessLevel.Admin}
									/>
								</Grid>
								<Grid item>
									<FormControlLabel
										checked={accessLevel === AccessLevel.Manager}
										control={
											<Radio
												size="small"
												sx={{ color: "white" }}
												onChange={handleChange}
											/>
										}
										sx={{ color: "white" }}
										value={AccessLevel.Manager}
										label={AccessLevel.Manager}
									/>
								</Grid>
								<Grid item>
									<FormControlLabel
										checked={accessLevel === AccessLevel.Auditor}
										control={
											<Radio
												size="small"
												sx={{ color: "white" }}
												onChange={handleChange}
											/>
										}
										sx={{ color: "white" }}
										value={AccessLevel.Auditor}
										label={AccessLevel.Auditor}
									/>
								</Grid>
								<Grid item>
									<FormControlLabel
										checked={accessLevel === AccessLevel.Sales}
										control={
											<Radio
												size="small"
												sx={{ color: "white" }}
												onChange={handleChange}
											/>
										}
										sx={{ color: "white" }}
										value={AccessLevel.Sales}
										label={AccessLevel.Sales}
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							container
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={2}
						>
							<Grid item>
								<BasicButton
									title={"Register"}
									type="submit"
									style={{ marginTop: 16, marginBottom: 6, width: 130 }}
								/>
							</Grid>
							<Grid item>
								<BasicButton
									title={"Already have an account?"}
									variant={"text"}
									onClick={() => {
										fadeOut(() => {
											updateDefaultRoute(DefaultRoute.Login);
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
