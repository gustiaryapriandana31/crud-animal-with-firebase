import { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Read() {

    const navigate = useNavigate();

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

    return (
      <div>
        <h1 className="text-center">READ PAGE</h1>
        <button type="button" onClick={displayAnimal}>
          Display Animals
        </button>
        <ul>
          {animalArray.map((animal, index) => (
            <li key={index}>
              {animal.animalName} : {animal.animalDesc}
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => navigate("/")}>
          GO TO HOMEPAGE
        </button>
        <button type="button" onClick={() => navigate("/updateread")}>
          GO TO UPDARE READ PAGE
        </button>
      </div>
    );
}

export default Read;
