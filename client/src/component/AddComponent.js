import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddComponent = () => {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: ""
    })

    const navigate = useNavigate();
    const { first_name, last_name, email } = user;

    const handleChange = (e) => {
        console.log("Ok", e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleAddClick = async (e) => {
        e.preventDefault();
        console.log("Heyyy", first_name, last_name, email)
        await axios.post("http://localhost:8080/users", user);
        navigate('/');
    }

    const handleBackclick = () => {
        navigate("/");
    }
    return (
        <div className="container mt-3">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="mb-3 text-center"> User Add Form </h1>
                <div className="mb-3">
                    <button className="btn btn-outline-warning" onClick={handleBackclick}>Back to Home</button>
                </div>
                <form>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" name="first_name" placeholder="Enter the First name"
                            value={first_name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="last_name" placeholder="Enetr the Last name"
                            value={last_name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="text" className="form-control" name="email" id="exampleFormControlInput1" placeholder="Enetr the Email"
                            value={email} onChange={handleChange} />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-success btn-lg" type="button" onClick={handleAddClick}>Add User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddComponent
