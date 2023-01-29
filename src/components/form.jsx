import { React, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";


export function Form() {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        userId: '',
        name: '',
        phone: '',
        email: '',
    });
    const handleChange = (event) => {
        setUser({
          ...user,
          [event.target.name]: event.target.value
        });
      };
    const handleSubmit = () => {
        console.log(user)
       var nhanVien = user
        dispatch({
            type: 'AddUser',
            nhanVien
        })
    }
    return (
        <div className="container">
            <div className="title">
                <h2>ReactJS Form</h2>
            </div>
            <div>
                <div className="form row">
                    <div className="input_container col-6">
                        <p>User ID</p>
                        <input type="text" name="userId" className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="input_container col-6">
                        <p>Name</p>
                        <input type="text" name="name" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="input_container col-6">
                        <p>Phone</p>
                        <input type="text" name="phone" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="input_container col-6">
                        <p>Email</p>
                        <input type="text" name="email" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                <button className="float-left my-3 btn btn-success" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}