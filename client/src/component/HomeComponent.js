import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomeComponent() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        showData();
        /*   const getUser= async()=>{
              await fetch('http://localhost:5000/api/users')
              .then((res)=> res.json())
              .then(data=> setUsers(data))
              .catch(err=>console.log(err))
           }  getUser();  */
    }, [])

    const showData = async () => {
        try {
            const getUser = await axios.get('http://localhost:8080/users');
            console.log("UserData:", getUser.data);
            setUsers(getUser.data[0]);
        } catch (err) {
            console.log("Error:", err);
        }
    }

    const handleDeleteUser = async (id) => {
        if (window.confirm("Are you sure to delete your record ?")) {
            await axios.delete(`http://localhost:8080/users/${id}`)
            showData();
        }
    }

    return (
        <div className="container text-center">
            <div className="py-4">
                <h1>Home Mumbai Region Users</h1>
                <div>
                    <table className="table border shadow p-6 table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">EMail</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => {
                                return <tr key={user.user_id}>
                                    <td>{user.user_id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/user/view/${user.user_id}`}>View</Link>
                                        <Link className="btn btn-info" to={`/user/edit/${user.user_id}`}>Edit</Link>
                                        <Link className="btn btn-danger" onClick={() => handleDeleteUser(user.user_id)}>Delete</Link>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default HomeComponent
