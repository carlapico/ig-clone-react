import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './pages/Feed';
import { Photo } from './models/photo';

function App() {
  //keeping track of an array of type "Photo" from models above
  const [photos, setPhotos] = useState <Photo[]> ([])

  //pull the ig-backend photos from localhost:5001
  useEffect( () => {
    fetch("http://localhost:5001/photos")
    .then (res => res.json())
    .then ((data: Photo[] )=> {
      console.log(data)
      setPhotos(data) 
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Feed /> 
        <p>
          {photos.map ((photo:Photo) => {
            return <div key={photo._id}> {photo.photoUrl}</div>
            })
          }
        </p>
      </header>
    </div>
  );
}

export default App;
