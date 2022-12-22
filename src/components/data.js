import {
  getFirestore,
  doc,
  getDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import { useEffect } from "react";

export const Data = () => {
  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, "users", "1lGD90bRqbTfwR3h5Cs5");
    getDoc(queryDoc)
      .then((res) => console.log({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err));
  }, []);
};

export const AddDataToDatabase = async (data) => {
  const db = getFirestore();

  try {
    const docRef = await addDoc(collection(db, "users"), data);
    setTimeout(function () {
      window.location = "";
    }, 500);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
