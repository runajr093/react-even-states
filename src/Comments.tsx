import { use } from "react"
import CommentsCard from "./CommentsCard";


export default function Comments ({commentsDataPromise}){
    const comments=use(commentsDataPromise);
    console.log(comments);
    return (
        <div>
            <p>Name:{comments.length}</p>
            {
                comments.map(info => <CommentsCard card={info}></CommentsCard>)
            }
        </div>
    )
}




