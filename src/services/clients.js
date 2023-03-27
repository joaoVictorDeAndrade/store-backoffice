import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
import {db} from "../firebaseConfig";
const clientsRef = collection(db, "clients");

export async function fetchClients(field = "name", maxQuery = 10) {
  try {
    const first = query(clientsRef, orderBy(field), limit(maxQuery));
    const {docs} = await getDocs(first);

    const firstClient = docs[0].data();
    const lastClient = docs[docs.length - 1].data();

    const clients = docs.map((item) => item.data());

    return {clients, firstClient, lastClient};
  } catch {
    return {clients: [], firstClient: null, lastClient: null};
  }
}

export async function previousClients(firstClient) {}

export async function nextClients(lastClient) {}

export async function fetchClientByCPF(cpf) {
  try {
    const q = query(clientsRef, where("cpf", "==", cpf));
    const response = await getDocs(q);

    return response.docs[0].data();
  } catch {
    return null;
  }
}
