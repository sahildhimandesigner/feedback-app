import Header from "./components/header";
import FeedbackList  from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData'
import { useState } from "react";

function App(){

    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        console.log('app', id)
    }
    
    return(
        <>  
            <Header />
            <div className="container">
                <FeedbackList 
                    feedback={feedback} 
                    handleDelete={deleteFeedback} 
                    />
            </div>
        </>
    )
}

export default App;