import { useState, createContext } from "react";
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext=createContext()

export const FeedbackProvider=({children})=>{

const [feedback, setFeedback] = useState([{
    id:1,
    text:"text from context",
    rating:6
}])

const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false
})


// Delete Feedback Item
const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to Delete FeedBack?")) {
        setFeedback(feedback.filter((item) => (
            item.id !== id
        )))

    }
}

// Add feedback item
const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
}

//Edit Feedback Item
const editFeedback=(item)=>{
    setFeedbackEdit({
        item,
        edit:true

    })
}

//Update Feedback Item
const updateFeedback=(id,upItem)=>{
    setFeedback(feedback.map((item)=>(
        item.id===id?{...item,...upItem}:item
    )))
}





    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext