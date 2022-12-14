import React, { useEffect, useState } from "react";
import PhotoView from "../components/PhotoView";
import { Photo } from "../models/photo"
import "./Feed.css"

function Feed () {
  //keeping track of an array of type "Photo" from models above
  const [photos, setPhotos] = useState <Photo[]> ([])

  //pull the ig-backend photos from localhost:5001
  useEffect ( () => {
    fetch("http://localhost:5001/photos")
    .then (res => res.json())
    .then ((data: Photo[] )=> {
      setPhotos(data) 
    })
  }, [])
    return (
        <>
            <h1> The Feed </h1>
            <div>
                {photos.map((photo: Photo) => {
                    return <PhotoView key={photo._id} photo={photo} />
                    // return <div><img src={photo.photoUrl} /></div>
                    })
                }
            </div>
        </>
    )
}

export default Feed