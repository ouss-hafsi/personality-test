import {Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react';
import './index.css'
import './responsive.css'
import Home from './components/Home';
import Result from './components/Result';
import ResultsDetails from './components/ResultsDetails';
import Signup from './components/Signup';
import Signin from './components/Signin'
import Admin from './components/Admin';
import axios from 'axios';
import ResultSubmitted from './components/ResultSubmitted';



const questionsArr = [
  '1.1 I try to keep an emotional distance from upsetting situations.',
  '1.2 I think about all the bad things that could happen in a situation.',
  '1.3 I control my emotions by not expressing them.',
  '1.4 I tend to do what will make me feel better right away.',
  '1.5 Once I get used to dealing with something a certain way, I keep doing it.',
  '1.6 Somtimes I hit others or threaten to hit them.',
  '1.7 I compare myself negatively to others.',
  '2.1 I push bad feelings away.',
  '2.2 I think about a situation over and over, and what bad things it might lead to.',
  '2.3 I try not to let my feelings show.',
  '2.4 I want to stop painful things right away, even if it costs me later.',
  "2.5 I have my ways of coping with difficulties, and I don't tend to change how I do things.",
  '2.6 I yell or shout to let off steam.',
  '2.7 I find fault in myself.',
  '3.1 When I experience bad feelings, I try to ignore them.',
  '3.2 I dwell on problematic events.',
  "3.3 When I'm feeling negative emotions, I make sure not to express them.",
  '3.4 I go with short-term solutions and let the future take care of itself.',
  '3.5 I tend to cope with problems the same way, regardless of what happens.',
  '3.6 I let my feelings out by saying attacking things.',
  '3.7 I judge the ways others handle things.',
  '4.1 I try to numb my negative feelings.',
  '4.2 I keep trying to understand or analyze difficult situations.',
  '4.3 I make sure to show only my calm side.',
  '4.4 I do what feels good in the moment.',
  '4.5 I deal with problems the way I always have.',
  '4.6 I get upset and say mean or blaming things.',
  '4.7 I tend to focus on the faults and mistakes of others.',
  '5.1 I stay away from problem situations.',
  "5.2 Whenever there's problem, I tend to dwell on the worst that could happen.",
  '5.3 I keep my emotions to myself.',
  "5.4 I'm focused on what will happen right away, not later.",
  "5.5 I don't change the way I deal with things, even if sometimes it doesn't work out.",
  '5.6 In difficult situations I tend to get angry.',
  '5.7 I tend to see the negative in situations.',
  '6.1 I disengage when things are difficult.',
  '6.2 When something happens that upsets me, I keep thinking about it, reliving it, or trying to understand it.',
  "6.3 I don't show distress or upset.",
  '6.4 I think about what will help me in the moment, rather than in the long term.',
  '6.5 I find myself approaching difficulties with the same basic strategies.',
  '6.6 I get pissed off when something goes wrong.',
  '6.7 I tend to judge others',
  '7.1 When something is upsetting, I tend to withdraw.',
  "7.2 When I do something I wish I hadn't done, I think about it over and over.",
  '7.3 I only let people know about my positive emotions.',
  '7.4 I tend to seek a short-term fix, even if it falls apart later.',
  "7.5 When I run into trouble, I redouble my efforts and keep doing what I've been doing.",
  "7.6 I get angry when I'm frustrated by stress.",
  '7.7 I often think things are being handled badly.',
  '8.1 I shy away from upsetting conflicts.',
  '8.2 I find that I tend to worry about things that might happen.',
  "8.3 When I'm in emotional pain, I put on a good face.",
  '8.4 How to feel good in the moment is mostly what I care about.',
  '8.5 Sometimes I think I should change how I deal with a problem, but I end up doing what I usually do.',
  '8.6 I fantasize about revenge.',
  "8.7 Often I don't expect things to go well."
]


function App() {
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [signIn, setSignIn] = useState({
    username: '',
    password:'',
  });

  const handleChange = (event) => {
    setSignIn({ ...signIn, [event.target.id]: event.target.value });
    console.log("signin username is", signIn.username);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const val = signIn.username.toLowerCase()
    signIn.username = val

    axios.post(`https://personality-test-backend.herokuapp.com/users/signin`, signIn)
      .then((res) => {
        if(res.data !== 'The provided username or password is incorrect') {
          console.log(res);
          // save token to local storage
          window.localStorage.setItem('Token', res.data.token);
          // save user to local storage
          window.localStorage.setItem('Username', signIn.username)
          navigate('/admin');
          setError(null)
        } else {
          navigate('signin');
          setError('provided username or password is incorrect.')
        }

      })

      .catch(err => {
        console.log(error)
        setError('Provided username or password is incorrect.')
      })
  }

  // answers details // 
  const [answerQuestion0, setAnswerQuestion0] = useState('')
  const [answerQuestion1, setAnswerQuestion1] = useState('')
  const [answerQuestion2, setAnswerQuestion2] = useState('')
  const [answerQuestion3, setAnswerQuestion3] = useState('')
  const [answerQuestion4, setAnswerQuestion4] = useState('')
  const [answerQuestion5, setAnswerQuestion5] = useState('')
  const [answerQuestion6, setAnswerQuestion6] = useState('')
  const [answerQuestion7, setAnswerQuestion7] = useState('')
  const [answerQuestion8, setAnswerQuestion8] = useState('')
  const [answerQuestion9, setAnswerQuestion9] = useState('')
  const [answerQuestion10, setAnswerQuestion10] = useState('')
  const [answerQuestion11, setAnswerQuestion11] = useState('')
  const [answerQuestion12, setAnswerQuestion12] = useState('')
  const [answerQuestion13, setAnswerQuestion13] = useState('')
  const [answerQuestion14, setAnswerQuestion14] = useState('')
  const [answerQuestion15, setAnswerQuestion15] = useState('')
  const [answerQuestion16, setAnswerQuestion16] = useState('')
  const [answerQuestion17, setAnswerQuestion17] = useState('')
  const [answerQuestion18, setAnswerQuestion18] = useState('')
  const [answerQuestion19, setAnswerQuestion19] = useState('')
  const [answerQuestion20, setAnswerQuestion20] = useState('')
  const [answerQuestion21, setAnswerQuestion21] = useState('')
  const [answerQuestion22, setAnswerQuestion22] = useState('')
  const [answerQuestion23, setAnswerQuestion23] = useState('')
  const [answerQuestion24, setAnswerQuestion24] = useState('')
  const [answerQuestion25, setAnswerQuestion25] = useState('')
  const [answerQuestion26, setAnswerQuestion26] = useState('')
  const [answerQuestion27, setAnswerQuestion27] = useState('')
  const [answerQuestion28, setAnswerQuestion28] = useState('')
  const [answerQuestion29, setAnswerQuestion29] = useState('')
  const [answerQuestion30, setAnswerQuestion30] = useState('')
  const [answerQuestion31, setAnswerQuestion31] = useState('')
  const [answerQuestion32, setAnswerQuestion32] = useState('')
  const [answerQuestion33, setAnswerQuestion33] = useState('')
  const [answerQuestion34, setAnswerQuestion34] = useState('')
  const [answerQuestion35, setAnswerQuestion35] = useState('')
  const [answerQuestion36, setAnswerQuestion36] = useState('')
  const [answerQuestion37, setAnswerQuestion37] = useState('')
  const [answerQuestion38, setAnswerQuestion38] = useState('')
  const [answerQuestion39, setAnswerQuestion39] = useState('')
  const [answerQuestion40, setAnswerQuestion40] = useState('')
  const [answerQuestion41, setAnswerQuestion41] = useState('')
  const [answerQuestion42, setAnswerQuestion42] = useState('')
  const [answerQuestion43, setAnswerQuestion43] = useState('')
  const [answerQuestion44, setAnswerQuestion44] = useState('')
  const [answerQuestion45, setAnswerQuestion45] = useState('')
  const [answerQuestion46, setAnswerQuestion46] = useState('')
  const [answerQuestion47, setAnswerQuestion47] = useState('')
  const [answerQuestion48, setAnswerQuestion48] = useState('')
  const [answerQuestion49, setAnswerQuestion49] = useState('')
  const [answerQuestion50, setAnswerQuestion50] = useState('')
  const [answerQuestion51, setAnswerQuestion51] = useState('')
  const [answerQuestion52, setAnswerQuestion52] = useState('')
  const [answerQuestion53, setAnswerQuestion53] = useState('')
  const [answerQuestion54, setAnswerQuestion54] = useState('')
  const [answerQuestion55, setAnswerQuestion55] = useState('')


  // DOM Manipulation
  const valueOne = useRef(null)
  const valueTwo = useRef(null)
  const valueThree = useRef(null)
  const valueFour = useRef(null)

  // Answers Result
  const [experientialAvoidance, setExperientialAvoidance] = useState (0)
  const [rumination, setRumination] = useState (0)
  const [emotionalMasking, setEmotionalMasking] = useState (0)
  const [shortTermFocus, setShortTermFocus] = useState (0)
  const [responsePersistence, setResponsePersistence] = useState (0)
  const [hostility, setHostility] = useState (0)
  const [negativeAppraisal, setNegativeAppraisal] = useState (0)
  
  // Question increment + Answer
  const [index, setIndex] = useState(1)
  const [question, setQuestion] = useState(questionsArr[0])
  const [errorText, setErrorText] = useState('no answer has been checked')
  let answerDetailValue;
  let answer;

  function getAnswer (event) {
    if(event.target.id === valueOne.current.id) {
      valueOne.current.checked = true 
      valueTwo.current.checked = false
      valueThree.current.checked = false
      valueFour.current.checked = false 
    } 

    if(event.target.id === valueTwo.current.id) {
      valueOne.current.checked = false
      valueTwo.current.checked = true
      valueThree.current.checked = false
      valueFour.current.checked = false 
    } 

    if(event.target.id === valueThree.current.id) {
      valueOne.current.checked = false
      valueTwo.current.checked = false
      valueThree.current.checked = true
      valueFour.current.checked = false 
    } 

    if(event.target.id === valueFour.current.id) {
      valueOne.current.checked = false
      valueTwo.current.checked = false
      valueThree.current.checked = false
      valueFour.current.checked = true
    } 
    answerDetailValue = event.target.value
    answer = event.target.value
  }

  function nextQuestion() {

      
      


    if(valueOne.current.checked === true || valueTwo.current.checked === true || valueThree.current.checked === true || valueFour.current.checked === true) {
      setIndex(index + 1)
      setQuestion(questionsArr[index])
      valueOne.current.checked = false
      valueTwo.current.checked = false
      valueThree.current.checked = false
      valueFour.current.checked = false
      if (question === questionsArr[55]) {
        setAnswerQuestion55(`${question} : ${answerDetailValue}`)
        setNegativeAppraisal(negativeAppraisal+ parseInt(answer))  
        console.log('this is negative Appraisal: ',negativeAppraisal)
        navigate('/result') 
      }
  
      if(question === questionsArr[0]) {
        setAnswerQuestion0(`${question} : ${answerDetailValue}`)
        setExperientialAvoidance(experientialAvoidance + parseInt(answer))
        console.log('this is negative experiential Avoidance: ',experientialAvoidance)
      }
  
      if(question === questionsArr[7]) {
        setAnswerQuestion7(`${question} : ${answerDetailValue}`)
        setExperientialAvoidance(experientialAvoidance + parseInt(answer))
        console.log('this is negative experiential Avoidance: ',experientialAvoidance)
      }
  
      if(question === questionsArr[14]) {
        setAnswerQuestion14(`${question} : ${answerDetailValue}`)
        setExperientialAvoidance(experientialAvoidance + parseInt(answer))
        console.log('this is negative experiential Avoidance: ',experientialAvoidance)
      }
  
      if(question === questionsArr[21] ) {
        setAnswerQuestion21(`${question} : ${answerDetailValue}`)
        setExperientialAvoidance(experientialAvoidance + parseInt(answer))
        console.log('this is negative experiential Avoidance: ',experientialAvoidance)
      }
  
      if (question === questionsArr[28] ) {
        setAnswerQuestion28(`${question} : ${answerDetailValue}`)
        setExperientialAvoidance(experientialAvoidance + parseInt(answer))
        console.log('this is negative experiential Avoidance: ',experientialAvoidance)
      }
  
      if(question === questionsArr[35]) {
        setAnswerQuestion35(`${question} : ${answerDetailValue}`)
        setExperientialAvoidance(experientialAvoidance + parseInt(answer))
        console.log('this is negative experiential Avoidance: ',experientialAvoidance)
      }
  
      if(question === questionsArr[42]) {
        setAnswerQuestion42(`${question} : ${answerDetailValue}`)
        setExperientialAvoidance(experientialAvoidance + parseInt(answer))
        console.log('this is negative experiential Avoidance: ',experientialAvoidance)
      }
  
      if(question === questionsArr[49]) {
        setAnswerQuestion49(`${question} : ${answerDetailValue}`)
        setExperientialAvoidance(experientialAvoidance + parseInt(answer))
        console.log('this is negative experiential Avoidance: ',experientialAvoidance)
      }
  
      if( question === questionsArr[1]) {
        setAnswerQuestion1(`${question} : ${answerDetailValue}`)
        setRumination(rumination + parseInt(answer))  
        console.log('this is negative experiential rumination: ',rumination)
      }
  
      if(question === questionsArr[8]) {
        setAnswerQuestion8(`${question} : ${answerDetailValue}`)
        setRumination(rumination + parseInt(answer))
        console.log('this is negative experiential rumination: ',rumination)
      }
  
      if(question === questionsArr[15]) {
        setAnswerQuestion15(`${question} : ${answerDetailValue}`)
        setRumination(rumination + parseInt(answer))
        console.log('this is negative experiential rumination: ',rumination)
      }
  
      if(question === questionsArr[22]) {
        setAnswerQuestion22(`${question} : ${answerDetailValue}`)
        setRumination(rumination + parseInt(answer))
        console.log('this is negative experiential rumination: ',rumination)
      }
  
      if(question === questionsArr[29]) {
        setAnswerQuestion29(`${question} : ${answerDetailValue}`)
        setRumination(rumination + parseInt(answer))
        console.log('this is negative experiential rumination: ',rumination)
      }
  
      if(question === questionsArr[36]) {
        setAnswerQuestion36(`${question} : ${answerDetailValue}`)
        setRumination(rumination + parseInt(answer))
        console.log('this is negative experiential rumination: ',rumination)
      }
  
      if(question === questionsArr[43]) {
        setAnswerQuestion43(`${question} : ${answerDetailValue}`)
        setRumination(rumination + parseInt(answer))
        console.log('this is negative experiential rumination: ',rumination)
      }
  
      if(question === questionsArr[50]) {
        setAnswerQuestion50(`${question} : ${answerDetailValue}`)
        setRumination(rumination + parseInt(answer))
        console.log('this is negative experiential rumination: ',rumination)
      }
      
      if(question === questionsArr[2]) {
        setAnswerQuestion2(`${question} : ${answerDetailValue}`)
        setEmotionalMasking(emotionalMasking + parseInt(answer))  
        console.log('this is negative experiential emotional masking: ',emotionalMasking) 
      }
  
      if( question === questionsArr[9]) {
        setAnswerQuestion9(`${question} : ${answerDetailValue}`)
        setEmotionalMasking(emotionalMasking + parseInt(answer))  
        console.log('this is negative experiential emotional masking: ',emotionalMasking)  
      }
  
      if( question === questionsArr[16]) {
        setAnswerQuestion16(`${question} : ${answerDetailValue}`)
        setEmotionalMasking(emotionalMasking + parseInt(answer)) 
        console.log('this is negative experiential emotional masking: ',emotionalMasking)   
      }
  
      if( question === questionsArr[23]) {
        setAnswerQuestion23(`${question} : ${answerDetailValue}`)
        setEmotionalMasking(emotionalMasking + parseInt(answer))   
        console.log('this is negative experiential emotional masking: ',emotionalMasking) 
      }
  
      if( question === questionsArr[30] ) {
        setAnswerQuestion30(`${question} : ${answerDetailValue}`)
        setEmotionalMasking(emotionalMasking + parseInt(answer)) 
        console.log('this is negative experiential emotional masking: ',emotionalMasking)   
      }
  
      if(question === questionsArr[37]) {
        setAnswerQuestion37(`${question} : ${answerDetailValue}`)
        setEmotionalMasking(emotionalMasking + parseInt(answer))  
        console.log('this is negative experiential emotional masking: ',emotionalMasking)  
      }
  
      if(question === questionsArr[44]) {
        setAnswerQuestion44(`${question} : ${answerDetailValue}`)
        setEmotionalMasking(emotionalMasking + parseInt(answer)) 
        console.log('this is negative experiential emotional masking: ',emotionalMasking)   
      }
  
      if(question === questionsArr[51]) {
        setAnswerQuestion51(`${question} : ${answerDetailValue}`)
        setEmotionalMasking(emotionalMasking + parseInt(answer))   
        console.log('this is negative experiential emotional masking: ',emotionalMasking) 
      }
  
      if(question === questionsArr[3]) {
        setAnswerQuestion3(`${question} : ${answerDetailValue}`)
        setShortTermFocus(shortTermFocus + parseInt(answer)) 
        console.log('this is negative experiential shortTermFocus: ',shortTermFocus)     
      }
  
      if(question === questionsArr[10]) {
        setAnswerQuestion10(`${question} : ${answerDetailValue}`)
        setShortTermFocus(shortTermFocus + parseInt(answer))    
        console.log('this is negative experiential shortTermFocus: ',shortTermFocus)  
      }
  
      if(question === questionsArr[17]) {
        setAnswerQuestion17(`${question} : ${answerDetailValue}`)
        setShortTermFocus(shortTermFocus + parseInt(answer))   
        console.log('this is negative experiential shortTermFocus: ',shortTermFocus)   
      }
  
      if( question === questionsArr[24]) {
        setAnswerQuestion24(`${question} : ${answerDetailValue}`)
        setShortTermFocus(shortTermFocus + parseInt(answer))   
        console.log('this is negative experiential shortTermFocus: ',shortTermFocus)   
      }
  
      if(question === questionsArr[31]) {
        setAnswerQuestion31(`${question} : ${answerDetailValue}`)
        setShortTermFocus(shortTermFocus + parseInt(answer))     
        console.log('this is negative experiential shortTermFocus: ',shortTermFocus) 
      }
  
      if(question === questionsArr[38]) {
        setAnswerQuestion38(`${question} : ${answerDetailValue}`)
        setShortTermFocus(shortTermFocus + parseInt(answer))     
        console.log('this is negative experiential shortTermFocus: ',shortTermFocus) 
      }
  
      if(question === questionsArr[45]) {
        setAnswerQuestion45(`${question} : ${answerDetailValue}`)
        setShortTermFocus(shortTermFocus + parseInt(answer))    
        console.log('this is negative experiential shortTermFocus: ',shortTermFocus)  
      }
  
      if(question === questionsArr[52]) {
        setAnswerQuestion52(`${question} : ${answerDetailValue}`)
        setShortTermFocus(shortTermFocus + parseInt(answer))   
        console.log('this is negative experiential shortTermFocus: ',shortTermFocus)   
      }
  
      if(question === questionsArr[4]) {
        setAnswerQuestion4(`${question} : ${answerDetailValue}`)
        setResponsePersistence(responsePersistence + parseInt(answer))   
        console.log('this is negative experiential responsePer: ',responsePersistence) 
      }
  
      if(question === questionsArr[11]) {
        setAnswerQuestion11(`${question} : ${answerDetailValue}`)
        setResponsePersistence(responsePersistence + parseInt(answer))
        console.log('this is negative experiential responsePer: ',responsePersistence)    
      }
  
      if(question === questionsArr[18]) {
        setAnswerQuestion18(`${question} : ${answerDetailValue}`)
        setResponsePersistence(responsePersistence + parseInt(answer))   
        console.log('this is negative experiential responsePer: ',responsePersistence) 
      }
  
      if(question === questionsArr[25]) {
        setAnswerQuestion25(`${question} : ${answerDetailValue}`)
        setResponsePersistence(responsePersistence + parseInt(answer))  
        console.log('this is negative experiential responsePer: ',responsePersistence)  
      }
  
      if(question === questionsArr[32]) {
        setAnswerQuestion32(`${question} : ${answerDetailValue}`)
        setResponsePersistence(responsePersistence + parseInt(answer))  
        console.log('this is negative experiential responsePer: ',responsePersistence)  
      }
  
      if(question === questionsArr[39]) {
        setAnswerQuestion39(`${question} : ${answerDetailValue}`)
        setResponsePersistence(responsePersistence + parseInt(answer))  
        console.log('this is negative experiential responsePer: ',responsePersistence)  
      }
  
      if(question === questionsArr[46]) {
        setAnswerQuestion46(`${question} : ${answerDetailValue}`)
        setResponsePersistence(responsePersistence + parseInt(answer))  
        console.log('this is negative experiential responsePer: ',responsePersistence)  
      }
  
      if(question === questionsArr[53]) {
        setAnswerQuestion53(`${question} : ${answerDetailValue}`)
        setResponsePersistence(responsePersistence + parseInt(answer))   
        console.log('this is negative experiential responsePer: ',responsePersistence) 
      }
  
      if(question === questionsArr[5]) {
        setAnswerQuestion5(`${question} : ${answerDetailValue}`)
        setHostility(hostility + parseInt(answer)) 
        console.log('this is negative Hostility: ',hostility)     
      }
  
      if(question === questionsArr[12]) {
        setAnswerQuestion12(`${question} : ${answerDetailValue}`)
        setHostility(hostility + parseInt(answer))   
        console.log('this is negative Hostility: ',hostility)   
      }
  
      if(question === questionsArr[19]) {
        setAnswerQuestion19(`${question} : ${answerDetailValue}`)
        setHostility(hostility + parseInt(answer))     
        console.log('this is negative Hostility: ',hostility) 
      }
  
      if(question === questionsArr[26]) {
        setAnswerQuestion26(`${question} : ${answerDetailValue}`)
        setHostility(hostility + parseInt(answer))  
        console.log('this is negative Hostility: ',hostility)    
      }
  
      if(question === questionsArr[33]) {
        setAnswerQuestion33(`${question} : ${answerDetailValue}`)
        setHostility(hostility + parseInt(answer))    
        console.log('this is negative Hostility: ',hostility)  
      }
  
      if(question === questionsArr[40]) {
        setAnswerQuestion40(`${question} : ${answerDetailValue}`)
        setHostility(hostility + parseInt(answer)) 
        console.log('this is negative Hostility: ',hostility)     
      }
  
      if(question === questionsArr[47]) {
        setAnswerQuestion47(`${question} : ${answerDetailValue}`)
        setHostility(hostility + parseInt(answer))   
        console.log('this is negative Hostility: ',hostility)   
      }
  
      if(question === questionsArr[54]) {
        setAnswerQuestion54(`${question} : ${answerDetailValue}`)
        setHostility(hostility + parseInt(answer))    
        console.log('this is negative Hostility: ',hostility)  
      }
  
      if(question === questionsArr[6]) {
        setAnswerQuestion6(`${question} : ${answerDetailValue}`)
        setNegativeAppraisal(negativeAppraisal + parseInt(answer))  
        console.log('this is negative negativeAppraisal: ',negativeAppraisal) 
      }
  
      if(question === questionsArr[13]) {
        setAnswerQuestion13(`${question} : ${answerDetailValue}`)
        setNegativeAppraisal(negativeAppraisal + parseInt(answer))  
        console.log('this is negative negativeAppraisal: ',negativeAppraisal) 
      }
  
      if(question === questionsArr[20]) {
        setAnswerQuestion20(`${question} : ${answerDetailValue}`)
        setNegativeAppraisal(negativeAppraisal + parseInt(answer))  
        console.log('this is negative negativeAppraisal: ',negativeAppraisal) 
      }
  
      if(question === questionsArr[27]) {
        setAnswerQuestion27(`${question} : ${answerDetailValue}`)
        setNegativeAppraisal(negativeAppraisal + parseInt(answer)) 
        console.log('this is negative negativeAppraisal: ',negativeAppraisal)  
      }
  
      if(question === questionsArr[34]) {
        setAnswerQuestion34(`${question} : ${answerDetailValue}`)
        setNegativeAppraisal(negativeAppraisal + parseInt(answer))  
        console.log('this is negative negativeAppraisal: ',negativeAppraisal) 
      }
  
      if(question === questionsArr[41]) {
        setAnswerQuestion41(`${question} : ${answerDetailValue}`)
        setNegativeAppraisal(negativeAppraisal + parseInt(answer))  
        console.log('this is negative negativeAppraisal: ',negativeAppraisal) 
      }
  
      if(question === questionsArr[48]) {
        setAnswerQuestion48(`${question} : ${answerDetailValue}`)
        setNegativeAppraisal(negativeAppraisal + parseInt(answer))  
        console.log('this is negative negativeAppraisal: ',negativeAppraisal) 
      }

    }


  }

  return (
    <>
    {/* <Navigation /> */}


   
      <Routes>
      <Route path='/' element={<Home valueOne={valueOne} valueTwo={valueTwo} valueThree={valueThree} valueFour={valueFour} question={question}  getAnswer={getAnswer} nextQuestion={nextQuestion} />}/>
      <Route path='/result' element={<Result experientialAvoidance={experientialAvoidance} rumination={rumination} emotionalMasking={emotionalMasking} shortTermFocus={shortTermFocus} responsePersistence={responsePersistence} hostility={hostility} negativeAppraisal={negativeAppraisal}
      answerQuestion0={answerQuestion0} answerQuestion1={answerQuestion1} answerQuestion2={answerQuestion2} answerQuestion3={answerQuestion3}
      answerQuestion4={answerQuestion4} answerQuestion5={answerQuestion5} answerQuestion6={answerQuestion6} answerQuestion7={answerQuestion7} answerQuestion8={answerQuestion8} answerQuestion9={answerQuestion9}
      answerQuestion10={answerQuestion10} answerQuestion11={answerQuestion11} answerQuestion12={answerQuestion12} answerQuestion13={answerQuestion13} answerQuestion14={answerQuestion14} answerQuestion15={answerQuestion15}
      answerQuestion16={answerQuestion16} answerQuestion17={answerQuestion17} answerQuestion18={answerQuestion18} answerQuestion19={answerQuestion19} answerQuestion20={answerQuestion20} answerQuestion21={answerQuestion21}
      answerQuestion22={answerQuestion22} answerQuestion23={answerQuestion23} answerQuestion24={answerQuestion24} answerQuestion25={answerQuestion25} answerQuestion26={answerQuestion26} answerQuestion27={answerQuestion27}
      answerQuestion28={answerQuestion28} answerQuestion29={answerQuestion29} answerQuestion30={answerQuestion30} answerQuestion31={answerQuestion31} answerQuestion32={answerQuestion32} answerQuestion33={answerQuestion33}
      answerQuestion34={answerQuestion34} answerQuestion35={answerQuestion35} answerQuestion36={answerQuestion36} answerQuestion37={answerQuestion37} answerQuestion38={answerQuestion38} answerQuestion39={answerQuestion39}
      answerQuestion40={answerQuestion40} answerQuestion41={answerQuestion41} answerQuestion42={answerQuestion42} answerQuestion43={answerQuestion43} answerQuestion44={answerQuestion44} answerQuestion45={answerQuestion45}
      answerQuestion46={answerQuestion46} answerQuestion47={answerQuestion47} answerQuestion48={answerQuestion48} answerQuestion49={answerQuestion49} answerQuestion50={answerQuestion50} answerQuestion51={answerQuestion51}
      answerQuestion52={answerQuestion52} answerQuestion53={answerQuestion53} answerQuestion54={answerQuestion54} answerQuestion55={answerQuestion55}/>}/>







      <Route path='/results/:id' element={<ResultsDetails/>}/>
      <Route path='/resultsubmitted' element={<ResultSubmitted/>}/>
      <Route path='/admin' element={<Admin signIn={signIn}/>}/>
      <Route path='/signin' element={<Signin error={error} handleSubmit={handleSubmit} handleChange={handleChange} />}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>  

    </>
  );
}

export default App;
