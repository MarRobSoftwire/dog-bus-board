import { useState } from 'react';
import './App.css';
import { getDogUrl } from './getters/getDog';
import { getDogBreeds } from './getters/getDogBreeds';
import { Button, MenuItem, Select, TextField } from '@mui/material';

function App() {
  const [dogUrl, setDogUrl] = useState<string | null>(null);
  const [dogBreeds, setDogBreeds] = useState<string[]>([]);
  const [chosenDogBreed, setChosenDogBreed] = useState<string>("collie");
  const [password, setPassword] = useState<string>('Password');
  

  return (
    <div className="App">
      <header className="App-header">
        { password !== "DogsAreCool" &&
          <TextField
            className='formElement'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
                  {dogBreeds.map(breed =>
                  <MenuItem value={breed}>{breed}</MenuItem>)}
                </Select>
                <Button 
                  className='formElement'
                  onClick={
                    async () => 
                      setDogUrl(
                        ( chosenDogBreed ? await getDogUrl(chosenDogBreed) : await getDogUrl()))
                  }
                >
                  Get Dog
                </Button>
              </div>
            }
            {dogUrl && <img src={dogUrl}></img>}
          </>
        }
      </header>
    </div>
  );
}

export default App;

