import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

function UpdateModal(show, user, handleClose) {
    const [userUpdate, setUserUpdate] = useState({
        userId: '',
        name: '',
        phone: '',
        email: '',
    });
    const handleChange = (event) => {
        setUserUpdate({
            ...userUpdate,
            [event.target.name]: event.target.value
        });
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>ReactJS Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <h3>Update</h3>
                    <div className="form row">
                        <div className="input_container col-6">
                            <p>User ID</p>
                            <input type="text" name="userId" className="form-control" value={user.userID} onChange={handleChange} />
                        </div>
                        <div className="input_container col-6">
                            <p>Name</p>
                            <input type="text" name="name" className="form-control" value={user.name} onChange={handleChange} />
                        </div>
                        <div className="input_container col-6">
                            <p>Phone</p>
                            <input type="text" name="phone" className="form-control" value={user.phone} onChange={handleChange} />
                        </div>
                        <div className="input_container col-6">
                            <p>Email</p>
                            <input type="text" name="email" className="form-control" value={user.email} onChange={handleChange} />
                        </div>
                    </div>
                    <button className="float-left my-3 btn btn-gray">Update</button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateModal;
