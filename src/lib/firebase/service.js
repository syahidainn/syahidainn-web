import app from "./init";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const firestore = getFirestore(app);

export async function retrieveData(collectionName) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById() {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  // const docSnap = await getDoc(docRef);
  // const bookingData = {
  //   id: docSnap.id, // Save the document ID
  //   ...docSnap.data(),
  // };
  return data;
}

export async function submitForm(collectionName, data) {
  await addDoc(collection(firestore, collectionName), data);
}

export async function updateData(collectionName, data) {
  const docRef = doc(firestore, collectionName, data);
  // const bookingData = {
  //   id: docSnap.id, // Save the document ID
  //   ...docSnap.data(),
  // };
  await updateDoc(docRef, data);
}
