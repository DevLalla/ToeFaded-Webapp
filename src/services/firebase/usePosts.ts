import { onSnapshot, collection, QuerySnapshot, DocumentData } from "firebase/firestore";
import { Firebase } from "../../app/integrations/Firebase";
import { Posts, postsStore } from "../../app/stores/Posts";

export const usePosts = () => {
	const collectionName = "posts";
	const updatePosts = postsStore((state) => state.updatePosts);
	const { database } = Firebase();

	const getAllPosts = () => {
		if (collectionName) {
			const unsubscribe = onSnapshot(
				collection(database, collectionName),
				(snapshot: QuerySnapshot<DocumentData>) => {
					console.debug("Received new posts");

					const posts: Posts[] = [];
					snapshot.docs.forEach((doc) => {
						let post: Posts = JSON.parse(JSON.stringify(doc.data()));
						posts.push(post);
					});
					updatePosts(posts);
				},
				(error) => {
					console.debug("Error fetching posts:", error);
				}
			);

			// Return the unsubscribe function to stop listening for updates
			return unsubscribe;
		}
	};

	return { getAllPosts };
};
