export default function ListUsers(props: any) {

    const delateUser = (userID: number) => {
        props.setUsers(props.data.filter((user: any) => user.id !== userID))
    }
    return (
        <div className="listUsers">
            {props.data.map((item: any) => {
                return (
                    <p className="userData" key={item.id}>{item.fName}
                        <span onClick={(e) => {
                            e.preventDefault()
                            delateUser(item.id)
                        }} className="delate">x</span>
                    </p>
                )
            })}
        </div>
    )
}