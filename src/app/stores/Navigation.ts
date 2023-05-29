import { create } from "zustand";
import { ScreenComponent } from "../../models/enums/ScreenComponents";
import { DefaultRoute } from "../../models/enums/DefaultRoute";

type State = {
	defaultAuthRoute: DefaultRoute;
	currentScreen: ScreenComponent;
	screenList: ScreenComponent[];
};

type Action = {
	updateDefaultRoute: (data: State["defaultAuthRoute"]) => void;
	updateCurrentScreen: (data: State["currentScreen"]) => void;
	updatescreenList: (data: State["screenList"]) => void;
};

export const navigationStore = create<State & Action>((set) => ({
	defaultAuthRoute: DefaultRoute.Login,
	currentScreen: ScreenComponent.Dashboard,
	screenList: [
		ScreenComponent.Dashboard,
		ScreenComponent.Products,
		ScreenComponent.Contact,
		ScreenComponent.Blog,
	],

	updatescreenList: (data) =>
		set(() => ({
			screenList: data,
		})),

	updateCurrentScreen: (data) =>
		set(() => ({
			currentScreen: data,
		})),

	updateDefaultRoute: (data) =>
		set(() => ({
			defaultAuthRoute: data,
		})),
}));
