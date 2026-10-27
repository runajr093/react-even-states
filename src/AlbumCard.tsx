import './Album.css'

export default function AlbumCard({use}){
    
    return(
        <div className='album'>
            <p>Id:{use.id}</p>
            <p>Title:{use.title}</p>
        </div>
    )
}