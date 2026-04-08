import {use} from "react"
export default function Users({fetchUsers}){
    const users = use(fetchUsers);
    console.log(users);
    return(
        <div className="card">
            <h4>Useres: {users.length}</h4>

        </div>
    )
}