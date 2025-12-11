
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ViewComponent = () => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: ''
    })
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const result = await axios.get(`http://localhost:8080/users/${id}`);
        console.log("hiii", result.data[0])
        setUser(result.data[0][0]);
    }

    const handleBackclick = () => {
        navigate('/')
    }

    return (
        <div className="container mt-3">
            <div className="w-50 mx-auto shadow p-5">
                <h1 className="mb-3 text-center"> View user: {user.user_id}  </h1>
                <div className="mb-3">
                    <ul class="list-group">
                        <label className="form-label">First Name</label>
                        <li class="list-group-item">{user.first_name}
                        </li>
                        <label className="form-label">Last Name</label>
                        <li class="list-group-item">{user.last_name}
                        </li>
                        <label className="form-label">email</label>
                        <li class="list-group-item"> {user.email}
                        </li>
                    </ul>
                </div>
                <div className="mb-3 d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-success btn-lg" type="button" onClick={handleBackclick}>Back to Home</button>
                </div>
            </div>
        </div>
    )
}
export default ViewComponent