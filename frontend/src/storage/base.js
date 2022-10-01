import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYI-zYDYQWSh51aHnWqZMa1syw7WzDrWQ",
  authDomain: "orion-8dd9f.firebaseapp.com",
  projectId: "orion-8dd9f",
  storageBucket: "orion-8dd9f.appspot.com",
  messagingSenderId: "702490906352",
  appId: "1:702490906352:web:1badcab299a404b818fc35",
  measurementId: "G-60548V3X99",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
//https://project-orion.vercel.app/api/ backend
