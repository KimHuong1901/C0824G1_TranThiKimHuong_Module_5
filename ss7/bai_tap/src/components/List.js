import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteUser, getAllUsers} from "../redux/action";
import { Button } from "react-bootstrap";
import * as users from "react-bootstrap/ElementChildren";
function List(){
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading)
    return (
        <div>
            <h2>User List</h2>
            <Button onClick={()=>dispatch(getAllUsers())}>Get User</Button>
            {loading && <p>Loading...</p>}
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>
                            <Button onClick={() => dispatch(deleteUser(user.id))} variant="destructive">Delete</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default List;