import { PreProcessedFileInfo } from "typescript";
import { Photo } from "../models/photo";

const photoAPIUrl = "http://localhost:5001/photos/"

export async function updateLike (photoID:string):Promise<number> {
    
    // PATCH /photos/{PHOTO_ID} with a body of { likes: 1 }

    const fetchPhotos = await fetch(photoAPIUrl+photoID, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ likes: 1 })

    })
    const photo:Photo = await fetchPhotos.json() 
    return photo.likes || 0 
} 

export async function getPhotos () : Promise<Photo[]> {
    // fetch ("http://localhost:5001/photos")
    // .then (res => res.json())
    // .then ((data: Photo[] )=> {
    //  setPhotos(data) 
    // })
    try 
    {
    const fetchPhotos = await fetch(photoAPIUrl)
    const photoList:Photo[] = await fetchPhotos.json()
    return photoList
    } catch (error) {
        console.error(error)
        return [] // we have crashed but we can return an empty array/
    }

}
