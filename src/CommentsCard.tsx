import './CommentsCard.css'
export default function  ({card}){
    return (
        <div className='comments'>
            <p>Id:{card.id}</p>
            <p>Name:{card.name}</p>
        </div>
    )
}