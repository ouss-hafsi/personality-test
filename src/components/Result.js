import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Result = ({ experientialAvoidance, rumination, emotionalMasking, shortTermFocus, responsePersistence, hostility, negativeAppraisal,
    answerQuestion0, answerQuestion1, answerQuestion2, answerQuestion3, answerQuestion4, answerQuestion5, answerQuestion6, answerQuestion7, answerQuestion8, answerQuestion9, answerQuestion10,
    answerQuestion11, answerQuestion12, answerQuestion13, answerQuestion14, answerQuestion15, answerQuestion16, answerQuestion17, answerQuestion18, answerQuestion19, answerQuestion20,
    answerQuestion21, answerQuestion22, answerQuestion23, answerQuestion24, answerQuestion25, answerQuestion26, answerQuestion27, answerQuestion28, answerQuestion29, answerQuestion30,
    answerQuestion31, answerQuestion32, answerQuestion33, answerQuestion34, answerQuestion35, answerQuestion36, answerQuestion37, answerQuestion38, answerQuestion39, answerQuestion40,
    answerQuestion41, answerQuestion42, answerQuestion43, answerQuestion44, answerQuestion45, answerQuestion46, answerQuestion47, answerQuestion48, answerQuestion49, answerQuestion50,
    answerQuestion51, answerQuestion52, answerQuestion53, answerQuestion54, answerQuestion55 }) => {

    const navigate = useNavigate();
    const [sendResults, setSendResults] = useState({
        username: '',
        experientialAvoidance: experientialAvoidance,
        rumination: rumination,
        emotionalMasking: emotionalMasking,
        shortTermFocus: shortTermFocus,
        responsePersistence: responsePersistence,
        hostility: hostility,
        negativeAppraisal: negativeAppraisal,
        answerQuestion0: answerQuestion0,
        answerQuestion1: answerQuestion1,
        answerQuestion2: answerQuestion2,
        answerQuestion3: answerQuestion3,
        answerQuestion4: answerQuestion4,
        answerQuestion5: answerQuestion5,
        answerQuestion6: answerQuestion6,
        answerQuestion7: answerQuestion7,
        answerQuestion8: answerQuestion8,
        answerQuestion9: answerQuestion9,
        answerQuestion10: answerQuestion10,
        answerQuestion11: answerQuestion11,
        answerQuestion12: answerQuestion12,
        answerQuestion13: answerQuestion13,
        answerQuestion14: answerQuestion14,
        answerQuestion15: answerQuestion15,
        answerQuestion16: answerQuestion16,
        answerQuestion17: answerQuestion17,
        answerQuestion18: answerQuestion18,
        answerQuestion19: answerQuestion19,
        answerQuestion20: answerQuestion20,
        answerQuestion21: answerQuestion21,
        answerQuestion22: answerQuestion22,
        answerQuestion23: answerQuestion23,
        answerQuestion24: answerQuestion24,
        answerQuestion25: answerQuestion25,
        answerQuestion26: answerQuestion26,
        answerQuestion27: answerQuestion27,
        answerQuestion28: answerQuestion28,
        answerQuestion29: answerQuestion29,
        answerQuestion30: answerQuestion30,
        answerQuestion31: answerQuestion31,
        answerQuestion32: answerQuestion32,
        answerQuestion33: answerQuestion33,
        answerQuestion34: answerQuestion34,
        answerQuestion35: answerQuestion35,
        answerQuestion36: answerQuestion36,
        answerQuestion37: answerQuestion37,
        answerQuestion38: answerQuestion38,
        answerQuestion39: answerQuestion39,
        answerQuestion40: answerQuestion40,
        answerQuestion41: answerQuestion41,
        answerQuestion42: answerQuestion42,
        answerQuestion43: answerQuestion43,
        answerQuestion44: answerQuestion44,
        answerQuestion45: answerQuestion45,
        answerQuestion46: answerQuestion46,
        answerQuestion47: answerQuestion47,
        answerQuestion48: answerQuestion48,
        answerQuestion49: answerQuestion49,
        answerQuestion50: answerQuestion50,
        answerQuestion51: answerQuestion51,
        answerQuestion52: answerQuestion52,
        answerQuestion53: answerQuestion53,
        answerQuestion54: answerQuestion54,
        answerQuestion55: answerQuestion55,
    });

    function handleChange(event) {
        setSendResults({ ...sendResults, [event.target.id]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post('https://personality-test-backend.onrender.com/results', sendResults)
            .then(() => {
                console.log(sendResults)
                navigate('/resultsubmitted')
            });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="form-inputs">
                        <label className='user-name-label'>Enter your name below please
                            <input onChange={handleChange} className='user-name-input' type="text" placeholder="Enter your name" id='username' />
                        </label>
                        <div>
                            <label className="results-label"> Experiential Avoidance:
                                <input className='results-input' type="text" readOnly value={experientialAvoidance} />
                            </label>
                        </div>

                        <div>
                            <label className="results-label">Rumination:
                                <input className='results-input' type="text" readOnly value={rumination} />
                            </label>
                        </div>

                        <div>
                            <label className="results-label">Emotional Masking:
                                <input className='results-input' type="text" readOnly value={emotionalMasking} />
                            </label>
                        </div>

                        <div>
                            <label className="results-label">Short-Term Focus
                                <input className='results-input' type="text" readOnly value={shortTermFocus} />
                            </label>
                        </div>

                        <div>

                            <label className="results-label">Response Persistence:
                                <input className='results-input' type="text" readOnly value={responsePersistence} />
                            </label>
                        </div>


                        <div>
                            <label className="results-label">Hostility:
                                <input className='results-input' type="text" readOnly value={hostility} />
                            </label>
                        </div>

                        <div>
                            <label className="results-label">Negative Appraisal:
                                <input className='results-input' type="text" readOnly value={negativeAppraisal} />
                            </label>
                        </div>
                        <div className="hide">
                            <input type="text" readOnly value={answerQuestion0} />
                            <input type="text" readOnly value={answerQuestion1} />
                            <input type="text" readOnly value={answerQuestion2} />
                            <input type="text" readOnly value={answerQuestion3} />
                            <input type="text" readOnly value={answerQuestion4} />
                            <input type="text" readOnly value={answerQuestion5} />
                            <input type="text" readOnly value={answerQuestion6} />
                            <input type="text" readOnly value={answerQuestion7} />
                            <input type="text" readOnly value={answerQuestion8} />
                            <input type="text" readOnly value={answerQuestion9} />
                            <input type="text" readOnly value={answerQuestion10} />
                            <input type="text" readOnly value={answerQuestion11} />
                            <input type="text" readOnly value={answerQuestion12} />
                            <input type="text" readOnly value={answerQuestion13} />
                            <input type="text" readOnly value={answerQuestion14} />
                            <input type="text" readOnly value={answerQuestion15} />
                            <input type="text" readOnly value={answerQuestion16} />
                            <input type="text" readOnly value={answerQuestion17} />
                            <input type="text" readOnly value={answerQuestion18} />
                            <input type="text" readOnly value={answerQuestion19} />
                            <input type="text" readOnly value={answerQuestion20} />
                            <input type="text" readOnly value={answerQuestion21} />
                            <input type="text" readOnly value={answerQuestion22} />
                            <input type="text" readOnly value={answerQuestion23} />
                            <input type="text" readOnly value={answerQuestion24} />
                            <input type="text" readOnly value={answerQuestion25} />
                            <input type="text" readOnly value={answerQuestion26} />
                            <input type="text" readOnly value={answerQuestion27} />
                            <input type="text" readOnly value={answerQuestion28} />
                            <input type="text" readOnly value={answerQuestion29} />
                            <input type="text" readOnly value={answerQuestion30} />
                            <input type="text" readOnly value={answerQuestion31} />
                            <input type="text" readOnly value={answerQuestion32} />
                            <input type="text" readOnly value={answerQuestion33} />
                            <input type="text" readOnly value={answerQuestion34} />
                            <input type="text" readOnly value={answerQuestion35} />
                            <input type="text" readOnly value={answerQuestion36} />
                            <input type="text" readOnly value={answerQuestion37} />
                            <input type="text" readOnly value={answerQuestion38} />
                            <input type="text" readOnly value={answerQuestion39} />
                            <input type="text" readOnly value={answerQuestion40} />
                            <input type="text" readOnly value={answerQuestion41} />
                            <input type="text" readOnly value={answerQuestion42} />
                            <input type="text" readOnly value={answerQuestion43} />
                            <input type="text" readOnly value={answerQuestion44} />
                            <input type="text" readOnly value={answerQuestion45} />
                            <input type="text" readOnly value={answerQuestion46} />
                            <input type="text" readOnly value={answerQuestion47} />
                            <input type="text" readOnly value={answerQuestion48} />
                            <input type="text" readOnly value={answerQuestion49} />
                            <input type="text" readOnly value={answerQuestion50} />
                            <input type="text" readOnly value={answerQuestion51} />
                            <input type="text" readOnly value={answerQuestion52} />
                            <input type="text" readOnly value={answerQuestion53} />
                            <input type="text" readOnly value={answerQuestion54} />
                            <input type="text" readOnly value={answerQuestion55} />
                        </div>
                        <button className="submit-results">Submit</button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default Result;