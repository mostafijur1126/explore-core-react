import { use } from "react"
import Comment from "./Comment";

export default function Comments({commentPromise}){
    const comments = use(commentPromise);
    // console.log(comments)
    return(
        <div className="card">
            <h2>Comments: {comments.length}</h2>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}