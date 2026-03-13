export default function Singer({singer}){
    console.log(singer)
    return(
        <div className="singer">
            <h3>Name: {singer.name}</h3>
            <p>Age: {singer.age}</p>
        </div>
    )
}