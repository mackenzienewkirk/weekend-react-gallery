import {useState} from 'react';

function GalleryItem(props) {

    const [showPicture, setshowPicture] = useState(true);
    const toggleShow = () => setshowPicture(!showPicture)

    if (showPicture === true) {
        return(
            <div className="img-card"
                onClick={toggleShow}>
                <img src={props.path} alt={props.description} />
            </div>
        )
    }
    else {
        return(
            <p className="img-card"
                onClick={toggleShow}>
                {props.description}
            </p>
        )
    }
}

export default GalleryItem;