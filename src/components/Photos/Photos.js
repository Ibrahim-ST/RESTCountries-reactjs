import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setPhotos(data))
    }, []);
    let images = photos.slice(0, 150);
    console.log(images);
    return (
        <div>            

            <h2>No of photos: {images.length}</h2>
            {
                images.map(photo => <Photo
                    id={photo.id}
                    title={photo.title}
                    img={photo.url}
                ></Photo>)
            }

        </div>
    );
};

export default Photos;