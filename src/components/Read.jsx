import { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import "../index.css";

function Read() {

    let [animalArray, setAnimalArray] = useState([])

    const displayAnimal = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "animals");
        const snapshot = await get(dbRef)
        if(snapshot.exists()) {
            setAnimalArray(Object.values(snapshot.val()))
        } else {
            alert("Error")
        }
    }

    return(
        <div>
            <button type="button" onClick={displayAnimal}>Display Animals</button>
            <ul>
                {animalArray.map((animal, index) => (
                    <li key={index}>{animal.animalName} : {animal.animalDesc}</li>
                ))}
            </ul>
        </div>
    )
}

export default Read;
