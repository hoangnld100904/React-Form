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
    const [error, setError] = useState({
        userId: '',
        name: '',
        phone: '',
        email: '',
    })
    const handleChange = (event) => {
        let tagInput = event.target
        let {name, value, type} = tagInput
        console.log(name, value)
        let errorMessage = ''
        // Handle check Empty input
        if (value.trim() === '') {
            errorMessage = name + 'không được để trống'
        }
        // Handle check Empty input
        //Handle check email template
        if (type === 'email'){
            const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            if (!regExp.test(name)){
                errorMessage = 'Email không đúng định dạng'
            }
        }
        //Handle check email template
        setUser({
          ...user,
          [name]: value
        });
        setError({
            ...error,
            [name]: errorMessage
        })
      };
    const handleSubmit = (e) => {
        e.preventDefault();
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
                <form className="form row" onSubmit={handleSubmit}>
                    <div className="input_container col-6">
                        <p>User ID</p>
                        <input type="text" name="userId" className="form-control" onChange={handleChange}/>
                        <span className="text-danger">{error.userID}</span>
                    </div>
                    <div className="input_container col-6">
                        <p>Name</p>
                        <input type="text" name="name" className="form-control" onChange={handleChange} />
                        <span className="text-danger">{error.name}</span>
                    </div>
                    <div className="input_container col-6">
                        <p>Phone</p>
                        <input type="text" name="phone" className="form-control" onChange={handleChange} />
                        <span className="text-danger">{error.phone}</span>
                    </div>
                    <div className="input_container col-6">
                        <p>Email</p>
                        <input type="text" name="email" className="form-control" onChange={handleChange} />
                        <span className="text-danger">{error.email}</span>
                    </div>
                    <button className="float-left my-3 btn btn-success" type='submit' style={{width: '100px'}}>Submit</button>
                </form>
                
            </div>
        </div>
    )
}