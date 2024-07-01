import {useState} from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import "../index.css"

const Write = () => {

    const [animalName, setAnimalName] = useState('');
    const [animalDesc, setAnimalDesc] = useState('');

    const saveAnimal = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "animals"));
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
        <h1 className="text-center">Write</h1>
        <section id="Animal">
          <div>
            <label htmlFor="animalName">Animal Name :</label>
            <input
              type="text"
              value={animalName}
              name="animalName"
              onChange={(e) => setAnimalName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="animalDesc">Animal Description :</label>
            <input
              type="text"
              name="animalDesc"
              value={animalDesc}
              onChange={(e) => setAnimalDesc(e.target.value)}
            />
          </div>
        <button onClick={saveAnimal}>Save Animal</button>
        </section>
      </div>
    );
}

export default Write;