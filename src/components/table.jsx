import {React, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
// import UpdateModal from "./updateModal";
export function Table() {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch({
            type: 'DeleteUser',
            id
        })
    }
    const { mangNhanVien } = useSelector(state => state);

    console.log(mangNhanVien)

    // const [show, setShow] = useState(false);
    // const [user, setUser] = useState({});
    // function handleClose(){
    //     setShow(false);
    // }
    // const handleUpdate = (user) => {
    //     setUser(user)
    //     setShow(true);
    // };
    function renderData() {
        return mangNhanVien.map((nv, index) => {
            return <tr key={index}>
                <td>{nv.userId}</td>
                <td>{nv.name}</td>
                <td>{nv.phone}</td>
                <td>{nv.email}</td>
                <td><button className="btn btn-danger" onClick={() => { handleDelete(index) }}>Delete</button></td>
                <td><button className="btn btn-primary">Update</button></td>
            </tr>
        })
    }
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr className="bg-dark text-white">
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData()}
                </tbody>
            </table>
            {/* <UpdateModal
                show={show}
                user={user}
                handleClose={handleClose}
            /> */}
        </div>
    )
}