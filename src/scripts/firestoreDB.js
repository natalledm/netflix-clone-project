// project file
import { firestoreDB } from "./connectToFirebase";

// packages
import {
  collection,
  doc,
  getDoc,
  getDocs
} from "firebase/firestore";

// Read
// all documents
export async function getCollection(path) {
  const collectionPath = collection(firestoreDB, path);
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });

  return documents;
}

// single document (ex: fantasy)
export async function readDocument(path, id) {
  const documentPath = doc(firestoreDB, path, id);
  const document = await getDoc(documentPath);

  return document.data();
}
