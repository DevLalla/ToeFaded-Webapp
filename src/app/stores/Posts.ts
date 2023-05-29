import { create } from "zustand";

export interface Posts {
	post_name: string;
	post_message: string;
}

type State = {
	posts: Posts[];
};

type Action = {
	updatePosts: (data: State["posts"]) => void;
};

export const postsStore = create<State & Action>((set) => ({
	posts: [],
	updatePosts: (data) => {
		console.debug("Updating posts stores", data);
		set(() => ({
			posts: data,
		}));
	},
}));
