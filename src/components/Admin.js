import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'



const Admin = () => {
    const navigate = useNavigate()
    const [clientResults, setClientResults] = useState([]);
    const [username, setUsername] = useState('')
    const [userId, setUserId] = useState('')

    function getUsers() {
        const config = localStorage.getItem('Token');
        const config1 = { headers: { Authorization: `Bearer ${config}` } };
        axios.get(`https://personality-test-backend.herokuapp.com/users`, config1)
            .then((res) => {
                const users = res.data;
                const loggedInUser = users.find((user) => user.username === window.localStorage.getItem('Username'))
                // console.log(loggedIdUser)
                const loggedInUserId = loggedInUser._id
                setUserId(loggedInUserId)
                setUsername(loggedInUser.username)
                console.log(username)
                console.log('hello')

            })
    }

    function getData() {
        const config = localStorage.getItem('Token');
        const config1 = { headers: { Authorization: `Bearer ${config}` } };
        axios.get(`https://personality-test-backend.herokuapp.com/results`, config1)
            .then((res) => {
                console.log(res.data)
                setClientResults(res.data)
            })
    }

    const getColor = (num) => {

        if (num <= 14) return 'green';
        if (num > 14 && num <= 21) return 'orange';
        if (num > 21) return 'red';
    }

    function logOut() {
        localStorage.removeItem('Token')
        localStorage.removeItem('Username')
        navigate('/signin')
    }


    useEffect(() => {
        getData()
        getUsers()
    }, [])

    if (!clientResults) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <nav>
                <ul>
                    <li>Welcome {username}</li>
                    <li onClick={logOut} className='log-out'>Log out</li>
                </ul>
            </nav>
            <div className='data-wrap'>
                {clientResults.map((result, index) => {
                    return (
                        <div key={result._id}> 
                            <div >
                                <table>
                                    <tbody >
                                        <tr>
                                            <th>{result.username}</th>
                                            <th>Results</th>
                                        </tr>
                                        <tr>
                                            <td>Emotional masking</td>
                                            <td className={`${getColor(result.emotionalMasking)}`}>{result.emotionalMasking}</td>
                                        </tr>
                                        <tr>
                                            <td>Experiential avoidance</td>
                                            <td className={`${getColor(result.experientialAvoidance)}`}>{result.experientialAvoidance}</td>
                                        </tr>

                                        <tr>
                                            <td>Hostility</td>
                                            <td className={`${getColor(result.hostility)}`}>{result.hostility}</td>
                                        </tr>
                                        <tr>
                                            <td>Negative appraisal</td>
                                            <td className={`${getColor(result.negativeAppraisal)}`}>{result.negativeAppraisal}</td>
                                        </tr>
                                        <tr>
                                            <td>Response persistence</td>
                                            <td className={`${getColor(result.responsePersistence)}`}>{result.responsePersistence}</td>
                                        </tr>
                                        <tr>
                                            <td>Rumination</td>
                                            <td className={`${getColor(result.rumination)}`}>{result.rumination}</td>
                                        </tr>
                                        <tr>
                                            <td>Short-Term-Focus</td>
                                            <td className={`${getColor(result.shortTermFocus)}`}>{result.shortTermFocus}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className='more-datails-button'><Link className='more-datails-button-link' to={`/results/${result._id}`}>More Details</Link></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Admin;