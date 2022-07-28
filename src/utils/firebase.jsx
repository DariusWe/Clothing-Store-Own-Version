import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { getFirestore, writeBatch, doc, getDoc, setDoc, collection, query, getDocs, orderBy } from "firebase/firestore";
import { SHOP_DATA_MEN } from "../shop-data-new";

const firebaseConfig = {
  apiKey: "AIzaSyAaBvYzxlXFC0-K1fY4O045nBDhDVal3pI",
  authDomain: "asd-project-7e72b.firebaseapp.com",
  projectId: "asd-project-7e72b",
  storageBucket: "asd-project-7e72b.appspot.com",
  messagingSenderId: "3136186377",
  appId: "1:3136186377:web:0339abe9d8dd149d6230d8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// --------------------------------------------------------------------------------------------

// get doc reference (some weird object), snapshot and with the snapshot the actual data:

/*
const docRef = doc(db, "product-categories", "Hats");
const tmpFunc = async () => {
  // get docSnapshot
  const docSnap = await getDoc(docRef);
  // console.log the data in the doc
  console.log(docSnap.data());
};
tmpFunc();
*/

// ---------------------------------------------------------------------------------------------

// Creating a new document and writing data to it. First, create new document anywhere. Then, pass
// the docRef into the setDoc() method, together with the data. SetDoc() is async, always has to be in an async function.

/*
const docRef2 = doc(db, "product-categories", "masts");
const tmpFunc2 = async () => {
  await setDoc(docRef2, {
    name: "some name",
    price: 999,
  });
};
tmpFunc2();
*/

// ---------------------------------------------------------------------------------------------

// Creating a batch and commiting it to the db:

const tmpFunc3 = async () => {
  const batch = writeBatch(db);
  SHOP_DATA_MEN.forEach((categorie) => {
    const docRef = doc(db, "product-categories-men", categorie.title);
    batch.set(docRef, categorie);
  });
  await batch.commit();
};
//tmpFunc3();

// ---------------------------------------------------------------------------------------------

export const getProductsFromFirestore = async () => {
  // Another method is to set a listener (probably recommended)
  const colRef = collection(db, "product-categories");
  const querySnapshot = await getDocs(query(colRef, orderBy("id")));
  return querySnapshot;
};

export const getProductsFromFirestoreV2 = async (sex) => {
  // Another method is to set a listener (probably recommended)
  const colRef = collection(db, `product-categories-${sex}`);
  const querySnapshot = await getDocs(query(colRef, orderBy("id")));
  return querySnapshot;
};

export const firebaseCreateUserWithEmailAndPassword = async (email, password, name) => {
  const credidentials = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, { displayName: name });
  return credidentials;
};

export const firebaseSignInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
