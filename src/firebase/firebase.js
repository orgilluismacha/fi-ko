// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import * as firebase from "firebase/database";
import { validateCallback } from "@firebase/util";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set, remove, update, onValue, on, get, push, child, onChildRemoved, onChildChanged, onChildAdded } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const googleAuthProvider = new GoogleAuthProvider();
// Get the database
export const db = getDatabase();
 

// function addExpense(description, note, amount, createdAt) {
//   const db = getDatabase();
//   push(ref(db, 'expenses'), {
//     description,
//     note,
//     amount,
//     createdAt
//   }).then(() => {
//     console.log('Written to database!');
//   }).catch((e) => {
//     console.log('[ERR] Writing to database failed! Error:', e);
//   });
// }



// function removeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   remove(ref(db, "staged/a"))
//     .then(() => {
//       console.log('Data was removed!');
//     }).catch((e) => {
//       console.log('[ERR] Removing failed! Error:', e);
//     });
// }

// function updateUserData() {
//   const db = getDatabase();
//   update(ref(db),{
//     "age/2": 420
//   })
//     .then(() => {
//       console.log("Data was updated!");
//     }).catch((e) => {
//       console.log("[ERR] Updating data failed! Error: ", e);
//     });
// }

// function fetchExpense(){
//   const db = getDatabase();
//   onValue(ref(db, "expenses"), (snapshot)=>{
//     const expenses = [];
    
//     snapshot.forEach((childSnap) => {
//       expenses.push({
//         id: childSnap.key,
//         ...childSnap.val()
//       });
//     });

//     console.log(expenses);
//   });
// }

// onValue(ref(db, "expenses"), (snapshot)=>{
//   const expenses = [];
  
//   snapshot.forEach((childSnap) => {
//     expenses.push({
//       id: childSnap.key,
//       ...childSnap.val()
//     });
//   });

//   console.log(expenses);
// });

// onChildRemoved(ref(db, "expenses"), (snapshot)=>{
//   console.log("HOOE PISDA NG YUM ALGA BOLCHLOO HOOE!",snapshot.key, snapshot.val());
// });

// onChildChanged(ref(db, "expenses"), (snapshot)=>{
//   console.log("ZLZL PISDA NG YUM UUR BOLCHLOO HOOE!",snapshot.key, snapshot.val());
// });

// onChildAdded(ref(db, "expenses"), (snapshot)=>{
//   console.log("SHAA PISDA NG YUM NEMEGDCHLEE HOOE!",snapshot.key, snapshot.val());
// });