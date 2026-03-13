export default function Comment({comment}){
    // console.log(comment)
    return(
        <div className="card">
            <h4>Name: {comment.name}</h4>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body}</p>
        </div>
    )
}