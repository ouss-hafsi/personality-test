import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ResultsDetails = () => {
    const [resultDetails, setResultDetails] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()


    function getResultDetails() {
        const config = localStorage.getItem('Token');
        const config1 = { headers: { Authorization: `Bearer ${config}` } }
        axios.get(`https://personality-test-backend.onrender.com/results/${id}`, config1)
            .then((res) => {
                console.log(res.data)
                setResultDetails(res.data)
            })
    }

    function deleteClient() {
        const config = localStorage.getItem('Token');
        const config1 = { headers: { Authorization: `Bearer ${config}` } }
        axios.delete(`https://personality-test-backend.onrender.com/results/${id}`, config1)
        .then((res) => {
            navigate('/admin')
        })
    }

    useEffect(() => {
        getResultDetails()
    }, [])


    if (!resultDetails) {
        return <h1>Loading...</h1>;
    }


    return (
        <>
        <div className="buttons-wrap">
        <button onClick={deleteClient} className="delete-client-information">Delete client information</button>
            <Link to='/admin'><button className="go-back-to-dashboard">Go back to dashboard</button></Link>
        </div>

            <div className="result-details-wrap">
                <div>

                    <h1>{resultDetails.username}</h1>
                    <p>{resultDetails.answerQuestion0}</p>
                    <p>{resultDetails.answerQuestion1}</p>
                    <p>{resultDetails.answerQuestion2}</p>
                    <p>{resultDetails.answerQuestion3}</p>
                    <p>{resultDetails.answerQuestion4}</p>
                    <p>{resultDetails.answerQuestion5}</p>
                    <p>{resultDetails.answerQuestion6}</p>
                    <p>{resultDetails.answerQuestion7}</p>
                    <p>{resultDetails.answerQuestion8}</p>
                    <p>{resultDetails.answerQuestion9}</p>
                    <p>{resultDetails.answerQuestion10}</p>
                    <p>{resultDetails.answerQuestion11}</p>
                    <p>{resultDetails.answerQuestion12}</p>
                    <p>{resultDetails.answerQuestion13}</p>
                    <p>{resultDetails.answerQuestion14}</p>
                    <p>{resultDetails.answerQuestion15}</p>
                    <p>{resultDetails.answerQuestion16}</p>
                    <p>{resultDetails.answerQuestion17}</p>
                    <p>{resultDetails.answerQuestion18}</p>
                    <p>{resultDetails.answerQuestion19}</p>
                    <p>{resultDetails.answerQuestion20}</p>
                    <p>{resultDetails.answerQuestion21}</p>
                    <p>{resultDetails.answerQuestion22}</p>
                    <p>{resultDetails.answerQuestion23}</p>
                    <p>{resultDetails.answerQuestion24}</p>
                    <p>{resultDetails.answerQuestion25}</p>
                    <p>{resultDetails.answerQuestion26}</p>
                    <p>{resultDetails.answerQuestion27}</p>
                    <p>{resultDetails.answerQuestion28}</p>
                    <p>{resultDetails.answerQuestion29}</p>
                    <p>{resultDetails.answerQuestion30}</p>
                    <p>{resultDetails.answerQuestion31}</p>
                    <p>{resultDetails.answerQuestion32}</p>
                    <p>{resultDetails.answerQuestion33}</p>
                    <p>{resultDetails.answerQuestion34}</p>
                    <p>{resultDetails.answerQuestion35}</p>
                    <p>{resultDetails.answerQuestion36}</p>
                    <p>{resultDetails.answerQuestion37}</p>
                    <p>{resultDetails.answerQuestion38}</p>
                    <p>{resultDetails.answerQuestion39}</p>
                    <p>{resultDetails.answerQuestion40}</p>
                    <p>{resultDetails.answerQuestion41}</p>
                    <p>{resultDetails.answerQuestion42}</p>
                    <p>{resultDetails.answerQuestion43}</p>
                    <p>{resultDetails.answerQuestion44}</p>
                    <p>{resultDetails.answerQuestion45}</p>
                    <p>{resultDetails.answerQuestion46}</p>
                    <p>{resultDetails.answerQuestion47}</p>
                    <p>{resultDetails.answerQuestion48}</p>
                    <p>{resultDetails.answerQuestion49}</p>
                    <p>{resultDetails.answerQuestion50}</p>
                    <p>{resultDetails.answerQuestion51}</p>
                    <p>{resultDetails.answerQuestion52}</p>
                    <p>{resultDetails.answerQuestion53}</p>
                    <p>{resultDetails.answerQuestion54}</p>
                    <p>{resultDetails.answerQuestion55}</p>
                </div>
            </div>
        </>
    )
}

export default ResultsDetails;