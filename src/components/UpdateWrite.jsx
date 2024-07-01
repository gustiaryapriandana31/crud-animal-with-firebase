import { useState, useEffect } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, get} from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";

const UpdateWrite = () => {
  const navigate = useNavigate();
  const {animalId} = useParams();

  const [animalName, setAnimalName] = useState("");
  const [animalDesc, setAnimalDesc] = useState("");

  useEffect(() => {
        const updateAnimal = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, "animals/" + animalId);
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                const targetObject = snapshot.val();
                setAnimalName(targetObject.animalName)
                setAnimalDesc(targetObject.animalDesc)
            } else {
                alert("Error");
            }
        };
        updateAnimal();
    }, [animalId])

  const overWriteAnimalData = async () => {
    const db = getDatabase(app);
    const newDocRef = ref(db, "animals/" + animalId);
    set(newDocRef, {
      animalName: animalName,
      animalDesc: animalDesc,
    })
      .then(() => {
        alert("Animal updated");
      })
      .catch((error) => {
        alert("Error : " + error);
      });
  };

  return (
    <div>
      <h1 className="text-center">UPDATE WRITE PAGE</h1>
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
        <button onClick={overWriteAnimalData}>Update Animal</button>
      </section>

      <button type="button" onClick={() => navigate("/read")}>
        GO TO READ PAGE
      </button>
      <button type="button" onClick={() => navigate("/updateread")}>
        GO TO UPDATE READ PAGE
      </button>
    </div>
  );
};

export default UpdateWrite;
