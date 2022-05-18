var admin = require("firebase-admin");
// const { getDatabase, getFirestore } = require('firebase-admin/database');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dummyfirebaseadmin-default-rtdb.firebaseio.com/"
});
const db = getFirestore();

const docRef = db.collection('users');

const addData = async () => {
try {
    await docRef.add({
        first: 'Aaiaz',
        last: 'Lovelace',
        born: 1815
      });
} catch (error) {
    console.log(error)
}
}
addData()  
// console.log(db);

console.log("running perfectly") 