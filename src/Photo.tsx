import { use } from "react"
import PhotoCard from "./PhotoCard";

export default function Photo({photoDataPromise}){
    const photo= use(photoDataPromise);
    console.log(photo);
    return (
        <div>
            <h2>Photos:{photo.length}</h2>
            {
                photo.map(info => <PhotoCard photos={info}></PhotoCard> )
            }
        </div>
    )
}