import { use } from "react"
import AlbumCard from "./AlbumCard";

export default function Albums({albumsDataPromise}) {
    const albums= use(albumsDataPromise)
    console.log(albums);
    return (
        <div>
            <h3>Album:{albums.length}</h3>
            {
                albums.map(item => <AlbumCard use={item}></AlbumCard>)
            }
        </div>
    )
}