import { initializeApp } from "firebase/app";
import {
  collection,
  writeBatch,
  getFirestore,
  query,
  addDoc,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  _apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  // console.log(querySnapshot.docs.map((snapshot) => snapshot.data()));

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

/* CREATE ORDER COLLECTION */
export const createOrderOnFirebase = async (orderObj) => {
  const order = { ...orderObj };
  const orderCollection = collection(db, "orders");
  const docAdded = await addDoc(orderCollection, order);
  return docAdded;
};

export const getOrderFromFirestore = async (docId) => {
  const orderCollection = collection(db, "orders");

  const snapshot = await getDoc(doc(orderCollection, docId));

  try {
    if (snapshot.exists()) {
      return true;
    } else {
      throw new Error("Document not found");
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
