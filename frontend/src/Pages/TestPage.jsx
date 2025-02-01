import React, { useState } from 'react'
import Question from '../Components/Question';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserAnswers } from '../Store/UserSlice/UserSlice';
import { Alert } from '@mui/material';


const TestPage = () => {
  const [answers, setAnswers] = useState([]);
  const [counter,setCounter]=useState(0)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [showAlert, setShowAlert] = useState(false);
 
  console.log(counter);
  const handleAnswerChange = (id, answer, questionType,personalityTrait) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: {
        answer: answer,
        type: questionType,
        Trait:personalityTrait
      },
    }));
    scrollToNextQue(id+1)
  };
  const handleScoreIt=()=>{
      dispatch(setUserAnswers(answers))
      scrollToTop()
      navigate("/result")
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top
      behavior: "smooth", // Smooth scroll
    });
  };
  const scrollToNextQue = (elementId) => {
    const targetElement = document.getElementById(elementId);
  
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`Element with ID '${elementId}' not found.`);
    }
  };
  
  const handleNext = () => {
    const currentQuestionIds = [questions[counter]?.id, questions[counter + 1]?.id, questions[counter + 2]?.id].filter(Boolean);
  
    const allAnswered = currentQuestionIds.every((id) => answers[id]?.answer);
  
    if (allAnswered) {
      setCounter((prev) => prev + 3);
      scrollToTop();
      setShowAlert(false)
     
      
    } else {
      scrollToTop();
      setShowAlert(true)
    }
  };
  
  const handleprev=()=>{ 
    setCounter((prev)=>prev-3)
    scrollToTop()
  }
 

 

  return (
    <div className="w-full flex  flex-col justify-center my-5">
     {showAlert && (
      <Alert severity="warning" onClose={() => setShowAlert(false)}>
        Please answer all questions before proceeding!
      </Alert>
    )}

    <div className='md:w-1/2 w-96  border-1 p-5  shadow-lg'>
      <h4 className='text-center mb-5'>Personality Questionnaire</h4>
      <div className="questions mx-auto ">
      <Question q={questions[counter]} answers={answers} scrollToNextQue={scrollToNextQue}  handleAnswerChange={handleAnswerChange}/>
      <Question q={questions[counter+1]} answers={answers} scrollToNextQue={scrollToNextQue}  handleAnswerChange={handleAnswerChange}/>
      {questions[counter+2] && <Question q={questions[counter+2]} answers={answers} scrollToNextQue={scrollToNextQue}   handleAnswerChange={handleAnswerChange}/>}
      </div>
      {/* <pre>{JSON.stringify(answers, null, 2)}</pre> */}
      <div className="btns flex gap-2 justify-end">

   { counter!==0 && <button className='btn btn-primary btn-lg' onClick={handleprev}>Prev</button>}
    {counter+2 !=20 ?(<button className='btn btn-primary btn-lg' onClick={handleNext}>Next</button>):
        <button   className='btn btn-primary btn-lg' onClick={handleScoreIt}>Score it</button>}

      </div>
    </div> 
    </div>
  );
}

export default TestPage

const questions = [
  {
    "id": 1,
    "questionType": "positive",
    "questionText": "I have a soft heart.",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Agreeableness"
  },
  {
    "id": 2,
    "questionType": "negative",
    "questionText": "I have frequent mood swings..",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Neuroticism"
  },
  {
    "id": 3,
    "questionType": "negative",
    "questionText": "I find it difficult to approach others.",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Extraversion"
  },
 {
    "id": 4,
    "questionType": "positive",
    "questionText": "I Love to think up new ways of doing things.",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Openness"
  },
  {
    "id": 5,
    "questionType": "positive",
    "questionText": "I Feel comfortable around people.",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Extraversion"
  },{
    "id": 6,
    "questionType": "positive",
    "questionText": "I Pay attention to details..",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Conscientiousness"
  },
  {
    "id": 7,
    "questionType": "negative",
    "questionText": "I am not interested in other people's problems..",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Agreeableness"
  },
   {
    "id": 8,
    "questionType": "negative",
    "questionText": "I am not interested in abstract ideas.",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Openness"
  },
  {
    "id": 9,
    "questionType": "positive",
    "questionText": "I Rarely get irritated.",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Neuroticism"
  },
  {
    "id": 10,
    "questionType": "positive",
    "questionText": "I am skilled in handling social situations.",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Extraversion"
  },
  {
    "id": 11,
    "questionType": "negative",
    "questionText": "I Neglect my duties..",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Conscientiousness"
  },
  {
    "id": 12,
    "questionType": "negative",
    "questionText": "I am indifferent to the feelings of others..",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Agreeableness"
  },
  {
    "id": 13,
    "questionType": "negative",
    "questionText": "I do not have a good imagination.",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Openness"
  },
  {
    "id": 14,
    "questionType": "positive",
    "questionText": "I do things according to a plan..",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Conscientiousness"
  },
  {
    "id": 15,
    "questionType": "positive",
    "questionText": "I Am relaxed most of the time",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Neuroticism"
  },{
    "id": 16,
    "questionType": "positive",
    "questionText": "I have a rich vocabulary..",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Openness"
  },
  {
    "id": 17,
    "questionType": "positive",
    "questionText": "I am on good terms with nearly everyone..",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Agreeableness"
  },
  {
    "id": 18,
    "questionType": "negative",
    "questionText": "I Am a very private person.",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Extraversion"
  },
  {
    "id": 19,
    "questionType": "negative",
    "questionText": "I Leave a mess in my room..",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Conscientiousness"
  },
  {
    "id": 20,
    "questionType": "negative",
    "questionText": "I am easily disturbed..",
    "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
    "personalityTrait": "Neuroticism"
  }
];
