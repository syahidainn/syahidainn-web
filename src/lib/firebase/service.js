import app from "./init";
import { getFirestore } from "firebase/firestore";

const firestore = getFirestore(app);

export async function retrieveData(collectionName) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName, id) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}
