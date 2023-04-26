import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';
import axios from 'axios';
import { Grid } from "@mui/material";

function GalleryList(props) {

    // console.log(props.galleryItems);

    const likePicture = (id, likes) => {
        let newLikes = likes + 1;
        // console.log(newLikes);
        axios.put(`/gallery/like/${id}`, 
            {
            id: id,
            likes: newLikes
            }
        )
        .then( response => {
            props.getGallery()
            // console.log(response);
        }).catch(error => console.log(error))
    }

    return (
        <div>
            <h2>Road Trip Out West</h2>
            {props.galleryItems.map(item => ( 
                <div key = {item.id}>
                    <GalleryItem 
                        key = {item.id}
                        path = {item.path}
                        description = {item.description}           
                    />
                    <button onClick={() =>{
                        likePicture(item.id, item.likes)
                    }}>I love it!</button>
                    <p>{item.likes}</p>
                </div>)
            )}
        </div>
    )
}

export default GalleryList;

