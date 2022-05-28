// project file
import { firestoreDB } from "./connectToFirebase";

// packages
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  setDoc,
  updateDoc,
  where,
  query,
} from "firebase/firestore";

// Get

// all documents
export async function getCollection(path) {
  const collectionPath = collection(firestoreDB, path);
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });

  return documents;
}

// single document (ex: film)
export async function getDocument(path, id) {
  const documentPath = doc(firestoreDB, path, id);
  const document = await getDoc(documentPath);

  return document.data();
}

// Create

// Create document with its id
export async function addDocumentWithId(path, data, customId) {
  const docLocation = collection(firestoreDB, path);
  await setDoc(doc(docLocation, customId), data);
  return true;
}

// Create document with firestore generated id
export async function addDocument(path, data) {
  const docPath = collection(firestoreDB, path);
  const newDocument = await addDoc(docPath, data);

  return newDocument.id;
}

// Update

// edit document with its id
export async function editDocument(path, data, docId) {
  const document = doc(firestoreDB, path, docId);
  await updateDoc(document, data);
  return true;
}

// Delete document
export async function deleteDocument(path, docId) {
  const document = doc(firestoreDB, path, docId);
  await deleteDoc(document);
}

// Find titles by type
export async function findTitlesByType(type) {
  const titlesCollection = collection(firestoreDB, "titles");
  const searchTerm = where("type", "==", type);
  const titlesQuery = query(titlesCollection, searchTerm);
  const querySnapshot = await getDocs(titlesQuery);
  const specificTitles = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return specificTitles;
}
