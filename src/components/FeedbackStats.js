import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)
    const calculateAvg=feedback.reduce((acc,cur)=>{
        return acc+cur.rating
    },0)/feedback.length;

    // calculateAvg=calculateAvg.toFixed(1).replace(/[.,]0$/,"")

    

  return (
    <div className='feedback-stats'>
      <h4>{`(${feedback.length}) Reviews`}</h4>
      <h4>Average Rating: {isNaN(calculateAvg)?0:calculateAvg}</h4>
    </div>
  )
}

export default FeedbackStats
