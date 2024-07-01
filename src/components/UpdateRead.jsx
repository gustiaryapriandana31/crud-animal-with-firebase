import { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "../index.css";

function UpdateRead() {

    const navigate = useNavigate();

    let [animalArray, setAnimalArray] = useState([]);

    const displayAnimal = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "animals");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {

            const myAnimal = snapshot.val()
            const temporaryArrayAnimals = Object.keys(myAnimal).map(myAnimalId => { 
                return {
                    ...myAnimal[myAnimalId],
                    animalId: myAnimalId
                }
            })
            setAnimalArray(temporaryArrayAnimals);
        } else {
            alert("Error");
        }
    };

    return (
      <div>
        <h1 className="text-center">UPDATE READ PAGE</h1>
        <button type="button" onClick={displayAnimal}>
          Display Animals
        </button>
        <ul>
          {animalArray.map((animal, index) => (
            <li key={index}>
              {animal.animalName} : {animal.animalDesc} : {animal.animalId}
              <button type="button" onClick={() => navigate(`/updatewrite/${animal.animalId}`)}>UPDATE</button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => navigate("/")}>
          GO TO HOMEPAGE
        </button>
        <button type="button" onClick={() => navigate("/read")}>
          GO TO READ PAGE
        </button>
      </div>
    );
}

export default UpdateRead;
