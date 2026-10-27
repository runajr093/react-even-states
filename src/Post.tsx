import { use } from "react"
import PostCard from "./PostCard";

export default function Post({postDataPromise}){
    const post = use(postDataPromise);
    console.log(post);
    return(
        <div>
<h3>Post:{post.length}</h3>
{
    post.map(info => <PostCard post={info}></PostCard>)
}
        </div>
    )
}