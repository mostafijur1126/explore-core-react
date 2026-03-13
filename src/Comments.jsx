import { use } from "react"

export default function Comments({commentPromise}){
    const comments = use(commentPromise);
    console.log(comments)
    return(
        <div>
            <h2>Comments: {comments.length}</h2>
        </div>
    )
}