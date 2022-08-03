import Header from "./components/header";
import FeedbackList  from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';
import FeedbackState from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { useState } from "react";

function App(){

    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {            
            setFeedback(feedback.filter((item) => item.id !== id))            
        }
    }

    //WE PASS THIS FUNCTION TO FEEDBACK FORM AS PROPS
    const addFeedback = (newFeedback) => {
        console.log(newFeedback, 'new feedback')
        setFeedback([newFeedback, ...feedback])
    }
    
    return(
        <>  
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackState feedback={feedback} />
                <FeedbackList 
                    feedback={feedback} 
                    handleDelete={deleteFeedback} 
                    />
            </div>
        </>
    )
}

export default App;