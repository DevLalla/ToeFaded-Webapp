import { create } from "zustand";

export interface User {
	info: {};
	authenticated: boolean;
}

type State = {
	user: User;
};

type Action = {
	updateUser: (data: State["user"]) => void;
};

export const userStore = create<State & Action>((set) => ({
	user: {
		info: {}, 
		authenticated: false
	},
	updateUser: (data) =>
		set(() => ({
			user: data,
		})),
}));
