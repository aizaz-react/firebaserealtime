import { useEffect } from 'react';
import './App.css';
import { app, db } from "./firebase"
import { collection, query, where, onSnapshot } from "firebase/firestore";

function App() {
  const fetchUsers = async () => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      console.log(cities);
    });
    // console.log(unsubscribe);
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
