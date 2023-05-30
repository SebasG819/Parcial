import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { Recetas } from "../types/recetas";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const savereceInDB = async (receta: Recetas) => {;
    try {
    await addDoc(collection(db, "receta"), receta);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};


export default { savereceInDB };