import { useState } from 'react';
import './App.css';
import { getDogUrl } from './getters/getDog';
import { getDogBreeds } from './getters/getDogBreeds';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import { getCatStatusCodeURL } from './getters/getCatStatusCode';
import { DogResponse } from './models/dogResponse';

function App() {
  const [dogResponse, setDogResponse] = useState<DogResponse | null>(null);
  const [dogBreeds, setDogBreeds] = useState<string[]>([]);
  const [chosenDogBreed, setChosenDogBreed] = useState<string>("collie");
  const [password, setPassword] = useState<string>('Password');
  const [instructionsOpen, setInstructionsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        { password !== "DogsAreCool" &&
          <>
            <TextField
              className='formElement'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img src={getCatStatusCodeURL(401)}></img>
          </>
        }  
        { password === "DogsAreCool" &&
          <>
            {dogBreeds.length === 0 && <button onClick={async ()=>setDogBreeds(await getDogBreeds())}> Get List of Dog Breeds</button>}
            {
              dogBreeds.length >0  && 
              <div>
                <Select
                  className='formElement'
                  value={chosenDogBreed}
                  onChange={(e) =>setChosenDogBreed(e.target.value)}
                >
                  <MenuItem value={''}>any</MenuItem>
                  <MenuItem value={'BAD DOGS'}>bad dogs</MenuItem>
                  {dogBreeds.map(breed =>
                  <MenuItem value={breed}>{breed}</MenuItem>)}
                </Select>
                <Button 
                  className='formElement'
                  onClick={
                    async () => 
                      setDogResponse(
                        ( chosenDogBreed ? await getDogUrl(chosenDogBreed) : await getDogUrl()))
                  }
                >
                  Get Dog
                </Button>
              </div>
            }
            {!dogResponse && <img src={getCatStatusCodeURL(200)}></img>}
            {dogResponse && dogResponse.status === "success" && <img src={dogResponse.message}></img>}
            {dogResponse && dogResponse.status === "error" && <img src={getCatStatusCodeURL(dogResponse.code)}></img>}
          </>
        }
      </header>
    </div>
  );
}

export default App;

