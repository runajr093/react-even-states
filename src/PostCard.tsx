import './postCard.css'
export default function PostCard({post}){
    
    return (
        <div className='post'>
            <p>UserId:{post.userId}</p>
            <p>Id:{post.id}</p>
            <p>Title:{post.title}</p>
        </div>
    )
}