import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';


function App() {

  const [galleryItems, setGalleryItems] = useState ([]);

  useEffect(() => getPhotos(), []);

  const getPhotos = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      setGalleryItems(response.data);
  }).catch(err => {
    alert('error GETTING Gallery ');
    console.log(err);
  })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
        items={galleryItems} 
        getPhotos={getPhotos}
        />
        
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/selfie.jpeg"/> */}
      </div>
    );
}

export default App;
