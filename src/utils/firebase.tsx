import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  NextOrObserver,
  User
} from "firebase/auth";
// eslint-disable-next-line
import { getFirestore, writeBatch, doc, getDoc, setDoc, collection, query, getDocs, orderBy } from "firebase/firestore";
// eslint-disable-next-line
import { SHOP_DATA_MEN, SHOP_DATA_WOMEN } from "./shop-data";
import type { Category } from "../store/products.slice";

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
// eslint-disable-next-line
const tmpFunc3 = async () => {
  const batch = writeBatch(db);
  SHOP_DATA_MEN.forEach((category) => {
    const docRef = doc(db, "product-categories-men", category.title);
    batch.set(docRef, category);
  });
  await batch.commit();
};
//tmpFunc3();

// ---------------------------------------------------------------------------------------------

export const getProductsFromFirestore = async (gender: "women" | "men") => {
  // Another method is to set a listener (probably recommended)
  const categories: Category[] = [];
  const colRef = collection(db, `product-categories-${gender}`);
  const querySnapshot = await getDocs(query(colRef, orderBy("id")));
  querySnapshot.docs.forEach((category) => {
    const { id, title, items } = category.data();
    categories.push({
      id,
      title,
      items,
      titleSanitized: category.data().title.toLowerCase().replace(/\s+/gm, ""),
    });
  });
  return categories;
};

export const firebaseCreateUserWithEmailAndPassword = async (email: string, password: string, displayName: string) => {
  // Right now the returned user obj is never used, though it has useful properties.
  // Maybe use it later, when checking if email is verified etc...
  // We are using the user object one time in the app.js though, when using the onAuthChangedListener.
  const credidentials = await createUserWithEmailAndPassword(auth, email, password);
  auth.currentUser && await updateProfile(auth.currentUser, { displayName: displayName });
  return credidentials;
};

export const firebaseSignInWithEmailAndPassword = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};
