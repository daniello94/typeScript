import AddUser from "./AddUser";
import "./Users.css"
export type User = {
    fName: string,
    id: number
}
export default function Users() {
    return (
        <div className="stanComponent">
            <AddUser/>
        </div>
    );
};