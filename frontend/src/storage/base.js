import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  /*

  /////////////////////////
  /////////////////////////



    paste it here

    Example:

    apiKey: ,


    authDomain: ,


    projectId: ,


    storageBucket: ,


    messagingSenderId: ,



    appId: ,


    
    measurementId: ,





    ////////////////////////////
    ///////////////////////////

 */
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
