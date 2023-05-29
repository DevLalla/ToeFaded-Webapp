import React from "react";
import {
	CollectionReference,
	DocumentData,
	QuerySnapshot,
	Unsubscribe,
	collection,
	doc,
	getDocs,
	onSnapshot,
	query,
} from "firebase/firestore";
import { Firebase } from "../../integrations/Firebase";

interface getDocumentsProps {
	documentId?: string;
	collectionName?: string;
}

export const useDatabase = () => {
	const { database } = Firebase();

	const getDocuments = ({ collectionName }: getDocumentsProps) => {
		if (collectionName) {
			const unsubscribe = onSnapshot(
				collection(database, collectionName),
				(snapshot: QuerySnapshot<DocumentData>) => {
					console.log("Received new updates");

					const documents: DocumentData[] = [];
					snapshot.forEach((doc) => {
						console.log("document:", doc.data());
						documents.push(doc.data());
					});
				},
				(error) => {
					console.log("Error fetching documents:", error);
				}
			);

			// Return the unsubscribe function to stop listening for updates
			return unsubscribe;
		}
	};

	return { getDocuments };
};
