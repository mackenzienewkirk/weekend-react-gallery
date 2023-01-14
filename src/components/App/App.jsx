import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryItems, setGalleryItems] = useState ([]);

  useEffect(() => getGallery(), []);

  const getGallery = () => {
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
          <h1 className="App-title">From Minnesota to California...</h1>
          <p>Spring 2021</p>
        </header>
        <GalleryList 
        galleryItems={galleryItems} 
        getGallery={getGallery}/>

        {/* <img src="images/goat_small.jpg"/>
        <img src="images/selfie.jpeg"/> */}
      </div>
    );
}

export default App;
