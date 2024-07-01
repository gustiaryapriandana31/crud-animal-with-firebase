import {useState} from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

const Write = () => {

    const [animalName, setAnimalName] = useState('');
    const [animalDesc, setAnimalDesc] = useState('');

    const saveAnimal = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, 'animals'));
        set(newDocRef, {
            animalName: animalName,
            animalDesc: animalDesc
        }).then(() => {
            alert('Animal added');
        }).catch((error) => {
            alert('Error : ' + error);
        });
    }

    return (
      <div>
        <h1>Write</h1>
        <input
          type="text"
          value={animalName}
          onChange={(e) => setAnimalName(e.target.value)}
        />
        <input
          type="text"
          value={animalDesc}
          onChange={(e) => setAnimalDesc(e.target.value)}
        />

        <button onClick={saveAnimal}>Save Animal</button>
      </div>
    );
}

export default Write;