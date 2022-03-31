import { useState } from "react";

function FeedbackItem(){
    //Here we have define the state with default value
    const [rating, setRating] = useState(7);
    const [text, setText] = useState('This is an example of a feeback item');
    

    return(
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </div>
    )
}
 export default FeedbackItem;