export default function PhotoCard({photos}){
    return (
        <div>
            <p>Id:{photos.id}</p>
            <p>{photos.thumbnailUrl}</p>
        </div>
    )
}