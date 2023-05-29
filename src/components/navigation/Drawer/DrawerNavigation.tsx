import {
	DrawerContentScrollView,
	DrawerItem,
	createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import { navigationStore } from "../../../app/stores/Navigation";
import { NavScreenBuilder } from "../NavScreenBuilder";
import { useNavigation } from "@react-navigation/native";
import { ScreenComponent } from "../../../models/enums/ScreenComponents";
import Header from "../../Header";
import { View, Text } from "react-native";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
	const screenList = navigationStore((state) => state.screenList);
	const currentScreen = navigationStore((state) => state.currentScreen);
	const updateCurrentScreen = navigationStore((state) => state.updateCurrentScreen);
	const navigation = useNavigation();

	const CustomDrawerContent = (props) => {
		const NavigationToScreen = (screen) => {
			navigation.navigate(screen as never);
			updateCurrentScreen(screen as ScreenComponent);
		};

		return (
			<DrawerContentScrollView {...props}>
				<Header enableDivider={false} />
				<View style={{ marginBottom: 20 }} />
				{screenList.map((screen, index) => {
					let isCurrentScreen = currentScreen === screen;
					return (
						<DrawerItem
							key={"item_" + index}
							label={screen}
							labelStyle={{
								color: isCurrentScreen ? "#212121" : "white",
							}}
							style={{
								backgroundColor: isCurrentScreen ? "white" : "#212121",
							}}
							onPress={() => NavigationToScreen(screen)}
						/>
					);
				})}
			</DrawerContentScrollView>
		);
	};

	return (
		<Drawer.Navigator
			useLegacyImplementation
			initialRouteName={currentScreen.toString()}
			drawerContent={(props) => <CustomDrawerContent {...props} />}
			screenOptions={{
				drawerType: "back",
				headerTintColor: "white",
				drawerStyle: {
					width: "85%",
					backgroundColor: "#212121",
				},
			}}
		>
			{screenList.map((screen, index) => {
				return (
					<Drawer.Screen
						key={"screen_" + index}
						name={screen.toString()}
						component={NavScreenBuilder(screen)}
						// initialParams={{ screenName: screen }}
						options={{
							title: screen.toString(),
							drawerLabel: screen.toString(),
						}}
					/>
				);
			})}
		</Drawer.Navigator>
	);
};
