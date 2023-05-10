import React from "react";



const Home = ({ valueOne, valueTwo, valueThree, valueFour, question, getAnswer, nextQuestion }) => {

    return (
        <>
            <div className='home-content'>
                <div className="home-content-wrap">
                    <p>{question}</p>
                    <div className='input-style'>
                        <input onChange={(event) => { getAnswer(event) }} type="radio" id="value-1" value='1' ref={valueOne} />
                        <label htmlFor="html">1</label>
                    </div>
                    <div className='input-style'>
                        <input onChange={(event) => { getAnswer(event) }} type="radio" id="value-2" value='2' ref={valueTwo} />
                        <label htmlFor="html">2</label>
                    </div>
                    <div className='input-style'>
                        <input onChange={(event) => { getAnswer(event) }} type="radio" id="value-3" value='3' ref={valueThree} />
                        <label htmlFor="html">3</label>
                    </div>
                    <div className='input-style'>
                        <input onChange={(event) => { getAnswer(event) }} type="radio" id="value-4" value='4' ref={valueFour} />
                        <label htmlFor="html">4</label>
                    </div>
                    <button className='button-next' onClick={nextQuestion}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Home;