import { useState } from 'react';
import './App.css';
import { getDogUrl } from './getters/getDog';
import { getDogBreeds } from './getters/getDogBreeds';
import { MenuItem, Select } from '@mui/material';

function App() {
  const [dogUrl, setDogUrl] = useState<string | null>(null);
  const [dogBreeds, setDogBreeds] = useState<string[]>([]);
  const [chosenDogBreed, setChosenDogBreed] = useState<string>("collie");
  

  return (
    <div className="App">
      <header className="App-header">
        {dogUrl && <img src={dogUrl}></img>}
        <button onClick={async ()=>setDogUrl(await ( chosenDogBreed ? await getDogUrl(chosenDogBreed) : await getDogUrl()))}>Get Dog</button>
        {dogBreeds.length == 0 && <button onClick={async ()=>setDogBreeds(await getDogBreeds())}> Get List of Dog Breeds</button>}
        {
          dogBreeds.length >0  && 
          <Select
            value={chosenDogBreed}
            onChange={(e) =>setChosenDogBreed(e.target.value)}
          >
            {dogBreeds.map(breed =>
            <MenuItem value={breed}>{breed}</MenuItem>)}
          </Select>
        }
      </header>
    </div>
  );
}

export default App;

