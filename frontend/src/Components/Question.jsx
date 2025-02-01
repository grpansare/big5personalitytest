import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { FormControl, FormLabel } from 'react-bootstrap'

const Question = ({q,handleAnswerChange,answers}) => {
  console.log(answers[q.id]);


  
  return (
    <div key={q.id} id={q.id} className='mb-4 border-1
      border-black rounded-md p-5'>
    <p className='font-bold text-xl'>{q.id}.{q.questionText}</p>
    <div className=" flex flex-col ml-2">

  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue={answers[q.id]?.answer}
    name="radio-buttons-group"
  >
   
   

    {q.options.map((option) => (
       <FormControlLabel value={option} key={option}      onChange={() => handleAnswerChange(q.id, option,q.questionType,q.personalityTrait)}  control={<Radio />} label={option} />
      
    ))}

</RadioGroup>

    </div>
  </div>
  )
}

export default Question
