import { initializeApp } from "firebase/app";
import { collection, writeBatch, getFirestore, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMOEIZFuJ2YRnzaBvf0E-L5RChIw9fr6w",
  authDomain: "coderhouse-59dc7.firebaseapp.com",
  projectId: "coderhouse-59dc7",
  storageBucket: "coderhouse-59dc7.appspot.com",
  messagingSenderId: "760174166034",
  appId: "1:760174166034:web:966a64dcd737b65400d8cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);
//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object);
//   });
//   await batch.commit();
//   console.log("Write Done");
// };
