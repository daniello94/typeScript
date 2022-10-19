import { User } from "./Users";
import { useState } from "react";
import ListUsers from "./ListUsers";

export default function AddUser() {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState('')

    const addUser = (name: string): any => {
        let aName = {
            fName: name,
            id: Date.now()
        }
        setUsers(users.concat(aName));
        setName('')
    };
    return (
        <div>
            <form>
                <input type="text" onChange={(e) => setName(e.target.value)} name="name" value={name} placeholder="Wpisz imię" />
                <button onClick={(e) => {
                    e.preventDefault()
                    addUser(name)
                }}>Dodaj element</button>
            </form>
            <ListUsers data={users} setUsers={setUsers} />
        </div>
    )
}