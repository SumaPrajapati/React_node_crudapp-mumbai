
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditComponent = () => {

    const { id } = useParams();
    const [users, setUsers] = useState({
        first_name: "",
        last_name: "",
        email: ""
    })
    const navigate = useNavigate();
    const { first_name, last_name, email } = users;

    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/users/${id}`);
            console.log("heyyyy", result.data[0][0])
            setUsers(result.data[0][0]);
        } catch (err) {
            console.log("Error", err)
        }

    }

    const handleUpdateClick = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/users/${id}`, users);
        navigate('/');
    }

    const handleBackclick = () => {
        navigate("/");
    }

    return (
        <div className="container mt-3">
            <div className="w-50 mx-auto shadow p-5">
                <h1 className="mb-3 text-center"> Edit a user  </h1>
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
                        <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="last_name" id="exampleFormControlInput1" placeholder="Enetr the Last name"
                            value={last_name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="text" className="form-control" name="email" id="exampleFormControlInput1" placeholder="Enetr the Email"
                            value={email} onChange={handleChange} />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-success btn-lg" type="button" onClick={handleUpdateClick}>Update User</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default EditComponent